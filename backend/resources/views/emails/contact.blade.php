<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Portfolio Contact</title>
</head>

<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">

    <h2>New Portfolio Contact Message</h2>

    <p>
        You received a new message through your portfolio website.
    </p>

    <hr>

    <p>
        <strong>Name:</strong>
        {{ $name }}
    </p>

    <p>
        <strong>Email:</strong>
        {{ $email }}
    </p>

    <p>
        <strong>Subject:</strong>
        {{ $contactSubject }}
    </p>

    <p>
        <strong>Message:</strong>
    </p>

    <p>
        {!! nl2br(e($contactMessage)) !!}
    </p>

</body>
</html>