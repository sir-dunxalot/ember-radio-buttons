This is a simple radio button component for Ember.js.

Setup
------

There are three files needed:

- components/radio_buttons.js
- components/radio_button.js
- templates/components/radio-buttons.hbs

Usage
------

In your view:

```
App.WhateverController = Em.View.extend({
  dateOffset: 'all', // Default
  dateRanges: [
    {label: 'D', value: 'days'},
    {label: 'W', value: 'weeks'},
    {label: 'M', value: 'months'},
    {label: 'All', value: 'all'}, // Default
  ],
  
})
```

In your template:

```handlebars
{{radio-buttons content=dataRanges value=dateOffset}}
```
