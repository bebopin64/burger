create database burgers_db;
use burgers_db;
create table burgers (
id integer auto_increment not null primary key,
burger_name text not null,
devoured boolean not null,
date timestamp
);
