<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Localidad_examen extends Model
{
    protected $table = 'localidades_examen';
    protected $fillable = ['municipio', 'comarca', 'provincia'];

    public $timestamps = false;
}
