export const FAQ_SOURCE = [
  { q: "Does it cost anything?", a: "Plans are tailored to your club's size — talk to us about pricing. There's no cost to see a demo first." },
  { q: "Which clubs can use Rotary Connect?", a: "Rotary clubs and Rotaract clubs today. Each club gets its own space, branding and data — nothing is shared between clubs." },
  { q: "Who manages our club's account?", a: "The President adds and manages members and officers. The Secretary records meetings and stores club documents. The Treasurer manages dues and payments." },
  { q: "Can guests check in without an account?", a: "Yes. Visiting guests scan the club's QR code at the door — no account needed — and get a thank-you text afterwards." },
  { q: "Do members need to install an app?", a: "Yes — members download Rotary Connect free from Google Play or the App Store to check in, view events and see their attendance history. Visiting guests don't need the app at all." },
];

export const ELIGIBLE = ["Rotary clubs", "Rotaract clubs"];

export const SERVICES = [
  { tag: "QR", title: "QR check-in", body: "Members scan one code at the door. Attendance is recorded before they sit down." },
  { tag: "AI", title: "AI meeting minutes", body: "The Secretary records the meeting. Minutes come back drafted, ready to review and edit." },
  { tag: "DUE", title: "Dues and treasury", body: "Who has paid, who hasn't, and what the club is owed — visible to the Treasurer at any time." },
];

export const PILLARS = [
  { n: "01", title: "Your club is set up", body: "We create your club, upload your logo, and hand the President their login." },
  { n: "02", title: "The President adds members", body: "Each one gets their member number and PIN by text." },
  { n: "03", title: "Members check in by scanning", body: "The QR code at your meeting records attendance instantly." },
  { n: "04", title: "Everything else follows", body: "Events, dues, minutes, gallery and reports build up as the club uses it." },
];

export const STEPS = [
  { n: "1", when: "Day 0", title: "Send your request", body: "A club officer sends us the club's name and contact details." },
  { n: "2", when: "Day 1–3", title: "We set up your club", body: "We create your club space, upload your logo, and prepare officer logins." },
  { n: "3", when: "Day 5", title: "Onboarding call", body: "A 30-minute walkthrough for your President and Secretary." },
  { n: "4", when: "Same day", title: "You're live", body: "Members can start checking in with the QR code at your next meeting." },
];

export const CLUB_TYPES = ["Rotary", "Rotaract"];


export const EVENTS = [
  { mon: "Aug", day: "26", title: "Weekly club meeting", meta: "Every Tuesday · 7pm · QR check-in at the door", kind: "Weekly" },
  { mon: "Sep", day: "01", title: "Board meeting", meta: "First Monday of the month · Officers only", kind: "Monthly" },
  { mon: "Sep", day: "06", title: "Community clean-up day", meta: "Service project · printable QR sign-up sheet", kind: "Service" },
  { mon: "Sep", day: "20", title: "Fundraising dinner", meta: "Annual · registration via QR code", kind: "Fundraiser" },
  { mon: "Oct", day: "04", title: "New member induction", meta: "Ceremony · QR attendance", kind: "Ceremony" },
];

export const NEWS = [
  { date: "10 Aug 2026", title: "Rotary Connect launches on the App Store", body: "Members can now check in and view events from iPhone as well as Android." },
  { date: "22 Jul 2026", title: "AI-drafted meeting minutes now available", body: "Secretaries record the meeting; minutes come back drafted and ready to edit." },
  { date: "05 Jul 2026", title: "QR check-in for visiting guests", body: "Guests scan the club's code at the door — no account needed — and get a thank-you text after." },
  { date: "18 Jun 2026", title: "Dues and treasury dashboard for Treasurers", body: "See who's paid, who hasn't, and what the club is owed, in one place." },
];

export const JOIN_URL = "/request-to-join";
export const HOW_TO_USE_URL = "/how-to-use-the-app";

export const GOOD_TO_KNOW = [
  "No fee to explore — talk to us about pricing once we understand your club's size.",
  "Nothing is binding until your club decides to go ahead.",
  "Your club's data stays private — nothing is shared with other clubs.",
];

export const ROLE_GUIDES = [
  {
    tag: "MEM",
    role: "Members",
    summary: "Everything a member needs, on their phone.",
    features: [
      "Scan the club's QR code to check in at the meeting",
      "See who else is checked in",
      "View events, projects, the member directory and the photo gallery",
      "Check your own attendance history and certificates",
      "Vote in club polls",
      "Send an apology when you can't attend",
      "Log a make-up visit to another club",
    ],
  },
  {
    tag: "GST",
    role: "Visiting guests",
    summary: "No account needed.",
    features: [
      "Scan the club's QR code at the door",
      "No sign-up, no login required",
      "Get a thank-you text after the meeting",
    ],
  },
  {
    tag: "SEC",
    role: "The Secretary",
    summary: "Minutes and records, handled.",
    features: [
      "Record the meeting on your phone",
      "Get AI-drafted minutes back to review and edit",
      "Store club documents in one place",
      "Produce monthly and annual reports",
    ],
  },
  {
    tag: "PRE",
    role: "The President",
    summary: "Run the club roster.",
    features: [
      "Add new members to the club",
      "Manage club officers",
      "The only account that can add everyone else",
    ],
  },
  {
    tag: "TRE",
    role: "The Treasurer",
    summary: "Dues and money, at a glance.",
    features: [
      "See dues status for every member",
      "Track outstanding balances",
      "Record payments and transactions",
    ],
  },
];

export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.digiflecttech.rotaryconnect";
export const APP_STORE_URL = "https://apps.apple.com/us/app/rotary-connect-club-meetings/id6793908530";

export const CONTACT_EMAIL = "rotaryconnect@digiflecttech.dev";
export const CONTACT_PHONES = ["+256 776 157477", "+256 757029368"];

// Overridable at build time (VITE_API_BASE) so a preview deploy can point
// at a staging API; the default is the live backend the app already uses.
export const API_BASE = import.meta.env.VITE_API_BASE || "https://rotaryapi.digiflecttech.dev";
