---
title: 100 Days of Code Day 10
description: Day 10 of my 100 Days of Code journey.
published: true
---

# 100 Days of Code Day 10

In work today, I found an edge case bug in the auth flow introduced by my bug in only one particular instance that I've not been able to iron out; however, this component isn't due until a later sprint so I've time-boxed this for now and made a note of the issue in my to-do list and jira. I spent time thinking about the new sprint that's mainly just bug fixes that's due by Wednesday next week and spent time researching and estimating all of the tickets, none of it should be too difficult to fix.

I've been remiss in working on actual projects outside of work. Just after I'd started my new job, and career, I'd been working through Angular Projects Second Edition by Aristeidis Bampakos and I'd just completed the second project in the book to build a statically generated Jamstack style Angular website with Scully.

Today, I was looking through my Github repos, and realised I had completely forgetten everything from building this project, so I spent this evening following the tutorial and rebuilding it and figured it would be useful to extend it out and make it into a blog project for my 100 Days of Code journey that I recently started on Twitter. 140 characters is quite a limiting amount to convey my thoughts and I've never been a huge fan of threads. Here's the [repository](https://github.com/Ocoldwell/ocoldwell-jamstack-blog)

## Tech Stack Used

- Angular 13
- Scully
- Bootstrap

[Github repository](https://github.com/Ocoldwell/ocoldwell-jamstack-blog)

### Problems encountered

The tutorial in the book is assuming that you're using a version of Angular 12.0.0 and Scully versions of around 1.0. I wanted to ensure I was using the latest of both so I updated Scully to 2.0 and Angular to 13. This came with problems of dependency issues as Scully was assuming that I'd still be using Angular 12, though in the documentation on the website it mentioned that it would be compatible, so it may be just a case of a newer version with updated dependencies to be on NPM. Anyway, I forced an update and it seems to have resolved the issues but if any further issues come up, it will be useful to refer back to this.

### Referenced texts

[Angular Projects Second Edition](https://www.amazon.co.uk/Angular-Projects-exploring-cutting-edge-technologies/dp/1800205260/ref=sr_1_1?crid=2IDXCYF6JUY1&keywords=angular+projects+-+second+edition&qid=1636164031&qsid=260-1278910-4188548&sprefix=Angular+projec%2Caps%2C178&sr=8-1&sres=1800205260%2C1789612160%2C1138090379%2CB082WLDM4J%2C1951791274%2CB07ZMYMVCM%2C1491991739%2C1788839463%2C148424978X%2C1484232488%2CB006R0VWSG&srpt=ABIS_BOOK)