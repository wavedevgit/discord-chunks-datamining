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
        displayOnly: u,
        defaultChecked: d,
        groupVariant: f,
        labelType: _,
        iconPosition: p
      } = e, [h, m] = i.useState(d);
      i.useEffect(() => {
        m(d)
      }, [d]);
      let g = i.useCallback(() => {
          m(true)
        }, []),
        E = i.useCallback(() => {
          m(false)
        }, []),
        b = i.useCallback(() => {
          m(e => !e)
        }, []);
      return (0, r.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(l.XZJ, {
          checked: h,
          onChange: e => m(e),
          disabled: c,
          displayOnly: u,
          label: t,
          description: null != n || "" === n ? n : true,
          value: "checkbox-value",
          groupVariant: f,
          labelType: _,
          leadingIcon: "leading" === p ? a.d3s : true
        }), (0, r.jsxs)(o.xvT, {
          variant: "text-sm/normal",
          children: ["Current state: ", h ? "Checked" : "Unchecked"]
        }), (0, r.jsxs)(o.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(s.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Check",
            onClick: g,
            disabled: c
          }), (0, r.jsx)(s.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Uncheck",
            onClick: E,
            disabled: c
          }), (0, r.jsx)(s.zxk, {
            variant: "primary",
            size: "sm",
            text: "Toggle",
            onClick: b,
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
      displayOnly: {
        type: "boolean",
        label: "Display Only",
        defaultValue: false
      },
      defaultChecked: {
        type: "boolean",
        label: "Default Checked",
        defaultValue: false
      },
      groupVariant: {
        type: "select",
        label: "Group Variant",
        options: [{
          label: "Single",
          value: "single"
        }, {
          label: "Group",
          value: "group"
        }],
        defaultValue: "single"
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
      iconPosition: {
        type: "select",
        label: "Icon Position",
        options: [{
          label: "None",
          value: "none"
        }, {
          label: "Leading",
          value: "leading"
        }],
        defaultValue: "none"
      }
    }
  }]
}