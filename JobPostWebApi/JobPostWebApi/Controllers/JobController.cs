using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobPostWebApi.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPostWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        private readonly IJobRepository _jobRepository;
        public JobController(IJobRepository jobRepository)
        {
            _jobRepository = jobRepository;
        }
        [HttpGet("")]
        public async Task<IActionResult> GetAllJobAsync()
        {
            var jobs =await _jobRepository.GetAllJobAsync();
            return Ok(jobs);
        }
    }
}
