/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
!function(window){"use strict";function classReg(className){return RegExp("(^|\\s+)"+className+"(\\s+|$)")}function toggleClass(elem,c){var fn=hasClass(elem,c)?removeClass:addClass;fn(elem,c)}var hasClass,addClass,removeClass;"classList"in document.documentElement?(hasClass=function(elem,c){return elem.classList.contains(c)},addClass=function(elem,c){elem.classList.add(c)},removeClass=function(elem,c){elem.classList.remove(c)}):(hasClass=function(elem,c){return classReg(c).test(elem.className)},addClass=function(elem,c){hasClass(elem,c)||(elem.className=elem.className+" "+c)},removeClass=function(elem,c){elem.className=elem.className.replace(classReg(c)," ")});var classie={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass};"function"==typeof define&&define.amd?define(classie):window.classie=classie}(window);