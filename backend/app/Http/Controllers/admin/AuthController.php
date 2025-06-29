<?php

namespace App\Http\Controllers\admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function authenticate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json(
                [
                    'status' => '400',
                    'errors' => $validator->errors()
                ],
                400
            );
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {

            $user = User::find(Auth::user()->id);

            if ($user->role == 'admin') {
                $token = $user->createToken('token')->plainTextToken;

                return response()->json(
                    [
                        'status' => '200',
                        'token' => $token,
                        'id' => $user->id,
                        'name' => $user->name
                    ],
                    200
                );
            } else {
                return response()->json([
                    'status' => '401',
                    'message' => 'This user is not authorized As admin.'
                ], 401);
            }
        } else {
            return response()->json(
                [
                    'status' => '401',
                    'message' => 'This email or password is incorrect.'
                ],
                401
            );
        }
    }
}
