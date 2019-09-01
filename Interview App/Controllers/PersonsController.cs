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
    public class PersonsController : Controller
    {
        private DbConn db = new DbConn();
        // GET: Persons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Person>>> GetAll()
        {
            return await db.Persons.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Person>> GetPersonById(int id)
        {
            var person = await db.Persons.FindAsync(id);

            if (person == null)
            {
                return NotFound();
            }
            return person;
        }

        [HttpPost]
        public async Task<ActionResult<Person>> CreatePerson([FromBody] Person person)
        {
            db.Persons.Add(person);
            await db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPersonById), new { id = person.Id }, person);
        }

        // PUT: api/Todo/
        [HttpPut]
        public async Task<IActionResult> UpdatePerson([FromBody]Person person)
        {
            db.Entry(person).State = EntityState.Modified;
            await db.SaveChangesAsync();

            return NoContent();
        }

        //DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePerson(int id)
        {
            var person = await db.Persons.FindAsync(id);

            if (person == null)
            {
                return NotFound();
            }

            db.Persons.Remove(person);
            await db.SaveChangesAsync();

            return NoContent();
        }

    }
}