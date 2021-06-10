<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\Models\Localidad_examen;

class Localidad_examenController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/localidad_examen",
     *      summary="Mostrar todos los municipios",
     * @OA\Response(
     *      response=200,
     *      description="Mostrar localidades."
     * ),
     * @OA\Response(
     *      response="default",
     *  description="Ha ocurrido un error."
     * )
     * )
     */
    public function index()
    {
        return Localidad_examen::all();
    }

    /**
     * @OA\Get(
     *      path="/api/localidad_examen/{municipio}",
     *      summary="Mostrar municipio",
     * @OA\Parameter(
     *         name="municipio",
     *         in="path",
     *         description="retornamos municipio",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     * @OA\Response(
     *      response=200,
     *      description="Mostrar municipio."
     * ),
     * @OA\Response(
     *      response="default",
     *  description="Ha ocurrido un error."
     * )
     * )
     */
    public function show($localidad_examen)
    {
        $localidad_examen = Localidad_examen::where('municipio', $localidad_examen) ->first();

        return $localidad_examen;
    }
}
