using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular_Blog7.Models
{
    public class TalkVM
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Speaker { get; set; }
        public string Venue { get; set; }
        public int Duration { get; set; }
    }
}