/** Chunk was on web.js **/
/** chunk id: 208257, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk538534 = require("./538534.jsx");
let o = {
  title: "RadioGroup",
  stories: [{
    id: "radiogroup",
    name: "RadioGroup",
    component: function(e) {
      let {
        optionCount: t,
        size: n,
        disabled: o,
        orientation: s,
        radioPosition: l,
        withTransparentBackground: c
      } = e, [u, d] = i.useState("option1"), f = Array.from({
        length: t
      }, (e, t) => ({
        value: "option".concat(t + 1),
        name: "Option ".concat(t + 1)
      }));
      return (0, r.jsx)(a.Ee, {
        value: u,
        onChange: e => {
          let {
            value: t
          } = e;
          return d(t)
        },
        options: f,
        size: n,
        disabled: o,
        orientation: s,
        radioPosition: l,
        withTransparentBackground: c
      })
    },
    controls: {
      optionCount: {
        type: "number",
        label: "Option Count",
        defaultValue: 3
      },
      size: {
        type: "select",
        label: "Size",
        defaultValue: "medium",
        options: [{
          label: "Small",
          value: "small"
        }, {
          label: "Medium",
          value: "medium"
        }, {
          label: "Large",
          value: "large"
        }]
      },
      disabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      orientation: {
        type: "select",
        label: "Orientation",
        defaultValue: "horizontal",
        options: [{
          label: "Horizontal",
          value: "horizontal"
        }, {
          label: "Vertical",
          value: "vertical"
        }]
      },
      radioPosition: {
        type: "select",
        label: "Radio Position",
        defaultValue: "left",
        options: [{
          label: "Left",
          value: "left"
        }, {
          label: "Right",
          value: "right"
        }]
      },
      withTransparentBackground: {
        type: "boolean",
        label: "With Transparent Background",
        defaultValue: false
      }
    }
  }]
}