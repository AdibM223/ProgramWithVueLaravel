<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tiket extends Model
{
    use HasFactory;
    protected $fillable =[
        'nama_promo',
        'tanggal_mulai',
        'tanggal_selesai',
        'keterangan_promo',
        'gambar'
    ];
}
