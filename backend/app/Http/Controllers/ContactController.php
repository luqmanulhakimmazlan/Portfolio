<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{

    public function store(Request $request)
    {
        $data = $request->validate([
        'name' => 'required|string|max:100',
        'email' => 'required|email',
        'subject' => 'required|string|max:150',
        'message' => 'required|string|max:2000',
]);

Contact::create($data);

return response()->json(['message' => 'Message sent successfully!',
'data' => $data], 201);
    }

}
