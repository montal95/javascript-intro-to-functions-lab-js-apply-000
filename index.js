const shout = str => {
  return str.toUpperCase();
}

const whisper = str => {
  return str.toLowerCase();
}

const logShout = str => {
  return console.log(shout(str));
}