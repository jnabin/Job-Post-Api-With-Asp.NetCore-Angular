using System.Threading.Tasks;
using JobPostWebApi.Data;
using JobPostWebApi.Model;
using JobPostWebApi.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace JobPostWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
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

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateJob([FromBody] UpdateJobViewModel job, [FromRoute] int id)
        {
            await _jobRepository.UpdateJobAsync(id, job);
            return Ok();
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> UpdateJobPatch([FromBody] JsonPatchDocument job, [FromRoute] int id)
        {
            await _jobRepository.UpdateJobPatchAsync(id, job);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJob([FromRoute] int id)
        {
            await _jobRepository.DeleteJobAsync(id);
            return Ok();
        }
    }
}
