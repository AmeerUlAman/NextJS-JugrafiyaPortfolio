<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "ameerulaman3@gmail.com"; 
    $subject = "New Contact Form Submission";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    $email_body = "You have received a new message from the user $name.\n\n";
    $email_body .= "Here is the message:\n$message";

    if (mail($to, $subject, $email_body, $headers)) {
        echo "Thank you for contacting us!";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
