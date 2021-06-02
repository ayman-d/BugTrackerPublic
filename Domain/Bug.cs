using System;

namespace Domain
{
    public class Bug
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedOn { get; set; }
        public string Admin { get; set; }
        public string Developer { get; set; }
        public string Category { get; set; }
        public string Priority { get; set; }
        public string Status { get; set; }
        public DateTime? ResolvedOn { get; set; }
    }
}