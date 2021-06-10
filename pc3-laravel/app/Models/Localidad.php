<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Localidad extends Model
{
    protected $table = 'localidades';
    protected $fillable = ['municipio', 'comarca', 'provincia', 'CCAA', 'poblacion', 'densidad'];

    public $timestamps = false;
}
