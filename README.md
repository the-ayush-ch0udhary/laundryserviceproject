# Laundry Service Booking Website

## Project Overview

This project is a simple laundry service booking website created as part of Assignment-4.
The website allows users to view available laundry services, add services to a cart, and book them by submitting their contact details.

The booking information is sent through EmailJS so that the service provider receives the order details.

The website is built using basic web technologies: **HTML, CSS, and JavaScript**.


## Features

* View different laundry services
* Add services to a cart
* Remove services from the cart
* Booking the services
* Email confirmation using EmailJS
* Newsletter Subscription
* Responsive design for mobile screens


## Technologies Used

* **HTML** – structure of the website
* **CSS** – styling and responsive layout
* **JavaScript** – cart logic, validation, and form handling
* **EmailJS** – sending booking details through email
* **Netlify** – website deployment


## How the Cart Works

When a user clicks **Add Item**, the selected service name and price are stored inside a JavaScript array called `cart`.

Example:

```
var cart = [];
```

Each item is stored as an object:

```
{
  name: "Dry Cleaning",
  price: 200
}
```

The `updateCart()` function rebuilds the cart table and calculates the total price.

Users can remove items using the **Remove** button which deletes the item from the array and updates the cart again.


## Form Validation

Before booking the service, the form checks:

* Name field should not be empty
* Email must follow a valid email format
* Phone number must contain **10 digits**

If any field is incorrect, an error message will be shown.

## EmailJS Setup

The project uses EmailJS to send booking information.

Steps to configure:

1. Create an account on **EmailJS**
2. Create a new email service
3. Create an email template
4. Copy the following keys:

* Public Key
* Service ID
* Template ID

These values are stored as **environment variables in Netlify**.

Example:

PUBLIC_KEY=your_public_key
SERVICE_ID=your_service_id
TEMPLATE_ID=your_template_id


## Deployment

The project is deployed using **Netlify**.

Steps:

1. Push the project to GitHub
2. Open Netlify
3. Click **Add new site → Import from Git**
4. Select the repository
5. Deploy the site

Netlify automatically generates a live website link.

Netlify Deployment Link: `https://laundryserviceproject.netlify.app/`

Github Repository Link: `https://github.com/the-ayush-ch0udhary/laundryserviceproject`
