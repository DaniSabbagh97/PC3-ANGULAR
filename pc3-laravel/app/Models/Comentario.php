<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    protected $table = 'comentarios';
    protected $fillable = ['contenido', 'fecha', 'id_alquileres', 'id_localidad'];

    public $timestamps = false;
}
