/** Chunk was on web.js **/
/** chunk id: 239090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => o
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js");
let o = {
  title: "Switch",
  stories: [{
    id: "baseSwitch",
    name: "BaseSwitch",
    component: function(e) {
      let {
        disabled: t,
        hasIcon: n,
        label: o,
        description: s,
        required: l,
        errorMessage: c
      } = e, [u, d] = i.useState(false);
      return (0, r.jsx)(a.kcT, {
        label: o,
        description: s,
        required: l,
        errorMessage: c,
        hasIcon: n,
        onChange: d,
        disabled: t,
        checked: u
      })
    },
    controls: {
      disabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      label: {
        type: "text",
        label: "Label",
        defaultValue: "Always underline links"
      },
      description: {
        type: "text",
        label: "Description",
        defaultValue: "Make links to websites, help articles, and other pages stand out more by underlining them."
      },
      required: {
        type: "boolean",
        label: "Required",
        defaultValue: false
      },
      errorMessage: {
        type: "text",
        label: "Error Message",
        defaultValue: ""
      },
      hasIcon: {
        type: "boolean",
        label: "Has Icon",
        defaultValue: false
      }
    }
  }]
}