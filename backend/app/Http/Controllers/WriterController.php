<?php

namespace App\Http\Controllers;

use App\Models\Writer;
use Illuminate\Http\Request;

class WriterController extends Controller
{
    public function index(){
       $writers = response()->json(Writer::all());
       return $writers;
    }

    public function store(Request $request){
        $writer = new Writer();
        $writer->nev = $request->nev;
        $writer->szulEv = $request->szulEv;
        $writer->save();
        return Writer::find($writer->id);
        
    }

    public function destroy($id){
        $writer = Writer::find($id)->delete();
        return response()->json(['message' => 'Sikeres törlés!'], 201);
    }

    public function update(Request $request, $id){
        $writer = Writer::find($id);
        $writer->nev = $request->nev;
        $writer->szulEv = $request->szulEv;
        $writer->save();
        //return redirect('/api/writers');
    }
}
