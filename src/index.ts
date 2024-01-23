import { Lexer } from "./lexer"
import { Parser } from "./parser";

let code = `let ab = 88`


let intre = new Lexer(code);

let tok = intre.Tokenize();


console.log(tok)
let par= new Parser(tok);

par.parse()