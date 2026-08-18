<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessageMail;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:150',
            'message' => 'required|string|max:2000',
        ]);

        Contact::create($data);

        Mail::to('luqmanulhakimmazlan@gmail.com')
            ->send(
                new ContactMessageMail(
                    name: $data['name'],
                    email: $data['email'],
                    contactSubject: $data['subject'],
                    contactMessage: $data['message'],
                )
            );

        return response()->json([
            'message' => 'Message sent successfully!',
        ], 201);
    }
}