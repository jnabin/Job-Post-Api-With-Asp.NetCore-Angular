using System.Collections.Generic;
using System.Threading.Tasks;
using JobPostWebApi.Data;
using JobPostWebApi.Model;
using Microsoft.AspNetCore.JsonPatch;

namespace JobPostWebApi.Repository
{
    public interface IJobRepository
    {
        Task<List<Job>> GetAllJobAsync();
        Task<int> CreateJobAsync(Job job);
        Task<Job> GetJobByIdAsync(int id);
        Task UpdateJobAsync(int id, UpdateJobViewModel model);
        Task UpdateJobPatchAsync(int id, JsonPatchDocument model);
        Task DeleteJobAsync(int id);
    }
}
