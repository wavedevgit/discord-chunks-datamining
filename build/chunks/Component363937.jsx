/** Chunk was on web.js **/
/** chunk id: 363937, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => d
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk933832 = require("./933832.jsx"),
  Chunk176781 = require("./176781.jsx"),
  Chunk173936 = require("./173936.jsx"),
  Chunk625903 = require("./625903.jsx"),
  Chunk972213 = require("./972213.jsx"),
  Chunk421380 = require("./421380.js");
let d = {
  title: "VoidRadioGroup",
  stories: [{
    id: "voidradiogroup",
    name: "VoidRadioGroup",
    component: function(e) {
      let {
        optionCount: t,
        size: n,
        disabled: d,
        orientation: f,
        radioPosition: p,
        withTransparentBackground: _,
        label: h,
        description: m,
        withDescriptions: g,
        withIcons: E
      } = e, [b, y] = i.useState("option1"), O = [a.A, s.x, o.q, l.Z, c.d], A = Array.from({
        length: t
      }, (e, t) => ({
        value: "option".concat(t + 1),
        name: "Option ".concat(t + 1),
        description: g ? "This is a description for option ".concat(t + 1) : true,
        icon: E ? O[t % O.length] : true
      }));
      return (0, r.jsx)(u.$d, {
        value: b,
        onChange: e => {
          let {
            value: t
          } = e;
          return y(t)
        },
        options: A,
        size: n,
        disabled: d,
        orientation: f,
        radioPosition: p,
        withTransparentBackground: _,
        label: h,
        description: m
      })
    },
    controls: {
      optionCount: {
        type: "select",
        label: "Number of Options",
        defaultValue: 3,
        options: [{
          label: "2 Options",
          value: 2
        }, {
          label: "3 Options",
          value: 3
        }, {
          label: "4 Options",
          value: 4
        }, {
          label: "5 Options",
          value: 5
        }, {
          label: "6 Options",
          value: 6
        }]
      },
      withDescriptions: {
        type: "boolean",
        label: "Show Descriptions",
        defaultValue: true
      },
      withIcons: {
        type: "boolean",
        label: "Show Icons",
        defaultValue: true
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
        defaultValue: "vertical",
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
      },
      label: {
        type: "text",
        label: "Label",
        defaultValue: "Radio Group"
      },
      description: {
        type: "text",
        label: "Description",
        defaultValue: "This is a description for the radio group"
      }
    }
  }]
}