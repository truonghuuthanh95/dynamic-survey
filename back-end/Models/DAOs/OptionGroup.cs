using System;
using System.Collections.Generic;

#nullable disable

namespace back_end.Models
{
    public partial class OptionGroup
    {
        public OptionGroup()
        {
            OptionChoices = new HashSet<OptionChoice>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<OptionChoice> OptionChoices { get; set; }
    }
}
