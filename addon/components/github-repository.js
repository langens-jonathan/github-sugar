import Ember from 'ember';
import layout from '../templates/components/github-repository';

export default Ember.Component.extend({
    layout: layout,

    id: void 0,

    store: Ember.inject.service('store'),

    // flags
    showId: true,

    showLanguage: true,

    showDescription: true,

    showDescriptionIfAvailable: true,

    showHomePageIfAvailable: true,

    showSubbscriberCount: true,

    showOwnerInformation: true,

    showOwnerAvatar: true,

    showReadme: true,

    didInsertElement: function() {
	if(this.get('id') !== void 0)
	{
	    var prom = this.get('store').find('repository', this.get('id'));
	    prom.then((result) =>
		      {
			  // Ember.Logger.log(result);

			  // Ember.Logger.log(result.get('name'));
			  // Ember.Logger.log(result.get('full_name'));
			  // Ember.Logger.log(result.get('url'));
			  // Ember.Logger.log(result.get('owner'));
			  // Ember.Logger.log(result.get('owner.login'));
			  
			  this.set('repository', result);
			  this.findReadmeLocation(result.get('fullName'));
		      });
	}
    },

    findReadmeLocation: function(repoName) {
	var result = Ember.ArrayProxy.create({content: []});
	$.ajax({
            url: 'https://api.github.com/repos/' + repoName + '/readme',
            type: 'GET',
            success: (data) => {
		this.findReadme(data.download_url);
            },
            error: function() {
            }
	});
	return result;
    },


    findReadme: function(url) {
	var result = Ember.ArrayProxy.create({content: []});
	Ember.Logger.log("trying to fetch readme from: " + url);
	$.ajax({
            url: url,
            type: 'GET',
            success: (data) => {
		var repository = this.get('repository');
		repository.set('readme', data);
		this.set('repository', repository);
            },
            error: function() {
            }
	});
	return result;
    },
    
    repository:
    {
	'name': 'my-repo-name'
    }
});
