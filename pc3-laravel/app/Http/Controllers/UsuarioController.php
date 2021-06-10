<?php

namespace App\Http\Controllers;

Use App\Models\User;
use Illuminate\Http\Request;


class UsuarioController extends Controller
{   

    public function index()
    {
        return User::all();
    }

    public function show(User $usuario)
    {
        return $usuario;
    }

    public function store(Request $request)
    {
        $usuario = User::create($request->all());

        return response()->json($usuario, 201);
    }

    public function update(Request $request, User $usuario)
    {
        $usuario->update($usuario->all());

        return response()->json($usuario, 200);
    }
 
    public function delete(User $usuario)
    {
        $usuario->delete();

        return response()->json(null, 204);
    }
}
