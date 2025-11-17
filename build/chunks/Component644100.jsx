/** Chunk was on web.js **/
/** chunk id: 644100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk533426 = require("./533426.js"),
  Chunk333684 = require("./333684.js"),
  Chunk119058 = require("./119058.js"),
  Chunk634201 = require("./634201.js"),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk70989 = require("./70989.js");
let f = {
  title: "Calendar",
  stories: [{
    id: "calendar",
    name: "Calendar",
    component: function(e) {
      let {
        disabled: t,
        readOnly: n,
        showMinMax: f
      } = e, [_, p] = i.useState((0, a.Lg)((0, a.iT)())), h = i.useCallback(e => {
        p(e)
      }, []), m = i.useCallback(() => {
        p(null)
      }, []), g = i.useCallback(() => {
        p((0, a.Lg)((0, a.iT)()))
      }, []), E = i.useCallback(() => {
        p((0, o.sG)("2024-12-25"))
      }, []);
      return (0, d.K)("CalendarStory") ? (0, r.jsxs)(c.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(l.f, {
          value: _,
          onChange: h,
          disabled: t,
          readOnly: n,
          minValue: f ? (0, o.sG)("2024-01-01") : true,
          maxValue: f ? (0, o.sG)("2024-12-31") : true,
          "aria-label": "Select a date"
        }), (0, r.jsxs)(c.xvT, {
          variant: "text-sm/normal",
          children: ["Selected date: ", null != _ ? (0, s.default)(_.toDate((0, a.iT)()), "MMMM d, yyyy") : "None"]
        }), (0, r.jsxs)(c.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(u.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Clear",
            onClick: m,
            disabled: t || n
          }), (0, r.jsx)(u.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Set Today",
            onClick: g,
            disabled: t || n
          }), (0, r.jsx)(u.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Set Dec 25",
            onClick: E,
            disabled: t || n
          })]
        })]
      }) : (0, r.jsxs)(c.M14, {
        type: "critical",
        children: ["This component is experimental and only available behind the ", (0, r.jsx)("code", {
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