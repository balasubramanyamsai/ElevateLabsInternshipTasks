## Task 3: Create a REST API to Manage a List of Books Using Node.js and Express.


## 🚀 What This API Can Do
- **GET /books** → Get all books
- **POST /books** → Add a new book
- **PUT /books/:id** → Update an existing book
- **DELETE /books/:id** → Delete a book

# 📚 Books API (Node.js + Express)

A simple REST API to manage a list of books using **Node.js** and **Express**.  
Data is stored in memory (no database) — perfect for learning CRUD operations.

---

## 🛠 How to Install and Run (Easy Guide)

1. **Get the project on your computer**
   - If you know Git:
     ```bash
     git clone https://github.com/yourusername/books-api.git
     cd books-api
     ```
   - If you don’t know Git:  
     Go to the GitHub page → click the green **Code** button → **Download ZIP** → unzip it → open the folder.

2. **Install Node.js**
   - Go to [nodejs.org](https://nodejs.org/) and download the **LTS version** (the one they recommend).
   - Install it by following the setup wizard (just click "Next" a few times).

3. **Open the project folder in Terminal**
   - Right-click inside the folder → choose **"Open in Terminal"**  
     *(or open VS Code → View → Terminal)*

4. **Set up project files**
   - If your folder already has a `package.json` file → skip to step 5.  
   - If not, run these commands:
     ```bash
     npm init -y
     npm install express
     ```
     This will create a `package.json` that lists Express as a dependency.

5. **Start the server**
   - Run:
     ```bash
     node server.js
     ```
   - If everything works, you’ll see:
     ```
     Server running on port 3000
     ```

6. **Test the API**
   - Open [Postman](https://www.postman.com/).
   - Try:
     - **GET** → `http://localhost:3000/books` (see all books)
     - **POST** → `http://localhost:3000/books` with JSON body:
       ```json
       { "title": "Dune", "author": "Frank Herbert" }
       ```
     - **PUT** → `http://localhost:3000/books/1` (update the book with ID 1)
     - **DELETE** → `http://localhost:3000/books/1` (delete the book with ID 1)

7. **Done! 🎉**
   - You’ve got a working REST API running locally.
