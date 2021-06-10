<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToComentariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('comentarios', function (Blueprint $table) {
            $table->foreignId('id_users', 'comentarios_ibfk_1')->references('id')->on('users')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('id_alquileres', 'comentarios_ibfk_2')->references('id')->on('alquileres')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('id_localidades', 'comentarios_ibfk_3')->references('id_localidades')->on('localidades')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('comentarios', function (Blueprint $table) {
            $table->dropForeign('comentarios_ibfk_1');
            $table->dropForeign('comentarios_ibfk_2');
            $table->dropForeign('comentarios_ibfk_3');
        });
    }
}
