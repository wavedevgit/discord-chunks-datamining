/** Chunk was on web.js **/
/** chunk id: 778218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk178940 = require("./178940.jsx"),
  Chunk680018 = require("./680018.jsx");
let l = {
  title: "Checkbox",
  stories: [{
    id: "checkbox",
    name: "Checkbox",
    component: function(e) {
      let {
        label: t,
        disabled: n,
        displayOnly: l,
        defaultChecked: c
      } = e, [u, d] = i.useState(c), f = i.useCallback(() => {
        d(true)
      }, []), _ = i.useCallback(() => {
        d(false)
      }, []), p = i.useCallback(() => {
        d(e => !e)
      }, []);
      return (0, r.jsxs)(a.Kq, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(o.X, {
          value: u,
          onChange: (e, t) => d(t),
          disabled: n,
          displayOnly: l,
          label: t
        }), (0, r.jsxs)(a.xv, {
          variant: "text-sm/normal",
          children: ["Current state: ", u ? "Checked" : "Unchecked"]
        }), (0, r.jsxs)(a.Kq, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(s.z, {
            variant: "secondary",
            size: "sm",
            text: "Check",
            onClick: f,
            disabled: n
          }), (0, r.jsx)(s.z, {
            variant: "secondary",
            size: "sm",
            text: "Uncheck",
            onClick: _,
            disabled: n
          }), (0, r.jsx)(s.z, {
            variant: "primary",
            size: "sm",
            text: "Toggle",
            onClick: p,
            disabled: n
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
      displayOnly: {
        type: "boolean",
        label: "Display Only",
        defaultValue: false
      },
      defaultChecked: {
        type: "boolean",
        label: "Default Checked",
        defaultValue: false
      }
    }
  }]
}