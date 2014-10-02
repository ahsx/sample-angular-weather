APPNAME = 'WeatherApp';

angular
	.module(APPNAME, ['ui.router', 'ngAnimate'])
;

// 
// 	Keys mapping
// 
function Keyboard(){}
Keyboard.keys = [];

Keyboard.keys[13] = "enter";
Keyboard.keys[8] = "backspace";
Keyboard.keys[9] = "tab";
Keyboard.keys[13] = "enter";		
Keyboard.keys[16] = "shift";		
Keyboard.keys[17] = "ctrl";		
Keyboard.keys[18] = "alt";
Keyboard.keys[19] = "pause";	
Keyboard.keys[20] = "capslock"	
Keyboard.keys[27] = "escape";		
Keyboard.keys[32] = "space";		
Keyboard.keys[33] = "pageup";		
Keyboard.keys[34] = "pagedown";	
Keyboard.keys[35] = "end";
Keyboard.keys[36] = "home";		
Keyboard.keys[37] = "leftarrow"; 	
Keyboard.keys[38] = "uparrow"; 	
Keyboard.keys[39] = "rightarrow"; 	
Keyboard.keys[40] = "downarrow";	
Keyboard.keys[45] = "insert";		
Keyboard.keys[46] = "delete";		

Keyboard.keys[48] = "0";
Keyboard.keys[49] = "1";
Keyboard.keys[50] = "2";
Keyboard.keys[51] = "3";
Keyboard.keys[52] = "4";
Keyboard.keys[53] = "5";
Keyboard.keys[54] = "6";
Keyboard.keys[55] = "7";
Keyboard.keys[56] = "8";
Keyboard.keys[57] = "9";

Keyboard.keys[65] = "a";
Keyboard.keys[66] = "b";
Keyboard.keys[67] = "c";
Keyboard.keys[68] = "d";
Keyboard.keys[69] = "e";
Keyboard.keys[70] = "f";
Keyboard.keys[71] = "g";
Keyboard.keys[72] = "h";
Keyboard.keys[73] = "i";
Keyboard.keys[74] = "j";
Keyboard.keys[75] = "k";
Keyboard.keys[76] = "l";
Keyboard.keys[77] = "m";
Keyboard.keys[78] = "n";
Keyboard.keys[79] = "o";
Keyboard.keys[80] = "p";
Keyboard.keys[81] = "q";
Keyboard.keys[82] = "r";
Keyboard.keys[83] = "s";
Keyboard.keys[84] = "t";
Keyboard.keys[85] = "u";
Keyboard.keys[86] = "v";
Keyboard.keys[87] = "w";
Keyboard.keys[88] = "x";
Keyboard.keys[89] = "y";
Keyboard.keys[90] = "z";

Keyboard.keys[97] = "a"; 
Keyboard.keys[98] = "b"; 
Keyboard.keys[99] = "c"; 
Keyboard.keys[100] = "d"; 
Keyboard.keys[101] = "e"; 
Keyboard.keys[102] = "f"; 
Keyboard.keys[103] = "g"; 
Keyboard.keys[104] = "h"; 
Keyboard.keys[105] = "i"; 
Keyboard.keys[106] = "j"; 
Keyboard.keys[107] = "k"; 
Keyboard.keys[108] = "l"; 
Keyboard.keys[109] = "m"; 
Keyboard.keys[110] = "n"; 
Keyboard.keys[111] = "o"; 
Keyboard.keys[112] = "p"; 
Keyboard.keys[113] = "q"; 
Keyboard.keys[114] = "r"; 
Keyboard.keys[115] = "s"; 
Keyboard.keys[116] = "t"; 
Keyboard.keys[117] = "u"; 
Keyboard.keys[118] = "v"; 
Keyboard.keys[119] = "w"; 
Keyboard.keys[120] = "x"; 
Keyboard.keys[121] = "y"; 
Keyboard.keys[122] = "z"; 

/**
 *	Find the caracter associated with a key code
 *
 *	@param code int
 *	@return String
 **/
Keyboard.find = function( code )
{
	return Keyboard.keys[code];
}

/**
 *	Is the given key code associated with a letter
 *
 *	@param code int
 *	@return Boolean
 **/
Keyboard.isLetter = function( code )
{
	return ( (code >= 65 &&  code <= 90) || (code >=97 && code <= 122) )
}
