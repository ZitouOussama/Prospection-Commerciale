<?php

namespace App\Http\Controllers;

use App\Mail\ResetPasswordMail;
use Illuminate\Http\Request;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;
class ResetPassword extends Controller
{
    public function sendEmail(Request $request){
        if(!$this->validateEmail($request->email)){
            return $this->failedResponse();
        }
        $this->send($request->email);
        return $this->successResponse();
    }

    public function send($email){
        $token = $this->createToken($email);
        Mail::to('ouss.ebay@gmail.com')->send(new ResetPasswordMail($token));
    }

    public function createToken($email){
        $oldtoken= DB::table('passwordresets')->where('email',$email)->first();
        if($oldtoken){return $oldtoken;}
        $token = str::random(60);
        $this->saveToken($token,$email);
        return $token;
    }

    public function saveToken($token,$email){
        DB::table('passwordresets')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);
    }

    public function validateEmail($email){

        return !!User::where('email',$email)->first();
    }

    public function failedResponse(){
        return response()->json([
            'error' => 'Email doesn\'t found on our website'
        ],Response::HTTP_NOT_FOUND);
    }

    public function successResponse(){
        return response()->json([
            'data' => 'Reset email sent successfuly, please check yout inbox'
        ],Response::HTTP_OK);
    }
}
