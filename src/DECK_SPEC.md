# Deck file format (one JSON file per deck, UTF-8, in src/decks/<id>.json)

{
  "id": "food",                 // latin slug, same as file name
  "name": "אוכל",               // Hebrew display name, 1-3 words
  "emoji": "🍕",
  "group": "life",              // one of: "couples" | "fun" | "life"
  "audience": "all",            // one of: "couples" | "friends" | "all"
  "desc": "חשקים, דעות ועקרונות שלא זזים מהם",   // short witty Hebrew subtitle, max ~45 chars
  "questions": [ ...exactly 30 question objects... ]
}

## Question types (exact mix per deck: 10 ab, 6 scale, 6 mc, 4 rank, 4 who)

ab    – either/or:   {"t":"ab","q":"לבשל או להזמין הערב?","o":["לבשל","להזמין"]}
scale – 1..10:       {"t":"scale","q":"כמה שום זה יותר מדי?","min":"שן אחת","max":"אין דבר כזה יותר מדי"}
mc    – 4 options:   {"t":"mc","q":"ארוחת הבוקר המושלמת?","o":["שקשוקה","פנקייקים","בורקס","קפה וזהו"]}
rank  – order 4:     {"t":"rank","q":"סדרו מהכי אהוב להכי פחות","o":["פיצה","סושי","המבורגר","פלאפל"]}
who   – which of the two players: {"t":"who","q":"מי מאיתנו יותר אוכל באמצע הלילה?"}
        (the game fills in the two player names as the answers; phrase it so both players could fairly be the answer)

## Writing rules
- Natural, modern, spoken Israeli Hebrew. Short. Funny and warm. Many questions should make players laugh or argue playfully.
- Questions are about the players' own tastes/opinions/habits (both answer about themselves; the game also has a "guess the other" mode), so phrase in 2nd person / neutral, e.g. "מה הכי מעצבן אותך…", never "what does your partner…".
- Gender-neutral where possible (use infinitives, "מה עדיף", "את/ה" only if unavoidable).
- Options are short (1-4 words), all plausible, no "joke option" that nobody picks every time.
- No duplicates within a deck, and no question that is just a rewording of another.
- Clean and modest, fitting a religious/Haredi Israeli audience too: no romance/physical intimacy beyond warm couple life (dates, gifts, communication, home), no alcohol/party/clubbing, no non-kosher foods, no Shabbat desecration, no politics, no profanity, no mocking groups. Jewish holidays and customs are welcome.
- Original content only – do not copy questions from any existing app.
- Output must be valid JSON (no comments, no trailing commas). Validate with: node -e "JSON.parse(require('fs').readFileSync(process.argv[1]))" <file>
