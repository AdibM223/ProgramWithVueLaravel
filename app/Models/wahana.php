<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class wahana extends Model
{
    use HasFactory;
    protected $fillable=[
        'id',
        'nama_wahana',
        'biaya_masuk',
        'gambar',

    ];
}
