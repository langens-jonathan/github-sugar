import Ember from 'ember';
import layout from '../templates/components/github-readme-display';

export default Ember.Component.extend({
    layout: layout,

    allowTagSelection: false,

    id: void 0,

    readme: '',

    readmeDisplay: Ember.computed('readme', 'selectedVersion', function()
				  {
				      return this.get('readme')+ " ";
				  }),

    selectedVersion: '',

    readmeArray: Ember.A(),

    blacklistedTags: Ember.A(),

    didInsertElement: function()
    {
	this.findReadmeLocation(this.get('id'));
    },

    findReadmeLocation: function() {
	// first reset the readme map to an empty map
	this.set('readme', {});

	// if we dissallow tags for selecting a versioned readme
	// this means that we will fetch only the current readme
	if(this.get('allowTagSelection') === false)
	{
	    var result = Ember.ArrayProxy.create({content: []});
	    $.ajax({
		url: 'https://api.github.com/repos/' + this.get('id') + '/readme',
		type: 'GET',
		success: (data) => {
		    this.findReadme(data.download_url, 'current');
		},
		error: function() {
		}
	    });
	}
	// else we want versions
	else
	{
	    // first we fetch all tags
	    $.ajax({
		url: 'https://api.github.com/repos/' + this.get('id') + '/tags',
		type: 'GET',
		// and then collect a readme for each tag
		success: (data) => {
		    var numberOfTags = data.length;
		    for(var i = 0; i < numberOfTags; ++i)
		    {
			if(this.get('blacklistedTags').indexOf(data[i]) > -1)
			    continue;
			var readmeurl = 'https://raw.githubusercontent.com/' + this.get('id') + '/' + data[i]['name'] + "/README.md";
			Ember.Logger.log(readmeurl);
			this.findReadme(readmeurl, data[i]['name']);
		    }
		},
		error: function() {
		    Ember.Logger.log('an error has occured');
		}
	    });
	}
	return result;
    }.observes('id'),
    
    
    findReadme: function(url, tag) {
	var result = Ember.ArrayProxy.create({content: []});
	Ember.Logger.log("trying to fetch readme from: " + url);
	$.ajax({
            url: url,
            type: 'GET',
            success: (data) => {
		this.set('readme', data);
		this.get('readmeArray').pushObject({
		    'tag':tag,
		    'readme': data
		});
            },
            error: function() {
            }
	});
	return result;
    },
    actions:
    {
	selectVersion: function(version){
	    Ember.Logger.log('version ' + version + ' selected');
	    this.get('readmeArray').forEach((ro, i) => {
		if(ro.tag === version)
		{
		    this.set('readme', ro.readme + " ");
		    this.set('selectedVersion', ro.tag);
		}
	    });
	}
    }
});
