using Microsoft.AspNetCore.Mvc;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Runtime.InteropServices;
using System;

namespace REDBGRand.Server.Controllers
{
    [ApiController]
    [Route("cards")]
    public class CardController : ControllerBase
    {

        private readonly ILogger<CardController> _logger;

        public CardController(ILogger<CardController> logger)
        {
            _logger = logger;
        }

        public struct Card
        {
            public Card(string name, string filepath, int cost, string type, string set, string description)
            {
                Name = name;
                Type = type;
                Cost = cost;
                Filepath = filepath;
                Set = set;
                Description = description;
            }
            public string Name { get; set; }
            public string Type { get; set; }
            public int Cost { get; set; }
            public string Description { get; set; }
            public string Filepath { get; set; }
            public string Set { get; set; }

        }

        Card[] createOriginalSet()
        {
            List<Card> original = new(); 
            original.Add(new Card("Deadly Aim", "", 0, "Action", "Original", ""));
            original.Add(new Card("Escape from the Dead City", "", 0, "Action", "Original", ""));
            original.Add(new Card("Mansion Foyer", "", 0, "Action", "Original", ""));
            original.Add(new Card("Reload", "", 0, "Action", "Original", ""));
            original.Add(new Card("The Merchant", "", 0, "Action", "Original", ""));
            original.Add(new Card("Umbrella Corporation", "", 0, "Action", "Original", ""));
            original.Add(new Card("Ominous Battle", "", 0, "Action", "Original", ""));
            original.Add(new Card("Shattered Memories", "", 0, "Action", "Original", ""));
            original.Add(new Card("Master of Unlocking", "", 0, "Action", "Original", ""));
            original.Add(new Card("Back to Back", "", 0, "Action", "Original", ""));
            original.Add(new Card("Struggle for Survival ", "", 0, "Action", "Original", ""));
            original.Add(new Card("Grenade", "", 0, "Weapon", "Original", ""));
            original.Add(new Card("Longbow", "", 0, "Weapon", "Original", ""));
            original.Add(new Card("Submission", "", 0, "Weapon", "Original", ""));
            original.Add(new Card("Combat Knife & Survival Knife", "", 0, "Weapon", "Original", ""));
            original.Add(new Card("Six Shooter", "", 0, "Weapon", "Original", ""));
            original.Add(new Card("Gatling Gun & Rocket Launcher", "", 0, "Weapon", "Original", ""));
            original.Add(new Card("Handgun & Burst-Fire Handgun", "", 0, "Weapon", "Original", ""));
            original.Add(new Card("Assault Machine Gun & Full Bore Machine Gun", "", 0, "Weapon", "Original", ""));
            original.Add(new Card("Pump-Action Shotgun & Automatic Shotgun", "", 0, "Weapon", "Original", ""));
            original.Add(new Card("Bolt-Action Rifle & Semi-Automatic Rifle", "", 0, "Weapon", "Original", ""));
            original.Add(new Card("Gatling Gun Case", "", 0, "Mansion Item", "Original", ""));
            original.Add(new Card("Rocket Launcher Case", "", 0, "Mansion Item", "Original", ""));
            original.Add(new Card("Green Herb", "", 0, "Item", "Original", ""));
            original.Add(new Card("Yellow Herb", "", 0, "Mansion Item", "Original", ""));
            original.Add(new Card("First Aid Spray", "", 0, "Item", "Original", ""));
            return original.ToArray();
        }
        Card[] createAllianceSet()
        {
            List<Card> alliance = new();
            alliance.Add(new Card("Great Ambition", "", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Uroboros Injection", "", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Desperate Escape", "", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Fierce Battle", "", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Gathering Forces", "", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Archrival", "", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Quirk of Fate", "", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Partners", "", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Cornered", "", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Star-Crossed Duo", "", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Combat Knife & Survival Knife", "", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Handgun & Burst-Fire Handgun", "", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Flash Grenade & Grenade Launcher", "", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Telescopic Sight Rifle", "", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Riot Shotgun & Triple-Barreled Shotgun", "", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Russian Assault Rifle & Signature Special", "", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Flamethrower", "", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Blowback Pistol", "", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Green Herb", "", 0, "Item", "Alliance", ""));
            alliance.Add(new Card("Red Herb", "", 0, "Item", "Alliance", ""));
            alliance.Add(new Card("Explosive Barrel", "", 0, "Mansion Event", "Alliance", ""));
            alliance.Add(new Card("Collapsing Floor Traps", "", 0, "Mansion Event", "Alliance", ""));
            alliance.Add(new Card("Laser Targeting Device ", "", 0, "Mansion Event", "Alliance", ""));
            return alliance.ToArray();
        }
        Card[] createOutBreakSet()
        {
            List<Card> outbreak = new();
            outbreak.Add(new Card("Injection", "", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("Wesker's Secret", "", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("Returned Favor", "", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("'I Have This...'", "", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("Higher Priorities", "", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("Parting Ways", "", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("By Any Means Neccesary", "", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("Power of the t-Virus ", "", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("Standard Sidearm & Samurai Edge", "", 0, "Weapon", "Outbreak", ""));
            outbreak.Add(new Card("Lightning Hawk & Hand Cannon", "", 0, "Weapon", "Outbreak", ""));
            outbreak.Add(new Card("Stun Rod", "", 0, "Weapon", "Outbreak", ""));
            outbreak.Add(new Card("Night Scope Rocket Launcher", "", 0, "Weapon", "Outbreak", ""));
            outbreak.Add(new Card("Antivirus", "", 0, "Mansion Item", "Outbreak", ""));
            outbreak.Add(new Card("Kevlar Vest", "", 0, "Mansion Item", "Outbreak", ""));
            outbreak.Add(new Card("Laser Trap", "", 0, "Mansion Event", "Outbreak", ""));
            outbreak.Add(new Card("Rock Trap", "", 0, "Mansion Event", "Outbreak", ""));
            return outbreak.ToArray();
        }
        Card[] createNightmareSet()
        {
            List<Card> nightmare = new();
            nightmare.Add(new Card("Lonewolf", "", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("Raccoon City Police Department", "", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("High Value Targets", "", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("PDA", "", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("Toe to Toe", "", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("A Gift?", "", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("Mind Control", "", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("Long Awaited Dawn", "", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("Vengeful Intention", "", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("Symbol of Evil ", "", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("Silver Ghost & Punisher", "", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("Mine Thrower", "", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("Broken Butterfly", "", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("Single Shot Rifle w/ Scope & Special Ops Rifle", "", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("Machine Pistol w/ Stock & Gangster's Machine Gun", "", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("Flashbang", "", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("HE Grenade", "", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("Incendiary Grenade", "", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("Treasure Map", "", 0, "Mansion Item", "Nightmare", ""));
            nightmare.Add(new Card("Hidden Treasure ", "", 0, "Mansion Item", "Nightmare", ""));
            nightmare.Add(new Card("P.R.L. 412", "", 0, "Mansion Event", "Nightmare", ""));
            return nightmare.ToArray();
        }

        Card[] createMercenariesSet()
        {
            List<Card> mercenaries = new();
            mercenaries.Add(new Card("Custom Standard Sidearm", "", 0, "Weapon", "Mercenaries", ""));
            mercenaries.Add(new Card("Reliable Blade", "", 0, "Weapon", "Mercenaries", ""));
            mercenaries.Add(new Card("First Aid Spray", "", 0, "Item", "Mercenaries", ""));
            mercenaries.Add(new Card("Fight or Flight", "", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("The Mercenaries", "", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Boundless Battlefield", "", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Coup de Grace", "", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Melee", "", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Anticipation", "", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Backstab", "", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Battle Hardened", "", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Resuscitate", "", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Tear Gas", "", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Ibex Standard", "", 0, "Weapon", "Mercenaries", ""));
            mercenaries.Add(new Card("Custom Pump-Action Shotgun", "", 0, "Weapon", "Mercenaries", ""));
            mercenaries.Add(new Card("Custom Full-Bore Machine Gun", "", 0, "Weapon", "Mercenaries", ""));
            mercenaries.Add(new Card("Custom Lightning Hawk", "", 0, "Weapon", "Mercenaries", ""));
            mercenaries.Add(new Card("Custom Bolt-Action Rifle", "", 0, "Weapon", "Mercenaries", ""));
            mercenaries.Add(new Card("Hunting Bow", "", 0, "Weapon", "Mercenaries", ""));
            return mercenaries.ToArray();
        }
        [HttpGet(Name = "GetCards")]
        public IEnumerable<Card> Get()
        {
            
            var rnd = new Random();
            var array = createOriginalSet().OrderBy(x => rnd.Next()).ToArray();

            // Take the first 18 elements
            Card[] subArray = array.Take(18).ToArray();
            return subArray;
        }
    }
}
