# LiteScript

# Overview
Welcome to the LiteScript Interpreter, a project dedicated to building an interpreter for the LiteScript programming language using TypeScript. LiteScript is designed to be a lightweight and user-friendly language, providing an easy-to-understand syntax while maintaining powerful capabilities.

```bash
import { Lexer } from "./lexer"
import { Parser } from "./parser"

let code = `let ab = 88`


let Interpreter = new Lexer(code);

let tok = Interpreter.Tokenize();


console.log(tok)
let parser= new Parser(tok);

parser.parse()

```