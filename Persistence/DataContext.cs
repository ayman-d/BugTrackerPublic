using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Bug> Bugs { get; set; }

        // seeding Bugs data
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Bug>()
            .HasData(
                new Bug
                {
                    Id = Guid.NewGuid(),
                    Title = "Problem logging in",
                    Description = "Everytime I try to log the page redirects me back to the home page",
                    CreatedOn = DateTime.Now,
                    Admin = "Manar",
                    Developer = "Ayman",
                    Category = "Software",
                    Priority = "Medium",
                    Status = "Open",
                },
                new Bug
                {
                    Id = Guid.NewGuid(),
                    Title = "Software is slow",
                    Description = "The pages are not loading properly and are very slow",
                    CreatedOn = DateTime.Now.AddDays(2),
                    Admin = "Manar",
                    Developer = "Ayman",
                    Category = "Software",
                    Priority = "High",
                    Status = "Open",
                },
                new Bug
                {
                    Id = Guid.NewGuid(),
                    Title = "Computer does not respond at all",
                    Description = "I'm sending this request from a friend's computer, my computer is completely dead",
                    CreatedOn = DateTime.Now.AddDays(-4),
                    Admin = "Manar",
                    Developer = "Ayman",
                    Category = "Hardware",
                    Priority = "High",
                    Status = "Closed",
                    ResolvedOn = DateTime.Now.AddDays(-1)
                },
                new Bug
                {
                    Id = Guid.NewGuid(),
                    Title = "Email only receives but does not send",
                    Description = "My email won't let me send any emails out, I can only receive new emails and read my inbox",
                    CreatedOn = DateTime.Now.AddDays(-3),
                    Admin = "Manar",
                    Developer = "Ayman",
                    Category = "Software",
                    Priority = "High",
                    Status = "Closed",
                    ResolvedOn = DateTime.Now.AddDays(-1)
                },
                new Bug
                {
                    Id = Guid.NewGuid(),
                    Title = "Program hangs a lot",
                    Description = "I noticed that sometimes when I submit a new request, the program will freeze for a bit before sending it",
                    CreatedOn = DateTime.Now.AddDays(-8),
                    Admin = "Manar",
                    Developer = "Ayman",
                    Category = "Software",
                    Priority = "Low",
                    Status = "Open",
                },
                new Bug
                {
                    Id = Guid.NewGuid(),
                    Title = "Software errors",
                    Description = "Software will sometimes throw errors that I can bypass, but I thought I'd let you know",
                    CreatedOn = DateTime.Now.AddDays(-1),
                    Admin = "Manar",
                    Developer = "Ayman",
                    Category = "Software",
                    Priority = "Low",
                    Status = "Closed",
                    ResolvedOn = DateTime.Now
                }
            );
        }

    }
}