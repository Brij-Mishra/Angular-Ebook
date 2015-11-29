using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJS_Day19.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult GetTalkDetails()
        {
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };

            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(this.GetTalks(), settings),
                ContentType = "application/json"
            };

            return jsonResult;
        }

        private TalkVM[] GetTalks()
        {
            var talks = new[]
            {
                new TalkVM { Id= "T001", Name= "Real Time Web Applications with SignalR", Speaker= "Brij Bhushan Mishra", Venue= "Hall 1", Duration= "45m" },
                new TalkVM { Id= "T002", Name= "Power of Node.js", Speaker= "Dhananjay Kumar", Venue= "Hall 2", Duration= "45m" },
                new TalkVM { Id= "T003", Name= "Getting started with AngularJS", Speaker= "Brij Bhushan Mishra", Venue= "Hall 1", Duration= "60m" },
                new TalkVM { Id= "T004", Name= "Microsoft Azure - Your cloud destination", Speaker= "Gaurav", Venue= "Hall 1", Duration= "45m" }
            };
            return talks;
        } 
    }
    public class TalkVM
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Speaker { get; set; }
        public string Venue { get; set; }
        public string Duration { get; set; }
    }
}