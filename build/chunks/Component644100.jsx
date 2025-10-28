/** Chunk was on 66548 **/
/** chunk id: 644100, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  X: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk533426 = require("./533426.js"),
  Chunk333684 = require("./333684.js"),
  Chunk119058 = require("./119058.js"),
  Chunk634201 = require("./634201.js"),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk70989 = require("./70989.js");
let b = {
  title: "Calendar",
  stories: [{
    id: "calendar",
    name: "Calendar",
    component: function(e) {
      let {
        disabled: l,
        readOnly: t,
        showMinMax: b
      } = e, [p, y] = n.useState((0, o.Lg)((0, o.iT)())), m = n.useCallback(e => {
        y(e)
      }, []), f = n.useCallback(() => {
        y(null)
      }, []), v = n.useCallback(() => {
        y((0, o.Lg)((0, o.iT)()))
      }, []), h = n.useCallback(() => {
        y((0, i.sG)("2024-12-25"))
      }, []);
      return (0, c.K)("CalendarStory") ? (0, a.jsxs)(u.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, a.jsx)(s.f, {
          value: p,
          onChange: m,
          disabled: l,
          readOnly: t,
          minValue: b ? (0, i.sG)("2024-01-01") : true,
          maxValue: b ? (0, i.sG)("2024-12-31") : true,
          "aria-label": "Select a date"
        }), (0, a.jsxs)(u.xvT, {
          variant: "text-sm/normal",
          children: ["Selected date: ", null != p ? (0, r.default)(p.toDate((0, o.iT)()), "MMMM d, yyyy") : "None"]
        }), (0, a.jsxs)(u.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, a.jsx)(d.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Clear",
            onClick: f,
            disabled: l || t
          }), (0, a.jsx)(d.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Set Today",
            onClick: v,
            disabled: l || t
          }), (0, a.jsx)(d.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Set Dec 25",
            onClick: h,
            disabled: l || t
          })]
        })]
      }) : (0, a.jsxs)(u.M14, {
        type: "critical",
        children: ["This component is experimental and only available behind the ", (0, a.jsx)("code", {
          children: "2025-10-mana-date-inputs"
        }), " ", "experiment. Do not use this in production yet."]
      })
    },
    controls: {
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
      showMinMax: {
        type: "boolean",
        label: "Show Min/Max (2024)",
        defaultValue: false
      }
    }
  }]
}