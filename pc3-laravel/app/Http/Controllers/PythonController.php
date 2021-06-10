<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;



class PythonController extends Controller
{
    
    /**
     * Solicitar la ejecución de un script de Python
     * 
     * @return \Illuminate\Http\Response
     */
    // public function processData()
    // {

    //     $python = "C:\Users\sandr\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Python 3.9\Python 3.9.exe"
    //     //$python = "C:\Users\Dani\AppData\Local\Programs\Python\Python39\python.exe";//Cambiar python a ruta relativa y meterlo en el proyecto
    //     $cmd = $python." ".'D:\PCII y PCIII\proyecto\PC3-ANGULAR\pc3-laravelDISCOD\app\Python\prueba.py';
    //     //D:\PCII y PCIII\proyecto\PC3-ANGULAR\pc3-laravelDISCOD\app\Python\prueba.py
    //     $ans = shell_exec($cmd);
    //     dd(shell_exec($cmd), $cmd);

    //     return response()->json($ans, JsonResponse::HTTP_OK);


    // }

    // /**
    //  * Solicitar
    //  * 
    //  * @return \Illuminate\Http\Response
    //  */

    // public function processData2()
    // {

    //     //$python = "C:\Users\Dani\AppData\Local\Programs\Python\Python37\python.exe";//Cambiar python a ruta relativa y meterlo en el proyecto
    //     $pythonDavid = "C:\Users\david\AppData\Local\Microsoft\WindowsApps\python3.8.exe"
    //     $python = "C:\Users\sandr\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Python 3.9\Python 3.9.exe"
    //     $process = new Process(
    //         [
    //             $pythonDavid,
    //             base_path('app\python\vaciada.py')

    //         ]);
    //     $process->run();
    //     //dd($process);
    //     if (!$process->isSuccessful()) {
    //         throw new ProcessFailedException($process);
    //     }

    //     return response()->json($process->getOutput(), JsonResponse::HTTP_OK);


    // }

    public function processData3($municipio)
    {
        //$pythonDavid ="C:\Users\david\AppData\Local\Microsoft\WindowsApps\python3.8.exe";
        $pythonDavid ="C:\Users\sandr\AppData\Local\Programs\Python\Python39\python.exe";
        $cmd =$pythonDavid." ".base_path("app/Http/Python/vaciada.py").' ' . $municipio;
        
        $ans = shell_exec($cmd);

        return $ans;
    }
}
