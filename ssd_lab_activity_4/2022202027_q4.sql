DELIMITER ^^
DROP PROCEDURE IF EXISTS Ques4;
CREATE PROCEDURE lab4_q4()
BEGIN
	declare name VARCHAR(255);
	declare city VARCHAR(255);
	declare country VARCHAR(255);
	declare grade INT;
    
	declare finish INT default 0;
	declare curse cursor for SELECT CUST_NAME, CUST_CITY, CUST_COUNTRY, GRADE FROM customer WHERE AGENT_CODE LIKE 'A00%';
	declare continue handler for not found set finish=1;
	open curse;
    
	chakar:loop
    
	fetch curse into name, city, country, grade;
	select name, city, country, grade;
	if finish=1 then
	leave chakar;
	end if;
	end loop chakar;
END ^^
DELIMITER ;
CALL lab4_q4();
#select CUST_NAME, CUST_CITY,CUST_COUNTRY,GRADE from customer where AGENT_CODE like 'A00%';
