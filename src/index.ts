import { Lexer } from "./lexer"

let code = `let ab = "hh"`


let intre = new Lexer(code);

let tok = intre.Tokenize();

console.log(tok)