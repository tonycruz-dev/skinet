using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Data.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Tony Cruz",
                    Email = "tony@test.com",
                    UserName = "tony@test.com",
                    Address = new Address
                    {
                        FirstName = "Tony",
                        LastName = "Cruz",
                        Street = "8000 High Road",
                        City = "London",
                        State = "Leyton",
                        Zipcode = "E15 2DD"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}
