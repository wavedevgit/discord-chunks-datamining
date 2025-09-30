/** Chunk was on web.js **/
/** chunk id: 672589, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk35916 = require("./35916.jsx"),
  Chunk231338 = require("./231338.js");
let o = [{
    label: "Aardvark",
    value: "aardvark",
    id: "aardvark"
  }, {
    label: "Cat",
    value: "cat",
    id: "cat"
  }, {
    label: "Dog",
    value: "dog",
    id: "dog"
  }, {
    label: "Kangaroo",
    value: "kangaroo",
    id: "kangaroo"
  }, {
    label: "Panda",
    value: "panda",
    id: "panda"
  }, {
    label: "Snake",
    value: "snake",
    id: "snake",
    disabled: true
  }],
  s = {
    title: "ListBox",
    stories: [{
      id: "listbox",
      name: "ListBox",
      component: function(e) {
        let {
          selectionMode: t,
          required: n,
          shouldFocusWrap: s
        } = e;
        return (0, r.jsx)(i.w, {
          selectionMode: t,
          required: n,
          shouldFocusWrap: s,
          items: o,
          onSelectionChange: a.dG
        })
      },
      controls: {
        selectionMode: {
          label: "SelectionType",
          type: "select",
          options: [{
            label: "Single",
            value: "single"
          }, {
            label: "Multiple",
            value: "multiple"
          }],
          defaultValue: "single"
        },
        required: {
          label: "Required",
          type: "boolean",
          defaultValue: false
        },
        shouldFocusWrap: {
          label: "ShouldFocusWrap",
          type: "boolean",
          defaultValue: false
        }
      }
    }]
  }