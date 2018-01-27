create table partida (
idpartida primary key not null autoincrement,
dt_partida timestamp,
idvisitante integer not null,,
idmandante integer not null,,
numGolsVisitante,
numGolsMandante,

foreign key (idvisitante) references equipe(idequipe)
foreign key (idmandante) references equipe(idequipe)

)