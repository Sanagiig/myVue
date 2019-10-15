Vue.options = {
    directives: {
      bind: {}, // v-bind
      cloak: {}, // v-cloak
      el: {}, // v-el
      for: {}, // v-for
      html: {}, // v-html
      if: {}, // v-if
      for: {}, // v-for
      text: {}, // v-text
      model: {}, // v-model
      on: {}, // v-on
      show: {} // v-show
    },
    elementDirectives: {
      partial: {}, // <partial></partial> api: https://v1.vuejs.org/api/#partial
      slot: {} // <slot></slot>
    },
    filters: {  // api: https://v1.vuejs.org/api/#Filters
      capitalize: function() {}, // {{ msg | capitalize }}  ‘abc’ => ‘Abc’
      currency: function() {},
      debounce: function() {},
      filterBy: function() {},
      json: function() {},
      limitBy: function() {},
      lowercase: function() {},
      orderBy: function() {},
      pluralize: function() {},
      uppercase: function() {}
    }
}