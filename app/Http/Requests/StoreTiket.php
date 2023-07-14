<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTiket extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nama_promo'=>['required','min:3','max:200'],
            'tanggal_mulai'=>['required','min:3','max:20'],
            'tanggal_selesai' =>['required','min:3','max:20'],
            'keterangan_promo'=>['required','min:3','max:200'],
         
        ];
    }
}
