using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace back_end.Models
{
    public partial class DynamicSurveyDBContext : DbContext
    {
        public DynamicSurveyDBContext()
        {
        }

        public DynamicSurveyDBContext(DbContextOptions<DynamicSurveyDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Answer> Answers { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Input> Inputs { get; set; }
        public virtual DbSet<OptionChoice> OptionChoices { get; set; }
        public virtual DbSet<OptionGroup> OptionGroups { get; set; }
        public virtual DbSet<Question> Questions { get; set; }
        public virtual DbSet<QuestionOption> QuestionOptions { get; set; }
        public virtual DbSet<SurveyHeader> SurveyHeaders { get; set; }
        public virtual DbSet<SurveySection> SurveySections { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Answer>(entity =>
            {
                entity.ToTable("Answer");

                entity.Property(e => e.SchoolId).HasMaxLength(50);

                entity.Property(e => e.Text)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.HasOne(d => d.QuestionOption)
                    .WithMany(p => p.Answers)
                    .HasForeignKey(d => d.QuestionOptionId)
                    .HasConstraintName("FK_Answer_QuestionOption");
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("Department");

                entity.Property(e => e.Hcmcode)
                    .HasMaxLength(50)
                    .HasColumnName("HCMCode");

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            modelBuilder.Entity<Input>(entity =>
            {
                entity.ToTable("Input");

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            modelBuilder.Entity<OptionChoice>(entity =>
            {
                entity.ToTable("OptionChoice");

                entity.Property(e => e.Name).HasMaxLength(500);

                entity.HasOne(d => d.OptionGroup)
                    .WithMany(p => p.OptionChoices)
                    .HasForeignKey(d => d.OptionGroupId)
                    .HasConstraintName("FK_OptionChoice_OptionGroup");
            });

            modelBuilder.Entity<OptionGroup>(entity =>
            {
                entity.ToTable("OptionGroup");

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            modelBuilder.Entity<Question>(entity =>
            {
                entity.ToTable("Question");

                entity.Property(e => e.Name).HasMaxLength(500);

                entity.HasOne(d => d.Input)
                    .WithMany(p => p.Questions)
                    .HasForeignKey(d => d.InputId)
                    .HasConstraintName("FK_Question_Input");
            });

            modelBuilder.Entity<QuestionOption>(entity =>
            {
                entity.ToTable("QuestionOption");

                entity.HasOne(d => d.OptionChoice)
                    .WithMany(p => p.QuestionOptions)
                    .HasForeignKey(d => d.OptionChoiceId)
                    .HasConstraintName("FK_QuestionOption_OptionChoice");

                entity.HasOne(d => d.Question)
                    .WithMany(p => p.QuestionOptions)
                    .HasForeignKey(d => d.QuestionId)
                    .HasConstraintName("FK_QuestionOption_Question");
            });

            modelBuilder.Entity<SurveyHeader>(entity =>
            {
                entity.ToTable("SurveyHeader");

                entity.Property(e => e.Name).HasMaxLength(500);
            });

            modelBuilder.Entity<SurveySection>(entity =>
            {
                entity.ToTable("SurveySection");

                entity.Property(e => e.Name).HasMaxLength(500);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.SurveySections)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("FK_SurveySection_Department");

                entity.HasOne(d => d.SurveyHeader)
                    .WithMany(p => p.SurveySections)
                    .HasForeignKey(d => d.SurveyHeaderId)
                    .HasConstraintName("FK_SurveySection_SurveyHeader");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
