import Ember from 'ember';
import layout from '../templates/components/github-repository-list';

export default Ember.Component.extend({
    layout: layout,

    id: void 0,

    store: Ember.inject.service('store'),

    repositories: [],

    activeRepository: "",

    hasActiveRepository: false,

    didInsertElement:function()
    {
	this.tryOrganisation();
    },

    tryOrganisation: function() {
	var result = Ember.ArrayProxy.create({content: []});
	$.ajax({
            url: 'https://api.github.com/orgs/' + this.get('id') + '/repos',
            type: 'GET',
            success: (data) => {
		this.set('repositories', data);
            },
            error: () => {
		this.tryPerson();
            }
	});
	return result;

    },

    tryPerson: function() {
	var result = Ember.ArrayProxy.create({content: []});
	$.ajax({
            url: 'https://api.github.com/users/' + this.get('id') + '/repos',
            type: 'GET',
            success: (data) => {
		this.set('repositories', data);
            },
            error: function() {
            }
	});
	return result;

    },



    actions:
    {
	setActiveRepository: function(repoName)
	{
	    Ember.Logger.log('setting ' + repoName);
	    this.set('activeRepository', repoName);
	    this.set('hasActiveRepository', true);
	}
    }

});
