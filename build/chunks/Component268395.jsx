/** Chunk was on web.js **/
/** chunk id: 268395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk237528 = require("./237528.jsx"),
  Chunk121327 = require("./121327.js");
let o = {
    name: "Chip",
    id: "chip",
    component: Chunk237528.v,
    controls: {
      text: {
        label: "Text",
        type: "text",
        defaultValue: "New"
      },
      variant: {
        label: "Variant",
        type: "select",
        defaultValue: "grayLight",
        options: [{
          label: "Blurple Light",
          value: "blurpleLight"
        }, {
          label: "Blurple Medium",
          value: "blurpleMedium"
        }, {
          label: "Blurple Dark",
          value: "blurpleDark"
        }, {
          label: "Purple Light",
          value: "purpleLight"
        }, {
          label: "Purple Medium",
          value: "purpleMedium"
        }, {
          label: "Purple Dark",
          value: "purpleDark"
        }, {
          label: "Green Light",
          value: "greenLight"
        }, {
          label: "Green Medium",
          value: "greenMedium"
        }, {
          label: "Green Dark",
          value: "greenDark"
        }, {
          label: "Orange Light",
          value: "orangeLight"
        }, {
          label: "Orange Medium",
          value: "orangeMedium"
        }, {
          label: "Orange Dark",
          value: "orangeDark"
        }, {
          label: "Yellow Light",
          value: "yellowLight"
        }, {
          label: "Yellow Medium",
          value: "yellowMedium"
        }, {
          label: "Yellow Dark",
          value: "yellowDark"
        }, {
          label: "Pink Light",
          value: "pinkLight"
        }, {
          label: "Pink Medium",
          value: "pinkMedium"
        }, {
          label: "Pink Dark",
          value: "pinkDark"
        }, {
          label: "Red Light",
          value: "redLight"
        }, {
          label: "Red Medium",
          value: "redMedium"
        }, {
          label: "Red Dark",
          value: "redDark"
        }, {
          label: "Gray Light",
          value: "grayLight"
        }, {
          label: "Gray Medium",
          value: "grayMedium"
        }, {
          label: "Gray Dark",
          value: "grayDark"
        }]
      }
    }
  },
  s = ["blurple", "purple", "green", "orange", "yellow", "pink", "red", "gray"],
  l = ["Light", "Medium", "Dark"],
  c = {
    title: "Chip",
    stories: [o, {
      name: "All Variants",
      id: "chip-all-variants",
      component: function() {
        return (0, r.jsx)("div", {
          className: a.lx,
          children: l.map(e => (0, r.jsxs)("div", {
            className: a.uW,
            children: [(0, r.jsx)("h3", {
              className: a.Gf,
              children: e
            }), (0, r.jsx)("div", {
              className: a.f2,
              children: s.map(t => {
                let n = "".concat(t).concat(e);
                return (0, r.jsx)(i.v, {
                  text: t,
                  variant: n
                }, n)
              })
            })]
          }, e))
        })
      }
    }]
  }