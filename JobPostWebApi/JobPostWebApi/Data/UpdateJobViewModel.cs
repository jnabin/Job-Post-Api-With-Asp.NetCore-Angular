using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobPostWebApi.Data
{
    public class UpdateJobViewModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public float Salary { get; set; }
        public string Location { get; set; }
        public string WorkingHour { get; set; }
    }
}
