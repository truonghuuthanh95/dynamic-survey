using System;
using System.Collections.Generic;

#nullable disable

namespace back_end.Models
{
    public partial class OptionChoice
    {
        public OptionChoice()
        {
            QuestionOptions = new HashSet<QuestionOption>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? OptionGroupId { get; set; }

        public virtual OptionGroup OptionGroup { get; set; }
        public virtual ICollection<QuestionOption> QuestionOptions { get; set; }
    }
}
