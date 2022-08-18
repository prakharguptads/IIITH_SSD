USE COMPANY;
select w.essn , count(*)  from WORKS_ON w where w.Essn in
(select mgr_ssn from DEPARTMENT where Dnumber in
(select Dnum from PROJECT where Pname="ProductY")) group by w.Essn;