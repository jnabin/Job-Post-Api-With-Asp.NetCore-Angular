using JobPostWebApi.Model;
using Microsoft.EntityFrameworkCore;

namespace JobPostWebApi.Data
{
    public class JobContext:DbContext
    {
        public JobContext(DbContextOptions<JobContext> options)
            : base(options)
        {

        }
        public DbSet<Job> Jobs { get; set; }
    }
}
