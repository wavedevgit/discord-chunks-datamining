/** Chunk was on web.js **/
/** chunk id: 256177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => s
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js");
let s = {
  title: "Checkbox",
  stories: [{
    id: "void-checkbox",
    name: "Checkbox",
    component: function(e) {
      let {
        disabled: t,
        readOnly: n,
        displayOnly: s,
        type: l,
        size: c,
        align: u,
        shape: d,
        label: f
      } = e, [p, _] = i.useState(false), m = i.useCallback((e, t) => {
        _(t)
      }, []), h = i.useCallback(() => {
        _(true)
      }, []), g = i.useCallback(() => {
        _(false)
      }, []), E = i.useCallback(() => {
        _(e => !e)
      }, []);
      return (0, r.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(a.$q, {
          "data-migration-pending": true,
          value: p,
          onChange: m,
          disabled: t,
          readOnly: n,
          displayOnly: s,
          type: l,
          size: c,
          align: u,
          shape: d,
          children: (0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            children: f
          })
        }), (0, r.jsxs)(o.Text, {
          variant: "text-sm/normal",
          children: ["Current state: ", p ? "Checked" : "Unchecked"]
        }), (0, r.jsxs)(o.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(o.Button, {
            variant: "secondary",
            size: "sm",
            text: "Check",
            onClick: h,
            disabled: t || n
          }), (0, r.jsx)(o.Button, {
            variant: "secondary",
            size: "sm",
            text: "Uncheck",
            onClick: g,
            disabled: t || n
          }), (0, r.jsx)(o.Button, {
            variant: "primary",
            size: "sm",
            text: "Toggle",
            onClick: E,
            disabled: t || n
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
      readOnly: {
        type: "boolean",
        label: "Read Only",
        defaultValue: false
      },
      displayOnly: {
        type: "boolean",
        label: "Display Only",
        defaultValue: false
      },
      type: {
        type: "select",
        label: "Type",
        defaultValue: Chunk755721.M0.DEFAULT,
        options: [{
          label: "Default",
          value: Chunk755721.M0.DEFAULT
        }, {
          label: "Inverted",
          value: Chunk755721.M0.INVERTED
        }, {
          label: "Ghost",
          value: Chunk755721.M0.GHOST
        }, {
          label: "Row",
          value: Chunk755721.M0.ROW
        }]
      },
      size: {
        type: "number",
        label: "Size",
        defaultValue: 24
      },
      align: {
        type: "select",
        label: "Alignment",
        defaultValue: Chunk755721.wb.CENTER,
        options: [{
          label: "Center",
          value: Chunk755721.wb.CENTER
        }, {
          label: "Top",
          value: Chunk755721.wb.TOP
        }]
      },
      shape: {
        type: "select",
        label: "Shape",
        defaultValue: Chunk755721.zV.BOX,
        options: [{
          label: "Box",
          value: Chunk755721.zV.BOX
        }, {
          label: "Small Box",
          value: Chunk755721.zV.SMALL_BOX
        }, {
          label: "Round",
          value: Chunk755721.zV.ROUND
        }]
      }
    }
  }]
}