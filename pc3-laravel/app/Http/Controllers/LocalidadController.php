<?php

namespace App\Http\Controllers;

Use App\Models\Localidad;
use Illuminate\Http\Request;

/**
 * @OA\Info(title="API Localidad", version="1.0")
 * 
 * @OA\Server(url="http://127.0.0.1:8000")
 */

class LocalidadController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/localidad",
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
        return Localidad::all();
    }
/**
     * @OA\Get(
     *      path="/api/localidad/{municipio}",
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
    public function show($localidad)
    {
        $localidad = Localidad::where('municipio', $localidad) ->first();

        return $localidad;
    }
    public function show_CCAA($CCAA)
    {
        $CCAA = Localidad::where('CCAA', $CCAA) ->first();

        return $CCAA;
    }

    public function store(Request $request)
    {
        $localidad = Localidad::create($request->all());

        return response()->json($localidad, 201);
    }

    public function update(Request $request, Localidad $localidad)
    {
        $localidad->update($request->all());

        return response()->json($localidad, 200);
    }

    public function delete(Localidad $localidad)
    {
        $localidad->delete();

        return response()->json(null, 204);
    }
}
