using System;
using System.Collections.Generic;

#nullable disable

namespace back_end.Models
{
    public partial class Question
    {
        public Question()
        {
            QuestionOptions = new HashSet<QuestionOption>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? SurveySectionId { get; set; }
        public int? InputId { get; set; }

        public virtual Input Input { get; set; }
        public virtual ICollection<QuestionOption> QuestionOptions { get; set; }
    }
}
