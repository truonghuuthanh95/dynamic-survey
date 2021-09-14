using System;
using System.Collections.Generic;

#nullable disable

namespace back_end.Models
{
    public partial class SurveySection
    {
        public int Id { get; set; }
        public int? SurveyHeaderId { get; set; }
        public string Name { get; set; }
        public int? DepartmentId { get; set; }

        public virtual Department Department { get; set; }
        public virtual SurveyHeader SurveyHeader { get; set; }
    }
}
