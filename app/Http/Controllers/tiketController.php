<?php

namespace App\Http\Controllers;
use App\Models\Tiket;
use App\Http\Requests\StoreTiket;
use Illuminate\Http\Request;
use App\Http\Resources\v1\tiketResource;
use App\Http\Resources\v1\tiketCollection;

class tiketController extends Controller
{
     // index
     public function index() {
        return new tiketCollection(tiket::all());
    }

    public function show(tiket $tiket) {
        return new tiketResource($tiket);
    }


    public function store(StoreTiket $request){
        Tiket::create($request->validated());
        return response()->json('tiket Created');
    }

    public function update(Storetiket $request, tiket $tiket){
        $tiket->update($request->validated());
        return response()->json('tiket Updated');
    }

    public function destroy(tiket $tiket) {
        $tiket->delete();
        return response()->json('tiket Deleted');
    }


    public function uploadphoto($id, Request $request)
    {
        $tiket = Tiket::find($id);
        $imagename = time().'.'.$request->gambar->extension();

        $path= public_path('../vue-rest-api/public/images/promo');
        if(!empty($tiket->gambar)&&file_exists($path.'/'.$wahana->gambar)) :
            unlink($path.'/'.$wahana->gambar);
        endif;

        $tiket->gambar = $imagename;
        
        $tiket->save();
        $request->gambar->move(public_path('../vue-rest-api/public/images/promo'),$imagename);

        return response()->json('Image Uploaded Successfully');
    }
}
