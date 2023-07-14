<?php

namespace App\Http\Controllers;
use App\Models\wahana;
use App\Http\Requests\StoreWahana;
use Illuminate\Http\Request;
use App\Http\Resources\v1\wahanaResource;
use App\Http\Resources\v1\wahanaCollection;

class WahanaController extends Controller
{
    // index
    public function index() {
        return new wahanaCollection(wahana::all());
    }

    public function show(wahana $wahana) {
        return new wahanaResource($wahana);
    }


    public function store(StoreWahana $request){
        wahana::create($request->validated());
        return response()->json('Wahana Created');
    }

    public function update(StoreWahana $request, wahana $wahana){
        $wahana->update($request->validated());
        return response()->json('Wahana Updated');
    }

    public function destroy(wahana $wahana) {
        $wahana->delete();
        return response()->json('Wahana Deleted');
    }

    public function uploadphoto($id, Request $request)
    {
        $wahana = wahana::find($id);
        $imagename = time().'.'.$request->gambar->extension();

        $path= public_path('../vue-rest-api/public/images');
        if(!empty($wahana->gambar)&&file_exists($path.'/'.$wahana->gambar)) :
            unlink($path.'/'.$wahana->gambar);
        endif;

        $wahana->gambar = $imagename;
        
        $wahana->save();
        $request->gambar->move(public_path('../vue-rest-api/public/images'),$imagename);

        return response()->json('Image Uploaded Successfully');
    }
}
