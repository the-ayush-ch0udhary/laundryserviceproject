var cart = [];
var total = 0;


emailjs.init(PUBLIC_KEY);


// scroll to services section when hero button is clicked
document.getElementById("BookButton").onclick = function () {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
};



// adding items to cart
var buttons = document.querySelectorAll(".service button");

for (var i = 0; i < buttons.length; i++) {

    buttons[i].onclick = function () {

        var name = this.dataset.name;
        var price = Number(this.dataset.price);

        // push item into cart
        cart.push({
            name: name,
            price: price
        });

        updateCart();
    };
}



// This is the function to updte the cart
function updateCart() {

    var body = document.getElementById("cartBody");

    body.innerHTML = "";

    total = 0;

    for (var i = 0; i < cart.length; i++) {

        var row = document.createElement("tr");

        var c1 = document.createElement("td");
        c1.innerText = i + 1;

        var c2 = document.createElement("td");
        c2.innerText = cart[i].name;

        var c3 = document.createElement("td");
        c3.innerText = "₹" + cart[i].price;

        var c4 = document.createElement("td");

        var remove = document.createElement("button");
        remove.innerText = "Remove";

        remove.onclick = (function (index) {
            return function () {
                removeItem(index);
            };
        })(i);

        c4.appendChild(remove);

        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);

        body.appendChild(row);

        total = total + cart[i].price;
    }

    document.getElementById("totalAmount").innerText = total;
}



// removing items from the cart
function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}




// Booking the services
document.getElementById("book").onclick = function () {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var emailPattern = /\S+@\S+\.\S+/;
    var phonePattern = /^[0-9]{10}$/;

    if (name == "" || email == "" || phone == "") {
        document.getElementById("status").innerText = "Please fill all fields";
        return;
    }

    if (!emailPattern.test(email)) {
        document.getElementById("status").innerText = "Enter valid email";
        return;
    }

    if (!phonePattern.test(phone)) {
        document.getElementById("status").innerText = "Phone must be 10 digits";
        return;
    }

    // sending email using EmailJS
    emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            name: name,
            email: email,
            phone: phone,
            total: total
        }
    ).then(function () {

        document.getElementById("status").innerText =
            "Booking successful! We will contact you soon.";

        cart = [];

        updateCart();
    });
};




// Subscribing in Newsletter
document.getElementById("sButton").onclick = function () {

    var name = document.getElementById("sName").value;
    var email = document.getElementById("sEmail").value;

    if (name == "" || email == "") {
        document.getElementById("message").innerText = "Enter name and email";
        return;
    }

    document.getElementById("message").innerText = "Subscribed successfully";

};