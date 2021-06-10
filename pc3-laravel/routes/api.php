<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


use App\Models\Localidad;
use App\Models\Localidad_examen;
use App\Models\User;
use App\Models\Alquiler;

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

Route::middleware($middleware = 'auth')->get($uri = '/user', function (Request $request) {
    return $request->user();
});


// <<<<<<<<<<<<<------------USUARIO----------->>>>>>>>>>>>>>

//mostrar todos los usuarios
Route::get('users', 'App\Http\Controllers\UserController@index');

//mostrar un usuario concreto
Route::get('users/{id}', 'App\Http\Controllers\UserController@show');

//crear un nuevo usuario
Route::post('users', 'App\Http\Controllers\UserController@store');

//actualizar un usuario concreto
Route::put('users/{id}','App\Http\Controllers\UserController@update');

//borrar un usuario concreto
Route::delete('users/{id}', 'App\Http\Controllers\UserController@delete');


// <<<<<<<<<<<<<------------Localidad----------->>>>>>>>>>>>>>

//mostrar todos los usuarios
Route::get('localidad', 'App\Http\Controllers\LocalidadController@index');

//mostrar un municipio concreto
Route::get('localidad/{municipio}', 'App\Http\Controllers\LocalidadController@show');

//mostrar una CCAA en concreto
Route::get('localidad/{CCAA}', 'App\Http\Controllers\LocalidadController@show_CCAA');

//crear un nuevo municipio
Route::post('localidad','App\Http\Controllers\LocalidadController@store');

//actualizar un municipio concreto
Route::put('localidad/{municipio}', 'App\Http\Controllers\LocalidadController@update');

//borrar un municipio concreto
Route::delete('localidad/{municipio}', 'App\Http\Controllers\LocalidadController@delete');


// <<<<<<<<<<<<<------------Alquiler----------->>>>>>>>>>>>>>

//mostrar todos los usuarios
Route::get('alquiler', 'App\Http\Controllers\AlquilerController@index');

//mostrar un municipio concreto
Route::get('alquiler/{id}', 'App\Http\Controllers\AlquilerController@show');

//mostrar un municipio concreto
Route::get('alquiler/{ubicacion}', 'App\Http\Controllers\AlquilerController@show_ubi');

//crear un nuevo municipio
Route::post('alquiler','App\Http\Controllers\AlquilerController@store');

//actualizar un municipio concreto
Route::put('alquiler/{id}', 'App\Http\Controllers\AlquilerController@update');

//borrar un municipio concreto
Route::delete('alquiler/{id}', 'App\Http\Controllers\AlquilerController@delete');

//Para el examen

//mostrar las localidades
Route::get('localidad_examen', 'App\Http\Controllers\Localidad_examenController@index');

//mostrar un municipio concreto
Route::get('localidad_examen/{municipio}', 'App\Http\Controllers\Localidad_examenController@show');



//Route::get('/processData', 'PythonController@index');//Forma 1
//Route::get('/processData2', 'PythonController@index');//Forma 2
//Route::get('/processData', [Controller::class, '/processData']);

//Route::get('/processData', 'LogueadoController@processData');

Route::get('processData3/{municipio}', 'App\Http\Controllers\PythonController@processData3');

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
Route::post('login', 'App\Http\Controllers\AuthController@login');

Route::post('register', 'App\Http\Controllers\AuthController@register');

Route::post('logout', 'App\Http\Controllers\AuthController@logout');

Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');

Route::get('user-profile', 'App\Http\Controllers\AuthController@user-profile');    
});