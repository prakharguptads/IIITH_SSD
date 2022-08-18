USE COMPANY;
select p.Dnumber , p.Dname  , count(*) from 
(select Dnumber ,Dname  from DEPARTMENT where mgr_ssn in
(select Essn from DEPENDENT where Sex="F" group by essn having count(*) > 1)) p inner join DEPT_LOCATIONS dl on p.Dnumber=dl.Dnumber group by Dnumber;  