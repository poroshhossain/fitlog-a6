# 💪 FitLog — Workout Library

A modern and responsive workout library web application built with Next.js. FitLog helps users explore workouts, add exercises to today's plan, save workouts for later, and manage their workout plan from a single dashboard.

## 🌐 Live Demo

[Live Link](https://fitlog-a6.vercel.app/)

## 📦 GitHub Repository

[GitHub Repository](https://github.com/poroshhossain/fitlog-a6)

---

## ✨ Features

- 🏋️ **Workout Library** — Browse workouts with categories, equipment, duration, calories, and ratings.
- 📋 **Today's Plan** — Add workouts to today's plan and manage planned exercises.
- 💾 **Save for Later** — Save favorite workouts and access them from the Saved tab.
- 📊 **Live Plan Statistics** — Track total exercises, workout minutes, and calories dynamically.
- 🔍 **Workout Details** — View complete workout information, specifications, and instructions.
- 🔃 **Workout Sorting** — Sort workouts by duration, calories, or rating.
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop devices.
- 🔔 **Toast Notifications** — Get instant feedback when adding, saving, completing, or removing workouts.
- ❌ **Custom 404 Page** — Handles invalid or unknown routes gracefully.

---

## 🛠️ Technologies Used

- **Next.js** — React framework and application routing
- **TypeScript / JavaScript** — Application logic and type safety
- **Tailwind CSS** — Utility-first styling and responsive design
- **DaisyUI** — UI components and styling utilities
- **shadcn/ui** — Reusable UI components
- **React Context API** — Global workout plan and saved workout state
- **React Icons** — Icons throughout the application
- **React Toastify** — Toast notifications
- **Google Fonts** — Custom typography

---

## 📌 Main Pages

### 🏠 Home

The home page contains:

- Responsive navigation bar
- Hero/banner section
- Workout library
- Workout cards
- Loading state
- Responsive layout

### 🏋️ Workout Details

Each workout has a dedicated details page containing:

- Workout image
- Workout title and description
- Category tags
- Equipment
- Difficulty
- Sets and reps
- Duration
- Calories
- Rating
- Step-by-step instructions
- Add to Today's Plan button
- Save for Later button

### 📋 My Plan

The My Plan page allows users to manage their workouts.

It includes:

- Today's Plan
- Saved workouts
- Exercise count
- Total workout minutes
- Total calories
- Mark as Done functionality
- Remove workout functionality
- View Details button
- Loading state

---

## 📱 Responsive Design

FitLog is fully responsive and works across:

- 📱 Mobile devices
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktop screens

The workout grid, navigation, hero section, cards, and My Plan page adapt to different screen sizes.

---

## 🗂️ Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── my-plan/
│   │   └── page.tsx
│   ├── workout/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── layout.tsx
│
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Library/
│   ├── WorkoutCard/
│   ├── WorkoutDetails/
│   ├── MyPlan/
│   └── Footer/
│
├── context/
│   └── WorkoutContext.tsx
│
├── types/
│   └── workout.ts
│
└── lib/
    └── utils.ts