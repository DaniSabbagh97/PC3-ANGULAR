<?php

namespace App\Http\Controllers;

Use App\Models\Alquiler;
use Illuminate\Http\Request;

class AlquilerController extends Controller
{
    public function index()
    {
        return Alquiler::all();
    }

    public function show($alquiler)
    {
        $alquiler = Alquiler::where('id', $alquiler)->first();
        return $alquiler;
    }
    public function show_ubi($alquiler)
    {
        $alquiler = Alquiler::where('ubicacion', $alquiler)->pluck('nombre')->all();
        return $alquiler;
    }

    public function store(Request $request)
    {
        $alquiler = Alquiler::create($request->all());

        return response()->json($alquiler, 201);
    }

    public function update(Request $request, Alquiler $alquiler)
    {
        $alquiler->update($request->all());

        return response()->json($alquiler, 200);
    }

    public function delete(Alquiler $alquiler)
    {
        $alquiler->delete();

        return response()->json(null, 204);
    }
}
