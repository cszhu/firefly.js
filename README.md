# firefly.js - An awesome project
Pretty firefly particle effect on your webpage using JS / Canvas. [Here's a live demo](http://cszhu.me/firefly).

### Customization
You can customize your firefly particles in several ways by calling the `firefly` function. This function takes in 4 arguments. Here is an example:

`firefly("landingDiv", 55, "medium", "#FFFFFF");`

* _landingDiv_ is the div you want your fireflies to appear on
* _55_ is the number of fireflies you want.
* _medium_ is the size of your fireflies. Currently there are 4 different sizes:
  * tiny
  * small
  * medium
  * big
* #FFFFFF is the color of the fireflies. It takes in hex colors.

Note you must use quotations for it to work :) 

### How To Use
Put it in your HTML page with some `<style>` tags.

*Using JQuery*
```	
$(document).ready(function() {
		firefly("id", #, "medium", "#color");
	});
```
	
*Using Javascript*
```    
window.onload = function() { 
  firefly("id", #, "big", "#003399"); 
};
```
