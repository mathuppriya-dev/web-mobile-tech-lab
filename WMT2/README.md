# 🌐 HTML & CSS Enhancement Lab

<h3 align="center">✨ Modern UI • Clean Code • Professional Styling ✨</h3>
---

## 🎬 Project Preview (Animated)- Add soon now lets skip(for my understanding,its better to add :) )

<p align="center">
  <img src="images/demo.gif" alt="Project Demo" width="700"/>
</p>
---
## 🌓 Dark / Light Mode Preview

| ☀️ Light Mode         | 🌙 Dark Mode         |
| --------------------- | -------------------- |
| ![](images/light.png) | ![](images/dark.png) |

> 💡 You can simulate dark mode using browser dev tools or custom CSS

---

## 🚀 Project Overview
This project demonstrates how to enhance a web page using **HTML & CSS** with proper structure and best practices.

It includes:

* 🎨 Styling with Inline, Embedded, and External CSS
* 🧭 Navigation bar using lists
* 📊 Table enhancement with CSS
* 🧩 Clean layout and design principles

---

## 🏷️ Badges

![HTML](https://img.shields.io/badge/HTML-5-orange?style=for-the-badge\&logo=html5)
![CSS](https://img.shields.io/badge/CSS-3-blue?style=for-the-badge\&logo=css3)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-Beginner_to_Intermediate-yellow?style=for-the-badge)

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── images/
│   └── travel2.jpg
└── README.md
```

## 🧠 Learning Objectives

* Understand **3 types of CSS**
* Build a **navigation bar using lists** (horizontal menu)
* Apply **external CSS for styling**
* Enhance **tables and layouts**
* Learn **best practices in web design**
* Form grouping using fieldset
---

## 🏗️ Technologies Used

* HTML5
* CSS3

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── images/
│   └── travel2.jpg
└── README.md
```

---

## 🎨 Types of CSS

### 1️⃣ Inline CSS

* Applied directly inside HTML tags
* Affects only one element
* Not recommended for large projects

```html
<h1 style="color: darkblue; text-align: center;">Travel Adventures</h1>
```

---

### 2️⃣ Embedded CSS

* Written inside `<style>` tag in `<head>`
* Styles one HTML page

```html
<style>
  h1 {
    color: blue;
  }
</style>
```

---

### 3️⃣ External CSS ✅ (Best Practice)

* Written in a separate `.css` file
* Reusable and clean

```html
<link rel="stylesheet" href="style.css">
```

---

## 🧭 Navigation Bar (Using Lists)

### HTML

```html
<ul class="nav">
  <li><a href="#">Home</a></li>
  <li><a href="#">Destinations</a></li>
  <li><a href="#">Contact</a></li>
</ul>
```

### CSS

```css
ul.nav {
  list-style-type: none;
  background-color: #2c3e50;
  padding: 10px;
  margin: 0;
}

ul.nav li {
  display: inline;
  margin-right: 20px;
}

ul.nav li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
```

---

## 📊 Table Enhancement (External CSS)

### HTML

```html
<table class="trip-table">
  <tr class="header-row">
    <th>Destination</th>
    <th>Price</th>
  </tr>
  <tr class="data-row">
    <td>Bali</td>
    <td>$500</td>
  </tr>
</table>
```

### CSS

```css
.trip-table {
  width: 80%;
  border-collapse: collapse;
  margin: 20px auto;
  text-align: left;
}

.trip-table th,
.trip-table td {
  border: 1px solid #333;
  padding: 10px;
}

.header-row {
  background-color: #4CAF50;
  color: white;
}

.data-row {
  background-color: #f2f2f2;
}
```

---

## 🧩 Key Concepts

| Concept                 | Explanation           |
| ----------------------- | --------------------- |
| `margin`                | Space outside element |
| `padding`               | Space inside element  |
| `class`                 | Reusable styling      |
| `id`                    | Unique element        |
| `display: inline`       | Horizontal layout     |
| `list-style-type: none` | Removes bullets       |
| `border-collapse`       | Clean table borders   |

---

## 📝 Forms (Fieldset & Legend)

```html
<fieldset>
  <legend>Personal Info</legend>
  <input type="text" placeholder="Name">
</fieldset>
```

✔ Groups related inputs
✔ Improves readability

---

## ⚠️ Common Errors

| Problem            | Fix                          |
| ------------------ | ---------------------------- |
| Image not showing  | Check file path              |
| CSS not working    | Check `<link>`               |
| Nav still vertical | Add `display: inline;`       |
| Bullets visible    | Add `list-style-type: none;` |

---


## 💡 Why Use Lists for Navigation?

* Navigation is a group of links
* `<ul>` gives proper structure
* CSS converts it into a horizontal menu

---

## ⭐ Best Practices

* Use **external CSS** for large projects
* Keep HTML **clean and readable**
* Use **meaningful class names**
* Avoid inline CSS in real projects

---

## 📌 Conclusion

This project provides a strong foundation in:

* HTML structure
* CSS styling techniques
* Clean and maintainable web design

---
## 🌐 Live Demo - Add soon now lets skip it (for my understanding,its better to add :) )

👉 [https://your-live-link.com](https://your-live-link.com)

---

## 📊 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=mathuppriya-dev&show_icons=true&theme=tokyonight"/>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=mathuppriya-dev&theme=tokyonight"/>
</p>

---

## 👩‍💻 Author

**Mathuppriya Naguleswaran**
🎓 Software Engineering Undergraduate

---

## 🌟 Final Note

> “Good UI is not about decoration — it's about clarity and structure.”

---

















