using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Bugs;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BugsController : ControllerBase
    {
        private readonly IMediator _mediator;
        public BugsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // get all bugs
        [HttpGet]
        public async Task<ActionResult<List<Bug>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        // get specific bug
        [HttpGet("{id}")]
        public async Task<ActionResult<Bug>> Details(Guid id)
        {
            return await _mediator.Send(new Details.Query { Id = id });
        }

        // create a new bug
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        // edit a bug
        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.Id = id;
            return await _mediator.Send(command);
        }

        // delete a bug
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command { Id = id });
        }
    }
}