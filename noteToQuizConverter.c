//note to quiz converter - main.c

//include headers
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define STR_LENGTH 2048

#define MAX_KEYWORDS 64

//entry point
int main(){
	//ask for quiz title
	char quizTitle[STR_LENGTH];
	printf("Please enter the title of the quiz:\n>>> ");
	gets(quizTitle);

	//ask for file name 
	char filePath[STR_LENGTH];
	printf("\n\nPlease enter the file path of the notes:\n>>> ");
	gets(filePath);

	//attempt to open file
	FILE * inFile = fopen(filePath, "rb");
	
	//check that file exists
	if(inFile){
		//opened file
		printf("\nSuccessfully opened file:\n");
		
		//write output file
		FILE * outFile = fopen("newQuiz.js", "wb");
		char line[STR_LENGTH];
		
		//output file text
		fprintf(outFile, "var title = \"%s\";\n", quizTitle);
		fprintf(outFile, "var quiz = [\n");
		
		int i = 0;
		
		while(fgets(line, STR_LENGTH, inFile) != 0){
			//check for <li> character
			int listIndex = -1;
			
			for(i = 0; i < strlen(line) - 3; i++){
				//search for list index
				if(line[i] == '<' && line[i + 1] == 'l' && line[i + 2] =='i' && line[i + 3] == '>'){
					//start of note has been found
					listIndex = i + 4;
					char * lineStart = line + listIndex;
					line[strlen(line) - 7] = 0;
					
					//print start of question
					fprintf(outFile, "\t[\n\t\t\"%s\",\n\t\t\"none\",\n\t\t\"\",\n\t\t\"\"\n\t],\n\n", lineStart);
					break;
				};
			};
		};
		
		//print closing bracket
		fprintf(outFile, "];");
		
		fclose(outFile);
		fclose(inFile);
	} else {
		printf("\nError - could not open file!");
	};
	
	//read notes from file 
	return 0;
};