/** Chunk was on web.js **/
/** chunk id: 778218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => c
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js");
let c = {
  title: "Checkbox",
  stories: [{
    id: "checkbox",
    name: "Checkbox",
    component: function(e) {
      let {
        label: t,
        description: n,
        disabled: c,
        labelType: u,
        showIcons: d
      } = e, [f, _] = i.useState(false), p = i.useCallback(() => {
        _(true)
      }, []), h = i.useCallback(() => {
        _(false)
      }, []), m = i.useCallback(() => {
        _(e => !e)
      }, []);
      return (0, r.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(l.Checkbox, {
          checked: f,
          onChange: e => _(e),
          disabled: c,
          label: t,
          description: null != n || "" === n ? n : true,
          value: "checkbox-value",
          labelType: u,
          leadingIcon: d ? a.d3s : true
        }), (0, r.jsxs)(o.xvT, {
          variant: "text-sm/normal",
          children: ["Current state: ", f ? "Checked" : "Unchecked"]
        }), (0, r.jsxs)(o.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(s.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Check",
            onClick: p,
            disabled: c
          }), (0, r.jsx)(s.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Uncheck",
            onClick: h,
            disabled: c
          }), (0, r.jsx)(s.zxk, {
            variant: "primary",
            size: "sm",
            text: "Toggle",
            onClick: m,
            disabled: c
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