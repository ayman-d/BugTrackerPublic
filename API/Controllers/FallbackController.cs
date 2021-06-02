using System.IO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    // allow anonymous access to get our front end file
    [AllowAnonymous]
    public class FallbackController : Controller
    {
        public IActionResult Index()
        {
            // this controller is the fall back, its only job is to return the physical file containing all of our react code
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");
        }
    }
}