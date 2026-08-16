--PARA CREAR UNA NUEVA BASE DE DATOS
--create database holapostgres


--TIPO DE DATOS
-- **ALFANUMERICOS
-- 		character: cadena de caracteres de longitud fija.
-- 		character varying: cadena de caracteres de longitud variable
-- 		text: cadena de caracteres de longitud variable, no posee un límite de longitud por defecto

-- **NUMERICOS
--		integer: enteros con signo, 4 bytes
--		decimal: número con una precisión previamente definida por el usuario


-- **OTROS:
--		boolean: variable que admite solo dos valores
--		date: valor que representa una fecha

--PARA CREAR TABLAS DE DATOS
create table categorias(
  nid_categoria				int					not null,
  txt_categoria				varchar(150)		not null,
  txt_observacion			text,
  
  flg_activo				boolean,
  fec_registro				date
);


insert into categorias (nid_categoria, txt_categoria, flg_activo)
values (1, 'Aves', true)