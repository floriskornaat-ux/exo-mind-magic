import { motion } from "framer-motion";

const reviews = [
  { name: "inAdream✨", text: "The support is so good, the aim is insane, and it's just super fun to play with. Will be purchasing lifetime.", date: "Apr 2026" },
  { name: "POUNDSTER 🎯", text: "Exo overly safe using in tournaments on a 20k pr account 🎯", date: "Apr 2026" },
  { name: "Dog", tag: "Exo", text: "I have been using exo for almost a month now and still no ban. Been playing cups with it and everything. W exo bro the best.", date: "Apr 2026" },
  { name: "eli", tag: "Exo", text: "Played EU servers with 100 ping and placed top 400 on a ranked cup even though I was lagging like crazy. W aim.", date: "Apr 2026" },
  { name: "Voidx", tag: "ALNE", text: "Really quick responses and everything. Streaming this game and I have been having a blast. Love the community.", date: "Apr 2026" },
  { name: "aero", tag: "QUAK", text: "Runs hella smooth on my midrange PC, great support too. Exo AI is the goat genuinely.", date: "Mar 2026" },
  { name: "Exo sigma", tag: "Exo", text: "The aim is insane, has good tracking and is smooth.", date: "Mar 2026" },
  { name: "Cj", tag: "ZΞN", text: "Very smooth and creamy. 10/10 ❤️", date: "Mar 2026" },
  { name: "jbhp", text: "Works really well, haven't been banned.", date: "Mar 2026" },
  { name: "EXO sealz!", tag: "Exo", text: "This AI will let you get to unreal without any good mechs or movement.", date: "Apr 2026" },
  { name: "Xmas Scrapz", tag: "VITAL", text: "The cheat is absolutely amazing. The best I have ever used and it is affordable and really good for its price.", date: "Jul 2025" },
  { name: "Izumi", text: "The cheat works really well ✅", date: "Jul 2025" },
  { name: "John Eward", text: "UD, easy setup. W EXO.", date: "Apr 2026" },
  { name: "Jonny", text: "Thank you so much guys! ❤️", date: "Mar 2026" },
  { name: "NPC.arf", tag: "NXPY", text: "Works good even with my bad graphics. Best support.", date: "Apr 2026" },
  { name: "Kaji", text: "Love this AI 🥹", date: "Mar 2026" },
  { name: "EXO sealz!", tag: "Exo", text: "+rep this ai has good tracking for cheap prices", date: "21:04" },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Trusted by the community
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            Real reviews from real users.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid border border-border rounded-xl p-6 bg-card border-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-display text-xs font-bold text-foreground">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-foreground">
                    {review.name}
                    {review.tag && (
                      <span className="ml-1.5 text-xs text-muted-foreground font-body">
                        [{review.tag}]
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground font-body">{review.date}</div>
                </div>
              </div>
              <p className="text-sm text-secondary-foreground font-body leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
