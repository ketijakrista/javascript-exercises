/**
 * Bob
 *
 * Bob is a lackadaisical teenager. In conversation, his responses are very limited.
 *
 * Bob answers 'Sure.' if you ask him a question.
 *
 * He answers 'Whoa, chill out!' if you yell at him.
 *
 * He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.
 *
 * He says 'Fine. Be that way!' if you address him without actually saying anything.
 *
 * He answers 'Whatever.' to anything else.
 */

function hey(str) {
  let arr = str
    .toString()
    .replace(/\n/g, "")
    .replace(/\r/g, "")
    .replace(/\t/g, "")
    .replace(/ /g, "")
    .replace(/,/g, "")
    .split("");
  let arr2 = str
    .toString()
    .replace(/\n/g, "")
    .replace(/\r/g, "")
    .replace(/\t/g, "")
    .replace(/ /g, "")
    .replace(/,/g, "")
    .replace("?", "");

  if (
    arr2 === arr2.toUpperCase() &&
    arr[arr.length - 1] === "?" &&
    !/[^a-zA-Z]/.test(arr2) == true
  ) {
    return "Calm down, I know what I'm doing!";
  } else if (arr[arr.length - 1] === "?") {
    return "Sure.";
  } else if (
    arr2 === arr2.toUpperCase() &&
    arr.length !== 0 &&
    arr2 != parseInt(arr2)
  ) {
    return "Whoa, chill out!";
  }

  if (arr.length === 0) {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
}

module.exports = hey;
