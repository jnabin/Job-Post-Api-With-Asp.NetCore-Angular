using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobPostWebApi.Data;
using Microsoft.AspNetCore.Identity;

namespace JobPostWebApi.Repository
{
    public interface IAccountRepository
    {
        Task<IdentityResult> SignUpAsync(SignUpViewModel model);
        Task<string> LoginAsync(SignInViewModel model);
    }
}
