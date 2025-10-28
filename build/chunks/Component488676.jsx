/** Chunk was on 66548 **/
/** chunk id: 488676, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  t: () => s
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js");
let s = {
  title: "RadioGroup",
  stories: [{
    id: "radiogroup",
    name: "RadioGroup",
    component: function(e) {
      let {
        disabled: l,
        optionCount: t,
        label: s,
        optionLabel: u,
        description: d,
        showIcons: c,
        withMixedDisabledOptions: b
      } = e, [p, y] = n.useState("option1"), m = n.useMemo(() => [{
        name: null != u ? "".concat(u, " 1") : "Option 1",
        value: "option1",
        desc: null != d || "" === d ? true : d,
        leadingIcon: c ? o.d3s : true,
        disabled: !b && true
      }, {
        name: null != u ? "".concat(u, " 2") : "Option 2",
        value: "option2",
        desc: null != d || "" === d ? true : d,
        leadingIcon: c ? o.d3s : true,
        disabled: !!b || true
      }, {
        name: null != u ? "".concat(u, " 3") : "Option 3",
        value: "option3",
        desc: null != d || "" === d ? true : d,
        leadingIcon: c ? o.d3s : true,
        disabled: !b && true
      }, {
        name: null != u ? "".concat(u, " 4") : "Option 4",
        value: "option4",
        desc: null != d || "" === d ? true : d,
        leadingIcon: c ? o.d3s : true,
        disabled: !!b || true
      }, {
        name: null != u ? "".concat(u, " 5") : "Option 5",
        value: "option5",
        desc: null != d || "" === d ? true : d,
        leadingIcon: c ? o.d3s : true,
        disabled: !b && true
      }].slice(0, Math.max(1, Math.min(5, t))), [t, u, d, c, b]), f = n.useCallback(e => {
        y(e)
      }, []), v = n.useCallback(() => {
        m.length > 0 && y(m[0].value)
      }, [m]), h = n.useCallback(() => {
        m.length > 0 && y(m[m.length - 1].value)
      }, [m]), x = n.useCallback(() => {
        y(true)
      }, []);
      return (0, a.jsxs)(i.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, a.jsx)(r.Eep, {
          value: p,
          label: s,
          onChange: f,
          options: m,
          disabled: l
        }), (0, a.jsxs)(i.xvT, {
          variant: "text-sm/normal",
          children: ["Current selection: ", "string" == typeof p && "" !== p ? p : "None"]
        }), (0, a.jsxs)(i.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, a.jsx)(r.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select First",
            onClick: v,
            disabled: l || 0 === m.length
          }), (0, a.jsx)(r.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select Last",
            onClick: h,
            disabled: l || 0 === m.length
          }), (0, a.jsx)(r.zxk, {
            variant: "primary",
            size: "sm",
            text: "Clear",
            onClick: x,
            disabled: l
          })]
        })]
      })
    },
    controls: {
      label: {
        type: "text",
        label: "Label",
        defaultValue: "Mana Radio Group"
      },
      disabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      optionCount: {
        type: "select",
        label: "Number of Options",
        options: [{
          label: "1",
          value: 1
        }, {
          label: "2",
          value: 2
        }, {
          label: "3",
          value: 3
        }, {
          label: "4",
          value: 4
        }, {
          label: "5",
          value: 5
        }],
        defaultValue: 3
      },
      optionLabel: {
        type: "text",
        label: "Option Label",
        defaultValue: "Option"
      },
      description: {
        type: "text",
        label: "Description",
        defaultValue: ""
      },
      showIcons: {
        type: "boolean",
        label: "Show Icons",
        defaultValue: false
      },
      withMixedDisabledOptions: {
        type: "boolean",
        label: "Mixed Disabled Options",
        defaultValue: false
      }
    }
  }]
}