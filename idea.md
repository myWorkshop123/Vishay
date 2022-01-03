SQL

  1. There are Teachers. A
      1.1 Teacher have a rank. It is a number. The teacher with lower rank will allowed to choose the subjects first,
          else if another teacher with higher rank comes and tries to login he will not be able to select the subjects and will be logged out 
          saying, "these teachers have to select the subjects first " 
      
      1.2 Teacher have a Quota. This is a number. The teacher is required to fill this quota by selecting the subjects and their types. 

      1.3 Teacher have a multiplier. This is a number. When the teacher selects a subject this number will be mutiplied by the points and will be           used while filling the Quota         


  2. There are subjects.  A 
      2.1 Subject will have 3 sub types i.e Lecture, Tute, Practical (LTP). 

      2.2 Subject will have total points which will be the sum of points of LTP.  
