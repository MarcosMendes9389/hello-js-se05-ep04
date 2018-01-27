create table contato(
  id integer not null primary key autoincrement,
  nome varchar(255) not null,
  datacriacaocontato timestamp not null default current_timestamp,
  telefone varchar(255)
);