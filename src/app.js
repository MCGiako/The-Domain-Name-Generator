window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  for (let f = 0; f < pronoun.length; f++)
    for (let g = 0; g < adj.length; g++)
      for (let h = 0; h < noun.length; h++) {
        console.log(pronoun[f] + adj[g] + noun[h] + ".com");
      }
};
