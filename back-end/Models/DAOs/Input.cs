using System;
using System.Collections.Generic;

#nullable disable

namespace back_end.Models
{
    public partial class Input
    {
        public Input()
        {
            Questions = new HashSet<Question>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool? IsActive { get; set; }

        public virtual ICollection<Question> Questions { get; set; }
    }
}
