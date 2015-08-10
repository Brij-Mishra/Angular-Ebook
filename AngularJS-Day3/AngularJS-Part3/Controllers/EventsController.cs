using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularJS_Part3.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Formatting = System.Xml.Formatting;

namespace AngularJS_Part3.Controllers
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
                new TalkVM { Id= "1001", Name= "Real Time Web Applications with SignalR", Speaker= "Brij Bhushan Mishra", Venue= "Hall 1", Duration= "45m" },
                new TalkVM { Id= "1002", Name= "Power of Node.js", Speaker= "Dhananjay Kumar", Venue= "Hall 2", Duration= "45m" },
                new TalkVM { Id= "1003", Name= "Getting started with AngularJS", Speaker= "Brij Bhushan Mishra", Venue= "Hall 1", Duration= "60m" },
                new TalkVM { Id= "1004", Name= "Microsoft Azure - Your cloud destination", Speaker= "Gaurav", Venue= "Hall 1", Duration= "45m" }
            };
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };
            return JsonConvert.SerializeObject(talks,talks[0].GetType(), Newtonsoft.Json.Formatting.None, settings);
        }
    }
}