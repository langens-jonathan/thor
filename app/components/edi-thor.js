import Ember from 'ember';

export default Ember.Component.extend({
    value: "",
    
    filter(currentValue, event) {
	var view_element_key = Object.keys(currentValue).filter(function(key){return key.startsWith("__VIEW_ELEMENT__");}).reduce(function(acc, key){return acc+key;});
	view_element_key += ".childNodes";
	var T = Ember.get(currentValue, view_element_key);
	console.log(T);
    }
});
