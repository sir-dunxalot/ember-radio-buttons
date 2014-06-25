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
  
});
```

In your template:

```handlebars
{{radio-buttons content=dataRanges value=dateOffset}}
```

The value of the radio button selected binds to the property you set as `value`.

### The `style` Option

Often, radio buttons do not look like raido buttons at all but, in fact, look like regular buttons side-by-side. You can set a style option on your component as follows... In your template:

```handlebars
{{radio-buttons content=dataRanges value=dateOffset style='true'}}
```

This will add the class `buttons-radios` to the radio buttons component element and `button-tog` to span surrounding the button label so you can target the buttons and style them [like this](//img.viralpatel.net/2013/05/radio-button-css-style.png). The CSS is, of course, left up to you. `style` is just a hook.

### With Icons

You can easily add your icon classes to each radio button if you are styling them to look like [buttons with icons](http://1.bp.blogspot.com/-Ahtwu79kQGo/UWujNAOZCMI/AAAAAAAAZPI/fCAwZcxT5uw/s1600/Amazing+Social+Media+Buttons+With+CSS.JPG)

In your view:

```
App.WhateverController = Em.View.extend({
  dateOffset: 'all', // Default
  dateRanges: [
    {label: 'D', value: 'days', icon: 'icon-day'},
    {label: 'W', value: 'weeks', icon: 'icon-week'},
    {label: 'M', value: 'months', icon: 'icon-monthly'},
    {label: 'All', value: 'all', icon: 'icon-calendar'}, // Default
  ],
  
});
```

### Cut all the crap

Obviously, this component has been tailored to my needs and CSS. The code is very easy to work with if you want to strip all the extra stuff and just use the basic radio buttons. Just remove the classNameBinding from `App.RadioButtonsComponent` and remove anything you don't need from the `radio-button.hbs` template, which contains most of the customization.
