<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>rss | maja braumberger</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&amp;display=swap" rel="stylesheet"/>
        <style>
          body {
            background-color: black;
            color: #c8c8c8;
            font-family: 'Roboto Mono', monospace;
            margin: 0;
            padding: 80px 40px;
            display: flex;
            justify-content: center;
          }
          .container {
            max-width: 800px;
            width: 100%;
          }
          header {
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 40px;
            margin-bottom: 60px;
          }
          h1 { 
            color: white; 
            font-size: 28px;
            letter-spacing: 6px; 
            text-transform: lowercase;
            margin: 0; 
            font-weight: 300;
          }
          .subtitle { 
            font-size: 13px; 
            color: #555; 
            margin-top: 15px; 
            text-transform: lowercase; 
            letter-spacing: 2px;
          }
          
          .item {
            margin-bottom: 40px;
            padding: 25px;
            border: 1px solid rgba(255,255,255,0.05);
            transition: all 0.4s ease;
            text-decoration: none;
            display: block;
          }
          .item:hover {
            background: rgba(255,255,255,0.02);
            border-color: rgba(255,255,255,0.2);
            transform: translateY(-2px);
          }
          .item-title {
            color: white;
            font-size: 18px;
            display: block;
            margin-bottom: 10px;
            letter-spacing: 1px;
          }
          .item-meta {
            font-size: 11px;
            color: #767676;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          .item-desc {
            margin-top: 15px;
            font-size: 14px;
            line-height: 1.8;
            color: #9e9e9e;
          }
          .back-link {
            display: inline-block;
            margin-top: 60px;
            color: #444;
            text-decoration: none;
            font-size: 12px;
            letter-spacing: 3px;
            border-bottom: 1px solid transparent;
            transition: all 0.3s ease;
            text-transform: lowercase;
          }
          .back-link:hover { 
            color: white; 
            border-bottom: 1px solid white;
          }

          /* Dla urządzeń mobilnych */
          @media (max-width: 600px) {
            body { padding: 40px 20px; }
            h1 { font-size: 22px; }
            .item-title { font-size: 16px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>maja braumberger</h1>
            <div class="subtitle"><xsl:value-of select="/rss/channel/description"/></div>
          </header>
          
          <xsl:for-each select="/rss/channel/item">
            <a class="item" href="{link}">
              <span class="item-title"><xsl:value-of select="title"/></span>
              <span class="item-meta"><xsl:value-of select="pubDate"/></span>
              <div class="item-desc"><xsl:value-of select="description"/></div>
            </a>
          </xsl:for-each>
          
          <a href="index.html" class="back-link">← return to home</a>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
