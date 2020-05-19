<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class IEXController extends Controller
{
    public function __construct()
    {
        $this->initialize();
    }

//    protected $url = 'https://cloud.iexapis.com/stable/';
    protected $url = 'https://sandbox.iexapis.com/stable/';

    /** @var Client */
    protected $client;

    protected function initialize () {
        $client = new Client(['base_uri' => $this->url]);
        $this->client = $client;
    }

    public function index(Request $request) {
        $company = $request->get('company');

        $req = $this->client->get(
            'stock/' . $company. '/batch?types=quote,news,chart&range=1m&last=10&token=Tsk_39d4da6acf5c44dd8dcf8176200eb1ed'
        );

        $body = $req->getBody()->getContents();
        return json_decode($body, true);
    }
}
