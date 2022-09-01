DELIMITER **
CREATE procedure pro2s ()
BEGIN
SELECT CUST_NAME , GRADE from customer where OPENING_AMT+RECEIVE_AMT>10000;
END **
call pro2s();
-- select * from customer;