/** Chunk was on web.js **/
/** chunk id: 526940, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk921349 = require("./921349.jsx"),
  Chunk619307 = require("./619307.jsx"),
  Chunk748585 = require("./748585.js");
let l = [{
  value: "red",
  label: "Red"
}, {
  value: "green",
  label: "Green"
}, {
  value: "blue",
  label: "Blue"
}, {
  value: "yellow",
  label: "Yellow"
}, {
  value: "purple",
  label: "Purple"
}, {
  value: "orange",
  label: "Orange"
}, {
  value: "pink",
  label: "Pink"
}, {
  value: "brown",
  label: "Brown"
}];

function c(e) {
  let {
    isDisabled: t,
    placeholder: n,
    look: a,
    clearable: s,
    filter: c
  } = e, [u, d] = i.useState("blue");
  return (0, r.jsx)(o.V, {
    value: u,
    onChange: d,
    options: l,
    placeholder: n,
    isDisabled: t,
    look: a,
    clearable: s,
    filter: c
  })
}
let u = {
  title: "Select",
  stories: [{
    id: "select",
    name: "Select",
    component: function(e) {
      let {
        isDisabled: t,
        placeholder: n,
        look: o,
        maxVisibleItems: s
      } = e, [c, u] = i.useState("blue");
      return (0, r.jsx)(a.q4, {
        value: c,
        onChange: u,
        options: l,
        placeholder: n,
        isDisabled: t,
        look: o,
        maxVisibleItems: s
      })
    },
    controls: {
      isDisabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      placeholder: {
        type: "text",
        label: "Placeholder",
        defaultValue: "Choose a color"
      },
      look: {
        type: "select",
        label: "Look",
        defaultValue: Chunk748585.q.FILLED,
        options: [{
          label: "Filled",
          value: Chunk748585.q.FILLED
        }, {
          label: "Custom",
          value: Chunk748585.q.CUSTOM
        }]
      },
      maxVisibleItems: {
        type: "number",
        label: "Max Visible Items",
        defaultValue: 5
      }
    }
  }, {
    id: "searchable-select",
    name: "Searchable Select",
    component: c,
    controls: {
      isDisabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      placeholder: {
        type: "text",
        label: "Placeholder",
        defaultValue: "Search for a color"
      },
      look: {
        type: "select",
        label: "Look",
        defaultValue: Chunk748585.q.FILLED,
        options: [{
          label: "Filled",
          value: Chunk748585.q.FILLED
        }, {
          label: "Custom",
          value: Chunk748585.q.CUSTOM
        }]
      },
      clearable: {
        type: "boolean",
        label: "Clearable",
        defaultValue: true
      },
      filter: {
        type: "boolean",
        label: "Filter",
        defaultValue: true
      }
    }
  }]
}