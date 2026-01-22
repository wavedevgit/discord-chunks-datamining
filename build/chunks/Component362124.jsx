/** Chunk was on web.js **/
/** chunk id: 362124, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => c
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk934551 = require("./934551.js"),
  Chunk158954 = require("./158954.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js");
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
      } = e, [f, p] = i.useState(false), _ = i.useCallback(() => {
        p(true)
      }, []), h = i.useCallback(() => {
        p(false)
      }, []), m = i.useCallback(() => {
        p(e => !e)
      }, []);
      return (0, r.jsxs)(s.BJc, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(l.Checkbox, {
          checked: f,
          onChange: e => p(e),
          disabled: c,
          label: t,
          description: null != n || "" === n ? n : true,
          value: "checkbox-value",
          labelType: u,
          leadingIcon: d ? a.CircleInformationIcon : true
        }), (0, r.jsxs)(s.EYj, {
          variant: "text-sm/normal",
          children: ["Current state: ", f ? "Checked" : "Unchecked"]
        }), (0, r.jsxs)(s.BJc, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(o.$nd, {
            variant: "secondary",
            size: "sm",
            text: "Check",
            onClick: _,
            disabled: c
          }), (0, r.jsx)(o.$nd, {
            variant: "secondary",
            size: "sm",
            text: "Uncheck",
            onClick: h,
            disabled: c
          }), (0, r.jsx)(o.$nd, {
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