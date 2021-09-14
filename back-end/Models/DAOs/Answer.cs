using System;
using System.Collections.Generic;

#nullable disable

namespace back_end.Models
{
    public partial class Answer
    {
        public int Id { get; set; }
        public string SchoolId { get; set; }
        public int? QuestionOptionId { get; set; }
        public string Text { get; set; }

        public virtual QuestionOption QuestionOption { get; set; }
    }
}
