/** Chunk was on web.js **/
/** chunk id: 746539, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => s
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js");
let s = {
  title: "Switch",
  stories: [{
    id: "baseSwitch",
    name: "BaseSwitch",
    component: function(e) {
      let {
        disabled: t,
        hasIcon: n,
        label: s,
        description: o,
        required: l,
        errorMessage: c
      } = e, [u, d] = i.useState(false);
      return (0, r.jsx)(a.Ad5, {
        label: s,
        description: o,
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