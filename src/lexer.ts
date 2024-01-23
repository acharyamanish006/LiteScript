import { Token, Token_Types } from "./token_Types";

class Lexer{
    data:string
    data_length:number
    constructor(data:string){
        this.data = data;
        this.data_length = data.length;
    }

    public isAlfa(char:string):boolean{

        return /^[a-zA-Z]$/.test(char);
    }
    public isDigit(char:string):boolean{
        return !isNaN(parseInt(char));
    }
    public isIdentifier(char:string):boolean{
        return this.isAlfa(char) || this.isDigit(char) || char == "_"
    }

    public Tokenize(): Array<Token>{
       let list:Array<Token> = [];

        for(let i=0;i<this.data_length;i++){
            if(this.data[i] == ' ') continue

            if(this.isAlfa(this.data[i])) {

                let start_Index = i;

                while(this.isIdentifier(this.data[i])){
                    i++
                }

                let token = this.data.substring(start_Index,i)

                if(token == "let"){
                list.push(new Token(Token_Types.TOK_LET,undefined))

                }

                list.push(new Token(Token_Types.TOK_IDENTIFIER,token))

                continue
            }


            if(this.isDigit(this.data[i])) {
                let start_Index = i;

                while(this.isDigit(this.data[i])){
                    i++
                }

                let token = this.data.substring(start_Index,i)
                list.push(new Token(Token_Types.TOK_NUMBER,token));
                continue

            }

            if(this.data[i] == "="){
                list.push(new Token(Token_Types.TOK_EQUAL,undefined))
                continue
            }
        }

        return list;
    }
}

export {Lexer}