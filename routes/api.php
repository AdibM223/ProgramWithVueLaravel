<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WahanaController;
use App\Http\Controllers\tiketController;
use App\Http\Controllers\PhotoController;


route::group(['prefix'=>'v1'],function() {
     route::apiResource('wahana', WahanaController::class);
     route::apiResource('tiket', tiketController::class);
});

route::post('wahana/gambar/{id}', [WahanaController::class, 'uploadphoto']);
route::post('tiket/gambar/{id}', [tiketController::class, 'uploadphoto']);