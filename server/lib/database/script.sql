create database proyectoWeb;

use proyectoWeb;

create table boardgames (
    id int not null auto_increment,
    name varchar(80) not null,
    publisher varchar(60) not null,
    category char(2) not null,
    description varchar(200) null,
    year char(4) null,
    primary key(id)
 );


 create table favorites(
     id int not null auto_increment,
     idBoardgame int,

     constraint foreign key fk_boardgames_favorites (idBoardgame) 
     references boardgames(id),

     primary key(id)
 );