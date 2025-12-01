/** Chunk was on web.js **/
/** chunk id: 406103, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => o
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js");
let o = {
  title: "CheckboxGroup",
  stories: [{
    id: "checkboxgroup",
    name: "CheckboxGroup",
    component: function(e) {
      let {
        disabled: t,
        optionCount: n,
        label: o,
        optionLabel: s,
        description: l,
        showIcons: c,
        withMixedDisabledOptions: u
      } = e, [d, f] = i.useState(["option1"]), p = i.useMemo(() => [{
        label: null != s ? "".concat(s, " 1") : "Option 1",
        value: "option1",
        description: null == l || "" === l ? true : l,
        leadingIcon: c ? a.d3s : true,
        disabled: !u && true
      }, {
        label: null != s ? "".concat(s, " 2") : "Option 2",
        value: "option2",
        description: null == l || "" === l ? true : l,
        leadingIcon: c ? a.d3s : true,
        disabled: !!u || true
      }, {
        label: null != s ? "".concat(s, " 3") : "Option 3",
        value: "option3",
        description: null == l || "" === l ? true : l,
        leadingIcon: c ? a.d3s : true,
        disabled: !u && true
      }, {
        label: null != s ? "".concat(s, " 4") : "Option 4",
        value: "option4",
        description: null == l || "" === l ? true : l,
        leadingIcon: c ? a.d3s : true,
        disabled: !!u || true
      }, {
        label: null != s ? "".concat(s, " 5") : "Option 5",
        value: "option5",
        description: null == l || "" === l ? true : l,
        leadingIcon: c ? a.d3s : true,
        disabled: !u && true
      }].slice(0, Math.max(1, Math.min(5, n))), [n, s, l, c, u]), _ = i.useCallback(e => {
        f(e)
      }, []), m = i.useCallback(() => {
        f(p.map(e => e.value))
      }, [p]), h = i.useCallback(() => {
        f([])
      }, []), g = i.useCallback(() => {
        p.length > 0 && f([p[0].value])
      }, [p]);
      return (0, r.jsxs)(a.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(a.cOn, {
          selectedValues: d,
          label: o,
          onChange: _,
          options: p,
          disabled: t
        }), (0, r.jsxs)(a.xvT, {
          variant: "text-sm/normal",
          children: ["Current selection: ", d.length > 0 ? d.join(", ") : "None"]
        }), (0, r.jsxs)(a.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(a.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select All",
            onClick: m,
            disabled: t || 0 === p.length
          }), (0, r.jsx)(a.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select First",
            onClick: g,
            disabled: t || 0 === p.length
          }), (0, r.jsx)(a.zxk, {
            variant: "primary",
            size: "sm",
            text: "Clear All",
            onClick: h,
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