import csv, json
from tspAPI.models import City, Time

def register():
    """
    ファイルのデータをDBに登録する。

    Note
    ----
    django-shellから起動する
    """

    # 既にあるデータの消去
    City.objects.all().delete()
    Time.objects.all().delete()

    # csv
    csv_file = open("./tspAPI/datafile/cities.csv", "r")
    csvData = csv.reader(csv_file, delimiter=",", doublequote=True, lineterminator="\n", quotechar='"', skipinitialspace=True)
    header = next(csvData)
    city2id = dict()
    for key, name in csvData:
        key = int(key)
        City(city_id=key, name=name).save()

    # json
    json_file = open("./tspAPI/datafile/time.json", "r")
    json_dict = json.load(json_file)
    for name, lis in json_dict.items():
        for name2, time in lis:
            Time(city_name1=name, city_name2=name2, time=time).save()
    
    print("success!")
    