<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::table('users')
        ->join('roles','roles.id','=','users.role_id')
        ->select('users.id','users.name as username','users.email','users.phone','users.created_at','users.image_src','roles.name')
        ->get();
        //return User::all();
    }

    

    public function update($id)
    {
        $user = User::find($id);
        return $user;
    }

    public function uploadImage(Request $request){
        $file =$request->file('file');
        $uploadPath = 'public/image';
        $originalImage = $file->getClientOriginalName();
        $file->move($uploadPath,$originalImage);
        $userData = json_decode($request->data,true);
        $userData['img_src'] = $originalImage;

        $user = new User();
        $user->name= $userData['name'];
        $user->email= $userData['email'];
        $user->password= bcrypt($userData['password']);
        $user->phone= $userData['phone'];
        $user->role_id= $userData['role'];
        $user->adress= $userData['adress'];
        $user->image_src= $userData['img_src'];
        $user->save();
        return $user;

    }

    public function updateUser(Request $request){
        

        if($request->file('file')!=""){
            $file =$request->file('file');
            $uploadPath = 'public/image';
            $originalImage = $file->getClientOriginalName();
            $file->move($uploadPath,$originalImage);
            $userData = json_decode($request->data,true);
            $userData['image_src'] = $originalImage;
        }else{
            $userData['image_src']='noImage.png';
            dd($userData['image_src']);
        }
        $user = User::find($userData['id']);
        $user->name= $userData['name'];
        $user->email= $userData['email'];
        $user->phone= $userData['phone'];
        $user->role_id= $userData['role_id'];
        $user->adress= $userData['adress'];
        $user->image_src= $userData['image_src'];
        $user->save();
        return $user;
    }

    public function deleteUser(Request $request)
    {
        $user = User::find($request->id);
        $user->delete();
        return $user;
    }

    public function userCount()
    {
        return User::all()->count();
        //return User::all();
    }
}
