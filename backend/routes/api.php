<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ContactController;

Route::get('/projects', [ProjectController::class, 'index']);

Route::post('/contact', [ContactController::class, 'store'])
    ->middleware('throttle:5,1');