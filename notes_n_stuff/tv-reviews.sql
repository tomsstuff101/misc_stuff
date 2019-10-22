INSERT INTO series (title, released_year, genre) VALUES
    ('Rick and Morty', 2013, 'Animation'),
    ('Power', 2014, 'Drama'),
    ("Family Guy", 1999, 'Animation'),
    ('The Simpsons', 1989, 'Animation'),
    ("Breaking Bad", 2008, 'Drama'),
    ('The Good Place', 2016, 'Comedy'),
    ("Peaky Blinders", 2013, 'Drama'),
    ('Saved By The Bell', 1989, 'Comedy'),
    ('The Walking Dead', 2010, 'Drama'),
    ('Homeland', 2011, 'Drama'),
    ('Malcolm In The Middle', 2000, 'Comedy'),
    ('Silicon Valley', 2014, 'Comedy'),
    ('Friends', 1994, 'Comedy'),
    ('Stranger Things', 2016, 'Drama');
 
 
INSERT INTO reviewers (first_name, last_name) VALUES
    ('Ben', 'Maudslay'),
    ('Bruce', 'Willis'),
    ('Bill', 'Gates'),
    ('Elon', 'Musk'),
    ('Stuart', 'Kirby'),
    ('Leon', 'Cooper'),
    ('Charlie', 'Lord');
    
 
INSERT INTO reviews(series_id, reviewer_id, rating) VALUES
    (1,1,8.0),(1,2,7.5),(1,3,8.5),(1,4,7.7),(1,5,8.9),
    (2,1,8.1),(2,4,6.0),(2,3,8.0),(2,6,8.4),(2,5,9.9),
    (3,1,7.0),(3,6,7.5),(3,4,8.0),(3,3,7.1),(3,5,8.0),
    (4,1,7.5),(4,3,7.8),(4,4,8.3),(4,2,7.6),(4,5,8.5),
    (5,1,9.5),(5,3,9.0),(5,4,9.1),(5,2,9.3),(5,5,9.9),
    (6,2,6.5),(6,3,7.8),(6,4,8.8),(6,2,8.4),(6,5,9.1),
    (7,2,9.1),(7,5,9.7),
    (8,4,8.5),(8,2,7.8),(8,6,8.8),(8,5,9.3),
    (9,2,5.5),(9,3,6.8),(9,4,5.8),(9,6,4.3),(9,5,4.5),
    (10,5,9.9),
    (13,3,8.0),(13,4,7.2),
    (14,2,8.5),(14,3,8.9),(14,4,8.9);