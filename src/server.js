import { Server } from "miragejs"
import books from './json/books.json';

export function makeServer() {
  let server = new Server({

    routes() {
      this.namespace = "api"
      this.get("/books", () => {
        return books;
      })
      this.post("/add", (schema, req) => {
        const newBook = JSON.parse(req.requestBody);
        books.push(newBook)
        // push k bad updated vali book ki array lagao its task do urself...
      })
    },
  })

  return server
}

// {baseURL}/api/users/add
// OR
// {baseURL}/users/add
// we have four methods on server side
// this.get("/getTodos") => when ever we need to fetch the data we use get() method
// this.post() ===========> when ever we need to create the data or add the data we use post() method
// this.put()===> when ever we need to update the data what we have create it or add it we use put() method
// this.delete()=> when ever we need to delete the data we use delete() method

