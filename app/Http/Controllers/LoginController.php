<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return response(Auth::user(), 200);
            // $token = Auth::user()->createToken('login');

            // return response()->json(['token' => $token->plainTextToken], 200);
        }

        return response()->json([
            "message" => 'Error with login'
        ], 401);
    }

    public function logout()
    {
        Auth::logout();
        return response(null, 200);
    }
}
