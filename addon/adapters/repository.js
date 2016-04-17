// import DS from 'ember-data';

// export default DS.RESTAdapter.extend({
// });

import DS from 'ember-data';
import Ember from 'ember';

export default DS.Adapter.extend({
    host: 'https://api.github.com',

    findRecord: function(store, type, id, snapshot)
    {
	var url = [this.get('host'), 'repos', id].join('/');

	return new Ember.RSVP.Promise(function(resolve, reject)
	{
	    Ember.$.getJSON(url).then(function(data)
	    {
		Ember.run(null, resolve, data);
	    },
				      function(jqXHR)
	    {
		jqXHR.then = null; // tame jQuery's ill mannered promises
		Ember.run(null, reject, jqXHR);
	    });
	});
    }
});
