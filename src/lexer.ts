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
            console.log(this.data[i])
            console.log(i,'=33')
            if(this.data[i] == ' ') {
                console.log(i)
                continue
            }

            if(this.isAlfa(this.data[i])) {

                let start_Index = i;
                console.log(i,"=42")

                while(this.isIdentifier(this.data[i])){
                    console.log(i,"=45")
                    i++
                }

                let token = this.data.substring(start_Index,i)

                if(token == "let"){
                list.push(new Token(Token_Types.TOK_LET,token))

                }
                else if(token == "func"){
                    list.push(new Token(Token_Types.TOK_FUNC,token))

                }
                else{ 
                    list.push(new Token(Token_Types.TOK_IDENTIFIER,token))
                }
                console.log(i,"=62")
                // continue
            }


            if(this.isDigit(this.data[i])) {
                console.log(i,"=68")
                let start_Index = i;

                while(this.isDigit(this.data[i])){
                    console.log(i,"=72")
                    i++
                }

                let token = this.data.substring(start_Index,i)
                list.push(new Token(Token_Types.TOK_NUMBER,token));
                console.log(i,"=78")
                // continue

            }

            switch(this.data[i]){
                case "=":
                    list.push(new Token(Token_Types.TOK_EQUAL,this.data[i]))
                    console.log(i,"=86")
                    console.log("Equal is found")
                    break
                case "{":
                    list.push(new Token(Token_Types.TOK_OPENING_BRACE,this.data[i]))
                    console.log(i,"91")
                    console.log("{ is found")
                    break
                case "}":
                    list.push(new Token(Token_Types.TOK_CLOSING_BRACE,this.data[i]))
                    console.log(i,"96")
                    console.log("} is found")
                    break
                case "(":
                    list.push(new Token(Token_Types.TOK_LEFT_PARENTHESIS,this.data[i]))
                    console.log(i,"=101")
                    console.log("( is found")
                    break
                case ")":
                    list.push(new Token(Token_Types.TOK_RIGHT_PARENTHESIS,this.data[i]))
                    console.log(i,"=106")
                    console.log(" ) is found")
                    break
                case `"`:
                    list.push(new Token(Token_Types.TOK_DOUBLE_QUOTES,this.data[i]))
                    console.log(i,"=111")
                    console.log('" is found')
                    break
                default:
                    console.log("Unknown character : "+this.data[i]);
                    console.log(i,"=116")
                    break
                
            }
        }

        return list;
    }
}

export {Lexer}