using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularJS_Day4.Models
{
    public class EventsRepository
    {
        public TalkVM[] GetTalks()
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
}
