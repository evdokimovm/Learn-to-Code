function truncate(string, number) {
  if(string.length > number){
    string = string.slice(0,number-3);
    string += "...";
  }
  return string;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
