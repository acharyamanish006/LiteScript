enum Token_Types{
    TOK_IDENTIFIER,
    TOK_LET,
    TOK_NUMBER,
    TOK_STRING,
    TOK_EQUAL,

}

class Token{
    type: Token_Types;
    value: string | undefined;


    constructor(type:Token_Types,value:string|undefined){
        this.type = type;
        this.value = value;
    }
}


export {Token_Types,Token}