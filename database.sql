CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (250) NOT NULL,
	"description" VARCHAR (250) NOT NULL,
	"likes" INT NOT NULL
);

INSERT INTO "gallery" 
	("path", "description", "likes") 
VALUES 
	('images/kobaBaby.jpeg', 'Photo of a Koba at 8 weeks.', 0),
	('images/kobaPic.jpeg', 'Photo of a Koba lounging.', 0),
	('images/kobaChristmas.jpeg', 'Photo of Koba with Tree.', 0),
	('images/kobaStrong.jpeg', 'Photo of a Koba during Halloween.', 0),
	('images/karenAndLlama.jpeg', 'Photo of Karen with Llama.', 0),
	('images/kobaCouch.jpeg', 'Photo of Koba on the couch.', 0),
	('images/mtFuji.jpeg', 'Photo of Karen and I with Mt.Fuji.', 0),
	('images/meWithElephant.jpeg', 'Photo of me with elephant.', 0),
	('images/thaiElephant.jpeg', 'Photo of elephant with dirt.', 0);
	