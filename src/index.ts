import { Lexer } from "./lexer"
import { Parser } from "./parser"

let code = `let ab = 88 "" func hey(){}`


let Interpreter = new Lexer(code);

let tok = Interpreter.Tokenize();


console.log(tok)
let parser= new Parser(tok);

parser.parse()