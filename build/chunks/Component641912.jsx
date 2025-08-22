/** Chunk was on web.js **/
/** chunk id: 641912, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk437337 = require("./437337.jsx");
let o = {
  title: "Switch",
  stories: [{
    id: "switch",
    name: "Switch",
    component: function(e) {
      let {
        disabled: t
      } = e, [n, o] = i.useState(false);
      return (0, r.jsx)(a.r, {
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