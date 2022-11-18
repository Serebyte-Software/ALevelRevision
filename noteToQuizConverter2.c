//note to quiz converter - main.c

//include headers
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define STR_LENGTH 2048

#define MAX_KEYWORDS 64

//sanitise string
void sanitiseString(char dest[], char src[]){
	//iterate through source characters
	int i;
	int index = 0;
	
	for(i = 0; i < strlen(src); i++){
		if(src[i] >= 'a' && src[i] <= 'z'){
			dest[index] = src[i] - ('a' - 'A');
			index += 1;
		} else if((src[i] >= 'A' && src[i] <= 'Z') || (src[i] >= '0' && src[i] <= '9')){
			dest[index] = src[i];
			index += 1;
		};
	};
	
	dest[index] = 0;
};

//sanitised compare
int sanitisedCompare(char str1[], char str2[]){
	//sanitise both strings
	char sstr1[STR_LENGTH];
	char sstr2[STR_LENGTH];
	
	sanitiseString(sstr1, str1);
	sanitiseString(sstr2, str2);
	
	//compare strings
	return strcmp(sstr1, sstr2);
};

//entry point
int main(){
	//randomise
	srand(time(0));
	
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
		
		//create keyword variables
		char keywords[MAX_KEYWORDS][STR_LENGTH];
		char keyword[STR_LENGTH];
		int numberOfKeywords = 0;
		
		//ask user if they would like to enter their keywords manually or from a file
		printf("\nWould you like to enter keywords from a file (F) or manually (M)?\n>>>");
		
		//ask for a list of keywords
		printf("\nPlease enter a list of keywords. Enter a blank line to finish the list:");
		
		do {
			//print prompt
			printf("\n>>> ");
			gets(keyword);
			
			//check that string is valid length (not 0)
			if(strlen(keyword) > 0){
				strcpy(keywords[numberOfKeywords], keyword);
				numberOfKeywords += 1;
			};
		} while(strlen(keyword) > 0);
		
		//write output file
		FILE * outFile = fopen("newQuiz.js", "wb");
		char line[STR_LENGTH];
		int choiceProbability = 1;
		
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
					
					//print start of line
					fprintf(outFile, "\t[\n\t\t\"");
					
					//answer
					char foundAnswers[MAX_KEYWORDS][STR_LENGTH];
					int answerIndex = 0;
					memset(foundAnswers, 0, sizeof(foundAnswers));
						
					//iterate through string and scan for keywords
					int j = 0;
					int k = 0;
					int nextSpace = 0;
					for(j = listIndex; j < strlen(line); j++){
						//check if previous character was a space 
						if((j == 0 || line[j - 1] == ' ' || line[j - 1] == '>') && line[j] != '<'){
							//reset next space
							nextSpace = -1;
							
							//line[j] is first character of new word, find next space
							for(k = j; k < strlen(line); k++){
								if(line[k] == ' ' || k == strlen(line) - 1){
									nextSpace = k;
									break;
								};
							};	
							
							//check next space
							if(nextSpace > -1){
								//null terminate string temporarily
								line[nextSpace] = 0;
								
								//create string
								char * currentWord = &line[j];
								
								//check if current word ends in non alpanumeric character
								char finalChar;
								finalChar = currentWord[strlen(currentWord) - 1]; 
								int endRemoved = 0;
								while(!((finalChar >= 'A' && finalChar <= 'Z') || (finalChar >= 'a' && finalChar <= 'z') || (finalChar >= '0' && finalChar <= '9'))){
									//set final
									endRemoved += 1;
									finalChar = currentWord[strlen(currentWord) - 1 - endRemoved];
								};
								
								currentWord[strlen(currentWord) - endRemoved] = 0;
								
								int keywordIndex = -1;
								
								//iterate through words
								for(k = 0; k < numberOfKeywords; k++){
									if(sanitisedCompare(currentWord, keywords[k]) == 0 && ((double) (rand() % 1000) / 1000.f) < choiceProbability){
										keywordIndex = k;
										break;
									};
								};
								
								//check if end removed
								if(endRemoved > 0){
									//line[nextSpace - 1] = finalChar;
									currentWord[strlen(currentWord) - 1 - endRemoved] = finalChar;
								};
								
								//check if keyword was used
								if(keywordIndex > -1){
									//add keyword to file
									strcpy(foundAnswers[answerIndex], currentWord);
									answerIndex += 1;
									
									//write keyword space to file
									fprintf(outFile, "` ");
								} else {
									//write
									fprintf(outFile, "%s ", currentWord);
								};
								
								//remove null terminator
								line[nextSpace] = ' ';
							};
						};
					};
					
					//print 
					fprintf(outFile, "\",\n\t\t\"none\",");
					
					//answer index
					for(j = 0; j < answerIndex; j++){
						//add answer to
						fprintf(outFile, "\n\t\t\"%s\",", foundAnswers[j]);
					};
					
					//print end of line
					fprintf(outFile, "\n\t],\n\n");
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