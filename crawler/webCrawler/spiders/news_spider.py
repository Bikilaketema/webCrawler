from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor

class CrawlingSpider(CrawlSpider):
    name="press_et"
    allowed_domains = ["press.et"]
    start_urls = ["https://press.et/oromifa/"]

    rules = (
        Rule(LinkExtractor(allow="oromifa/"), callback="parse_item"),
    )

    def parse_item(self, response):
        titles = response.xpath('//h2[@class="entry-title"]/a/text()').getall()
        summaries = response.xpath('//div[@class="entry-summary"]/text()').getall()
        
        for title, summary in zip(titles, summaries):
            yield {
                "title": title.strip() if title else None,
                "summary": summary.strip() if summary else None
            }
