##Context : 
Kata Javascript FizzBuzz

##version 1 : 
returne nombres entre 1-100 mais "Fizz" au lieu de multiples de 3 et "Buzz" au lieu 5
##version 2 : 
returne nombres entre 1-100 mais "Fizz" au lieu de multiples de 3 et "Buzz" au lieu 5 et "FizzBuzz" au lieu de multiples de 3 et 5	
##version 3 : 
returne nombres entre 1-100 mais "Fizz" "Buzz" des multiples de nombres passer en params 

## Prérequis :
Node installé sur la machine 

##Demo & instuctions d'installation et lancement:

1- cloner le repo `git clone https://github.com/abdel-djalil/FizzKata.git`

2- installer les dépendences  `npm install`

3- lancer l'application `npm start {rule}` 

##lancer les tests  :
- lancer la commande `npm test`
 
## examples de commande  :
- exemple avec rules (V3): 
	`npm start 3 5`  
- exemple sans rules (V2): 
	`npm start`
## example d'integration 
- exemple d'utilisation du lib :

`var Program  = require('./lib/fizzBuzz.js');`

`var fizzBuzz = new Program();`

`fizzBuzz.run(version , fizz, buzz)`

- lancer la première version 

`fizzBuzz.run(1)`

- lancer la deuxième version 

`fizzBuzz.run(2)`

- lancer la troisième version avec rules

`fizzBuzz.run(3, 3, 5)`

- lancer la troisième version sans rules

`fizzBuzz.run(3)`