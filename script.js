class Traveler{
    constructor(name){
    this.name = name
    this._food = 1
    this.healthy = true 
    }
    
    set food(inicialFood){
        this._food = inicialFood
    }

    get food(){
       return this._food = inicialFood
    }

    hunt(){
        this._food += 2
        return this._food
    }

    eat(){
        if(this._food === 0){
            this.healthy = false
            return this.healthy

        } if (this._food > 0){
            this._food = this._food - 1
            this.healthy = true
            return this.healthy

        }
    }

}



class Wagon{
    constructor(capacity){
    this.capacity = capacity,
    this._pessengers = []
    }

    set pessengers(inicialList){
        this._pessengers = inicialList
    }

    get pessengers(){
        return this._pessengers = inicialList
    }
      

    getAvailableSeatCount(){
      if(this.capacity - this._pessengers.length > 0){
        return this.capacity - this._pessengers.length
      } else {
          return 0
      }
    }

    join(traveler){
      if(this.getAvailableSeatCount() > 0 ){
        this._pessengers.push(traveler)
      }
    }
    

    shouldQuarantine(){
        for(let i = 0; i < this._pessengers.length; i++){
            if(this._pessengers[i].healthy === false){
                return true
            }
        }
        
        return false
    }

    totalFood(){
        let totalFood = 0
        for(let i = 0; i < this._pessengers.length; i++){
            totalFood += this._pessengers[i]._food
        }

        return totalFood
    }

}



// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let thors = new Traveler('Thors');
let thorkell = new Traveler('Thorkell');
let askeladd = new Traveler('Askeladd');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(thors);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(thorkell);
wagon.join(askeladd); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
thors.hunt(); // pega mais comida
thorkell.eat();
thorkell.eat(); // thorkell agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since thorkell is sick`);
console.log(`${wagon.totalFood()} should be 3`);

