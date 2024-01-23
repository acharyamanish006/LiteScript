import { Token, Token_Types } from "./token_Types";

class Parser{
    Token_List: Array<Token>
    currentIndex = 0;
    Token_List_Len:number
    constructor(tokenList:Array<Token>){
        this.Token_List = tokenList;
        this.Token_List_Len = tokenList.length;

    }

    public advance(){
        this.currentIndex++;
    }

    public match(token_Type: Token_Types):boolean{
        return(token_Type == this.Token_List[this.currentIndex].type)
    }

    public variable_Declaration(){
        if(!(this.Token_List[this.currentIndex].type == Token_Types.TOK_IDENTIFIER)){
            return
        }
        console.log("TOK_IDENTIFIER",this.Token_List[this.currentIndex]);
        this.advance();
        if(!(this.Token_List[this.currentIndex].type == Token_Types.TOK_EQUAL)){
            return
        }
        console.log("TOK_EQUAL",this.Token_List[this.currentIndex]);
        this.advance();
        if(!(this.Token_List[this.currentIndex].type == Token_Types.TOK_NUMBER)){
            return
        }
        console.log("TOK_NUMBER",this.Token_List[this.currentIndex]);
        this.advance();
        console.log("variable declaration completed");

    }



    public function_Declaration(){

    }

    public parse(){
        for(this.currentIndex;this.currentIndex< this.Token_List_Len;this.currentIndex++){
            switch(this.Token_List[this.currentIndex].type){
                case Token_Types.TOK_LET:
                    console.log("Let found");
                    this.advance();
                    this.variable_Declaration();
                    break;
                default:
                    console.log(`Unknown token ${this.Token_List[this.currentIndex]}`);
                    return
            }
        }
    }
}

export {Parser}