namespace REDBGRand.Server
{

    public class CardSet
    {
        public Cards[] Cards { get; set; }
    }
    public class Cards
    {
        public string Name { get; set; }
        public string Filepath { get; set; }
        public string Type { get; set; }
        public string Set { get; set; }
        public int Cost { get; set; }
        public string? Description { get; set; }
    }
public class Filters
    {
        public bool includeBase { get; set; }
        public bool includeAlliance { get; set; }
        public bool includeOutbreak { get; set; }
        public bool includeNightmare { get; set; }
        public bool includeMercenaries { get; set; }
        public bool excludeStdWpns { get; set; }
        public bool excludePartners { get; set; }
        public bool excludeInfection { get; set; }
        public string numWeapons { get; set; }
        public string numActions { get; set; }
        public string numItems { get; set; }

    }
}
