<?php

namespace App\Http\Controllers;

use App\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Client::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //return $request;
        $client = new Client();
        $client->name = $request->nom;
        $client->email = $request->email;
        $client->phone = $request->phone;
        $client->photo = 'noImage.jpg';
        $client->country = $request->country;
        $client->city = $request->city;
        $client->save();
        return $client;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\client  $client
     * @return \Illuminate\Http\Response
     */
    public function update($id)
    {
        $client = Client::find($id);
        return $client;
    }

    public function updateClient(Request $request)
    {
        $client = Client::find($request->id);
        $client->name = $request->name;
        $client->email = $request->email;
        $client->phone = $request->phone;
        $client->photo = 'noImage.jpg';
        $client->country = $request->country;
        $client->city = $request->city;
        $client->save();
        return $client;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\client $client
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $client = Client::find($id);
        $client->delete();
        return $client;
    }

    public function uploadImage(Request $request){
        dd($request);
    }

    public function deleteClient(Request $request)
    {
        $client = Client::find($request->id);
        $client->delete();
        return $client;
    }

    public function clientCount()
    {
        return Client::all()->count();
        //return User::all();
    }
}
