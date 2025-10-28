/** Chunk was on 66548 **/
/** chunk id: 406103, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  I: () => i
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js");
let i = {
  title: "CheckboxGroup",
  stories: [{
    id: "checkboxgroup",
    name: "CheckboxGroup",
    component: function(e) {
      let {
        disabled: l,
        optionCount: t,
        label: i,
        optionLabel: r,
        description: s,
        showIcons: u,
        withMixedDisabledOptions: d
      } = e, [c, b] = n.useState(["option1"]), p = n.useMemo(() => [{
        label: null != r ? "".concat(r, " 1") : "Option 1",
        value: "option1",
        description: null == s || "" === s ? true : s,
        leadingIcon: u ? o.d3s : true,
        disabled: !d && true
      }, {
        label: null != r ? "".concat(r, " 2") : "Option 2",
        value: "option2",
        description: null == s || "" === s ? true : s,
        leadingIcon: u ? o.d3s : true,
        disabled: !!d || true
      }, {
        label: null != r ? "".concat(r, " 3") : "Option 3",
        value: "option3",
        description: null == s || "" === s ? true : s,
        leadingIcon: u ? o.d3s : true,
        disabled: !d && true
      }, {
        label: null != r ? "".concat(r, " 4") : "Option 4",
        value: "option4",
        description: null == s || "" === s ? true : s,
        leadingIcon: u ? o.d3s : true,
        disabled: !!d || true
      }, {
        label: null != r ? "".concat(r, " 5") : "Option 5",
        value: "option5",
        description: null == s || "" === s ? true : s,
        leadingIcon: u ? o.d3s : true,
        disabled: !d && true
      }].slice(0, Math.max(1, Math.min(5, t))), [t, r, s, u, d]), y = n.useCallback(e => {
        b(e)
      }, []), m = n.useCallback(() => {
        b(p.map(e => e.value))
      }, [p]), f = n.useCallback(() => {
        b([])
      }, []), v = n.useCallback(() => {
        p.length > 0 && b([p[0].value])
      }, [p]);
      return (0, a.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, a.jsx)(o.cOn, {
          selectedValues: c,
          label: i,
          onChange: y,
          options: p,
          disabled: l
        }), (0, a.jsxs)(o.xvT, {
          variant: "text-sm/normal",
          children: ["Current selection: ", c.length > 0 ? c.join(", ") : "None"]
        }), (0, a.jsxs)(o.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, a.jsx)(o.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select All",
            onClick: m,
            disabled: l || 0 === p.length
          }), (0, a.jsx)(o.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select First",
            onClick: v,
            disabled: l || 0 === p.length
          }), (0, a.jsx)(o.zxk, {
            variant: "primary",
            size: "sm",
            text: "Clear All",
            onClick: f,
            disabled: l
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