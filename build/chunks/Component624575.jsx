/** Chunk was on web.js **/
/** chunk id: 624575, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk352404 = require("./352404.js"),
  Chunk928231 = require("./928231.js"),
  Chunk961345 = require("./961345.js"),
  Chunk610479 = require("./610479.js"),
  Chunk158954 = require("./158954.js"),
  Chunk732955 = require("./732955.js"),
  Chunk996334 = require("./996334.js");
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
      } = e, [p, _] = i.useState((0, a.Ec)((0, a.Xj)())), h = i.useCallback(e => {
        _(e)
      }, []), m = i.useCallback(() => {
        _(null)
      }, []), g = i.useCallback(() => {
        _((0, a.Ec)((0, a.Xj)()))
      }, []), E = i.useCallback(() => {
        _((0, o._U)("2024-12-25"))
      }, []);
      return (0, d.i)("CalendarStory") ? (0, r.jsxs)(c.BJc, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(l.V, {
          value: p,
          onChange: h,
          disabled: t,
          readOnly: n,
          minValue: f ? (0, o._U)("2024-01-01") : true,
          maxValue: f ? (0, o._U)("2024-12-31") : true,
          "aria-label": "Select a date"
        }), (0, r.jsxs)(c.EYj, {
          variant: "text-sm/normal",
          children: ["Selected date: ", null != p ? (0, s.default)(p.toDate((0, a.Xj)()), "MMMM d, yyyy") : "None"]
        }), (0, r.jsxs)(c.BJc, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(u.$nd, {
            variant: "secondary",
            size: "sm",
            text: "Clear",
            onClick: m,
            disabled: t || n
          }), (0, r.jsx)(u.$nd, {
            variant: "secondary",
            size: "sm",
            text: "Set Today",
            onClick: g,
            disabled: t || n
          }), (0, r.jsx)(u.$nd, {
            variant: "secondary",
            size: "sm",
            text: "Set Dec 25",
            onClick: E,
            disabled: t || n
          })]
        })]
      }) : (0, r.jsxs)(c.wx6, {
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