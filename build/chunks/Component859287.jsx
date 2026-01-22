/** Chunk was on web.js **/
/** chunk id: 859287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js");
let o = {
  title: "Checkbox",
  stories: [{
    id: "void-checkbox",
    name: "Checkbox",
    component: function(e) {
      let {
        disabled: t,
        readOnly: n,
        displayOnly: o,
        type: l,
        size: c,
        align: u,
        shape: d,
        label: f
      } = e, [p, _] = i.useState(false), h = i.useCallback((e, t) => {
        _(t)
      }, []), m = i.useCallback(() => {
        _(true)
      }, []), g = i.useCallback(() => {
        _(false)
      }, []), E = i.useCallback(() => {
        _(e => !e)
      }, []);
      return (0, r.jsxs)(s.BJc, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(a.Kj, {
          "data-migration-pending": true,
          value: p,
          onChange: h,
          disabled: t,
          readOnly: n,
          displayOnly: o,
          type: l,
          size: c,
          align: u,
          shape: d,
          children: (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            children: f
          })
        }), (0, r.jsxs)(s.Text, {
          variant: "text-sm/normal",
          children: ["Current state: ", p ? "Checked" : "Unchecked"]
        }), (0, r.jsxs)(s.BJc, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(s.Button, {
            variant: "secondary",
            size: "sm",
            text: "Check",
            onClick: m,
            disabled: t || n
          }), (0, r.jsx)(s.Button, {
            variant: "secondary",
            size: "sm",
            text: "Uncheck",
            onClick: g,
            disabled: t || n
          }), (0, r.jsx)(s.Button, {
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
        defaultValue: Chunk421380.Xo.DEFAULT,
        options: [{
          label: "Default",
          value: Chunk421380.Xo.DEFAULT
        }, {
          label: "Inverted",
          value: Chunk421380.Xo.INVERTED
        }, {
          label: "Ghost",
          value: Chunk421380.Xo.GHOST
        }, {
          label: "Row",
          value: Chunk421380.Xo.ROW
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
        defaultValue: Chunk421380.ov.CENTER,
        options: [{
          label: "Center",
          value: Chunk421380.ov.CENTER
        }, {
          label: "Top",
          value: Chunk421380.ov.TOP
        }]
      },
      shape: {
        type: "select",
        label: "Shape",
        defaultValue: Chunk421380.Ib.BOX,
        options: [{
          label: "Box",
          value: Chunk421380.Ib.BOX
        }, {
          label: "Small Box",
          value: Chunk421380.Ib.SMALL_BOX
        }, {
          label: "Round",
          value: Chunk421380.Ib.ROUND
        }]
      }
    }
  }]
}