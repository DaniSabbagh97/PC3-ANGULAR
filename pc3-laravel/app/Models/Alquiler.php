<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alquiler extends Model
{
    protected $table = 'alquileres';
    protected $fillable = ['nombre', 'descripcion', 'fotos', 'ubicacion', 'coste', 'especificaciones'];

    public $timestamps = false;
}