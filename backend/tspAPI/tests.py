import sys
sys.path.append('../')
import json

from django.test import TestCase
from django.test import Client

from dataRegister import register


class BitDPTest(TestCase):

    @classmethod
    def setUpClass(cls):
        super(BitDPTest, cls).setUpClass()
        print('Called `setUpClass`.')
        # 初期データ登録
        register()


    def test_http_bitdp(self):
        client = Client(enforce_csrf_checks=True)
        VisitCities =  ["札幌", "旭川", "函館", "知床", "稚内"]
        startWord = "札幌"
        endWord = "札幌"
        response = client.post('/api/calc/', {
            "start": startWord,
            "end": endWord,
            "cities" : VisitCities,
        }, content_type="application/json")
        data = json.loads(response.content)

        actualRoute = data["route"]
        actualTime = data["time"]

        expectedRoute = ['札幌', '函館', '知床', '稚内', '旭川', '札幌']
        expectedTime = [0, 262, 864, 1334, 1579, 1699]

        self.assertEqual([actualRoute, actualTime], [expectedRoute, expectedTime])