using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SATURAN.Startup))]
namespace SATURAN
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
