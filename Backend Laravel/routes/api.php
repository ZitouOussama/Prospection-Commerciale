<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('login', 'ApiController@login');
Route::post('register', 'ApiController@register');
Route::post('resetPassword', 'ResetPassword@sendEmail');
Route::post('changePassword', 'changePasswordController@process');
Route::post('delclient', 'ClientController@deleteClient');
Route::post('upclient', 'ClientController@updateClient');
Route::resource('/client', 'ClientController');
Route::resource('/role', 'RoleController');
Route::post('uploadImage', 'UserController@uploadImage');
Route::post('upuser', 'UserController@updateUser');
Route::resource('/user', 'UserController');
Route::post('deleteuser', 'UserController@deleteUser');
Route::get('usercount', 'UserController@userCount');
Route::get('clientcount', 'ClientController@clientCount');

Route::group(['middleware' => 'auth.jwt'], function () {
    Route::get('logout', 'ApiController@logout');
});