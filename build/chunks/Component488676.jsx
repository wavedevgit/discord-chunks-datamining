/** Chunk was on web.js **/
/** chunk id: 488676, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk30717 = require("./30717.jsx"),
  Chunk895070 = require("./895070.jsx"),
  Chunk632140 = require("./632140.jsx"),
  Chunk966649 = require("./966649.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk538534 = require("./538534.jsx"),
  Chunk159691 = require("./159691.js");
let f = {
  title: "RadioGroup",
  stories: [{
    id: "radiogroup",
    name: "RadioGroup",
    component: function(e) {
      let {
        disabled: t,
        optionCount: n,
        label: f,
        withDescriptions: _,
        withIcons: p
      } = e, [h, m] = i.useState(), g = i.useMemo(() => {
        let e = [s.x, o.A, a.d, l.U];
        return [{
          name: "Option 1",
          value: "option1",
          desc: _ ? "This is the first option with some descriptive text" : null,
          icon: p ? e[0] : true
        }, {
          name: "Option 2",
          value: "option2",
          desc: _ ? "This is the second option with different content" : null,
          icon: p ? e[1] : true
        }, {
          name: "Option 3",
          value: "option3",
          desc: _ ? "This is the third option for comparison" : null,
          icon: p ? e[2] : true
        }, {
          name: "Option 4",
          value: "option4",
          desc: _ ? "This is the fourth and final option" : null,
          icon: p ? e[3] : true
        }, {
          name: "Option 5",
          value: "option5",
          desc: _ ? "This is the fifth option" : null,
          icon: p ? e[4] : true
        }].slice(0, Math.max(1, Math.min(5, n)))
      }, [n, _, p]), E = i.useCallback(e => {
        m(e)
      }, []), b = i.useCallback(() => {
        g.length > 0 && m(g[0].value)
      }, [g]), y = i.useCallback(() => {
        g.length > 0 && m(g[g.length - 1].value)
      }, [g]), O = i.useCallback(() => {
        m(true)
      }, []);
      return (0, r.jsxs)(c.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(u.E, {
          value: h,
          label: f,
          onChange: E,
          options: g,
          disabled: t
        }), (0, r.jsxs)(c.xvT, {
          variant: "text-sm/normal",
          children: ["Current selection: ", "string" == typeof h && "" !== h ? h : "None"]
        }), (0, r.jsxs)(c.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(d.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select First",
            onClick: b,
            disabled: t || 0 === g.length
          }), (0, r.jsx)(d.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select Last",
            onClick: y,
            disabled: t || 0 === g.length
          }), (0, r.jsx)(d.zxk, {
            variant: "primary",
            size: "sm",
            text: "Clear",
            onClick: O,
            disabled: t
          })]
        })]
      })
    },
    controls: {
      label: {
        type: "text",
        label: "Label",
        defaultValue: "Radio Group"
      },
      disabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      optionCount: {
        type: "number",
        label: "Number of Options (max 5)",
        defaultValue: 3
      },
      withDescriptions: {
        type: "boolean",
        label: "Show Descriptions",
        defaultValue: true
      },
      withIcons: {
        type: "boolean",
        label: "Show Icons",
        defaultValue: false
      }
    }
  }]
}