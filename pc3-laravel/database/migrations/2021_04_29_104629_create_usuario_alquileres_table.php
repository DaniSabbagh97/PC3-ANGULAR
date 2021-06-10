<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuarioAlquileresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuario_alquileres', function (Blueprint $table) {
            $table->integer('id_users')->index('id');
            $table->integer('id_alquileres')->index('id_alquileres');
            $table->primary(['id_users', 'id_alquileres']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuario_alquileres');
    }
}
