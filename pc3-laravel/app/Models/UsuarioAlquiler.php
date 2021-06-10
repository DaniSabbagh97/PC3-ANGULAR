<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioAlquiler extends Model
{
    protected $table = 'usuario_alquileres';
    protected $fillable = ['id_users', 'fecha', 'id_alquileres', 'id_localidad'];

    public $timestamps = false;
}
