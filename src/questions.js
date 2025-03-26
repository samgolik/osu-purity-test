const questions = [
    "Drank in the dorms?",
    "Smoked in the dorms?",
    "Masturbated in a communal bathroom?",
    "Masturbated on campus?",
    "Had sex in the dorms?",
    "Cheated on homework?",
    "Cheated on a test?",
    "Failed an exam?",
    "Been on academic probation?",
    "Had a COAM case?",
    "Gotten kicked out of a bar?",
    "Blacked out?",
    "Had a fake ID?",
    "Heard John White Noise?",
    "Gotten a Chitt Show?",
    "Been to Beat the Clock/Midway Madness?",
    "Jumped in Mirror Lake?",
    "Got shower mold?",
    "Snuck into a bar?",
    "Been to Bulls?",
    "Drank in the Oval?",
    "Flipped a car?",
    "Thrown up in a Lyft?",
    "Done cocaine at a frat party?",
    "Had sex at a party?",
    "Sexiled a roommate?",
    "Been sexiled?",
    "Set off a fire alarm in a dorm room?"
  ];
  
  while (questions.length < 100) {
    questions.push(`Question ${questions.length + 1}?`);
  }
  
  export default questions;
  