<?php

use Illuminate\Support\Facades\Route;

// Lempar semua URL ke halaman welcome.blade.php (ke React)
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');