# Assignment 2

## Technical problems

I needed to uncomment the line with "create-table" otherwise the program gave me an error because it did not find a schema called "TEST".

![EclipseLink](https://github.com/andreasgarvik/dat250-assignment-experiments/blob/master/eclipselink.png)

I didn't get container managed entity manager to work using the @PersistanceContext, I just got a null pointer from the EntityManager if i tried.

![Nullpointer](https://github.com/andreasgarvik/dat250-assignment-experiments/blob/master/nullpointer.png)

## Database

I inspected the database created with [ij](http://db.apache.org/derby/papers/DerbyTut/ij_intro.html) Derby Tools.

![DerbyTools](https://github.com/andreasgarvik/dat250-assignment-experiments/blob/master/derbytools.png)
