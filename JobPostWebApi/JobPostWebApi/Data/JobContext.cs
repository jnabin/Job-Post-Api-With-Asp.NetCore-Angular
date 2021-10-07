﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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