using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Angular_Blog7.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;


namespace Angular_Blog7.Controllers
{
    public class EventsController : Controller
    {
        // GET: Events
        public ActionResult Index()
        {
            return View("Index", "", GetTalks());
        }
        private string GetTalks()
        {
            var talks = new[]
            {
                new TalkVM { Id= "1001", Name= "Real Time Web Applications with SignalR", Speaker= "Brij Bhushan Mishra", Venue= "Hall 1", Duration= 45 },
                new TalkVM { Id= "1002", Name= "Power of Node.js", Speaker= "Dhananjay Kumar", Venue= "Hall 2", Duration= 90 },
                new TalkVM { Id= "1003", Name= "Getting started with AngularJS", Speaker= "Brij Bhushan Mishra", Venue= "Hall 1", Duration= 60 },
                new TalkVM { Id= "1004", Name= "Microsoft Azure - Your cloud destination", Speaker= "Gaurav", Venue= "Hall 1", Duration= 45 }
            };
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };
            return JsonConvert.SerializeObject(talks, Formatting.None, settings);
        }
    }
}
