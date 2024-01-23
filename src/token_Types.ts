enum Token_Types{
    TOK_IDENTIFIER,
    TOK_LET,
    TOK_FUNC,
    TOK_NUMBER,
    TOK_STRING,
    TOK_EQUAL,
    TOK_LEFT_PARENTHESIS,
    TOK_RIGHT_PARENTHESIS,
    TOK_OPENING_BRACE,
    TOK_CLOSING_BRACE,
    TOK_DOUBLE_QUOTES,
    TOK_START_DOUBLE_QUOTES,
    TOK_END_DOUBLE_QUOTES
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