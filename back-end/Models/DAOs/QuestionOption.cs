using System;
using System.Collections.Generic;

#nullable disable

namespace back_end.Models
{
    public partial class QuestionOption
    {
        public QuestionOption()
        {
            Answers = new HashSet<Answer>();
        }

        public int Id { get; set; }
        public int? QuestionId { get; set; }
        public int? OptionChoiceId { get; set; }

        public virtual OptionChoice OptionChoice { get; set; }
        public virtual Question Question { get; set; }
        public virtual ICollection<Answer> Answers { get; set; }
    }
}
