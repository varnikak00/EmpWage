class EmployeePayrollData{
   get id() {return this.id;}
   setid(){
       this._id=id;
   }
    
   get name() { return this._name;}
   set name(name){
       let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(name) )
         this._name = name;
         else throw "Name is Incorrect!";
        
            throw "Incorrect name";
        }
        get profilepic(){return this.profilepic;}
        set profilepic(profilepic){
            this._profilepic=profilepic;
        }
        get genter() { return this._genter;}
            set genter(genter){
                this._genter =this.genter
            }
            get separtment(){ return this._deportment;}
        set deportment(deportmen){
            this._deportment=deportment
        }
        get salary() { return this._salary;}
        set salary(salary){
            this._salary = salary;

        }
        get note() { return this._note;}
        set note(note){
            this._note = note;
            
        }
        get () { return this._startDate;}
        set satartDate(startDate){
            this.startDate = startDate;
            

    