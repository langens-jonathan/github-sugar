import Ember from 'ember';
import layout from '../templates/components/github-readme-display';

export default Ember.Component.extend({
    layout: layout,

    id: void 0,

    readme: "",

    didInsertElement: function()
    {
	// this.findReadmeLocation(this.get('id'));
    },

    findReadmeLocation: function() {
	var result = Ember.ArrayProxy.create({content: []});
	$.ajax({
            url: 'https://api.github.com/repos/' + this.get('id') + '/readme',
            type: 'GET',
            success: (data) => {
		this.findReadme(data.download_url);
            },
            error: function() {
            }
	});
	return result;
    }.observes('id'),
    
    
    findReadme: function(url) {
	var result = Ember.ArrayProxy.create({content: []});
	Ember.Logger.log("trying to fetch readme from: " + url);
	$.ajax({
            url: url,
            type: 'GET',
            success: (data) => {
		this.set('readme', data);
            },
            error: function() {
            }
	});
	return result;
    },

});
