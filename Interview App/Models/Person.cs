using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Interview_App.Models
{
    public class Person
    {
        [ReadOnly(true)]
        public int Id { get; set; }
        public string Name { get; set; }
        [Column(TypeName = "Date")]
        public DateTime Birthdate { get; set; }
        public int DepartmentId { get; set; }
        public virtual Department Department { get; set; }
    }
}
