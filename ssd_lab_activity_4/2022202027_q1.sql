use CUSTOMER_DB;
delimiter $$
DROP PROCEDURE IF EXISTS dbo.pro$$  
create procedure `pro`  (IN `attribute1` int,IN `attribute2` int, OUT `res` int)
begin
set res=attribute1 + attribute2;
end$$
delimiter ;
call pro (4 ,48,@res);
select @res;