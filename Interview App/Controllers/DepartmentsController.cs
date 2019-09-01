using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Interview_App.DataContext;
using Interview_App.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Interview_App.Controllers
{
    [Route("api/[controller]")]
    public class DepartmentsController : Controller
    {
        private DbConn db = new DbConn();

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Department>>> GetAll()
        {
            return await db.Departments.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Department>> GetDepartmentById(int id)
        {
            var dep = await db.Departments.FindAsync(id);
            
            if(dep == null)
            {
                return NotFound();
            }

            return dep; 
        }

        [HttpPost]
        public async Task<ActionResult<Department>> Create([FromBody]Department dep)
        {
            db.Departments.Add(dep);
            await db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetDepartmentById), new { id = dep.Id }, dep);
        }


        // PUT: api/Todo/
        [HttpPut]
        public async Task<IActionResult> UpdateProduct([FromBody]Department dep)
        {
            db.Entry(dep).State = EntityState.Modified;
            await db.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepartment(int id)
        {
            var dep = await db.Departments.FindAsync(id);

            if (dep == null)
            {
                return NotFound();
            }

            db.Departments.Remove(dep);
            await db.SaveChangesAsync();

            return NoContent();
        }

    }
}