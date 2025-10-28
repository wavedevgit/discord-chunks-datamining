/** Chunk was on 66548 **/
/** chunk id: 256177, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  s: () => r
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js");
let r = {
  title: "Checkbox",
  stories: [{
    id: "void-checkbox",
    name: "Checkbox",
    component: function(e) {
      let {
        disabled: l,
        readOnly: t,
        displayOnly: r,
        type: s,
        size: u,
        align: d,
        shape: c,
        label: b
      } = e, [p, y] = n.useState(false), m = n.useCallback((e, l) => {
        y(l)
      }, []), f = n.useCallback(() => {
        y(true)
      }, []), v = n.useCallback(() => {
        y(false)
      }, []), h = n.useCallback(() => {
        y(e => !e)
      }, []);
      return (0, a.jsxs)(i.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, a.jsx)(o.$q, {
          value: p,
          onChange: m,
          disabled: l,
          readOnly: t,
          displayOnly: r,
          type: s,
          size: u,
          align: d,
          shape: c,
          children: (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            children: b
          })
        }), (0, a.jsxs)(i.Text, {
          variant: "text-sm/normal",
          children: ["Current state: ", p ? "Checked" : "Unchecked"]
        }), (0, a.jsxs)(i.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, a.jsx)(i.Button, {
            variant: "secondary",
            size: "sm",
            text: "Check",
            onClick: f,
            disabled: l || t
          }), (0, a.jsx)(i.Button, {
            variant: "secondary",
            size: "sm",
            text: "Uncheck",
            onClick: v,
            disabled: l || t
          }), (0, a.jsx)(i.Button, {
            variant: "primary",
            size: "sm",
            text: "Toggle",
            onClick: h,
            disabled: l || t
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