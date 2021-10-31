using JobPostWebApi.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace JobPostWebApi.Data
{
    public class JobContext:IdentityDbContext<ApplicationUser>
    {
        public JobContext(DbContextOptions<JobContext> options)
            : base(options)
        {

        }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
    }
}
