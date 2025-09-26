/** Chunk was on web.js **/
/** chunk id: 406103, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk30717 = require("./30717.jsx"),
  Chunk895070 = require("./895070.jsx"),
  Chunk632140 = require("./632140.jsx"),
  Chunk966649 = require("./966649.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk709867 = require("./709867.jsx");
let f = {
  title: "CheckboxGroup",
  stories: [{
    id: "checkboxgroup",
    name: "CheckboxGroup",
    component: function(e) {
      let {
        disabled: t,
        optionCount: n,
        label: f,
        withDescriptions: _,
        withIcons: p
      } = e, [h, m] = i.useState([]), g = i.useMemo(() => {
        let e = [s.x, o.A, a.d, l.U];
        return [{
          label: "Option 1",
          value: "option1",
          description: _ ? "This is the first option with some descriptive text" : null,
          icon: p ? e[0] : true
        }, {
          label: "Option 2",
          value: "option2",
          description: _ ? "This is the second option with different content" : null,
          icon: p ? e[1] : true
        }, {
          label: "Option 3",
          value: "option3",
          description: _ ? "This is the third option for comparison" : null,
          icon: p ? e[2] : true
        }, {
          label: "Option 4",
          value: "option4",
          description: _ ? "This is the fourth and final option" : null,
          icon: p ? e[3] : true
        }, {
          label: "Option 5",
          value: "option5",
          description: _ ? "This is the fifth option" : null,
          icon: p ? e[0] : true
        }].slice(0, Math.max(1, Math.min(5, n)))
      }, [n, _, p]), E = i.useCallback(e => {
        m(e)
      }, []), b = i.useCallback(() => {
        m(g.map(e => e.value))
      }, [g]), y = i.useCallback(() => {
        m([])
      }, []), O = i.useCallback(() => {
        g.length > 0 && m([g[0].value])
      }, [g]);
      return (0, r.jsxs)(c.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(d.c, {
          value: h,
          label: f,
          onChange: E,
          options: g,
          disabled: t
        }), (0, r.jsxs)(c.xvT, {
          variant: "text-sm/normal",
          children: ["Current selection: ", h.length > 0 ? h.join(", ") : "None"]
        }), (0, r.jsxs)(c.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(u.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select All",
            onClick: b,
            disabled: t || 0 === g.length
          }), (0, r.jsx)(u.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select First",
            onClick: O,
            disabled: t || 0 === g.length
          }), (0, r.jsx)(u.zxk, {
            variant: "primary",
            size: "sm",
            text: "Clear All",
            onClick: y,
            disabled: t
          })]
        })]
      })
    },
    controls: {
      label: {
        type: "text",
        label: "Label",
        defaultValue: "Mana Checkbox Group"
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