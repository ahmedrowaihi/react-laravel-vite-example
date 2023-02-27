<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/




// catch api requests and redirect to the api route
Route::any('/api/{any}', function () {
    return redirect('/api');
})->where('any', '.*');


// catch all other requests and redirect to the home route
Route::any('/{any}', function () {
    return File::get(public_path() . '/index.html');
})->where('any', '.*');

