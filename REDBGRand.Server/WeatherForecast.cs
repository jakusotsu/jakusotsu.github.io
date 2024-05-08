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
}
