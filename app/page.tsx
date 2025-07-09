"use client"

import { useState } from "react"
import { ChefHat, Utensils, Fish, Pizza, Salad, Coffee } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [activeCategory, setActiveCategory] = useState("salads")

  const categories = [
    {
      id: "salads",
      name: "Healthy Salads",
      nameAr: "السلطات",
      icon: Salad,
      color: "#eb662b",
    },
    {
      id: "chicken",
      name: "Chicken Dishes",
      nameAr: "الدجاج",
      icon: ChefHat,
      color: "#27914c",
    },
    {
      id: "meat",
      name: "Meat Dishes",
      nameAr: "اللحم",
      icon: ChefHat,
      color: "#eb662b",
    },
    {
      id: "seafood",
      name: "Seafood",
      nameAr: "الأسماك",
      icon: Fish,
      color: "#27914c",
    },
    {
      id: "pasta",
      name: "Pasta Dishes",
      nameAr: "المكرونة",
      icon: Utensils,
      color: "#eb662b",
    },
    {
      id: "pizza",
      name: "Pizza Selection",
      nameAr: "البيتزا",
      icon: Pizza,
      color: "#27914c",
    },
    {
      id: "sandwiches",
      name: "Sandwiches & Burgers",
      nameAr: "الساندوتشات",
      icon: Utensils,
      color: "#eb662b",
    },
  ]

  const menuData = {
    salads: [
      {
        name: "Diet Pasta Salad with Tuna",
        nameAr: "سلطة الباستا بالتونة للرجيم",
        description: "Healthy pasta salad with tuna, perfect for diet",
        descriptionAr: "سلطة باستا صحية بالتونة، مثالية للرجيم",
        price: "28.00",
        tags: ["Diet", "Tuna", "Pasta"],
        tagsAr: ["رجيم", "تونة", "باستا"],
      },
      {
        name: "Diet Vegetable Salad with Yogurt",
        nameAr: "سلطة الخضار باللبن للرجيم",
        description: "Fresh vegetables with creamy yogurt dressing",
        descriptionAr: "خضار طازجة مع صلصة اللبن الكريمية",
        price: "28.00",
        tags: ["Diet", "Yogurt", "Fresh"],
        tagsAr: ["رجيم", "لبن", "طازج"],
      },
      {
        name: "Diet Quinoa Salad",
        nameAr: "سلطة الكينوا بالفلفل الملون للرجيم",
        description: "Nutritious quinoa with colorful peppers",
        descriptionAr: "كينوا مغذية مع الفلفل الملون",
        price: "28.00",
        tags: ["Diet", "Quinoa", "Colorful"],
        tagsAr: ["رجيم", "كينوا", "ملون"],
      },
      {
        name: "Keto Greek Salad",
        nameAr: "السلطة اليونانية كيتو",
        description: "Traditional Greek salad, keto-friendly",
        descriptionAr: "سلطة يونانية تقليدية، مناسبة للكيتو",
        price: "32.00",
        tags: ["Keto", "Greek", "Traditional"],
        tagsAr: ["كيتو", "يوناني", "تقليدي"],
      },
      {
        name: "Protein Salad",
        nameAr: "سلطة البروتين",
        description: "High-protein salad for fitness enthusiasts",
        descriptionAr: "سلطة عالية البروتين لعشاق اللياقة",
        price: "35.00",
        tags: ["High Protein", "Fitness"],
        tagsAr: ["بروتين عالي", "لياقة"],
      },
      {
        name: "Keto Tuna Salad",
        nameAr: "سلطة التونة كيتو",
        description: "Keto-friendly tuna salad with healthy fats",
        descriptionAr: "سلطة تونة مناسبة للكيتو مع الدهون الصحية",
        price: "32.00",
        tags: ["Keto", "Tuna", "Healthy Fats"],
        tagsAr: ["كيتو", "تونة", "دهون صحية"],
      },
      {
        name: "Diet Cottage Cheese & Chickpea",
        nameAr: "سلطة جبن القريش والحمص للرجيم",
        description: "Cottage cheese and chickpeas for diet",
        descriptionAr: "جبن قريش وحمص للرجيم",
        price: "27.00",
        tags: ["Diet", "Cottage Cheese", "Chickpeas"],
        tagsAr: ["رجيم", "جبن قريش", "حمص"],
      },
      {
        name: "Arugula Salad",
        nameAr: "سلطة الجرجير",
        description: "Fresh arugula with light dressing",
        descriptionAr: "جرجير طازج مع صلصة خفيفة",
        price: "26.00",
        tags: ["Arugula", "Fresh", "Light"],
        tagsAr: ["جرجير", "طازج", "خفيف"],
      },
      {
        name: "Carrot Salad",
        nameAr: "سلطة الجزر",
        description: "Crunchy carrot salad with herbs",
        descriptionAr: "سلطة جزر مقرمشة مع الأعشاب",
        price: "26.00",
        tags: ["Carrot", "Crunchy", "Herbs"],
        tagsAr: ["جزر", "مقرمش", "أعشاب"],
      },
      {
        name: "Diet Pomegranate Vegetable",
        nameAr: "سلطة خضار بالرمان للرجيم",
        description: "Vegetables with pomegranate seeds",
        descriptionAr: "خضار مع بذور الرمان",
        price: "28.00",
        tags: ["Diet", "Pomegranate", "Antioxidants"],
        tagsAr: ["رجيم", "رمان", "مضادات أكسدة"],
      },
      {
        name: "Diet Vegetable Salad",
        nameAr: "سلطة خضار للدايت",
        description: "Mixed vegetables perfect for diet",
        descriptionAr: "خضار مشكلة مثالية للدايت",
        price: "28.00",
        tags: ["Diet", "Mixed Vegetables"],
        tagsAr: ["دايت", "خضار مشكلة"],
      },
      {
        name: "Diet Chicken Caesar",
        nameAr: "سلطة دجاج سيزر للدايت",
        description: "Light chicken Caesar salad for diet",
        descriptionAr: "سلطة دجاج سيزر خفيفة للدايت",
        price: "35.00",
        tags: ["Diet", "Chicken", "Caesar"],
        tagsAr: ["دايت", "دجاج", "سيزر"],
      },
      {
        name: "Beetroot Salad",
        nameAr: "سلطة الشمندر",
        description: "Nutritious beetroot salad with herbs",
        descriptionAr: "سلطة شمندر مغذية مع الأعشاب",
        price: "26.00",
        tags: ["Beetroot", "Nutritious"],
        tagsAr: ["شمندر", "مغذي"],
      },
      {
        name: "Keto Shrimp Salad",
        nameAr: "سلطة كيتو بالجمبري",
        description: "Keto-friendly shrimp salad",
        descriptionAr: "سلطة جمبري مناسبة للكيتو",
        price: "45.00",
        tags: ["Keto", "Shrimp", "Premium"],
        tagsAr: ["كيتو", "جمبري", "مميز"],
      },
      {
        name: "Keto Chicken Salad",
        nameAr: "سلطة كيتو بالدجاج",
        description: "Keto chicken salad with healthy fats",
        descriptionAr: "سلطة دجاج كيتو مع الدهون الصحية",
        price: "35.00",
        tags: ["Keto", "Chicken"],
        tagsAr: ["كيتو", "دجاج"],
      },
      {
        name: "Keto Steak Salad",
        nameAr: "سلطة كيتو بالستيك",
        description: "Keto steak salad with premium cuts",
        descriptionAr: "سلطة ستيك كيتو مع قطع مميزة",
        price: "40.00",
        tags: ["Keto", "Steak", "Premium"],
        tagsAr: ["كيتو", "ستيك", "مميز"],
      },
      {
        name: "Cabbage Salad",
        nameAr: "سلطة الملفوف",
        description: "Fresh cabbage salad with light dressing",
        descriptionAr: "سلطة ملفوف طازجة مع صلصة خفيفة",
        price: "25.00",
        tags: ["Cabbage", "Fresh", "Light"],
        tagsAr: ["ملفوف", "طازج", "خفيف"],
      },
    ],
    chicken: [
      {
        name: "Chicken Biryani",
        nameAr: "دجاج بريانى",
        description: "Aromatic basmati rice with spiced chicken and herbs",
        descriptionAr: "أرز بسمتي عطري مع دجاج متبل والأعشاب",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Biryani", "Aromatic"],
        tagsAr: ["بريانى", "عطري"],
      },
      {
        name: "Chicken with Lemon Sauce",
        nameAr: "دجاج بصوص الليمون",
        description: "Tender chicken in tangy lemon sauce",
        descriptionAr: "دجاج طري في صوص الليمون الحامض",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Lemon", "Tangy"],
        tagsAr: ["ليمون", "حامض"],
      },
      {
        name: "Chicken Pesto",
        nameAr: "دجاج بيستو",
        description: "Grilled chicken with homemade pesto sauce",
        descriptionAr: "دجاج مشوي مع صوص البيستو المنزلي",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Pesto", "Grilled"],
        tagsAr: ["بيستو", "مشوي"],
      },
      {
        name: "Teriyaki Chicken",
        nameAr: "دجاج تيرياكي",
        description: "Japanese-style chicken with teriyaki glaze",
        descriptionAr: "دجاج على الطريقة اليابانية مع صوص التيرياكي",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Teriyaki", "Japanese"],
        tagsAr: ["تيرياكي", "ياباني"],
      },
      {
        name: "Dynamite Chicken",
        nameAr: "دجاج ديناميت",
        description: "Spicy chicken with explosive flavors",
        descriptionAr: "دجاج حار بنكهات متفجرة",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Spicy", "Bold"],
        tagsAr: ["حار", "جريء"],
      },
      {
        name: "Chicken Shawarma",
        nameAr: "شاورما دجاج",
        description: "Traditional Middle Eastern chicken shawarma",
        descriptionAr: "شاورما دجاج شرق أوسطية تقليدية",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Shawarma", "Traditional"],
        tagsAr: ["شاورما", "تقليدي"],
      },
      {
        name: "Chicken Fajita",
        nameAr: "فاهيتا دجاج",
        description: "Mexican-style chicken with peppers and onions",
        descriptionAr: "دجاج على الطريقة المكسيكية مع الفلفل والبصل",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Fajita", "Mexican"],
        tagsAr: ["فاهيتا", "مكسيكي"],
      },
      {
        name: "Crispy Chicken",
        nameAr: "دجاج كريسبي",
        description: "Golden crispy chicken with special coating",
        descriptionAr: "دجاج كريسبي ذهبي مع طلاء خاص",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Crispy", "Golden"],
        tagsAr: ["كريسبي", "ذهبي"],
      },
      {
        name: "Chicken Cream",
        nameAr: "دجاج كريمة",
        description: "Tender chicken in rich cream sauce",
        descriptionAr: "دجاج طري في صوص الكريمة الغني",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Cream", "Rich"],
        tagsAr: ["كريمة", "غني"],
      },
      {
        name: "Korean Chicken",
        nameAr: "دجاج كوري",
        description: "Korean-style chicken with authentic spices",
        descriptionAr: "دجاج على الطريقة الكورية مع التوابل الأصيلة",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Korean", "Authentic"],
        tagsAr: ["كوري", "أصيل"],
      },
      {
        name: "Masala Chicken",
        nameAr: "دجاج مسالا",
        description: "Indian-style chicken with aromatic masala spices",
        descriptionAr: "دجاج على الطريقة الهندية مع توابل المسالا العطرية",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Masala", "Indian"],
        tagsAr: ["مسالا", "هندي"],
      },
      {
        name: "Grilled Chicken with Tomato",
        nameAr: "دجاج مشوي بصوص الطماطم",
        description: "Grilled chicken with fresh tomato sauce",
        descriptionAr: "دجاج مشوي مع صوص الطماطم الطازج",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Grilled", "Tomato"],
        tagsAr: ["مشوي", "طماطم"],
      },
      {
        name: "Chicken Kabab",
        nameAr: "كباب دجاج",
        description: "Juicy grilled chicken kabab with herbs",
        descriptionAr: "كباب دجاج مشوي عصاري مع الأعشاب",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Kabab", "Grilled"],
        tagsAr: ["كباب", "مشوي"],
      },
    ],
    meat: [
      {
        name: "Istaqranov Meat",
        nameAr: "لحم استقرانوف",
        description: "Premium grilled meat prepared with special spices and herbs",
        descriptionAr: "لحم مشوي فاخر محضر بالتوابل والأعشاب الخاصة",
        prices: { "100g": "25.00", "150g": "30.00", "200g": "35.00" },
        tags: ["High Protein", "Grilled"],
        tagsAr: ["بروتين عالي", "مشوي"],
      },
      {
        name: "Daoud Pasha",
        nameAr: "داود باشا",
        description: "Traditional Middle Eastern meatballs in rich tomato sauce",
        descriptionAr: "كرات لحم شرق أوسطية تقليدية في صوص الطماطم الغني",
        prices: { "100g": "25.00", "150g": "30.00", "200g": "35.00" },
        tags: ["Traditional", "Protein Rich"],
        tagsAr: ["تقليدي", "غني بالبروتين"],
      },
      {
        name: "Steak Meat",
        nameAr: "لحم ستيك",
        description: "Tender grilled steak cooked to perfection",
        descriptionAr: "ستيك مشوي طري مطبوخ للكمال",
        prices: { "100g": "25.00", "150g": "30.00", "200g": "35.00" },
        tags: ["Premium", "High Protein"],
        tagsAr: ["فاخر", "بروتين عالي"],
      },
      {
        name: "Meat Kabab",
        nameAr: "كباب لحم",
        description: "Juicy grilled meat kabab with aromatic spices",
        descriptionAr: "كباب لحم مشوي عصاري مع التوابل العطرية",
        prices: { "100g": "25.00", "150g": "30.00", "200g": "35.00" },
        tags: ["Grilled", "Spiced"],
        tagsAr: ["مشوي", "متبل"],
      },
      {
        name: "Steam Meat",
        nameAr: "لحم بخار",
        description: "Healthy steamed meat, tender and flavorful",
        descriptionAr: "لحم مطبوخ بالبخار صحي، طري ولذيذ",
        prices: { "100g": "25.00", "150g": "30.00", "200g": "35.00" },
        tags: ["Steamed", "Healthy"],
        tagsAr: ["بخار", "صحي"],
      },
      {
        name: "Szechuan Meat",
        nameAr: "لحم سيشوان",
        description: "Spicy Asian-style meat with Szechuan peppers",
        descriptionAr: "لحم آسيوي حار مع فلفل السيشوان",
        prices: { "100g": "25.00", "150g": "30.00", "200g": "35.00" },
        tags: ["Spicy", "Asian"],
        tagsAr: ["حار", "آسيوي"],
      },
      {
        name: "Meat Curry",
        nameAr: "كاري لحم",
        description: "Rich and aromatic curry with tender meat pieces",
        descriptionAr: "كاري غني وعطري مع قطع اللحم الطرية",
        prices: { "100g": "25.00", "150g": "30.00", "200g": "35.00" },
        tags: ["Curry", "Aromatic"],
        tagsAr: ["كاري", "عطري"],
      },
    ],
    seafood: [
      {
        name: "Alexandrian Shrimp",
        nameAr: "جمبري إسكندراني",
        description: "Fresh shrimp prepared Alexandria style with special spices",
        descriptionAr: "جمبري طازج محضر على الطريقة الإسكندرانية مع التوابل الخاصة",
        prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
        tags: ["Shrimp", "Alexandria Style"],
        tagsAr: ["جمبري", "إسكندراني"],
      },
      {
        name: "Shrimp Curry",
        nameAr: "جمبري بالكاري",
        description: "Aromatic curry with fresh shrimp and exotic spices",
        descriptionAr: "كاري عطري مع الجمبري الطازج والتوابل الغريبة",
        prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
        tags: ["Shrimp", "Curry"],
        tagsAr: ["جمبري", "كاري"],
      },
      {
        name: "Shrimp with Pesto",
        nameAr: "جمبري بصوص البيستو",
        description: "Fresh shrimp with homemade pesto sauce",
        descriptionAr: "جمبري طازج مع صوص البيستو المنزلي",
        prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
        tags: ["Shrimp", "Pesto"],
        tagsAr: ["جمبري", "بيستو"],
      },
      {
        name: "Grilled Shrimp",
        nameAr: "جمبري مشوي",
        description: "Perfectly grilled shrimp with herbs and lemon",
        descriptionAr: "جمبري مشوي بالكمال مع الأعشاب والليمون",
        prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
        tags: ["Shrimp", "Grilled"],
        tagsAr: ["جمبري", "مشوي"],
      },
      {
        name: "Chinese Shrimp",
        nameAr: "جمبري مشوي صيني",
        description: "Asian-style grilled shrimp with Chinese flavors",
        descriptionAr: "جمبري مشوي على الطريقة الآسيوية بالنكهات الصينية",
        prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
        tags: ["Shrimp", "Chinese"],
        tagsAr: ["جمبري", "صيني"],
      },
      {
        name: "Salmon in Cream Sauce",
        nameAr: "سلمون بصوص الكريمة",
        description: "Fresh salmon fillet in rich cream sauce",
        descriptionAr: "فيليه سلمون طازج في صوص الكريمة الغني",
        prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
        tags: ["Salmon", "Cream Sauce"],
        tagsAr: ["سلمون", "صوص كريمة"],
      },
      {
        name: "Salmon with Mint Sauce",
        nameAr: "سلمون بصوص النعناع",
        description: "Grilled salmon with refreshing mint sauce",
        descriptionAr: "سلمون مشوي مع صوص النعناع المنعش",
        prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
        tags: ["Salmon", "Mint"],
        tagsAr: ["سلمون", "نعناع"],
      },
      {
        name: "Grilled Salmon",
        nameAr: "سلمون مشوي",
        description: "Simply grilled salmon with herbs and lemon",
        descriptionAr: "سلمون مشوي ببساطة مع الأعشاب والليمون",
        prices: { "100g": "35.00", "150g": "40.00", "200g": "45.00" },
        tags: ["Salmon", "Grilled"],
        tagsAr: ["سلمون", "مشوي"],
      },
      {
        name: "Fish Fillet with Vegetables",
        nameAr: "فيليه سمك بالخضار",
        description: "Fresh fish fillet served with seasonal vegetables",
        descriptionAr: "فيليه سمك طازج يُقدم مع الخضار الموسمية",
        prices: { "100g": "22.00", "150g": "26.00", "200g": "30.00" },
        tags: ["Fish", "Vegetables"],
        tagsAr: ["سمك", "خضار"],
      },
      {
        name: "Fish Fillet with Tahini",
        nameAr: "فيليه سمك بالطحينة",
        description: "Grilled fish fillet with creamy tahini sauce",
        descriptionAr: "فيليه سمك مشوي مع صوص الطحينة الكريمي",
        prices: { "100g": "22.00", "150g": "26.00", "200g": "30.00" },
        tags: ["Fish", "Tahini"],
        tagsAr: ["سمك", "طحينة"],
      },
      {
        name: "Fish Fillet Curry",
        nameAr: "فيليه سمك بالكاري",
        description: "Fish fillet in aromatic curry sauce",
        descriptionAr: "فيليه سمك في صوص الكاري العطري",
        prices: { "100g": "22.00", "150g": "26.00", "200g": "30.00" },
        tags: ["Fish", "Curry"],
        tagsAr: ["سمك", "كاري"],
      },
      {
        name: "Fish Fillet with Cream",
        nameAr: "فيليه سمك بالكريمة",
        description: "Tender fish fillet in rich cream sauce",
        descriptionAr: "فيليه سمك طري في صوص الكريمة الغني",
        prices: { "100g": "22.00", "150g": "26.00", "200g": "30.00" },
        tags: ["Fish", "Cream"],
        tagsAr: ["سمك", "كريمة"],
      },
      {
        name: "Grilled Fish Fillet",
        nameAr: "فيليه سمك مشوي",
        description: "Simply grilled fish fillet with herbs",
        descriptionAr: "فيليه سمك مشوي ببساطة مع الأعشاب",
        prices: { "100g": "22.00", "150g": "26.00", "200g": "30.00" },
        tags: ["Fish", "Grilled"],
        tagsAr: ["سمك", "مشوي"],
      },
    ],
    pasta: [
      {
        name: "Spaghetti",
        nameAr: "سباجيتي",
        description: "Classic spaghetti with your choice of sauce",
        descriptionAr: "سباجيتي كلاسيكية مع اختيارك من الصوص",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Classic", "Italian"],
        tagsAr: ["كلاسيكي", "إيطالي"],
      },
      {
        name: "Shrimp Gratin",
        nameAr: "جراتان جمبري",
        description: "Creamy shrimp gratin with cheese",
        descriptionAr: "جراتان جمبري كريمي مع الجبن",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Shrimp", "Gratin", "Cheese"],
        tagsAr: ["جمبري", "جراتان", "جبن"],
      },
      {
        name: "Chicken Gratin",
        nameAr: "جراتان دجاج",
        description: "Baked chicken gratin with creamy sauce",
        descriptionAr: "جراتان دجاج مخبوز مع الصوص الكريمي",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Chicken", "Gratin", "Baked"],
        tagsAr: ["دجاج", "جراتان", "مخبوز"],
      },
      {
        name: "Spinach Lasagna",
        nameAr: "لازانيا سبانخ",
        description: "Healthy spinach lasagna with ricotta",
        descriptionAr: "لازانيا سبانخ صحية مع الريكوتا",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Spinach", "Lasagna", "Healthy"],
        tagsAr: ["سبانخ", "لازانيا", "صحي"],
      },
      {
        name: "Meat Lasagna",
        nameAr: "لازانيا لحم",
        description: "Traditional meat lasagna with rich sauce",
        descriptionAr: "لازانيا لحم تقليدية مع الصوص الغني",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Meat", "Lasagna", "Traditional"],
        tagsAr: ["لحم", "لازانيا", "تقليدي"],
      },
      {
        name: "Pesto Pasta",
        nameAr: "معكرونة بالبيستو",
        description: "Fresh pasta with homemade pesto sauce",
        descriptionAr: "معكرونة طازجة مع صوص البيستو المنزلي",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Pesto", "Homemade"],
        tagsAr: ["بيستو", "منزلي"],
      },
      {
        name: "Alfredo Pasta",
        nameAr: "معكرونة بالألفريدو",
        description: "Creamy Alfredo pasta with parmesan",
        descriptionAr: "معكرونة ألفريدو كريمية مع البارميزان",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Alfredo", "Creamy", "Parmesan"],
        tagsAr: ["ألفريدو", "كريمي", "بارميزان"],
      },
      {
        name: "Chicken Pesto Pasta",
        nameAr: "معكرونة دجاج بصوص البيستو",
        description: "Chicken pasta with fresh pesto sauce",
        descriptionAr: "معكرونة دجاج مع صوص البيستو الطازج",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Chicken", "Pesto"],
        tagsAr: ["دجاج", "بيستو"],
      },
      {
        name: "Chicken Mixed Sauce Pasta",
        nameAr: "معكرونة دجاج بصوص مكس",
        description: "Chicken pasta with mixed sauce blend",
        descriptionAr: "معكرونة دجاج مع خليط الصوص المتنوع",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Chicken", "Mixed Sauce"],
        tagsAr: ["دجاج", "صوص مكس"],
      },
      {
        name: "Chicken Fettuccine",
        nameAr: "معكرونة فيتوتشيني بالدجاج",
        description: "Classic chicken fettuccine with cream sauce",
        descriptionAr: "فيتوتشيني دجاج كلاسيكية مع صوص الكريمة",
        prices: { "100g": "18.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Chicken", "Fettuccine", "Cream"],
        tagsAr: ["دجاج", "فيتوتشيني", "كريمة"],
      },
    ],
    pizza: [
      {
        name: "Pepperoni Pizza",
        nameAr: "بيتزا بيبروني",
        description: "Classic pepperoni pizza with mozzarella",
        descriptionAr: "بيتزا بيبروني كلاسيكية مع الموتزاريلا",
        prices: { "100g": "15.00", "150g": "21.00", "200g": "25.00" },
        tags: ["Pepperoni", "Classic"],
        tagsAr: ["بيبروني", "كلاسيكي"],
      },
      {
        name: "Tuna Pizza",
        nameAr: "بيتزا تونة",
        description: "Fresh tuna pizza with vegetables",
        descriptionAr: "بيتزا تونة طازجة مع الخضار",
        prices: { "100g": "18.00", "150g": "24.00", "200g": "30.00" },
        tags: ["Tuna", "Fresh"],
        tagsAr: ["تونة", "طازج"],
      },
      {
        name: "Shrimp Pizza",
        nameAr: "بيتزا جمبري",
        description: "Premium shrimp pizza with herbs",
        descriptionAr: "بيتزا جمبري فاخرة مع الأعشاب",
        prices: { "100g": "27.00", "150g": "35.00", "200g": "43.00" },
        tags: ["Shrimp", "Premium"],
        tagsAr: ["جمبري", "فاخر"],
      },
      {
        name: "Vegetable Pizza",
        nameAr: "بيتزا خضار",
        description: "Fresh vegetable pizza with seasonal produce",
        descriptionAr: "بيتزا خضار طازجة مع المنتجات الموسمية",
        prices: { "100g": "15.00", "150g": "20.00", "200g": "25.00" },
        tags: ["Vegetable", "Seasonal"],
        tagsAr: ["خضار", "موسمي"],
      },
      {
        name: "Chicken Pizza",
        nameAr: "بيتزا دجاج",
        description: "Grilled chicken pizza with herbs",
        descriptionAr: "بيتزا دجاج مشوي مع الأعشاب",
        prices: { "100g": "17.00", "150g": "23.00", "200g": "28.00" },
        tags: ["Chicken", "Grilled"],
        tagsAr: ["دجاج", "مشوي"],
      },
      {
        name: "Meat Kofta Pizza",
        nameAr: "بيتزا كفتة لحم",
        description: "Spiced meat kofta pizza with onions",
        descriptionAr: "بيتزا كفتة لحم متبلة مع البصل",
        prices: { "100g": "19.00", "150g": "26.00", "200g": "35.00" },
        tags: ["Kofta", "Spiced"],
        tagsAr: ["كفتة", "متبل"],
      },
      {
        name: "Smoked Meat Pizza",
        nameAr: "بيتزا لحوم مدخنة",
        description: "Smoked meat pizza with rich flavors",
        descriptionAr: "بيتزا لحوم مدخنة بنكهات غنية",
        prices: { "100g": "19.00", "150g": "21.00", "200g": "25.00" },
        tags: ["Smoked", "Rich"],
        tagsAr: ["مدخن", "غني"],
      },
      {
        name: "Margherita Pizza",
        nameAr: "بيتزا مارجريتا",
        description: "Classic Margherita with fresh basil",
        descriptionAr: "مارجريتا كلاسيكية مع الريحان الطازج",
        prices: { "100g": "14.00", "150g": "20.00", "200g": "25.00" },
        tags: ["Margherita", "Basil", "Classic"],
        tagsAr: ["مارجريتا", "ريحان", "كلاسيكي"],
      },
    ],
    sandwiches: [
      {
        name: "Chicken Burger",
        nameAr: "برجر دجاج",
        description: "Grilled chicken burger with fresh vegetables and fries",
        descriptionAr: "برجر دجاج مشوي مع الخضار الطازجة والبطاطس",
        prices: { "100g": "15.00", "150g": "20.00", "200g": "25.00" },
        tags: ["Chicken", "With Fries"],
        tagsAr: ["دجاج", "مع بطاطس"],
      },
      {
        name: "Beef Burger",
        nameAr: "برجر لحم",
        description: "Juicy beef burger with fresh toppings and fries",
        descriptionAr: "برجر لحم عصاري مع الإضافات الطازجة والبطاطس",
        prices: { "100g": "18.00", "150g": "24.00", "200g": "30.00" },
        tags: ["Beef", "With Fries"],
        tagsAr: ["لحم", "مع بطاطس"],
      },
      {
        name: "Taka Sandwich",
        nameAr: "ساندوتش تاكا",
        description: "Special house sandwich with unique flavors and fries",
        descriptionAr: "ساندوتش البيت الخاص بنكهات فريدة والبطاطس",
        prices: { "100g": "16.00", "150g": "22.00", "200g": "28.00" },
        tags: ["House Special", "With Fries"],
        tagsAr: ["خاص بالبيت", "مع بطاطس"],
      },
      {
        name: "Chicken Sandwich",
        nameAr: "ساندوتش دجاج",
        description: "Fresh chicken sandwich with crisp vegetables",
        descriptionAr: "ساندوتش دجاج طازج مع الخضار المقرمشة",
        prices: { "100g": "15.00", "150g": "20.00", "200g": "25.00" },
        tags: ["Chicken", "Fresh"],
        tagsAr: ["دجاج", "طازج"],
      },
      {
        name: "Shawarma",
        nameAr: "شاورما",
        description: "Traditional Middle Eastern shawarma with fries",
        descriptionAr: "شاورما شرق أوسطية تقليدية مع البطاطس",
        prices: { "100g": "14.00", "150g": "18.00", "200g": "22.00" },
        tags: ["Traditional", "With Fries"],
        tagsAr: ["تقليدي", "مع بطاطس"],
      },
      {
        name: "Chicken Fajita",
        nameAr: "فاهيتا دجاج",
        description: "Mexican-style chicken fajita with peppers and fries",
        descriptionAr: "فاهيتا دجاج على الطريقة المكسيكية مع الفلفل والبطاطس",
        prices: { "100g": "15.00", "150g": "20.00", "200g": "25.00" },
        tags: ["Mexican", "With Fries"],
        tagsAr: ["مكسيكي", "مع بطاطس"],
      },
      {
        name: "Chicken Quesadilla",
        nameAr: "كساديا دجاج",
        description: "Grilled tortilla with chicken and cheese, served with fries",
        descriptionAr: "تورتيلا مشوية مع الدجاج والجبن، تُقدم مع البطاطس",
        prices: { "100g": "14.00", "150g": "18.00", "200g": "22.00" },
        tags: ["Mexican", "Cheese"],
        tagsAr: ["مكسيكي", "جبن"],
      },
      {
        name: "Tuna Club",
        nameAr: "كلوب تونة",
        description: "Classic tuna club sandwich with fresh ingredients",
        descriptionAr: "ساندوتش كلوب تونة كلاسيكي مع المكونات الطازجة",
        prices: { "100g": "8.00", "150g": "12.00", "200g": "15.00" },
        tags: ["Tuna", "Classic"],
        tagsAr: ["تونة", "كلاسيكي"],
      },
      {
        name: "Cheese Club",
        nameAr: "كلوب جبنة",
        description: "Melted cheese club sandwich",
        descriptionAr: "ساندوتش كلوب جبنة مذابة",
        prices: { "100g": "10.00", "150g": "14.00", "200g": "18.00" },
        tags: ["Cheese", "Vegetarian"],
        tagsAr: ["جبنة", "نباتي"],
      },
      {
        name: "Halloumi Club",
        nameAr: "كلوب حلومي",
        description: "Grilled halloumi cheese club sandwich",
        descriptionAr: "ساندوتش كلوب جبنة حلومي مشوية",
        prices: { "100g": "14.00", "150g": "18.00", "200g": "22.00" },
        tags: ["Halloumi", "Grilled"],
        tagsAr: ["حلومي", "مشوي"],
      },
    ],
  }

  const currentCategory = categories.find((cat) => cat.id === activeCategory)
  const currentItems = menuData[activeCategory] || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img src="https://i.imgur.com/IyeRPih.jpg" alt="N2 Diet Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">N2 Diet</h1>
            <p className="text-lg md:text-xl">غذي جسمك بوجباتنا الصحية المُعدة بعناية</p>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img
                src="https://i.imgur.com/zi7JDgn.jpg"
                alt="N2 Diet Logo"
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <h1 className="text-4xl font-bold" style={{ color: "#eb662b" }}>
                N2 Diet
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              غذي جسمك بوجباتنا الصحية المُعدة بعناية • مكونات طازجة ونكهات جريئة وخيارات مغذية لكل نمط حياة
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? "text-white shadow-lg transform scale-105"
                      : "text-gray-700 hover:shadow-md"
                  }`}
                  style={{
                    backgroundColor: activeCategory === category.id ? category.color : "transparent",
                    borderColor: category.color,
                    color: activeCategory === category.id ? "white" : category.color,
                  }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.nameAr}</span>
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Category Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            {currentCategory && (
              <>
                <currentCategory.icon className="w-8 h-8" style={{ color: currentCategory.color }} />
                <h2 className="text-3xl font-bold" style={{ color: currentCategory.color }}>
                  {currentCategory.nameAr}
                </h2>
                <span className="text-2xl text-gray-600">|</span>
                <h3 className="text-2xl font-bold text-gray-700">{currentCategory.name}</h3>
              </>
            )}
          </div>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: currentCategory?.color }} />
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item, itemIndex) => (
            <Card
              key={itemIndex}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 leading-tight mb-1">{item.nameAr}</h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-2">{item.name}</h4>
                  {item.prices ? (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {Object.entries(item.prices).map(([size, price]) => (
                        <span
                          key={size}
                          className="text-sm font-bold px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: currentCategory?.color,
                            color: "white",
                          }}
                        >
                          {size}: {price} ر.س
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xl font-bold" style={{ color: currentCategory?.color }}>
                      {item.price} ر.س
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">{item.descriptionAr}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {item.tagsAr?.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="text-xs border-2"
                      style={{
                        borderColor: currentCategory?.color === "#eb662b" ? "#27914c" : "#eb662b",
                        color: currentCategory?.color === "#eb662b" ? "#27914c" : "#eb662b",
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

        {/* Empty State */}
        {currentItems.length === 0 && (
          <div className="text-center py-12">
            <Coffee className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">قريباً</h3>
            <p className="text-gray-500">نعمل على إضافة أطباق لذيذة لهذا القسم</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img
                src="https://i.imgur.com/zi7JDgn.jpg"
                alt="N2 Diet Logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="text-lg font-semibold" style={{ color: "#eb662b" }}>
                N2 Diet
              </span>
            </div>
            <p className="text-gray-600 text-sm">الأكل الصحي أصبح لذيذاً • طازج • مغذي • مستدام</p>
            <div className="mt-4 text-sm text-gray-500">
              <p>📍 زورونا اليوم | 📞 اتصل للطلب | 🚚 التوصيل متاح</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
