# Number Classification API

A public API that classifies numbers based on mathematical properties and retrieves a fun fact.

## 🌟 Features
✅ Prime number detection  
✅ Perfect number detection  
✅ Armstrong number detection  
✅ Odd/Even classification  
✅ Digit sum calculation  
✅ Fun fact retrieval from Numbers API  

---

## 🚀 API Documentation
### **📌 Base URL**
```plaintext
https://hng12-stage1-2tfo.onrender.com
```

### **📌 Endpoint**
| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/classify-number?number=371` | Classifies a number |

### **📌 Response Example (200 OK)**
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### **📌 Error Response (400 Bad Request)**
```json
{
    "number": "abc",
    "error": true
}
```

---

## ⚙️ **Setup Instructions**
1. Clone the repository:
   ```bash
   git clone https://github.com/Ceeylla-Favv/HNG12_stage1.git
   cd HNG12_stage1
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

---

## 🚀 **Deployment**
1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
2. Deploy on **Render**
3. Get your public URL

---

## 🔗 **Resources**
- [Fun Fact API](http://numbersapi.com/#42)  
- [Parity in Mathematics](https://en.wikipedia.org/wiki/Parity_(mathematics))  
- [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)  

---



