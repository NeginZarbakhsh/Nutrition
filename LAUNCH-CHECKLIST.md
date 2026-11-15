# Sofreh: what is needed to sell it

## Done in the app
- First-run setup (weight, height, age, sex, activity, goal) with a safety check: adults only, no weight loss below BMI 18.5, health warning that must be accepted.
- Calorie floor (1,400 women / 1,600 men), protein 2 g/kg in a deficit, healthy-fat floor 0.8 g/kg.
- Privacy: no account, no tracking; all data stays on the phone. Backup and restore to a file.
- Works offline, installs to the Home Screen, light and dark mode, small phones.
- Automated check of all 28 days, every meal tab and every screen: no errors, no overflow.

## Still needed before charging money
1. **Name and branding**: drop "Lidl" from the product (shopping lists say "Lidl list" and the default wrap is a Lidl product). Using a retailer's name commercially needs their permission. Use "Shopping list" and generic products, or partner with them.
2. **Nutrition data**: values are typical figures. For a paid product, take them from an official database (e.g. McCance & Widdowson / UK CoFID, USDA FoodData Central) and cite it.
3. **Professional review**: have a registered dietitian (CORU in Ireland) check the meal plan, targets and safety text. Say so in the app; it builds trust and protects you.
4. **Legal pages**: Terms of use, privacy policy (GDPR), medical disclaimer, and a contact address. Register as a business / sole trader.
5. **Accounts and sync** (optional but expected by paying users): today data lives in one browser. Selling a subscription needs sign-in and cloud sync (e.g. Supabase or Firebase) and a payment provider (Stripe, or App Store / Google Play billing).
6. **App stores**: wrap the web app (Capacitor) for iOS and Android. Apple requires a privacy label and health-data disclosures.
7. **Personalisation for others**: the 28-day plan, class types and gym schedule are built around one person. Let users choose their own training days and dislike/allergy filters (nuts, dairy, gluten, vegetarian).
8. **Testing with real users**: 10–20 people for 4 weeks, collect feedback, then launch.
