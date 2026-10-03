/**
 * MediCare+ Pharmacy Product Catalog
 * 
 * Centralized product data containing the 5 core pharmacy products.
 * Uses exact local asset image paths from public/assets/.
 */

export const SAMPLE_PRODUCTS = [
  {
    id: 'prod-001',
    name: 'Paracetamol 650 mg Tablets',
    slug: 'paracetamol-650-mg-tablets',
    category: 'Pain Relief',
    price: 35,
    inStock: true,
    stock: 50,
    rating: 4.8,
    badge: 'Fast Relief',
    shortDescription: 'Clinically trusted antipyretic & analgesic tablets for fast relief from fever, headache, and body aches.',
    description: 'Paracetamol 650 mg Tablets provide effective, rapid relief from mild to moderate pain, including headache, migraine, toothache, muscular ache, backache, and arthritis. It also reduces high fever gently and effectively. Suitable for adults and adolescents as directed by a healthcare professional.',
    highlights: [
      'Fast-acting fever reduction and pain relief',
      'Gentle on the stomach when taken as directed',
      'Convenient blister pack for freshness and hygiene',
      'Certified pharmaceutical grade composition'
    ],
    usage: 'Take 1 tablet every 4-6 hours as needed with water, or as directed by your physician. Do not exceed 4 tablets in 24 hours.',
    images: [
      '/assets/Paracetamol 650 mg Tablets images/Paracetamol 650 mg Tablets_img_1.jpg',
      '/assets/Paracetamol 650 mg Tablets images/Paracetamol 650 mg Tablets_img_2.webp',
      '/assets/Paracetamol 650 mg Tablets images/Paracetamol 650 mg Tablets_img_3.webp',
    ],
  },
  {
    id: 'prod-002',
    name: 'Himalaya Neem & Turmeric Soap',
    slug: 'himalaya-neem-turmeric-soap',
    category: 'Skin Care',
    price: 65,
    inStock: true,
    stock: 35,
    rating: 4.7,
    badge: 'Ayurvedic',
    shortDescription: 'Ayurvedic cleansing bar enriched with pure Neem oil and Turmeric to protect and purify skin.',
    description: 'Himalaya Neem & Turmeric Soap blends all the goodness of naturally derived ingredients to keep your skin protected at all times. The antibacterial powers of pure Neem and soothing Turmeric safeguard your skin against harsh environmental elements, clearing blemishes and keeping it refreshed and smooth.',
    highlights: [
      'Infused with 100% pure herbal Neem & Turmeric extracts',
      'Antibacterial protection against daily skin impurities',
      'Maintains natural skin moisture and tone',
      'Free from harsh parabens and synthetic sulfates'
    ],
    usage: 'Wet body and face, apply soap generously, work up a rich lather, and gently rinse with clean water. Use daily for best results.',
    images: [
      '/assets/Himalaya Neem & Turmeric Soap images/Himalaya Neem & Turmeric Soap_img_1.webp',
      '/assets/Himalaya Neem & Turmeric Soap images/Himalaya Neem & Turmeric Soap_img_2.webp',
      '/assets/Himalaya Neem & Turmeric Soap images/Himalaya Neem & Turmeric Soap_img_3.webp',
    ],
  },
  {
    id: 'prod-003',
    name: 'Himalaya Koflet Cough Syrup',
    slug: 'himalaya-koflet-cough-syrup',
    category: 'Cough & Cold',
    price: 110,
    inStock: true,
    stock: 25,
    rating: 4.9,
    badge: 'Herbal Formula',
    shortDescription: 'Herbal honey-based formula for rapid and soothing relief from both dry and productive cough.',
    description: 'Himalaya Koflet Cough Syrup is an all-natural herbal formulation beneficial in managing both productive and dry cough. Fortified with pure Honey, Holy Basil (Tulsi), and Licorice (Yashtimadhu), it soothes bronchial mucosal irritation, reduces inflammation in the respiratory tract, and provides non-drowsy relief.',
    highlights: [
      'Dual action against both dry and productive cough',
      'Non-drowsy formula with natural Honey and Tulsi',
      'Soothes scratchy throat and reduces chest congestion',
      'Safe and effective for daily seasonal respiratory care'
    ],
    usage: 'Adults: 1-2 teaspoonfuls (5-10 ml) 2 to 3 times daily. Children: 1 teaspoonful (5 ml) 2 to 3 times daily, or as advised by a doctor.',
    images: [
      '/assets/Himalaya Koflet Cough Syrup imges/Himalaya Koflet Cough Syrup_img_1.webp',
      '/assets/Himalaya Koflet Cough Syrup imges/Himalaya Koflet Cough Syrup_img_2.webp',
      '/assets/Himalaya Koflet Cough Syrup imges/Himalaya Koflet Cough Syrup_img_3.webp',
    ],
  },
  {
    id: 'prod-004',
    name: 'Horlicks',
    slug: 'horlicks',
    category: 'Nutrition & Health Drink',
    price: 320,
    inStock: true,
    stock: 20,
    rating: 4.8,
    badge: 'Nutritional',
    shortDescription: 'Classic malted nutrition drink packed with 23 vital nutrients for strength, immunity, and growth.',
    description: 'Horlicks is a clinically proven health food drink designed to support growth and development for children and adults alike. Packed with essential micronutrients including Calcium, Vitamin D, Vitamin C, Iron, and Zinc, it supports bone health, immunity, muscle development, and overall daily vitality.',
    highlights: [
      'Clinically proven to support active growth and strength',
      'Enriched with 23 vital micronutrients including Zinc & Iron',
      'Delicious classic malt flavor that easily mixes in hot or cold milk',
      'Supports healthy immune system and brain development'
    ],
    usage: 'Add 3 heaped teaspoonfuls (approx. 27g) of Horlicks powder into a glass of hot or cold milk (200ml). Stir well and enjoy.',
    images: [
      '/assets/Horlicks images/Horlicks_img_1.webp',
      '/assets/Horlicks images/Horlicks_img_2.webp',
      '/assets/Horlicks images/Horlicks_img_3.webp',
    ],
  },
  {
    id: 'prod-005',
    name: 'Lifebuoy Handwash',
    slug: 'lifebuoy-handwash',
    category: 'Personal Care',
    price: 99,
    inStock: true,
    stock: 45,
    rating: 4.6,
    badge: '99.9% Germ Shield',
    shortDescription: 'Advanced germ protection liquid handwash with Activ Silver Shield formula.',
    description: 'Lifebuoy Handwash provides 99.9% germ protection in just 10 seconds. Specially formulated with Activ Silver Shield formula, it thoroughly cleanses hands, washes away harmful bacteria and viruses, and leaves skin feeling fresh, soft, and lightly fragranced after every wash.',
    highlights: [
      'Kills 99.9% of germs in 10 seconds of active washing',
      'Activ Silver Shield formula for advanced family hygiene',
      'Moisturizing formulation that prevents dry hands',
      'Easy-to-use hygienic pump dispenser bottle'
    ],
    usage: 'Press nozzle to dispense a small amount onto wet hands. Rub hands together thoroughly for 20 seconds, covering palms, backs, and fingers, then rinse with water.',
    images: [
      '/assets/Lifebuoy Handwash images/Lifebuoy Handwash_img_1.webp',
      '/assets/Lifebuoy Handwash images/Lifebuoy Handwash_img_2.webp',
      '/assets/Lifebuoy Handwash images/Lifebuoy Handwash_img_3.webp',
    ],
  },
];

export const CATEGORIES = [
  'All',
  'Pain Relief',
  'Skin Care',
  'Cough & Cold',
  'Nutrition & Health Drink',
  'Personal Care',
];
