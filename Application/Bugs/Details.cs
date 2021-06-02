using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Bugs
{
    public class Details
    {
        public class Query : IRequest<Bug>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Bug>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Bug> Handle(Query request, CancellationToken cancellationToken)
            {
                var bug = await _context.Bugs.FindAsync(request.Id);
                return bug;
            }
        }
    }
}