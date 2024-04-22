# Oromiffa News Crawler 🕷️

This crawler is designed to scrape news articles from the press.et/oromiffa website. It is implemented using Scrapy, a powerful web crawling and scraping framework for Python.

## Features ✨

- Crawls news articles from the press.et/oromiffa website.
- Saves the scraped data into a JSON file.
- Utilizes Python virtual environment for isolated package management.

## Requirements 📋

- Python 3.10
- Scrapy

## Installation 💻

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/bikilaketema/webCrawler.git
    ```

2. Navigate to the project directory:

    ```bash
    cd webCrawler
    ```

3. Create and activate a Python virtual environment:

    ```bash
    python -m venv venv
    source venv/bin/activate
    ```

4. Install the required dependencies:

    ```bash
    pip install -r requirements.txt
    ```

## Usage 🚀

1. Run the crawler using the following command:

    ```bash
    scrapy crawl press_et
    ```


2. Once the crawler completes, the scraped data will be saved into a JSON file named `scraped_data.json`.

## Configuration ⚙️

- You can customize the crawler behavior by modifying the spider class in `spiders` directory.
- Adjust the Scrapy settings in the `settings.py` file to suit your requirements.
