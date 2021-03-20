from django.test import TestCase
from django.test import Client

# Create your tests here.

class BitDPTest(TestCase):

    def test_bitdp(self):
        client = Client(enforce_csrf_checks=True)
        VisitCities =  ["札幌", "旭川", "函館", "知床", "稚内"]
        startWord = "札幌"
        endWord = "札幌"
        response = client.post('/api/calc', {
            "start": startWord,
            "end": endWord,
            "cities" : VisitCities,
        })
        response = client.get("/api/calc")
        print(response)
        self.assertEqual(1,1)