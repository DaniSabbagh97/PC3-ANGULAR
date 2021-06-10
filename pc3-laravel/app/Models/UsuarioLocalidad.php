<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioLocalidad extends Model
{
    protected $table = 'usuario_localidades';
    protected $fillable = ['id_users', 'id_localidades'];

    public $timestamps = false;
}
