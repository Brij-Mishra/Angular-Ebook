using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using AngularJS_Day5.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace AngularJS_Day5.Controllers
{
    public class EventsController : Controller
    {
        EventsRepository eventsRepository = new EventsRepository();
        // GET: Events
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetTalkDetails()
        {
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };

            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(eventsRepository.GetTalks(), settings),
                ContentType = "application/json"
            };

            return jsonResult;
        }

        public ActionResult GetSpeakerDetails()
        {
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };

            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(eventsRepository.GetSpeakers(), settings),
                ContentType = "application/json"
            };

            return jsonResult;
        }


    }
}
