##Active Tasks:
- [ ] get list and add to a static file

###Backlog:
- [ ] reiew each podcst and build parse algorithm for finding the amazon links
- [ ] refactory request handling out of server.js
- [ ] render the list to the page
- [ ] make a decision on routing and using angular routes vs UI
- [ ] set up angular site and render info from blog to page
- [ ] Build a single page test to ensure parsing is correct
- [ ] Build a task list maker - reads the list of sites to be populated and stores them
- [ ] Look into chron jobs on a deployed server
- [ ] add some task manager and automation
- [ ] write a readme
- [ ] write a faq

##Completed
- [x] setup nodemon
- [x] create server and render "hello world"
- [x] review target podcast list html and determine parse algorithm 
- [x] server index.html page
- [x] design schema
- [x] setup environment

###Architecture:
- [ ] MEAN stack
- [ ] Single page front end
- [ ] Can I create multiple requests so that more than one page is being crawled at a time?

###Notes on how to approach:
- [ ] Spider should crawl the landing page first
- [ ] take in all links for each podcast and store them in a database
- [ ] another spider will then go thru each of those links on a regular basis

###MVP description:
- [ ] search pages and return HTML
- [ ] parse HTML for a tags at amazon
- [ ] store this info in the data base
- [ ] present the data
- [ ] filter the data based on column headings
- [ ] search data
- [ ] runs chonologically
- [ ] deployed

###Stories - As I user I want to:
- [ ] See all book recommendations from the website
- [ ] see if there are any links remaining to be crawled
- [ ] have new book recommendations called out it some fashion so I know that they - [ ] were recently added.
- [ ] Get an updated list at least once per week
- [ ] Be able to click directly on the listing and go to amazon.  
- [ ] Search the listings by author, title, podcast guest.
- [ ] filter display by date added
- [ ] filter display alphabetically
- [ ] filter display by title 
- [ ] See each book only once but if multiple guests recommended it see each guest
- [ ] See a rating based on the number of times the book is in the list.
- [ ] add books to a "wish list"
- [ ] keep track of books that I have already purchased
- [ ] have a pleasant visual experince
- [ ] add other sites to crawl
- [ ] add other things to look for other than books
