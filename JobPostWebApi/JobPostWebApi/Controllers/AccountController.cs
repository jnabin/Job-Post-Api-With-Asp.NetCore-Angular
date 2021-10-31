using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobPostWebApi.Data;
using JobPostWebApi.Model;
using JobPostWebApi.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace JobPostWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _accountRepository;
        public AccountController(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }
        [HttpPost("signup")]
       public async Task<IActionResult> SignUp(SignUpViewModel model)
        {
            var result = await _accountRepository.SignUpAsync(model);

            if (result.Succeeded)
            {
                return Ok(result.Succeeded);
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(SignInViewModel model)
        {
            var result = await _accountRepository.LoginAsync(model);

            if (string.IsNullOrEmpty(result))
            {
                return Unauthorized();
            }
            else
            {
                return Ok(result);
            }
        }
        
    }
}
