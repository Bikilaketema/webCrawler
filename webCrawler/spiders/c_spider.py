from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor

class CrawlingSpider(CrawlSpider):
    name="press_et"
    allowed_domains = ["press.et"]
    start_urls = ["https://press.et/oromifa/"]

    rules = (
        Rule(LinkExtractor(allow="oromifa/category/oduu/oduu-bariisaa/")),
        Rule(LinkExtractor(allow="oromifa/category/"), callback="parse_item")
    )

    def parse_item(self, response):
        yield {
           "title": response.xpath('//h2[@class="entry-title"]/a/text()').get(),
            "news": response.xpath('//div[@class="entry-summary"]/text()').get()
        }
