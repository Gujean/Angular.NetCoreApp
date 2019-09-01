using Interview_App.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Interview_App.DataContext
{
    public class DbConn : DbContext
    {
        public DbConn()
        {

        }
        public DbConn(DbContextOptions<DbConn> options) : base(options)
        {

        }

        public DbSet<Person> Persons { get; set; }
        public DbSet<Department> Departments { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Department>()
                
                .HasIndex(d => d.Name)
                .IsUnique();
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                   .SetBasePath(Directory.GetCurrentDirectory())
                   .AddJsonFile("appsettings.json")
                   .Build();
                //var connectionString = configuration.GetConnectionString("DbCoreConnectionString");
                
                optionsBuilder.UseSqlServer("Server =.;Database = Interview; Trusted_Connection = True; MultipleActiveResultSets = true;");
            }
        }

    }

    public class ToDoContextFactory : IDesignTimeDbContextFactory<DbConn>
    {
        public DbConn CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<DbConn>();
            
            builder.UseSqlServer("Server =.;Database = Interview; Trusted_Connection = True; MultipleActiveResultSets = true;");
            return new DbConn(builder.Options);
        }
    }
}
