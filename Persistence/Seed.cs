using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.Bugs.Any())
            {
                var bugs = new List<Bug>
                {
                    new Bug
                    {
                        // Id = Guid.NewGuid(),
                        Title = "MYSQL Problem logging in",
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
                        // Id = Guid.NewGuid(),
                        Title = "MYSQL Software is slow",
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
                        // Id = Guid.NewGuid(),
                        Title = "MYSQL Computer does not respond at all",
                        Description = "I'm sending this request from a friend's computer, my computer is completely dead",
                        CreatedOn = DateTime.Now.AddDays(-4),
                        Admin = "Manar",
                        Developer = "Ayman",
                        Category = "Hardware",
                        Priority = "High",
                        Status = "Closed",
                        ResolvedOn = DateTime.Now.AddDays(-1)
                    }
                };

                context.Bugs.AddRange(bugs);
                context.SaveChanges();
            }
        }
    }
}