export type BinStatus = "empty" | "half" | "full";

export type Bin = {
  id: string;
  name: string;
  zone: string;
  fill: number;
  x: number;
  y: number;
  type: string;
  lastCollected: string;
  predictedFullIn: string;
};

export function statusOf(fill: number): BinStatus {
  if (fill >= 80) return "full";
  if (fill >= 40) return "half";
  return "empty";
}

export const bins: Bin[] = [
  { id: "BIN-101", name: "Green Park Gate", zone: "North", fill: 92, x: 18, y: 22, type: "Mixed", lastCollected: "Today, 06:10", predictedFullIn: "Overflowing now" },
  { id: "BIN-102", name: "Market Square", zone: "Central", fill: 74, x: 42, y: 30, type: "Wet waste", lastCollected: "Today, 05:40", predictedFullIn: "in 3 hours" },
  { id: "BIN-103", name: "Riverside Walk", zone: "East", fill: 31, x: 71, y: 20, type: "Dry waste", lastCollected: "Today, 07:05", predictedFullIn: "in 19 hours" },
  { id: "BIN-104", name: "Tech Campus B", zone: "East", fill: 58, x: 82, y: 46, type: "E-waste", lastCollected: "Yesterday, 18:20", predictedFullIn: "in 9 hours" },
  { id: "BIN-105", name: "Old Town Lane", zone: "South", fill: 88, x: 30, y: 62, type: "Mixed", lastCollected: "Yesterday, 20:00", predictedFullIn: "in 1 hour" },
  { id: "BIN-106", name: "Central Station", zone: "Central", fill: 47, x: 54, y: 52, type: "Plastic", lastCollected: "Today, 04:55", predictedFullIn: "in 12 hours" },
  { id: "BIN-107", name: "Lake View Road", zone: "West", fill: 15, x: 14, y: 78, type: "Glass", lastCollected: "Today, 06:45", predictedFullIn: "in 26 hours" },
  { id: "BIN-108", name: "Civic Hospital", zone: "South", fill: 81, x: 63, y: 76, type: "Wet waste", lastCollected: "Yesterday, 21:30", predictedFullIn: "Overflowing now" },
  { id: "BIN-109", name: "School Street", zone: "West", fill: 36, x: 36, y: 44, type: "Paper", lastCollected: "Today, 07:30", predictedFullIn: "in 16 hours" },
  { id: "BIN-110", name: "Harbour Point", zone: "East", fill: 66, x: 88, y: 68, type: "Metal", lastCollected: "Yesterday, 19:10", predictedFullIn: "in 6 hours" },
];

export const complaints = [
  { id: "CMP-9021", type: "Overflowing bin", location: "Green Park Gate", date: "07 Sep 2026", status: "Resolved", points: 25 },
  { id: "CMP-9018", type: "Illegal dumping", location: "Old Town Lane", date: "05 Sep 2026", status: "In progress", points: 40 },
  { id: "CMP-9012", type: "Broken bin lid", location: "Market Square", date: "02 Sep 2026", status: "Assigned", points: 15 },
  { id: "CMP-9004", type: "Overflowing bin", location: "Civic Hospital", date: "29 Aug 2026", status: "Resolved", points: 25 },
];

export const wasteTrend = [
  { day: "Mon", collected: 42, recycled: 24, predicted: 44 },
  { day: "Tue", collected: 51, recycled: 30, predicted: 49 },
  { day: "Wed", collected: 38, recycled: 22, predicted: 41 },
  { day: "Thu", collected: 60, recycled: 38, predicted: 57 },
  { day: "Fri", collected: 72, recycled: 46, predicted: 69 },
  { day: "Sat", collected: 85, recycled: 55, predicted: 81 },
  { day: "Sun", collected: 64, recycled: 41, predicted: 66 },
];

export const wasteMix = [
  { name: "Wet", value: 34 },
  { name: "Dry", value: 26 },
  { name: "Plastic", value: 18 },
  { name: "Paper", value: 12 },
  { name: "Glass", value: 6 },
  { name: "E-waste", value: 4 },
];

