using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobPostWebApi.Data;
using JobPostWebApi.Model;
using Microsoft.EntityFrameworkCore;

namespace JobPostWebApi.Repository
{
    public class JobRepository : IJobRepository
    {
        private readonly JobContext _jobContext;
        public JobRepository(JobContext jobContext)
        {
            _jobContext = jobContext;
        }
        public async Task<List<Job>> GetAllJobAsync()
        {
            var jobs =await _jobContext.Jobs.ToListAsync();
            return jobs;
        }
    }
}
