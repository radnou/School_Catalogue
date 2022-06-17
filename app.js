class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this.numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set name(name) {
      this._name = name;
    }
    set level(lvl) {
      this._level = lvl;
    }
    set numberOfStudents(nb) {
      if (typeof nb === "number") {
        this._numberOfStudents = nb;
      } else {
        console.log("Invalid input: numberOfStudents must be set to a Number.");
      }
    }
    quickFacts() {
      console.log(
        `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`
      );
    }
    static pickSubstituteTeacher(substituteTeachers) {
      return substituteTeachers[
        Math.floor(Math.random() * substituteTeachers.length) - 1
      ];
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, "PRIMARY", numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, "HIGH SCHOOL", numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeam() {
      console.log(this._sportsTeams);
    }
    set sportsTeam(teams) {
      this._sportsTeams.push(teams);
    }
  }
  
  const lorraineHansbury = new PrimarySchool(
    "Lorraine Hansbury",
    514,
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."
  );
  
  //console.log(lorraineHansbury)
  
  lorraineHansbury.quickFacts();
  
  let sub = [
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ];
  console.log(School.pickSubstituteTeacher(sub));
  
  const alSmith = new HighSchool("AL E. Smith", 415, [
    "Baseball",
    "Basketball",
    "Volleyball",
    "Track and Field",
  ]);
  
  alSmith.sportsTeam;
  