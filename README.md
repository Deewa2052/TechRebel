# Portfolio Website

This repository contains the source code for my personal portfolio
website. It showcases my work, projects, skills, and provides a way to
get in touch with me. Built using HTML, CSS, JavaScript, and PHP, the
website features a clean, responsive design optimized for mobile and
desktop devices.

# Features

-   Responsive design with a modern look.

-   Includes a home page with dynamic blobs and images.

-   Sections for About Me, Projects, and Contact.

-   Functional contact form with email integration using PHP.

-   Cross-browser compatible.

-   Animated elements using CSS.

-   Footer with useful links and social media icons.

# Technologies Used

-   **HTML5**: Structuring content.

-   **CSS3**: Styling and responsiveness with Flexbox and Grid.

-   **JavaScript (jQuery)**: Form validation and dynamic content
    loading.

-   **PHP**: Handling contact form submissions.

-   **Bootstrap**: For responsive design and layout.

-   **Font Awesome**: For icons and social media links.

-   **SVG Blob Animation**: For interactive animations on the home page.

# Getting Started

## Prerequisites

 A modern web browser.

 A server that supports PHP to run the contact form (e.g., Apache or
Nginx).

 Basic understanding of HTML, CSS, and JavaScript for customization.

## Installation

1.  Clone the Repository

-   git clone <https://github.com/yourusername/portfolio.git>

2.  Navigate to the Project Folder

-   cd portfolio

3.  Open the index.html File

You can simply open the index.html file in your browser to view the
portfolio. If you want to run the contact form, ensure that you\'re
running it on a server that supports PHP.

# Structure

.

**├── assets**

**│ ├── css**

**│ │ └── styles.css \# Main stylesheet**

**│ ├── js**

**│ │ └── main.js \# Main JavaScript functionality**

**│ ├── img**

**│ │ └── image.png \# Images used in the website**

**│ └── mail**

**│ └── contact_me.php \# PHP script for handling contact form**

**├── index.html \# Main homepage**

**└── README.md \# Documentation**

# Customizing

## Changing the Profile Image

The blob animation uses an image (image.png) for display. You can
replace the current image by replacing the file located in:

-   assets/img/image.png

Note: Make sure the new image has similar dimensions for the best
results.

## Adjusting the Blob Animation

You can modify the positioning and behavior of the blob animation in the
CSS file (styles.css):

-   .home\_\_img {

position: absolute;

right: 30px;

bottom: 0;

width: 260px;

transform: translateX(20px); /\* Adjust this for horizontal alignment
\*/

}

# **Contact Form**

The contact form is handled via PHP. The form collects the user\'s name,
email, phone, and message, and sends this information to your email.

## PHP Email Handling:

The PHP script (contact_me.php) is located in the assets/mail/ folder.
Edit the following lines to configure it with your own email address:

-   \$to = \"your-email@example.com\"; // Replace with your email
    address

Ensure you are using an email provider that supports PHP\'s mail()
function or use an external email API if needed.

## JavaScript Form Validation

Form validation is handled via jQuery. To adjust the validation, edit
the main.js file located in assets/js/.

# Contact Form

## Setup

To get the contact form working:

-   Ensure your server supports PHP.

-   Update the email address in the contact_me.php file as shown above.

-   Make sure that the PHP mail() function is enabled on your server, or
    configure an external mail service if needed.

## Example Form Code

-   \<form id=\"contactForm\" name=\"sentMessage\" novalidate\>

\<div class=\"control-group\"\>

\<input type=\"text\" id=\"name\" placeholder=\"Your Name\" required /\>

\</div\>

\<div class=\"control-group\"\>

\<input type=\"email\" id=\"email\" placeholder=\"Your Email\" required
/\>

\</div\>

\<div class=\"control-group\"\>

\<input type=\"tel\" id=\"phone\" placeholder=\"Your Phone Number\"
required /\>

\</div\>

\<div class=\"control-group\"\>

\<textarea id=\"message\" placeholder=\"Your Message\"
required\>\</textarea\>

\</div\>

\<div\>

\<button id=\"sendMessageButton\" type=\"submit\"\>Send
Message\</button\>

\</div\>

\</form\>

# Contributing

If you\'d like to contribute to this project:

-   Fork the repository.

-   Create a new branch.

-   Make your changes.

-   Submit a pull request.

Any contribution is appreciated, from reporting bugs to suggesting
features or enhancements.
