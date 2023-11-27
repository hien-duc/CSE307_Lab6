let books = [
  {
    id: "1",
    title: "The Alchemist",
    image:
      "http://freepdfbook.com/wp-content/uploads/2021/05/0ebe9efa94145d429dd90c6243ed2f82.jpeg",
    price: 200000,
    quantity: 20,
  },

  {
    id: "2",
    title: "Learning How to learn",
    image:
      "https://curatella.com/wp-content/uploads/2020/09/learning-how-to-learn-book-cover-scaled.jpg",
    price: 251100,
    quantity: 10,
  },
  {
    id: "3",
    title: "Thinking, Fast Slow",
    image:
      "http://static1.businessinsider.com/image/541748b0eab8eade098fda39-1200/thinking-fast-and-slow-2011.jpg",
    price: 299700,
    quantity: 7,
  },
];

function Sort() {
  document.getElementById("result").innerHTML = "";
  let sortedByTiltle = books.sort((a, b) =>
    a.tiltle.toLocaleLowerCase() < b.tiltle.toLocaleLowerCase() ? -1 : 1
  );
}

function addBookAtEnd(id, title, image, price, quantity) {
  let id = books.length + 1;
  let tiltle = document.getElementById("tiltleInput").value;
  let image = document.getElementById("imgInput").value;
  let price = parseFloat(document.getElementById("priceInput").value);
  let quantity = parseInt(document.getElementById("quantityInput").value);
  let newBook = {
    id,
    title,
    image,
    price,
    quantity,
  };
  books.push(newBook);
  console.log(`New book added successfully.`);
  Show(books);
}
function addBookAtBeginning(id, title, image, price, quantity) {
  let id = books.length + 1;
  let tiltle = document.getElementById("tiltleInput").value;
  let image = document.getElementById("imgInput").value;
  let price = parseFloat(document.getElementById("priceInput").value);
  let quantity = parseInt(document.getElementById("quantityInput").value);
  let newBook = {
    id,
    title,
    image,
    price,
    quantity,
  };
  books.unshift(newBook);
  console.log(`New book added at the beginning successfully.`);
  Show(books);
}

function Show(book) {
  document.getElementById("result").innerHTML = "";
  for (i = 0; i < book.length; i++) {
    document.getElementById("result").innerHTML += `<div style='flex:30%'>
                        <p>ID: ${book[i].id}</p>
                        <p id='title'>${book[i].title}</p>
                        <img id='img' width=100
                            src='${book[i].image}' />
                        <p id='price'>
                            ${book[i].price} VND
                        </p>
                        <p id='price'>
                            ${book[i].quantity}
                        </p>
                    </div>`;
  }
}

function Search() {
  let name = document.getElementById("search").value;
  let result = "";

  for (i = 0; i < books.length; i++) {
    if (books[i].title.includes(name)) {
      result += ` <div style='flex:30%'>
                        <p id='title'>${books[i].title}</p>
                        <img id='img' width=100
                            src='${books[i].image}' />
                        <p id='price'>
                            ${books[i].price} VND
                        </p>
                    </div>`;
    }
  }
  document.getElementById("result").innerHTML = result;
}

function Delete() {
  let id = document.getElementById("remove").value;
  for (let i = 0; i < device.length; i++) {
    if (books[i].id === id) {
      books.splice(i, 1);
      Show(books);
    }
  }
}
