<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePasswordRequest;
use App\User;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;

class changePasswordController extends Controller
{
    public function process(ChangePasswordRequest $request){
        
        return $this->getPasswordReset($request)->count() > 0 ? $this->changePassword($request) : $this->tokenNotFound();
       //return $request->resetToken;
    }

    public function getPasswordReset($request){
        return DB::table('passwordresets')->where(['email' => $request->email, 'token' => $request->resetToken]);
    }

    public function tokenNotFound(){
        return response()->json(['error' => 'Token or Email is incorrect'],
        Response::HTTP_UNPROCESSABLE_ENTITY);
    }
    

    public function changePassword($request){
        $user = User::where('email',$request->email)->first();
        $user->password = bcrypt($request->password);
        $user->save();
        $this->getPasswordReset($request)->delete();
        return response()->json(['data' => 'Password updated successfully'], Response::HTTP_CREATED);
    }
}
