/** Chunk was on web.js **/
/** chunk id: 555253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk497039 = require("./497039.jsx");
let o = {
  title: "VoidSwitch",
  stories: [{
    id: "switch",
    name: "Switch",
    component: function(e) {
      let {
        disabled: t
      } = e, [n, o] = i.useState(false);
      return (0, r.jsx)(a.T, {
        onChange: o,
        disabled: t,
        checked: n
      })
    },
    controls: {
      disabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      }
    }
  }]
}