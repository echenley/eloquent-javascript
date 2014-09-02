var text = "'I'm the cook,' he said, 'it's my job.'";

// first attempt - any substring surrounded by ' and [\.,]'
console.log(text.replace(/'(.+?[\.,]+)'/g, "\"$1\""));
// second attempt - any ' at beginning/end or with a non-word char next to it
console.log(text.replace(/(^|\W)'|'($|\W)/g, '$1"$2'));

// output: "I'm the cook," he said, "it's my job."
