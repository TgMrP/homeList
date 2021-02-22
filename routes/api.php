<?php

use App\Http\Controllers\BoardController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;


Route::post('/login', [LoginController::class, 'login']);
Route::delete('/logout', [LoginController::class, 'logout']);


Route::middleware(['auth'])->group(function () {
    Route::get('/boards', [BoardController::class, 'index']);
    Route::post('/board/add', [BoardController::class, 'store']);
    Route::get('/board/{id}', [BoardController::class, 'show']);
    Route::post('/board/{board_id}/items/add', [ItemController::class, 'store']);
    Route::post('/items/{id}/mark', [ItemController::class, 'mark']);
});

Route::get('/user', function () {
    return request()->user();
})->middleware('auth:sanctum');
