using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace JobPostWebApi.Model
{
    [Table("jobs")]
    public class Job
    {
        public int JobId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public float Salary { get; set; }
        [Required]
        public string Location { get; set; }
        [Required]
        public string WorkingHour { get; set; }
    }
}
