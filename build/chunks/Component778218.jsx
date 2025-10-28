/** Chunk was on 66548 **/
/** chunk id: 778218, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  _: () => u
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js");
let u = {
  title: "Checkbox",
  stories: [{
    id: "checkbox",
    name: "Checkbox",
    component: function(e) {
      let {
        label: l,
        description: t,
        disabled: u,
        labelType: d,
        showIcons: c
      } = e, [b, p] = n.useState(false), y = n.useCallback(() => {
        p(true)
      }, []), m = n.useCallback(() => {
        p(false)
      }, []), f = n.useCallback(() => {
        p(e => !e)
      }, []);
      return (0, a.jsxs)(i.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, a.jsx)(s.Checkbox, {
          checked: b,
          onChange: e => p(e),
          disabled: u,
          label: l,
          description: null != t || "" === t ? t : true,
          value: "checkbox-value",
          labelType: d,
          leadingIcon: c ? o.d3s : true
        }), (0, a.jsxs)(i.xvT, {
          variant: "text-sm/normal",
          children: ["Current state: ", b ? "Checked" : "Unchecked"]
        }), (0, a.jsxs)(i.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, a.jsx)(r.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Check",
            onClick: y,
            disabled: u
          }), (0, a.jsx)(r.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Uncheck",
            onClick: m,
            disabled: u
          }), (0, a.jsx)(r.zxk, {
            variant: "primary",
            size: "sm",
            text: "Toggle",
            onClick: f,
            disabled: u
          })]
        })]
      })
    },
    controls: {
      label: {
        type: "text",
        label: "Label",
        defaultValue: "Accept terms and conditions"
      },
      disabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      labelType: {
        type: "select",
        label: "Label Type",
        options: [{
          label: "Primary",
          value: "primary"
        }, {
          label: "Secondary",
          value: "secondary"
        }],
        defaultValue: "primary"
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
      }
    }
  }]
}