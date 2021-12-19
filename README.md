### CommerceCore task (for junior front-end position)
 Approximate stack: Vue V3, json-server, SCSS, Bootstrap (wasn't necessary),
 
## About
My first priority is always new experience and knowledge, therefore I choose to get out of my comfort zone and tried to execute the task in framework I am not familiar with at all.

## Ways to improve and self-reflection
 * Figma design was a bit inconsistent (opened and closed variant parts in the design had different paddings). Also when everybody had right to edit, design was tampered.
 * Fonts are off because I do not really know how to use same font as in Figma. (My attempt was to export .ttf file from figma).
 * I need a bit more beforehand planning and better time tracking habits.
 * Tested only on Chrome and Firefox (Safari test would also be important).  
 * My code probably will be lacking best practices and unwritten rules of VUE (since YouTube was my teacher). 
 * I am pretty sure that splitting the whole page in more individual components would have been better (for later repurposing and easier management).
 * It was definitely not necessary to reinvent the wheel and make form validation by hand (better to use libraries like Vuelidate), but I choose this path because it was a good place to familiarize with the framework's capabilities. But with that, problems occurred: 
1. Credit card (*) and CVV info button are not functional for know (not sure what was the functionality expected). 
2. Error messages when closed/opened pushes other form components down (it is not aesthetically pleasing).

  

## Project setup
```
npm install
```

### Starting the API
```
npm run json-server
```

### Starting Vue Application
```
npm run serve
```

