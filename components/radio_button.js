App.RadioButtonComponent = Em.Component.extend({
  tagName: 'input',
  type: 'radio',
  attributeBindings: ['type', 'value', 'checked'],
  classNames: ['radio'],

  checked: function() {
    return this.get('value') === this.get('selection');
  }.property('selection'),

  click: function(event) {
    var val = $(this).val();
    this.set('selection', val);
  },
});
