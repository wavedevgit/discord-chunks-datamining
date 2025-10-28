/** Chunk was on 66548 **/
/** chunk id: 239090, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  R: () => i
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js");
let i = {
  title: "Switch",
  stories: [{
    id: "baseSwitch",
    name: "BaseSwitch",
    component: function(e) {
      let {
        disabled: l,
        hasIcon: t,
        label: i,
        description: r,
        helperText: s,
        required: u,
        errorMessage: d
      } = e, [c, b] = n.useState(false);
      return (0, a.jsx)(o.kcT, {
        label: i,
        description: r,
        helperText: s,
        required: u,
        errorMessage: d,
        hasIcon: t,
        onChange: b,
        disabled: l,
        checked: c
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
      helperText: {
        type: "text",
        label: "Helper Text",
        defaultValue: ""
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