export const routeStops = [
  { id: "BIN-101", name: "Green Park Gate", eta: "08:10", km: 1.2, done: true },
  { id: "BIN-105", name: "Old Town Lane", eta: "08:35", km: 2.6, done: true },
  { id: "BIN-102", name: "Market Square", eta: "09:05", km: 1.8, done: false },
  { id: "BIN-108", name: "Civic Hospital", eta: "09:40", km: 3.1, done: false },
  { id: "BIN-110", name: "Harbour Point", eta: "10:15", km: 2.4, done: false },
];

export const leaderboard = [
  { rank: 1, name: "Aisha Khan", points: 2480, badge: "Eco Champion" },
  { rank: 2, name: "Rahul Menon", points: 2115, badge: "Green Hero" },
  { rank: 3, name: "Zainullah S.", points: 1890, badge: "Green Hero" },
  { rank: 4, name: "Maria Lopez", points: 1620, badge: "Recycler" },
  { rank: 5, name: "Tom Becker", points: 1410, badge: "Recycler" },
];

export const people = [
  { id: "USR-01", name: "Aisha Khan", role: "Citizen", zone: "North", status: "Active" },
  { id: "USR-02", name: "Rahul Menon", role: "Citizen", zone: "Central", status: "Active" },
  { id: "WRK-11", name: "David Osei", role: "Worker", zone: "East", status: "On route" },
  { id: "WRK-12", name: "Sana Iqbal", role: "Worker", zone: "South", status: "On route" },
  { id: "WRK-13", name: "Leo Marchetti", role: "Worker", zone: "West", status: "Off duty" },
  { id: "ADM-01", name: "City Admin", role: "Admin", zone: "All", status: "Active" },
];

export const wasteClasses = [
  { label: "Wet waste", bin: "Green bin", tip: "Food scraps, peels and garden waste. Compost within 24 hours." },
  { label: "Dry waste", bin: "Blue bin", tip: "Clean, non-recyclable dry items. Keep free of moisture." },
  { label: "Plastic", bin: "Blue bin", tip: "Rinse bottles and crush them to save space." },
  { label: "Glass", bin: "White bin", tip: "Wrap broken glass in paper before dropping it in." },
  { label: "Metal", bin: "Grey bin", tip: "Cans and foil are fully recyclable when clean." },
  { label: "Paper", bin: "Blue bin", tip: "Flatten cartons. Keep away from oily food waste." },
  { label: "E-waste", bin: "Red bin", tip: "Never mix with household waste. Use a drop-off point." },
];

export const recyclingTips = [
  "Rinse containers before recycling — dirty items contaminate whole batches.",
  "Keep a small e-waste box at home for cables, chargers and batteries.",
  "Compost wet waste to cut landfill volume by up to 40%.",
  "Flatten cardboard so collection trucks carry more per trip.",
  "Say no to single-use plastic bags — carry a cloth bag.",
  "Donate or repair before discarding electronics and clothing.",
];

export const faqs = [
  { q: "What is EcoSense?", a: "EcoSense is an AI-powered smart waste platform connecting citizens, collection workers and city administrators on one live dashboard." },
  { q: "How do smart bins report their fill level?", a: "Each bin has an ultrasonic sensor that streams its fill percentage. Our AI model then predicts when the bin will overflow." },
  { q: "Do I need an account to report a bin?", a: "You can scan a bin's QR code to report instantly, but signing in lets you earn Eco Points and track your complaints." },
  { q: "How are collection routes optimised?", a: "The route optimiser ranks bins by predicted overflow, distance and traffic, then builds the shortest path — saving fuel and CO₂." },
  { q: "Does the app work offline?", a: "Yes. Reports made offline are stored on your device and sync automatically once you are back online." },
  { q: "How do I earn rewards?", a: "Verified reports, recycling drop-offs and segregation streaks all earn Eco Points, redeemable for city rewards." },
];

export const testimonials = [
  { name: "Priya Nair", role: "Resident, Central Zone", quote: "I reported an overflowing bin with one photo and it was cleared in under two hours. It finally feels like the city listens." },
  { name: "David Osei", role: "Collection Worker", quote: "The optimised route cut my daily driving by almost a third. Fewer empty trips, less fuel, easier shifts." },
  { name: "Meera Raghavan", role: "Municipal Officer", quote: "The live map and overflow predictions changed how we plan. We act before complaints come in, not after." },
];
