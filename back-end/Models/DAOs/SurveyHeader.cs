using System;
using System.Collections.Generic;

#nullable disable

namespace back_end.Models
{
    public partial class SurveyHeader
    {
        public SurveyHeader()
        {
            SurveySections = new HashSet<SurveySection>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? DepartmentId { get; set; }

        public virtual ICollection<SurveySection> SurveySections { get; set; }
    }
}
