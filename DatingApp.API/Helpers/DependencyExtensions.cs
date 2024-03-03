using DatingApp.API.Repository;
using DatingApp.API.Repository.Implementation;

namespace DatingApp.API.Helpers
{
    public static class DependencyExtensions
    {
        public static void AddDependency(this IServiceCollection services)
        {
            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddScoped<IDatingRepository, DatingRepository>();
        }
    }
}