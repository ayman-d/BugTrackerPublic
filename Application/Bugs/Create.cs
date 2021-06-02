using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Bugs
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public DateTime CreatedOn { get; set; }
            public string Admin { get; set; }
            public string Developer { get; set; }
            public string Category { get; set; }
            public string Priority { get; set; }
            public string Status { get; set; }
            public DateTime? ResolvedOn { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var bug = new Bug
                {
                    Id = request.Id,
                    Title = request.Title,
                    Description = request.Description,
                    CreatedOn = request.CreatedOn,
                    Admin = request.Admin,
                    Developer = request.Developer,
                    Category = request.Category,
                    Priority = request.Priority,
                    Status = request.Status,
                    ResolvedOn = request.ResolvedOn
                };

                _context.Add(bug);
                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;
                throw new Exception("Problem saving changes");
            }
        }
    }
}