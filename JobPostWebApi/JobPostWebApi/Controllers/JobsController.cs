using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobPostWebApi.Model;
using JobPostWebApi.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPostWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private readonly IJobRepository _jobRepository;
        public JobsController(IJobRepository jobRepository)
        {
            _jobRepository = jobRepository;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAllJobAsync()
        {
            var jobs =await _jobRepository.GetAllJobAsync();
            return Ok(jobs);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetJobById([FromRoute] int id)
        {
            var job =await _jobRepository.GetJobByIdAsync(id);
            return Ok(job);
        }

        [HttpPost("")]
        public async Task<IActionResult> CreateJob([FromBody]Job job)
        {
            var jobId =await _jobRepository.CreateJobAsync(job);
            return CreatedAtAction(nameof(GetJobById), new { id = jobId, controller = "Jobs" }, jobId);
        }
    }
}
