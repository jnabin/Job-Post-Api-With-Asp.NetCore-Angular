using System.Collections.Generic;
using System.Threading.Tasks;
using JobPostWebApi.Model;

namespace JobPostWebApi.Repository
{
    public interface IJobRepository
    {
        Task<List<Job>> GetAllJobAsync();
        Task<int> CreateJobAsync(Job job);
        Task<Job> GetJobByIdAsync(int id);
    }
}
