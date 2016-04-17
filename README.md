# Github-sugar

Githug-sugar delivers components and models to interact with github.

## Installation

Add the following line to your package.json file:
```
"github-sugar":"0.0.4"
```

## Usage

### github-repository component
You can add the component to a template file like so:
```
{{github-repository id="langens-jonathan/github-sugar"}}
```
This component offers the following display options:
<table>
<tr><td>option</td><td>default</td></tr>
<tr><td>showId</td><td>false</td></tr>
<tr><td>showLanguage</td><td>true</td></tr>
<tr><td>showDescription</td><td>true</td></tr>
<tr><td>showSubscribersCount</td><td>false</td></tr>
<tr><td>showOwnerInformation</td><td>true</td></tr>
<tr><td>showOwnerAvatar</td><td>true</td></tr>
<tr><td>showReadme</td><td>true</td></tr>
</table>

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
