<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});


Route::get('/data/{type}/{year_month}', function($type, $year_month) {
    $lastDayOfMonth = date('t', strtotime($year_month . '-01'));
    return response()->json(DB::table('timetable_' . $type)->whereBetween('date', [$year_month . '-01', $year_month . '-' . $lastDayOfMonth])->get());
});