SELECT name, imdb_rating FROM movies; # Multiple columns can be queried at once by separating column names with a comma

SELECT DISTINCT genre FROM movies; # SELECT DISTINCT is used to return unique values in the result set
									# genre is the name of the column to display in the result set
									# FROM movies indicates the table name to query from

SELECT * FROM movies WHERE imdb_rating > 8; # Here, only rows with a value greater than 8 in the imdb_rating column will be returned in the result set

SELECT * FROM movies
WHERE name LIKE 'Se_en'; # name LIKE Se_en is a condition evaluating the name column for a specific pattern

SELECT * FROM movies
WHERE name LIKE '%man%'; # A% matches all movies with names that begin with "A"
							# %a matches all movies that end with "a"

SELECT * FROM movies
WHERE name BETWEEN 'A' AND 'J'; # BETWEEN operator is used to filter the result set within a certain range

SELECT * FROM movies
WHERE year BETWEEN 1990 AND 2000; # BETWEEN operator is used to filter the result set within a certain range

SELECT * FROM movies
WHERE year BETWEEN 1990 AND 2000 # BEETWEEN
AND genre = 'comedy'; # with second genre condition

SELECT * FROM movies
WHERE genre = 'comedy'
OR year < 1980;

SELECT * FROM movies
ORDER BY imdb_rating DESC; # ORDER BY is a clause that indicates you want to sort the result set by a particular column either alphabetically or numerically
							# imdb_rating is the name of the column
							# DESC for sort the results in descending order (high to low or Z-A)

SELECT * FROM movies
ORDER BY imdb_rating ASC # ASC for sort the results in ascending order (low to high or A-Z)
LIMIT 3;
