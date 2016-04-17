# Github-sugar

Githug-sugar delivers components and models to interact with github.

## Installation

Add the following line to your package.json file:
```
"github-sugar":"0.0.5"
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

### github-repository-list
You can use the repository-list component as follows:
```
{{github-repository-list id="langens-jonathan"}}
```

### github-readme-display
The readme component is used like this:
```
{{github-readme-display id="langens-jonathan/github-sugar"}}
```