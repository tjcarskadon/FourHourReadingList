##Refernce file for dbSchem

##db type = Mongo
##ORM = Mongoose

##Documents
+ taskList - This holds all links to be crawled and their status
    * url - text
    * status - boolean
+ readingList - this is the returned readinglist holding the core data
    * title
    * author
    * num of recommendations
    * recommender
    * podcast title of reccomendation
    * date of recommendaton
    * URL 
+ users - for later implementation adding a user table to handle users keeping their custom settings.  Auth will be handled by oAuth but user name and prefrrences should be stored.
