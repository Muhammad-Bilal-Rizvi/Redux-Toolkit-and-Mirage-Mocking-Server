// import React from 'react';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch("/api/books")
        .then(res => res.json())
        .then(data => {
          setBooks(data);
        })
    }, 2000)
  }, [])

  const addBook = () => {
    const title = prompt("Enter Book Title");
    const author = prompt("Enter Book Author");

    if (!title || !author)
      return false;

    fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({ title, author })
    })
      .catch((error) => {
        console.log("Error", error)
      })
  }
  if (!books.length)
    return <h2>Loading..!</h2>

  return (
    <div className="App">
      <h2>Hello World </h2>
      <h2>Available Books</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((bookObj, ind) => {
            return (<tr key={ind}>
              <td> {bookObj.title} </td>
              <td>{bookObj.author}</td>
            </tr>)
          })}
        </tbody>
      </table>

      <button onClick={addBook}>Add Book</button>
    </div>
  );
}

export default App;

////////////////////////////////////////////////////////////////////////

//    Develop a React Component with Mirage Document Link
//    https://miragejs.com/quickstarts/react/develop-a-component/
//    Commands to Install Mirage
//  	npx create-react-app session_25u
//  	cd session_25u
//  	npm install --save-dev miragejs
//  	yarn add --dev miragejs

