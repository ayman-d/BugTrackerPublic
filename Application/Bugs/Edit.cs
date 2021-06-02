using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Bugs
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public DateTime? CreatedOn { get; set; }
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
                var bug = await _context.Bugs.FindAsync(request.Id);
                if (bug == null) throw new Exception("Cannot find bug in DB");

                bug.Title = request.Title ?? bug.Title;
                bug.Description = request.Description ?? bug.Description;
                bug.CreatedOn = request.CreatedOn ?? bug.CreatedOn;
                bug.Admin = request.Admin ?? bug.Admin;
                bug.Developer = request.Developer ?? bug.Developer;
                bug.Category = request.Category ?? bug.Category;
                bug.Priority = request.Priority ?? bug.Priority;
                bug.Status = request.Status ?? bug.Status;
                bug.ResolvedOn = request.ResolvedOn ?? bug.ResolvedOn;

                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;
                throw new Exception("Problem saving changes");
            }
        }
    }
}