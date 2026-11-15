# Sofreh سفره

A 28-day Persian meal plan for gentle fat loss and muscle definition. No kitchen scale needed.

- **Today**: a protein ring, then the four meals for the day with amounts in hand measures (palm, fist, matchbox, teaspoon, heaped tablespoon, mug) or pack fractions ("½ tin", "⅓ of the tub"). Tick meals as you eat them.
- **Choose any meal**: tap *Change* on a meal to pick from 80 dishes (rice, pasta, khoresh, kabab, kuku, soups, light meals) with search and filters, or *Build my own* with palms, fists and spoons and see the protein straight away.
- **Exercise**: log any extra workout (type, minutes, optional calories from your watch). Half of what it burns is added to that day's calories. Skipping a planned gym day takes 150 kcal off.
- **Training**: built around your FFS Dundrum classes (Upper Body Mon, Lower Body Wed, Functional Fri; switch any day to Total Body or Metabolic). Log the key lifts of each class (weight × reps of your best set); class days get more food (+100 strength, +120 functional, +150 metabolic).
- **My products**: the exact items you buy. Each product (kcal and protein per 100g, pack size, piece weight) replaces the typical values for one ingredient, so meals, portion counts and shopping lists use it. Built-in products live in the `PRODUCTS` list in `index.html`; products added in the app and photos stay on the phone.
- **Garmin**: type today's Active calories from Garmin Connect, or set up the iPhone Shortcut in Me → Garmin sync. The Shortcut reads Active Energy from Apple Health and opens `https://neginzarbakhsh.github.io/Nutrition/?active=<number>`. Half of anything above a normal day is added to the calorie target.
- **Batch cooking**: enter what went in the pot once and how many equal boxes you split it into; then pick "1 box" for any meal. For food already frozen, pick the closest dish and choose a plate size.
- **Extras**: add anything else you ate (a latte, dates, a slice of cake) so the protein and calories stay honest.
- **Week**: a protein chart of eaten vs planned vs target, and the week's meals at a glance.
- **What you need today**: everything the day's meals need, so you can check the fridge and buy the rest at Lidl.
- **Lidl list**: one weekly shop, worked out from the week's meals and rounded to Lidl pack sizes.
- **No-scale guide**: how the hand measures work, and tricks like "cook 2 portions, split the pot into 2 boxes".
- **Me**: weight, start date of the cycle, and a Saturday weight and waist check-in.

Targets are worked out from your weight, height, age and activity (Mifflin-St Jeor, minus a small deficit) with 2.0 g protein per kg while losing fat, a healthy-fat floor of 0.8 g/kg, calories never below 1,400, and +100 kcal on lifting days / −75 on rest days. At 54.5 kg and 155 cm that is about 1,530 kcal and 104 g protein. Log what you actually ate and the rest of the day's portions resize to stay on target. Lunch is cooked once and eaten on two days. Gym is Monday, Wednesday and Friday, and Sunday dinner is a free meal.

Everything you tick is saved in your phone's browser, nowhere else.

## Use it on your phone

1. On GitHub, go to **Settings → Pages**, set **Source** to *Deploy from a branch*, pick the branch with `index.html` and the `/ (root)` folder, then **Save**.
2. After a minute it is live at `https://<your-username>.github.io/Nutrition/`.
3. Open it in Safari, tap **Share → Add to Home Screen**. It then opens like an app and works offline in the shop.

GitHub Pages on a private repository needs a paid GitHub plan. On a free plan, make the repository public first.

## Changing the plan

All the food data is at the top of `index.html`, in the `<script id="data">` block:

- `F`: foods, calories and protein per 100 g, and how each amount is shown in hand measures.
- `M`: meals and their ingredients in grams (the app turns grams into hand measures).
- `W`: the 28 days, as `[breakfast, lunch, snack, dinner]`.

Calories are estimates. This is general guidance, not medical advice.

## Languages, shops and cuisines

- **English / فارسی**: switch in the header, at setup, or in Me. Farsi turns the app right-to-left with Persian numbers and dish names. Translations live in `FA_EXACT` (whole sentences), `FA_TOK` (words inside changing text) and `FA_FOOD` in `index.html`.
- **Any shop**: each product has a store (Lidl, Aldi, Tesco, SPAR, Dunnes, Persian shop…), shown in meals and the shopping list.
- **Cuisines**: Persian now; the structure is ready for more.

## Privacy

No account, no tracking. Everything stays in the browser on your phone. Use **Me → Backup** before changing phone.

See `LAUNCH-CHECKLIST.md` for what is needed to sell Sofreh.
