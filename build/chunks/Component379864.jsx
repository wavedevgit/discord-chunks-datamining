/** Chunk was on web.js **/
/** chunk id: 379864, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => d
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk30717 = require("./30717.jsx"),
  Chunk895070 = require("./895070.jsx"),
  Chunk632140 = require("./632140.jsx"),
  Chunk125455 = require("./125455.jsx"),
  Chunk966649 = require("./966649.jsx"),
  Chunk755721 = require("./755721.js");
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
        label: m,
        description: h,
        withDescriptions: g,
        withIcons: E
      } = e, [b, y] = i.useState("option1"), O = [a.d, o.A, s.x, l.e, c.U], v = Array.from({
        length: t
      }, (e, t) => ({
        value: "option".concat(t + 1),
        name: "Option ".concat(t + 1),
        description: g ? "This is a description for option ".concat(t + 1) : true,
        icon: E ? O[t % O.length] : true
      }));
      return (0, r.jsx)(u.Gu, {
        value: b,
        onChange: e => {
          let {
            value: t
          } = e;
          return y(t)
        },
        options: v,
        size: n,
        disabled: d,
        orientation: f,
        radioPosition: p,
        withTransparentBackground: _,
        label: m,
        description: h
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