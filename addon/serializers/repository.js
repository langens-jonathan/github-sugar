import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    normalizeSingleResponse: function(store, primaryModelClass, payload, id, requestType)
    {
      // payload.data.attributes.amount = payload.data.attributes.cost.amount;
      // payload.data.attributes.amount = payload.data.attributes.cost.currency;
      
      // delete payload.data.attributes.cost;

      // Ember.Logger.log("normalize single response payload:" + payload);
      
      return this._super(...arguments);
    },

    normalize: function (modelClass, resourceHash, prop)
    {
	// Ember.Logger.log("in normalize, modelClass = " + modelClass);
	// Ember.Logger.log("in normalize, resourceHash = " + resourceHash);
	// Ember.Logger.log("in normalize, prop = " + prop);

	return this._super(...arguments);
    },

    normalizeResponse: function(store, primaryModelClass, payload, id, requestType)
    {
// 	Ember.Logger.log("in normalizeResponse, store = " + store);
// 	Ember.Logger.log("in normalizeResponse, primaryModelClass = " + primaryModelClass);
// 	Ember.Logger.log("in normalizeResponse, payload = " + payload);
// 	Ember.Logger.log("in normalizeResponse, id = " + id);
// 	Ember.Logger.log("in normalizeRespoQWERTnse, requestType = " + requestType);
// 	Ember.Logger.log(payload);

	payload.fullName = payload.full_name;
	// payload.htmlUrl = payload.url;
	// delete payload.url;
	payload.commentsUrl = payload.comments_url;
	payload.milestonesUrl = payload.milestones_url;
	payload.cloneUrl = payload.clone_url;
	payload.homepageUrl = payload.homepage;
	payload.subscribersCount = payload.subscribers_count;

	payload.branchesUrl = payload.branches_url;
	
	payload.isPrivate = payload.private;
	payload.isFork = payload.fork

	payload.ownerName = payload.owner.login;
	payload.ownerAvatarUrl = payload.owner.avatar_url;
	// payload.ownerUrl = payload.owner.url;
	payload.ownerFollowersUrl = payload.owner.followers_url;
	payload.ownerRepositoriesUrl = payload.owner.repos_url;

	payload.collaboratorsUrl = payload.collaborators_url;
	payload.teamsUrl = payload.teams_url;

	return this._super(...arguments);
    },
});
