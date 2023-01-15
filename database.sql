-- create table
CREATE TABLE "kittens" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"description" text,
	"path" varchar(255),
	"likes" int default 0
);

-- dummy data
INSERT INTO kittens ("name", "description", "path")
	VALUES
	('Miso', 'Miso is a 6 week old siamese kitten that loves to cuddle', '/images/siamese.jpg'), 
	('Sister Minnie', 'Sister Minnie is a British shorthair kitten that is from a litter of 6. She loves to play and is often seen on the popular tiktok page @zainah.mb', 'images/british_shorthair.jpg'),
	('Simba', 'Simba is a tabby kitten that shares only 1 brain cell with all other orange cats in the world', 'images/tabby.jpg'),
	('Oscar', 'Oscar is only 7 weeks old and is already extremely sophisticated and classy for his age', 'images/ragdoll.jpg'),
	('Angel', 'Angel is the type of kitten to get zoomies at 2AM! Beware!', 'images/siberian.jpg'),
	('Nyx', 'Nyx was the runt of her litter, and like a shadow, she will sneak up on you', 'images/bombay')
	;

