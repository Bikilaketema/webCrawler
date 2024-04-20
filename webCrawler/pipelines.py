# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import json

class WebcrawlerPipeline:
    def process_item(self, item, spider):
        return item

class JsonPipeline:
    def open_spider(self, spider):
        self.file = open('scraped_data.json', 'w')
        self.first_item = True
        self.file.write("[\n")

    def close_spider(self, spider):
        self.file.write("\n]")
        self.file.close()

    def process_item(self, item, spider):
        if item.get('title') is not None or item.get('news') is not None:
            line = json.dumps(dict(item), ensure_ascii=False)
            if not self.first_item:
                line = ",\n" + line
            else:
                self.first_item = False
            self.file.write(line)
        return item
