/*
-------------------------------------------------------------------------------------------------------------------------
Handlebars section
-------------------------------------------------------------------------------------------------------------------------
*/

const data = {
  person: [
    {
      title: "Smart Book",
      description:
        "We are enthusiastic about learning, and what's a better way of doing it than reading? Perferc for anyone who's a keen reader!",
      image: "../images/book.jpg",
      price: 11.95,
    },
    {
      title: "Coffee Grinder",
      description:
        "Let your coffee always be freshly grinded precisely to your taste!",
      image: "../images/grinder.jpg",
      price: 49.95,
    },
    {
      title: "Cosy Mug",
      description:
        "Non-discriminating mug. It will be happy with whatever you pour into it - be it coffee or tea or anything else you fancy!",
      image: "../images/mug.jpg",
      price: 7.45,
    },
    {
      title: "Warm Hoodie",
      description:
        "Have you ever be cold in those dreary Irish autumn evening? No need to worry about it anymore, this hoodie will get you covered!",
      image: "../images/hoodie.jpg",
      price: 25.95,
    },
    {
      title: "Rubick's Cube",
      description:
        "For the ones who likes a good mental challenege and cracking puzzles!",
      image: "../images/rubick.jpg",
      price: 14.45,
    },
    {
      title: "Fancy T-Shirt",
      description:
        "You will never have to worry about being unstilish with this on. Suitable for all lifes occasions (ok, almost all...)!",
      image: "../images/tshirt.jpg",
      price: 19.95,
    },
  ],
};

const container = document.getElementById("entry-template").innerHTML;
const template = Handlebars.compile(container);

const htmlContent = template(data);

document.getElementById("products-content").innerHTML = htmlContent;
