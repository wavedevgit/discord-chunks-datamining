/** Chunk was on web.js **/
/** chunk id: 488676, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => c
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk538534 = require("./538534.jsx"),
  Chunk159691 = require("./159691.js");
let c = {
  title: "RadioGroup",
  stories: [{
    id: "radiogroup",
    name: "RadioGroup",
    component: function(e) {
      let {
        disabled: t,
        optionCount: n,
        label: c,
        optionLabel: u,
        description: d,
        showIcons: f,
        withMixedDisabledOptions: _
      } = e, [p, h] = i.useState("option1"), m = i.useMemo(() => [{
        name: null != u ? "".concat(u, " 1") : "Option 1",
        value: "option1",
        desc: null != d || "" === d ? true : d,
        leadingIcon: f ? a.d3s : true,
        disabled: !_ && true
      }, {
        name: null != u ? "".concat(u, " 2") : "Option 2",
        value: "option2",
        desc: null != d || "" === d ? true : d,
        leadingIcon: f ? a.d3s : true,
        disabled: !!_ || true
      }, {
        name: null != u ? "".concat(u, " 3") : "Option 3",
        value: "option3",
        desc: null != d || "" === d ? true : d,
        leadingIcon: f ? a.d3s : true,
        disabled: !_ && true
      }, {
        name: null != u ? "".concat(u, " 4") : "Option 4",
        value: "option4",
        desc: null != d || "" === d ? true : d,
        leadingIcon: f ? a.d3s : true,
        disabled: !!_ || true
      }, {
        name: null != u ? "".concat(u, " 5") : "Option 5",
        value: "option5",
        desc: null != d || "" === d ? true : d,
        leadingIcon: f ? a.d3s : true,
        disabled: !_ && true
      }].slice(0, Math.max(1, Math.min(5, n))), [n, u, d, f, _]), g = i.useCallback(e => {
        h(e)
      }, []), E = i.useCallback(() => {
        m.length > 0 && h(m[0].value)
      }, [m]), b = i.useCallback(() => {
        m.length > 0 && h(m[m.length - 1].value)
      }, [m]), y = i.useCallback(() => {
        h(true)
      }, []);
      return (0, r.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(s.E, {
          value: p,
          label: c,
          onChange: g,
          options: m,
          disabled: t
        }), (0, r.jsxs)(o.xvT, {
          variant: "text-sm/normal",
          children: ["Current selection: ", "string" == typeof p && "" !== p ? p : "None"]
        }), (0, r.jsxs)(o.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(l.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select First",
            onClick: E,
            disabled: t || 0 === m.length
          }), (0, r.jsx)(l.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select Last",
            onClick: b,
            disabled: t || 0 === m.length
          }), (0, r.jsx)(l.zxk, {
            variant: "primary",
            size: "sm",
            text: "Clear",
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