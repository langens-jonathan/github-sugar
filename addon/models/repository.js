import DS from 'ember-data';

export default DS.Model.extend({
    // describing the repo
    name: DS.attr('string'),
    fullName: DS.attr('string'),
    description: DS.attr('string'),
    htmlUrl: DS.attr('string'),
    commentsUrl: DS.attr('string'),
    milestonesUrl: DS.attr('string'),
    cloneUrl: DS.attr('string'),
    homepageUrl: DS.attr('string'),
    subscribersCount: DS.attr('number'),
    language: DS.attr('string'),

    // branches url
    branchesUrl: DS.attr('string'),

    // repo flags
    isPrivate: DS.attr('boolean'),
    isFork: DS.attr('boolean'),
    
    
    // describing the owner
    ownerName: DS.attr('string'),
    ownerAvatarUrl: DS.attr('string'),
    ownerUrl: DS.attr('string'),
    ownerFollowersUrl: DS.attr('string'),
    ownerReposUrl: DS.attr('string'),

    // collaboborators
    collaboratorsUrl: DS.attr('string'),
    teamsUrl: DS.attr('string'),
});
