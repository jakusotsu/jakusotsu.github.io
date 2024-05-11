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



        Card[] createOriginalSet()
        {
            List<Card> original = new();
            original.Add(new Card("Deadly Aim", "https://static.wikia.nocookie.net/residentevil/images/2/2a/Ac002.jpg", 0, "Action", "Premier", ""));
            original.Add(new Card("Escape from the Dead City", "https://static.wikia.nocookie.net/residentevil/images/d/d6/Ac004.jpg", 0, "Action", "Premier", ""));
            original.Add(new Card("Mansion Foyer", "https://static.wikia.nocookie.net/residentevil/images/3/3c/MansionfoyerDBG.jpg", 0, "Action", "Premier", ""));
            original.Add(new Card("Reload", "https://static.wikia.nocookie.net/residentevil/images/b/b7/ReloadcardDBG.jpg", 0, "Action", "Premier", ""));
            original.Add(new Card("The Merchant", "https://static.wikia.nocookie.net/residentevil/images/8/85/Ac006.jpg", 0, "Action", "Premier", ""));
            original.Add(new Card("Umbrella Corporation", "https://static.wikia.nocookie.net/residentevil/images/d/d4/UmbrellacorpDBG.jpg", 0, "Action", "Premier", ""));
            original.Add(new Card("Ominous Battle", "https://static.wikia.nocookie.net/residentevil/images/2/2e/OminousbattleDBG.jpg", 0, "Action", "Premier", ""));
            original.Add(new Card("Shattered Memories", "https://static.wikia.nocookie.net/residentevil/images/c/c7/Ac003.jpg", 0, "Action", "Premier", ""));
            original.Add(new Card("Master of Unlocking", "https://static.wikia.nocookie.net/residentevil/images/e/ec/MasterofunlockingDBG.jpg", 0, "Action", "Premier", ""));
            original.Add(new Card("Back to Back", "https://static.wikia.nocookie.net/residentevil/images/3/33/BacktobackDBG.jpg", 0, "Action", "Premier", ""));
            original.Add(new Card("Struggle for Survival", "https://static.wikia.nocookie.net/residentevil/images/9/9b/StruggleforsurvivalDBG.jpg", 0, "Action", "Premier", ""));
            original.Add(new Card("Grenade", "https://static.wikia.nocookie.net/residentevil/images/0/0a/GrenadeDBG.jpg", 0, "Weapon", "Premier", ""));
            original.Add(new Card("Longbow", "https://static.wikia.nocookie.net/residentevil/images/5/56/LongbowDBG.jpg", 0, "Weapon", "Premier", ""));
            original.Add(new Card("Submission", "https://static.wikia.nocookie.net/residentevil/images/5/55/SubmssioncardDBG.jpg", 0, "Weapon", "Premier", ""));
            original.Add(new Card("Combat Knife & Survival Knife", "https://static.wikia.nocookie.net/residentevil/images/6/66/We004.jpg", 0, "Weapon", "Premier", ""));
            original.Add(new Card("Six Shooter", "https://static.wikia.nocookie.net/residentevil/images/a/af/SixshooterDBG.jpg", 0, "Weapon", "Premier", ""));
            original.Add(new Card("Gatling Gun & Rocket Launcher", "https://static.wikia.nocookie.net/residentevil/images/e/e7/We0071.jpg", 0, "Weapon", "Premier", ""));
            original.Add(new Card("Handgun & Burst-Fire Handgun", "https://static.wikia.nocookie.net/residentevil/images/6/61/HandgunDBG.jpg", 0, "Weapon", "Premier", ""));
            original.Add(new Card("Assault Machine Gun & Full Bore Machine Gun", "https://static.wikia.nocookie.net/residentevil/images/4/48/SkorpionmachinegunDBG.jpg", 0, "Weapon", "Premier", ""));
            original.Add(new Card("Pump-Action Shotgun & Automatic Shotgun", "https://static.wikia.nocookie.net/residentevil/images/8/88/PumpactionDBG.jpg", 0, "Weapon", "Premier", ""));
            original.Add(new Card("Bolt-Action Rifle & Semi-Automatic Rifle", "https://static.wikia.nocookie.net/residentevil/images/4/40/BoltactionrifleDBG.jpg", 0, "Weapon", "Premier", ""));
            //original.Add(new Card("Gatling Gun Case", "", 0, "Mansion Item", "Premier", ""));
            //original.Add(new Card("Rocket Launcher Case", "", 0, "Mansion Item", "Premier", ""));
            original.Add(new Card("Green Herb", "https://static.wikia.nocookie.net/residentevil/images/6/60/GreenherbDBG1.jpg", 0, "Item", "Premier", ""));
            //original.Add(new Card("Yellow Herb", "", 0, "Mansion Item", "Premier", ""));
            original.Add(new Card("First Aid Spray", "https://static.wikia.nocookie.net/residentevil/images/0/03/First_Aid_Spray_%28IT-003%29.jpeg", 0, "Item", "Premier", ""));
            return original.ToArray();
        }

        Card[] createAllianceSet()
        {
            List<Card> alliance = new();
            alliance.Add(new Card("Great Ambition", "https://static.wikia.nocookie.net/residentevil/images/8/87/GreatambitionDBG.jpg", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Uroboros Injection", "https://static.wikia.nocookie.net/residentevil/images/4/4a/UroborosinjectionDBG.jpg", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Desperate Escape", "https://static.wikia.nocookie.net/residentevil/images/e/ef/DesperateescapeDBG.jpg", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Fierce Battle", "https://static.wikia.nocookie.net/residentevil/images/a/ad/FiercebattleDBG.jpg", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Gathering Forces", "https://static.wikia.nocookie.net/residentevil/images/d/df/Ac021.jpg", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Archrival", "https://static.wikia.nocookie.net/residentevil/images/0/03/ArchrivalDBG.jpg", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Quirk of Fate", "https://static.wikia.nocookie.net/residentevil/images/5/5d/QuirkoffateDBG.jpg", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Partners", "https://static.wikia.nocookie.net/residentevil/images/c/cc/Ac-013_alliance_partners_partner_mod.jpg", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Cornered", "https://static.wikia.nocookie.net/residentevil/images/1/1d/Ac-020_alliance_cornered_partner_mod.jpg", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Star-Crossed Duo", "https://static.wikia.nocookie.net/residentevil/images/7/72/Starcrossedduo.png", 0, "Action", "Alliance", ""));
            alliance.Add(new Card("Combat Knife & Survival Knife", "https://static.wikia.nocookie.net/residentevil/images/6/66/We004.jpg", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Handgun & Burst-Fire Handgun", "https://static.wikia.nocookie.net/residentevil/images/6/61/HandgunDBG.jpg", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Flash Grenade & Grenade Launcher", "https://static.wikia.nocookie.net/residentevil/images/6/64/FlashgrenadeDBG.jpg", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Telescopic Sight Rifle", "https://static.wikia.nocookie.net/residentevil/images/b/b0/TelescopicsightDBG.jpg", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Riot Shotgun & Triple-Barreled Shotgun", "https://static.wikia.nocookie.net/residentevil/images/0/0d/RiotshotgunDBG.jpg", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Russian Assault Rifle & Signature Special", "https://static.wikia.nocookie.net/residentevil/images/e/e5/AK74DBG.jpg", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Flamethrower", "https://static.wikia.nocookie.net/residentevil/images/b/bb/FlamethrowerDBG.jpg", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Blowback Pistol", "https://static.wikia.nocookie.net/residentevil/images/7/78/BlowbackpistolDBG.jpg", 0, "Weapon", "Alliance", ""));
            alliance.Add(new Card("Green Herb", "https://static.wikia.nocookie.net/residentevil/images/6/60/GreenherbDBG1.jpg", 0, "Item", "Alliance", ""));
            alliance.Add(new Card("Red Herb", "https://static.wikia.nocookie.net/residentevil/images/7/77/RedherbDBG.jpg", 0, "Item", "Alliance", ""));
            //alliance.Add(new Card("Explosive Barrel", "", 0, "Mansion Event", "Alliance", ""));
            //alliance.Add(new Card("Collapsing Floor Traps", "", 0, "Mansion Event", "Alliance", ""));
            //alliance.Add(new Card("Laser Targeting Device ", "", 0, "Mansion Event", "Alliance", ""));
            return alliance.ToArray();
        }
        Card[] createOutBreakSet()
        {
            List<Card> outbreak = new();
            outbreak.Add(new Card("Injection", "https://static.wikia.nocookie.net/residentevil/images/e/e9/Ac-026_outbreak_injection_infection_mod.jpg", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("Wesker's Secret", "https://static.wikia.nocookie.net/residentevil/images/a/a2/Ac-025_outbreak_weskers_secret_infection_mod.jpg", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("Returned Favor", "https://static.wikia.nocookie.net/residentevil/images/6/6f/Ac-030_outbreak_returned_favor.jpg", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("'I Have This...'", "https://static.wikia.nocookie.net/residentevil/images/9/93/Ac-024_outbreak_i_have_this.jpg", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("Higher Priorities", "https://static.wikia.nocookie.net/residentevil/images/0/05/Higher-Priorities.jpg", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("Parting Ways", "https://static.wikia.nocookie.net/residentevil/images/1/14/Outbreak_card_-_Parting_Ways_AC-029.jpg", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("By Any Means Neccesary", "https://static.wikia.nocookie.net/residentevil/images/c/c4/Ac-027_outbreak_by_any_means_necessary_infection_mod.jpg", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("Power of the t-Virus ", "https://static.wikia.nocookie.net/residentevil/images/1/14/Outbreak_card_-_Power_of_the_t-Virus_AC-023.jpeg", 0, "Action", "Outbreak", ""));
            outbreak.Add(new Card("Standard Sidearm & Samurai Edge", "https://static.wikia.nocookie.net/residentevil/images/1/1d/Standard-Sidearm.jpg", 0, "Weapon", "Outbreak", ""));
            outbreak.Add(new Card("Lightning Hawk & Hand Cannon", "https://static.wikia.nocookie.net/residentevil/images/6/65/Mercenaries_card_-_Lightning_Hawk.jpeg", 0, "Weapon", "Outbreak", ""));
            outbreak.Add(new Card("Stun Rod", "https://static.wikia.nocookie.net/residentevil/images/b/b6/Stun-Rod.jpg", 0, "Weapon", "Outbreak", ""));
            outbreak.Add(new Card("Night Scope Rocket Launcher", "https://static.wikia.nocookie.net/residentevil/images/2/2c/Night-Scope-Rocket-Launcher.jpg", 0, "Weapon", "Outbreak", ""));
            //outbreak.Add(new Card("Antivirus", "", 0, "Mansion Item", "Outbreak", ""));
            //outbreak.Add(new Card("Kevlar Vest", "", 0, "Mansion Item", "Outbreak", ""));
            //outbreak.Add(new Card("Laser Trap", "", 0, "Mansion Event", "Outbreak", ""));
            //outbreak.Add(new Card("Rock Trap", "", 0, "Mansion Event", "Outbreak", ""));
            return outbreak.ToArray();
        }
        Card[] createNightmareSet()
        {
            List<Card> nightmare = new();
            nightmare.Add(new Card("Lonewolf", "https://static.wikia.nocookie.net/residentevil/images/6/65/Nightmare_card_-_Lonewolf_AC-032.jpg", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("Raccoon City Police Department", "https://static.wikia.nocookie.net/residentevil/images/5/5f/Nightmare_card_-_Raccoon_City_Police_Department_AC-034.jpg", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("High Value Targets", "https://static.wikia.nocookie.net/residentevil/images/0/02/Ac-033_nightmare_high_value_targets.jpg", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("PDA", "https://static.wikia.nocookie.net/residentevil/images/c/cb/Ac-035_nightmare_pda.jpg", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("Toe to Toe", "https://static.wikia.nocookie.net/residentevil/images/2/2b/Nightmare_card_-_Toe_to_Toe_AC-036.jpg", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("A Gift?", "https://static.wikia.nocookie.net/residentevil/images/7/76/Ac-037_nightmare_a_gift.jpg", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("Mind Control", "https://static.wikia.nocookie.net/residentevil/images/0/0f/Nightmare_card_-_Mind_Control_AC-038.jpeg", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("Long Awaited Dawn", "https://static.wikia.nocookie.net/residentevil/images/b/b3/Nightmare_card_-_Long_Awaited_Dawn_AC-039.jpg", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("Vengeful Intention", "https://static.wikia.nocookie.net/residentevil/images/d/db/Ac-040_nightmare_vengeful_intention.jpg", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("Symbol of Evil", "https://static.wikia.nocookie.net/residentevil/images/4/44/Nightmare_card_-_Symbol_of_Evil_AC-041.jpeg", 0, "Action", "Nightmare", ""));
            nightmare.Add(new Card("Silver Ghost & Punisher", "https://static.wikia.nocookie.net/residentevil/images/2/26/Nightmare_card_-_Silver_Ghost_WE-032.jpg", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("Mine Thrower", "https://static.wikia.nocookie.net/residentevil/images/f/fa/Mine_Thrower_WE-034.jpeg", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("Broken Butterfly", "https://static.wikia.nocookie.net/residentevil/images/5/57/Nightmare_card_-_Broken_Butterfly_%28Magnum%29_WE-035.jpg", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("Single Shot Rifle w/ Scope & Special Ops Rifle", "https://static.wikia.nocookie.net/residentevil/images/4/4f/Nightmare_card_-_Single_Shot_Rifle_with_Scope_WE-036.jpg", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("Machine Pistol w/ Stock & Gangster's Machine Gun", "https://static.wikia.nocookie.net/residentevil/images/6/62/Nightmare_card_-_Machine_Pistol_w_Stock_WE-038.jpg", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("Flashbang", "https://static.wikia.nocookie.net/residentevil/images/5/54/Nightmare_card_-_Flashbang_WE-040.jpeg", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("HE Grenade", "https://static.wikia.nocookie.net/residentevil/images/c/cc/Nightmare_card_-_HE_Grenade_WE-041.jpg", 0, "Weapon", "Nightmare", ""));
            nightmare.Add(new Card("Incendiary Grenade", "https://static.wikia.nocookie.net/residentevil/images/6/67/Nightmare_card_-_Incendiary_Grenade_WE-042.jpeg", 0, "Weapon", "Nightmare", ""));
            //nightmare.Add(new Card("Treasure Map", "", 0, "Mansion Item", "Nightmare", ""));
            //nightmare.Add(new Card("Hidden Treasure ", "", 0, "Mansion Item", "Nightmare", ""));
            //nightmare.Add(new Card("P.R.L. 412", "", 0, "Mansion Event", "Nightmare", ""));
            return nightmare.ToArray();
        }

        Card[] createMercenariesSet()
        {
            List<Card> mercenaries = new();
            mercenaries.Add(new Card("Custom Standard Sidearm", "https://static.wikia.nocookie.net/residentevil/images/d/d2/Mercenaries_card_-_Custom_Standard_Sidearm.jpeg", 0, "Weapon", "Mercenaries", ""));
            mercenaries.Add(new Card("Reliable Blade", "https://static.wikia.nocookie.net/residentevil/images/3/3d/Mercenaries_card_-_Reliable_Blade.jpeg", 0, "Weapon", "Mercenaries", ""));
            mercenaries.Add(new Card("First Aid Spray", "https://static.wikia.nocookie.net/residentevil/images/9/90/FirstaidsprayDBG.jpg", 0, "Item", "Mercenaries", ""));
            mercenaries.Add(new Card("Fight or Flight", "https://static.wikia.nocookie.net/residentevil/images/f/fe/Ac-042_mercenaries_fight_or_flight.jpg", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("The Mercenaries", "https://static.wikia.nocookie.net/residentevil/images/b/b9/Ac-043_mercenaries_the_mercenaries.jpg", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Boundless Battlefield", "https://static.wikia.nocookie.net/residentevil/images/2/24/Ac-044_mercenaries_boundless_battlefield.jpg", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Coup de Grace", "https://static.wikia.nocookie.net/residentevil/images/1/1d/Mercenaries_card_-_Coup_de_Grace.jpeg", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Melee", "https://static.wikia.nocookie.net/residentevil/images/0/06/Ac-046_mercenaries_melee.jpg", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Anticipation", "https://static.wikia.nocookie.net/residentevil/images/6/6c/Ac-047_mercenaries_anticipation.jpg", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Backstab", "https://static.wikia.nocookie.net/residentevil/images/7/7d/Mercenaries_card_-_Backstab.jpeg", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Battle Hardened", "https://static.wikia.nocookie.net/residentevil/images/3/3d/Ac-049_mercenaries_battle_hardened_skill_mod.jpg", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Resuscitate", "https://static.wikia.nocookie.net/residentevil/images/2/24/Ac-050_mercenaries_resuscitate.jpg", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Tear Gas", "https://static.wikia.nocookie.net/residentevil/images/d/d5/Ac-051_mercenaries_tear_gas.jpg", 0, "Action", "Mercenaries", ""));
            mercenaries.Add(new Card("Ibex Standard", "https://static.wikia.nocookie.net/residentevil/images/2/25/Mercenaries_card_-_Ibex_Standard.jpeg", 0, "Weapon", "Mercenaries", ""));
            mercenaries.Add(new Card("Custom Pump-Action Shotgun", "https://static.wikia.nocookie.net/residentevil/images/1/1c/Mercenaries_card_-_Custom_Pump-Action_Shotgun.jpeg", 0, "Weapon", "Mercenaries", ""));
            mercenaries.Add(new Card("Custom Full-Bore Machine Gun", "https://static.wikia.nocookie.net/residentevil/images/e/ee/Mercenaries_card_-_Custom_Full-Bore_Machine_Gun.jpeg", 0, "Weapon", "Mercenaries", ""));
            mercenaries.Add(new Card("Custom Lightning Hawk", "https://static.wikia.nocookie.net/residentevil/images/3/3d/Mercenaries_card_-_Custom_Lightning_Hawk.jpeg", 0, "Weapon", "Mercenaries", ""));
            mercenaries.Add(new Card("Custom Bolt-Action Rifle", "https://static.wikia.nocookie.net/residentevil/images/4/4d/Mercenaries_card_-_Custom_Bolt-Action_Rifle.jpeg", 0, "Weapon", "Mercenaries", ""));
            mercenaries.Add(new Card("Hunting Bow", "https://static.wikia.nocookie.net/residentevil/images/5/59/Mercenaries_card_-_Hunting_Bow.jpeg", 0, "Weapon", "Mercenaries", ""));
            return mercenaries.ToArray();
        }
        [HttpGet(Name = "GetCards")]
        public IEnumerable<Card> Get()
        {
            var rnd = new Random();
            var array = createOriginalSet().OrderBy(x => rnd.Next()).ToArray();
            Card[] subArray = array.Take(18).ToArray();
            return subArray;
        }


        [HttpPost(Name = "GetFilteredCards")]
        public IEnumerable<Card> GetFilteredCards([FromBody] Filters filters)
        {
            try
            {
                var rnd = new Random();
                var allSets = new Dictionary<string, Func<IEnumerable<Card>>>
        {
            { "Premier", createOriginalSet },
            { "Alliance", createAllianceSet },
            { "Outbreak", createOutBreakSet },
            { "Nightmare", createNightmareSet },
            { "Mercenaries", createMercenariesSet }
        };

                var combinedArray = allSets
                    .Where(pair => ShouldIncludeSet(filters, pair.Key))
                    .SelectMany(pair => pair.Value())
                    .ToArray();

                var filteredCards = combinedArray
                    .OrderBy(x => rnd.Next())
                    .GroupBy(card => card.Type)
                    .SelectMany(group => group.OrderBy(x => rnd.Next()).Take(GetNumberOfItems(filters, group.Key)))
                    .OrderBy(card => rnd.Next())
                    .ToArray();

                var finalArray = filteredCards.OrderBy(card => card, new PriorityComparator()).Take(18).ToArray();
                return finalArray;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error filtering cards.");
                //return StatusCode(500, "Error filtering cards.");
                return Enumerable.Empty<Card>();
            }
        }

        private bool ShouldIncludeSet(Filters filters, string setName)
        {
            switch (setName)
            {
                case "Premier":
                    return filters.includeBase;
                case "Alliance":
                    return filters.includeAlliance;
                case "Outbreak":
                    return filters.includeOutbreak;
                case "Nightmare":
                    return filters.includeNightmare;
                case "Mercenaries":
                    return filters.includeMercenaries;
                default:
                    return false;
            }
        }

        private int GetNumberOfItems(Filters filters, string cardType)
        {
            return cardType switch
            {
                "Item" => int.Parse(filters.numItems),
                "Action" => int.Parse(filters.numActions),
                "Weapon" => int.Parse(filters.numWeapons),
                _ => 0
            };
        }
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
    public class PriorityComparator : IComparer<Card>
    {
        public int Compare(Card x, Card y)
        {
            // Define the priority order
            Dictionary<string, int> priorityOrder = new Dictionary<string, int>
        {
            { "Weapon", 0 },
            { "Item", 1 },
            { "Action", 2 }
        };

            // Get the priority of each string
            int priorityX = priorityOrder.ContainsKey(x.Type) ? priorityOrder[x.Type] : int.MaxValue;
            int priorityY = priorityOrder.ContainsKey(y.Type) ? priorityOrder[y.Type] : int.MaxValue;

            // Compare based on priority
            if (priorityX != priorityY)
            {
                return priorityX.CompareTo(priorityY);
            }
            else
            {
                // If priorities are equal, use alphabetical order
                return string.Compare(x.Type, y.Type, StringComparison.Ordinal);
            }
        }
    }
}
