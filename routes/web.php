<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('web.index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/controll', 'HomeController@controll')->name('controll');
Route::get('/suhu', 'SuhuController@indexSuhu')->name('suhu');
Route::get('/lampu', 'LampuController@indexLampu')->name('lampu');
