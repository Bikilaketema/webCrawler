from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor

class CrawlingSpider(CrawlSpider):
    name="mycrawler"
    allowed_domains = ["press.et"]
    start_urls = ["https://press.et/oromifa/"]

    rules = (
        Rule(LinkExtractor(allow="oromifa/2024/04/20")),
        Rule(LinkExtractor(allow="oromifa"), callback="parse_item")
    )

    def parse_item(self, response):
        yield {
            "title": response.css(".post h1::text").get(),
            "news": response.css(".post p::text").get()
        }
