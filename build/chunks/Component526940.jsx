/** Chunk was on web.js **/
/** chunk id: 526940, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk921349 = require("./921349.jsx"),
  Chunk619307 = require("./619307.jsx");
let s = [{
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
  }],
  l = {
    title: "Select",
    stories: [{
      id: "select",
      name: "Select",
      component: function(e) {
        let {
          isDisabled: t,
          placeholder: n,
          maxVisibleItems: o
        } = e, [l, c] = i.useState("blue");
        return (0, r.jsx)(a.q4, {
          value: l,
          onChange: c,
          options: s,
          placeholder: n,
          isDisabled: t,
          maxVisibleItems: o
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
        maxVisibleItems: {
          type: "number",
          label: "Max Visible Items",
          defaultValue: 5
        }
      }
    }, {
      id: "searchable-select",
      name: "Searchable Select",
      component: function(e) {
        let {
          isDisabled: t,
          placeholder: n,
          clearable: a,
          filter: l
        } = e, [c, u] = i.useState("blue");
        return (0, r.jsx)(o.V, {
          value: c,
          onChange: u,
          options: s,
          placeholder: n,
          isDisabled: t,
          clearable: a,
          filter: l
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
          defaultValue: "Search for a color"
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