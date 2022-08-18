USE COMPANY;
select p.Full_Name,  p.ssn , p.Dno , d.Dname from 
(select concat(concat(Fname , " " , Minit)," ", Lname) as Full_Name,  ssn , Dno from EMPLOYEE e where ssn in (select Essn from WORKS_ON group by Essn having sum(Hours)<40)) p inner join DEPARTMENT d on d.mgr_ssn=p.Ssn;