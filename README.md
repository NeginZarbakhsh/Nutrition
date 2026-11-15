# Sofreh سفره

A 28-day Persian meal plan for gentle fat loss and muscle definition. No kitchen scale needed.

- **Today**: a protein ring, then the four meals for the day with amounts in hand measures (palm, fist, matchbox, teaspoon, heaped tablespoon, mug) or pack fractions ("½ tin", "⅓ of the tub"). Tick meals as you eat them.
- **Choose any meal**: tap *Change* on a meal to pick from 80 dishes (rice, pasta, khoresh, kabab, kuku, soups, light meals) with search and filters, or *Build my own* with palms, fists and spoons and see the protein straight away.
- **Extras**: add anything else you ate (a latte, dates, a slice of cake) so the protein and calories stay honest.
- **Week**: a protein chart of eaten vs planned vs target, and the week's meals at a glance.
- **What you need today**: everything the day's meals need, so you can check the fridge and buy the rest at Lidl.
- **Lidl list**: one weekly shop, worked out from the week's meals and rounded to Lidl pack sizes.
- **No-scale guide**: how the hand measures work, and tricks like "cook 2 portions, split the pot into 2 boxes".
- **Me**: weight, start date of the cycle, and a Saturday weight and waist check-in.

Targets: about 1,550 kcal and 1.9 g protein per kg body weight. Lunch is cooked once and eaten on two days. Gym is Monday, Wednesday and Friday, and Sunday dinner is a free meal.

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
