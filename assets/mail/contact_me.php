<?php
// Enable error reporting for debugging (remove or comment out in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check for empty fields and validate input
$errors = [];
if (empty($_POST['name'])) {
    $errors[] = "Name is required.";
}
if (empty($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Valid email is required.";
}
if (empty($_POST['phone'])) {
    $errors[] = "Phone number is required.";
}
if (empty($_POST['message'])) {
    $errors[] = "Message cannot be empty.";
}

// If there are errors, return them as a JSON response
if (!empty($errors)) {
    http_response_code(400); // Bad Request
    echo json_encode(["status" => "error", "messages" => $errors]);
    exit();
}

// Sanitize user inputs
$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = getenv('CONTACT_EMAIL') ?: 'your-email@example.com'; // Use environment variable or fallback
$subject = "Website Contact Form: $name";
$body = "You have received a new message from your website contact form.\n\n" .
        "Here are the details:\n\n" .
        "Name: $name\n\n" .
        "Email: $email\n\n" .
        "Phone: $phone\n\n" .
        "Message:\n$message";

$headers = [
    'From' => 'noreply@yourdomain.com', // Change this to a valid email address
    'Reply-To' => $email,
];

// Send the email using mail() function
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200); // OK
    echo json_encode(["status" => "success", "message" => "Message sent!"]);
} else {
    http_response_code(500); // Internal Server Error
    echo json_encode(["status" => "error", "message" => "Failed to send message."]);
}
?>