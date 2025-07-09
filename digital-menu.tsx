"use client"

import { Leaf, Heart, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  const menuSections = [
    {
      title: "Meat Dishes | أطباق اللحوم",
      items: [
        {
          name: "Istaqranov Meat | محل فونارقتسا",
          description: "Premium grilled meat prepared with special spices and herbs",
          prices: { "100g": "25.00", "150g": "30.00", "200g": "35.00" },
          tags: ["High Protein", "Grilled"],
        },
        {
          name: "Daoud Pasha | اشاب دواد",
          description: "Traditional Middle Eastern meatballs in rich tomato sauce",
          prices: { "100g": "25.00", "150g": "30.00", "200g": "35.00" },
          tags: ["Traditional", "Protein Rich"],
        },
        {
          name: "Steak Meat | محل كيتس",
          description: "Tender grilled steak cooked to perfection",
          prices: { "100g": "25.00", "150g": "30.00", "200g": "35.00" },
          tags: ["Premium", "High Protein"],
        },
        {
          name: "Meat Kabab | محل بابك",
          description: "Juicy grilled meat kabab with aromatic spices",
          prices: { "100g": "25.00", "150g": "30.00", "200g": "35.00" },
          tags: ["Grilled", "Spiced"],
        },
        {
          name: "Steam Meat | راخب محل",
          description: "Healthy steamed meat, tender and flavorful",
          prices: { "100g": "25.00", "150g": "30.00", "200g": "35.00" },
          tags: ["Steamed", "Healthy"],
        },
        {
          name: "Szechuan Meat | ناوشيس محل",
          description: "Spicy Asian-style meat with Szechuan peppers",
          prices: { "100g": "25.00", "150g": "30.00", "200g": "35.00" },
          tags: ["Spicy", "Asian"],
        },
        {
          name: "Meat Curry | يراك محل",
          description: "Rich and aromatic curry with tender meat pieces",
          prices: { "100g": "25.00", "150g": "30.00", "200g": "35.00" },
          tags: ["Curry", "Aromatic"],
        },
      ],
    },
    {
      title: "Sandwiches & Burgers | الساندويشات والبرغر",
      items: [
        {
          name: "Chicken Burger | جاجد رجرب",
          description: "Grilled chicken burger with fresh vegetables and fries",
          prices: { "100g": "15.00", "150g": "20.00", "200g": "25.00" },
          tags: ["Chicken", "With Fries"],
        },
        {
          name: "Beef Burger | محل رجرب",
          description: "Juicy beef burger with fresh toppings and fries",
          prices: { "100g": "18.00", "150g": "24.00", "200g": "30.00" },
          tags: ["Beef", "With Fries"],
        },
        {
          name: "Taka Sandwich | اكات شتودناس",
          description: "Special house sandwich with unique flavors and fries",
          prices: { "100g": "16.00", "150g": "22.00", "200g": "28.00" },
          tags: ["House Special", "With Fries"],
        },
        {
          name: "Chicken Sandwich | جاجد شتودناس",
          description: "Fresh chicken sandwich with crisp vegetables",
          prices: { "100g": "15.00", "150g": "20.00", "200g": "25.00" },
          tags: ["Chicken", "Fresh"],
        },
        {
          name: "Shawarma | امرواش",
          description: "Traditional Middle Eastern shawarma with fries",
          prices: { "100g": "14.00", "150g": "18.00", "200g": "22.00" },
          tags: ["Traditional", "With Fries"],
        },
        {
          name: "Chicken Fajita | جاجد اتيهاف",
          description: "Mexican-style chicken fajita with peppers and fries",
          prices: { "100g": "15.00", "150g": "20.00", "200g": "25.00" },
          tags: ["Mexican", "With Fries"],
        },
        {
          name: "Chicken Quesadilla | جاجد ايداسك",
          description: "Grilled tortilla with chicken and cheese, served with fries",
          prices: { "100g": "14.00", "150g": "18.00", "200g": "22.00" },
          tags: ["Mexican", "Cheese"],
        },
        {
          name: "Tuna Club | ةنوث بولك",
          description: "Classic tuna club sandwich with fresh ingredients",
          prices: { "100g": "8.00", "150g": "12.00", "200g": "15.00" },
          tags: ["Tuna", "Classic"],
        },
        {
          name: "Cheese Club | ةنبج بولك",
          description: "Melted cheese club sandwich",
          prices: { "100g": "10.00", "150g": "14.00", "200g": "18.00" },
          tags: ["Cheese", "Vegetarian"],
        },
        {
          name: "Halloumi Club | يمولح بولك",
          description: "Grilled halloumi cheese club sandwich",
          prices: { "100g": "14.00", "150g": "18.00", "200g": "22.00" },
          tags: ["Halloumi", "Grilled"],
        },
      ],
    },
    {
      title: "Seafood | المأكولات البحرية",
      items: [
        {
          name: "Alexandrian Shrimp | يناردنكسا يربمج",
          description: "Fresh shrimp prepared Alexandria style with special spices",
          prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
          tags: ["Shrimp", "Alexandria Style"],
        },
        {
          name: "Shrimp Curry | يراكلاب يربمج",
          description: "Aromatic curry with fresh shrimp and exotic spices",
          prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
          tags: ["Shrimp", "Curry"],
        },
        {
          name: "Shrimp with Pesto | وتسيب صوصب يربمج",
          description: "Fresh shrimp with homemade pesto sauce",
          prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
          tags: ["Shrimp", "Pesto"],
        },
        {
          name: "Grilled Shrimp | يوشم يربمج",
          description: "Perfectly grilled shrimp with herbs and lemon",
          prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
          tags: ["Shrimp", "Grilled"],
        },
        {
          name: "Chinese Shrimp | ينيص يوشم يربمج",
          description: "Asian-style grilled shrimp with Chinese flavors",
          prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
          tags: ["Shrimp", "Chinese"],
        },
        {
          name: "Salmon in Cream Sauce | ةميرك صوصب نوملس",
          description: "Fresh salmon fillet in rich cream sauce",
          prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
          tags: ["Salmon", "Cream Sauce"],
        },
        {
          name: "Salmon with Mint Sauce | عانعن صوصب نوملس",
          description: "Grilled salmon with refreshing mint sauce",
          prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
          tags: ["Salmon", "Mint"],
        },
        {
          name: "Grilled Salmon | يوشم نوملس",
          description: "Simply grilled salmon with herbs and lemon",
          prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
          tags: ["Salmon", "Grilled"],
        },
        {
          name: "Fish Fillet with Vegetables | راضخلاب كمس ةيليف",
          description: "Fresh fish fillet served with seasonal vegetables",
          prices: { "100g": "22.00", "150g": "26.00", "200g": "30.00" },
          tags: ["Fish", "Vegetables"],
        },
        {
          name: "Fish Fillet with Tahini | ةنيحطلاب كمس ةيليف",
          description: "Grilled fish fillet with creamy tahini sauce",
          prices: { "100g": "22.00", "150g": "26.00", "200g": "30.00" },
          tags: ["Fish", "Tahini"],
        },
        {
          name: "Fish Fillet Curry | يراكلاب كمس ةيليف",
          description: "Fish fillet in aromatic curry sauce",
          prices: { "100g": "22.00", "150g": "26.00", "200g": "30.00" },
          tags: ["Fish", "Curry"],
        },
        {
          name: "Fish Fillet with Cream | ةميركلاب كمس ةيليف",
          description: "Tender fish fillet in rich cream sauce",
          prices: { "100g": "22.00", "150g": "26.00", "200g": "30.00" },
          tags: ["Fish", "Cream"],
        },
        {
          name: "Grilled Fish Fillet | يوشم كمس ةيليف",
          description: "Simply grilled fish fillet with herbs",
          prices: { "100g": "22.00", "150g": "26.00", "200g": "30.00" },
          tags: ["Fish", "Grilled"],
        },
      ],
    },
    {
      title: "Chicken Dishes | أطباق الدجاج",
      items: [
        {
          name: "Chicken Biryani | ينايرب جاجد",
          description: "Aromatic basmati rice with spiced chicken and herbs",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Biryani", "Aromatic"],
        },
        {
          name: "Chicken with Lemon Sauce | نوميل صوصب جاجد",
          description: "Tender chicken in tangy lemon sauce",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Lemon", "Tangy"],
        },
        {
          name: "Chicken Pesto | وتسيب جاجد",
          description: "Grilled chicken with homemade pesto sauce",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Pesto", "Grilled"],
        },
        {
          name: "Teriyaki Chicken | يكايرت جاجد",
          description: "Japanese-style chicken with teriyaki glaze",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Teriyaki", "Japanese"],
        },
        {
          name: "Dynamite Chicken | تيمانيد جاجد",
          description: "Spicy chicken with explosive flavors",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Spicy", "Bold"],
        },
        {
          name: "Chicken Shawarma | امروش جاجد",
          description: "Traditional Middle Eastern chicken shawarma",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Shawarma", "Traditional"],
        },
        {
          name: "Chicken Fajita | اتيهاف جاجد",
          description: "Mexican-style chicken with peppers and onions",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Fajita", "Mexican"],
        },
        {
          name: "Crispy Chicken | يبسرك جاجد",
          description: "Golden crispy chicken with special coating",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Crispy", "Golden"],
        },
        {
          name: "Chicken Cream | ةميرك جاجد",
          description: "Tender chicken in rich cream sauce",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Cream", "Rich"],
        },
        {
          name: "Korean Chicken | يروك جاجد",
          description: "Korean-style chicken with authentic spices",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Korean", "Authentic"],
        },
        {
          name: "Masala Chicken | لااسم جاجد",
          description: "Indian-style chicken with aromatic masala spices",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Masala", "Indian"],
        },
        {
          name: "Grilled Chicken with Tomato | مطامط صوصب يوشم جاجد",
          description: "Grilled chicken with fresh tomato sauce",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Grilled", "Tomato"],
        },
        {
          name: "Chicken Kabab | جاجد بابك",
          description: "Juicy grilled chicken kabab with herbs",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Kabab", "Grilled"],
        },
      ],
    },
    {
      title: "Healthy Salads | السلطات الصحية",
      items: [
        {
          name: "Diet Pasta Salad with Tuna | ةنوثلاب اتسابلا ةطلس",
          description: "Healthy pasta salad with tuna, perfect for diet",
          price: "28.00",
          tags: ["Diet", "Tuna", "Pasta"],
        },
        {
          name: "Diet Vegetable Salad with Yogurt | نبللاب راضخلا ةطلس",
          description: "Fresh vegetables with creamy yogurt dressing",
          price: "28.00",
          tags: ["Diet", "Yogurt", "Fresh"],
        },
        {
          name: "Diet Quinoa Salad | نولملا لفلفلاب اونيكلا ةطلس",
          description: "Nutritious quinoa with colorful peppers",
          price: "28.00",
          tags: ["Diet", "Quinoa", "Colorful"],
        },
        {
          name: "Keto Greek Salad | وتيك ةينانويلا ةطلس",
          description: "Traditional Greek salad, keto-friendly",
          price: "32.00",
          tags: ["Keto", "Greek", "Traditional"],
        },
        {
          name: "Protein Salad | نيتورب ةطلس",
          description: "High-protein salad for fitness enthusiasts",
          price: "35.00",
          tags: ["High Protein", "Fitness"],
        },
        {
          name: "Keto Tuna Salad | وتيك ةنوث ةطلس",
          description: "Keto-friendly tuna salad with healthy fats",
          price: "32.00",
          tags: ["Keto", "Tuna", "Healthy Fats"],
        },
        {
          name: "Diet Cottage Cheese & Chickpea | صمحلاو شيرقلا نبج ةطلس",
          description: "Cottage cheese and chickpeas for diet",
          price: "27.00",
          tags: ["Diet", "Cottage Cheese", "Chickpeas"],
        },
        {
          name: "Arugula Salad | ريجرج ةطلس",
          description: "Fresh arugula with light dressing",
          price: "26.00",
          tags: ["Arugula", "Fresh", "Light"],
        },
        {
          name: "Carrot Salad | رزج ةطلس",
          description: "Crunchy carrot salad with herbs",
          price: "26.00",
          tags: ["Carrot", "Crunchy", "Herbs"],
        },
        {
          name: "Diet Pomegranate Vegetable | نامرلاب راضخ ةطلس",
          description: "Vegetables with pomegranate seeds",
          price: "28.00",
          tags: ["Diet", "Pomegranate", "Antioxidants"],
        },
        {
          name: "Diet Vegetable Salad | تيادلل راضخ ةطلس",
          description: "Mixed vegetables perfect for diet",
          price: "28.00",
          tags: ["Diet", "Mixed Vegetables"],
        },
        {
          name: "Diet Chicken Caesar | تيادلل رزيس جاجد ةطلس",
          description: "Light chicken Caesar salad for diet",
          price: "35.00",
          tags: ["Diet", "Chicken", "Caesar"],
        },
        {
          name: "Beetroot Salad | ردنمش ةطلس",
          description: "Nutritious beetroot salad with herbs",
          price: "26.00",
          tags: ["Beetroot", "Nutritious"],
        },
        {
          name: "Keto Shrimp Salad | يربمج وتيك ةطلس",
          description: "Keto-friendly shrimp salad",
          price: "45.00",
          tags: ["Keto", "Shrimp", "Premium"],
        },
        {
          name: "Keto Chicken Salad | جاجد وتيك ةطلس",
          description: "Keto chicken salad with healthy fats",
          price: "35.00",
          tags: ["Keto", "Chicken"],
        },
        {
          name: "Keto Steak Salad | كيتس وتيك ةطلس",
          description: "Keto steak salad with premium cuts",
          price: "40.00",
          tags: ["Keto", "Steak", "Premium"],
        },
        {
          name: "Cabbage Salad | فوفلم ةطلس",
          description: "Fresh cabbage salad with light dressing",
          price: "25.00",
          tags: ["Cabbage", "Fresh", "Light"],
        },
      ],
    },
    {
      title: "Pasta Dishes | أطباق المعكرونة",
      items: [
        {
          name: "Spaghetti | يتيجابس",
          description: "Classic spaghetti with your choice of sauce",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Classic", "Italian"],
        },
        {
          name: "Shrimp Gratin | يربمج ناترق",
          description: "Creamy shrimp gratin with cheese",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Shrimp", "Gratin", "Cheese"],
        },
        {
          name: "Chicken Gratin | جاجد ناترق",
          description: "Baked chicken gratin with creamy sauce",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Chicken", "Gratin", "Baked"],
        },
        {
          name: "Spinach Lasagna | خينابس اينازلا",
          description: "Healthy spinach lasagna with ricotta",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Spinach", "Lasagna", "Healthy"],
        },
        {
          name: "Meat Lasagna | محل اينازلا",
          description: "Traditional meat lasagna with rich sauce",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Meat", "Lasagna", "Traditional"],
        },
        {
          name: "Pesto Pasta | وتسيبلاب ةنوركم",
          description: "Fresh pasta with homemade pesto sauce",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Pesto", "Homemade"],
        },
        {
          name: "Alfredo Pasta | ةردلاب ةنوركم",
          description: "Creamy Alfredo pasta with parmesan",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Alfredo", "Creamy", "Parmesan"],
        },
        {
          name: "Chicken Pesto Pasta | وتسيب صوصب جاجد ةنوركم",
          description: "Chicken pasta with fresh pesto sauce",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Chicken", "Pesto"],
        },
        {
          name: "Chicken Mixed Sauce Pasta | سكم صوصب جاجد ةنوركم",
          description: "Chicken pasta with mixed sauce blend",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Chicken", "Mixed Sauce"],
        },
        {
          name: "Chicken Fettuccine | جاجدلاب يتيشتتوف ةنوركم",
          description: "Classic chicken fettuccine with cream sauce",
          prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Chicken", "Fettuccine", "Cream"],
        },
      ],
    },
    {
      title: "Pizza Selection | تشكيلة البيتزا",
      items: [
        {
          name: "Pepperoni Pizza | ينوربيب ازتيب",
          description: "Classic pepperoni pizza with mozzarella",
          prices: { "100g": "15.00", "150g": "21.00", "200g": "25.00" },
          tags: ["Pepperoni", "Classic"],
        },
        {
          name: "Tuna Pizza | ةنوث ازتيب",
          description: "Fresh tuna pizza with vegetables",
          prices: { "100g": "18.00", "150g": "24.00", "200g": "30.00" },
          tags: ["Tuna", "Fresh"],
        },
        {
          name: "Shrimp Pizza | يربمج ازتيب",
          description: "Premium shrimp pizza with herbs",
          prices: { "100g": "27.00", "150g": "35.00", "200g": "43.00" },
          tags: ["Shrimp", "Premium"],
        },
        {
          name: "Vegetable Pizza | راضخ ازتيب",
          description: "Fresh vegetable pizza with seasonal produce",
          prices: { "100g": "15.00", "150g": "20.00", "200g": "25.00" },
          tags: ["Vegetable", "Seasonal"],
        },
        {
          name: "Chicken Pizza | جاجد ازتيب",
          description: "Grilled chicken pizza with herbs",
          prices: { "100g": "17.00", "150g": "23.00", "200g": "28.00" },
          tags: ["Chicken", "Grilled"],
        },
        {
          name: "Meat Kofta Pizza | محل ةتفك ازتيب",
          description: "Spiced meat kofta pizza with onions",
          prices: { "100g": "19.00", "150g": "26.00", "200g": "35.00" },
          tags: ["Kofta", "Spiced"],
        },
        {
          name: "Smoked Meat Pizza | ةنخدم موحل ازتيب",
          description: "Smoked meat pizza with rich flavors",
          prices: { "100g": "19.00", "150g": "21.00", "200g": "25.00" },
          tags: ["Smoked", "Rich"],
        },
        {
          name: "Margherita Pizza | اتيرغرام ازتيب",
          description: "Classic Margherita with fresh basil",
          prices: { "100g": "14.00", "150g": "20.00", "200g": "25.00" },
          tags: ["Margherita", "Basil", "Classic"],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#27914c" }}
              >
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold" style={{ color: "#eb662b" }}>
                N2 Diet
              </h1>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#eb662b" }}
              >
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nourish your body with our carefully crafted healthy meals. Fresh ingredients, bold flavors, and
              nutritious choices for every lifestyle.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" style={{ color: "#eb662b" }} />
                <span className="text-sm font-medium text-gray-700">Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5" style={{ color: "#27914c" }} />
                <span className="text-sm font-medium text-gray-700">Organic Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" style={{ color: "#eb662b" }} />
                <span className="text-sm font-medium text-gray-700">Made with Love</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-12">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="text-center mb-8">
                <h2
                  className="text-3xl font-bold mb-2"
                  style={{ color: sectionIndex % 2 === 0 ? "#27914c" : "#eb662b" }}
                >
                  {section.title}
                </h2>
                <div
                  className="w-24 h-1 mx-auto rounded-full"
                  style={{ backgroundColor: sectionIndex % 2 === 0 ? "#eb662b" : "#27914c" }}
                />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
                  >
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-semibold text-gray-800 leading-tight mb-2">{item.name}</h3>
                        {item.prices ? (
                          <div className="flex flex-wrap gap-2 mb-2">
                            {Object.entries(item.prices).map(([size, price]) => (
                              <span
                                key={size}
                                className="text-sm font-bold px-2 py-1 rounded"
                                style={{ backgroundColor: "#eb662b", color: "white" }}
                              >
                                {size}: ${price}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-xl font-bold" style={{ color: "#eb662b" }}>
                            ${item.price}
                          </span>
                        )}
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>

                      <div className="flex gap-2 flex-wrap">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-xs border-2"
                            style={{
                              borderColor: "#27914c",
                              color: "#27914c",
                            }}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="w-5 h-5" style={{ color: "#27914c" }} />
              <span className="text-lg font-semibold" style={{ color: "#eb662b" }}>
                N2 Diet
              </span>
              <Heart className="w-5 h-5" style={{ color: "#eb662b" }} />
            </div>
            <p className="text-gray-600 text-sm">Healthy eating made delicious • Fresh • Nutritious • Sustainable</p>
            <div className="mt-4 text-sm text-gray-500">
              <p>📍 Visit us today | 📞 Call for orders | 🚚 Delivery available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
