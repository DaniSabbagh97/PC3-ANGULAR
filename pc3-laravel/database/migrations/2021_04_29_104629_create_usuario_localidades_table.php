<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuarioLocalidadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuario_localidades', function (Blueprint $table) {
            $table->bigInteger('id_users')->index('id');
            $table->integer('id_localidades')->index('id_localidades');
            $table->primary(['id_users', 'id_localidades']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuario_localidades');
    }
}
