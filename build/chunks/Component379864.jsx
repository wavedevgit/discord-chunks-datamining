/** Chunk was on 66548 **/
/** chunk id: 379864, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  J: () => c
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk30717 = require("./30717.jsx"),
  Chunk895070 = require("./895070.jsx"),
  Chunk632140 = require("./632140.jsx"),
  Chunk125455 = require("./125455.jsx"),
  Chunk966649 = require("./966649.jsx"),
  Chunk755721 = require("./755721.js");
let c = {
  title: "VoidRadioGroup",
  stories: [{
    id: "voidradiogroup",
    name: "VoidRadioGroup",
    component: function(e) {
      let {
        optionCount: l,
        size: t,
        disabled: c,
        orientation: b,
        radioPosition: p,
        withTransparentBackground: y,
        label: m,
        description: f,
        withDescriptions: v,
        withIcons: h
      } = e, [x, g] = n.useState("option1"), O = [o.d, i.A, r.x, s.e, u.U], j = Array.from({
        length: l
      }, (e, l) => ({
        value: "option".concat(l + 1),
        name: "Option ".concat(l + 1),
        description: v ? "This is a description for option ".concat(l + 1) : true,
        icon: h ? O[l % O.length] : true
      }));
      return (0, a.jsx)(d.Gu, {
        value: x,
        onChange: e => {
          let {
            value: l
          } = e;
          return g(l)
        },
        options: j,
        size: t,
        disabled: c,
        orientation: b,
        radioPosition: p,
        withTransparentBackground: y,
        label: m,
        description: f
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