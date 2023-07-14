<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PhotoCotroller extends Controller
{
    public function uploadphoto($id, Request $request)
    {
        $wahana = wahana::find($id);
        $imagename = time().'.'.$request->gambar->extension();
        $wahana->gambar = $imagename;
        
        $wahana->save();
        $request->gambar->move(public_bath('images'),$imagename);

        return response()->json('Image Uploaded Successfully');
    }
}
