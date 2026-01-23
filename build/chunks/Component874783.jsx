/** Chunk was on web.js **/
/** chunk id: 874783, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => f
}), require("./228524.js"), require("./896048.js");
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
  title: "DatePicker",
  stories: [{
    id: "date-picker",
    name: "DatePicker",
    component: function(e) {
      let {
        label: t,
        description: n,
        disabled: f,
        required: p,
        granularity: _,
        hourCycle: h,
        hideTimeZone: m,
        showMinMax: g
      } = e, [E, y] = i.useState((0, a.Ec)((0, a.Xj)())), [b, O] = i.useState(""), v = i.useCallback(e => {
        y(e), O("")
      }, []), A = i.useCallback(() => {
        y(null)
      }, []), I = i.useCallback(() => {
        y((0, a.Ec)((0, a.Xj)()))
      }, []), S = i.useCallback(() => {
        "day" === _ ? y((0, s._U)("2024-12-25")) : y((0, s.DP)("2024-12-25T15:30"))
      }, [_]), T = i.useCallback(() => {
        if (p && null == E) O("This field is required");
        else if (g && null != E) {
          let e = (0, s._U)("2024-01-01"),
            t = (0, s._U)("2024-12-31");
          (0 > E.compare(e) || E.compare(t) > 0) && O("Date must be within 2024")
        }
      }, [E, p, g]);
      return (0, d.i)("CalendarStory") ? (0, r.jsxs)(c.BJc, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(l.l, {
          label: t,
          description: "" !== n ? n : true,
          value: E,
          onChange: v,
          disabled: f,
          required: p,
          granularity: _,
          hourCycle: h,
          hideTimeZone: m,
          minValue: g ? (0, s._U)("2024-01-01") : true,
          maxValue: g ? (0, s._U)("2024-12-31") : true,
          errorMessage: b,
          helperText: null != E ? (0, o.default)(E.toDate((0, a.Xj)()), "MMMM d, yyyy") : ""
        }), (0, r.jsxs)(c.BJc, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(u.$nd, {
            variant: "secondary",
            size: "sm",
            text: "Clear",
            onClick: A,
            disabled: f
          }), (0, r.jsx)(u.$nd, {
            variant: "secondary",
            size: "sm",
            text: "Set Today",
            onClick: I,
            disabled: f
          }), (0, r.jsx)(u.$nd, {
            variant: "secondary",
            size: "sm",
            text: "Set Dec 25",
            onClick: S,
            disabled: f
          }), (0, r.jsx)(u.$nd, {
            variant: "primary",
            size: "sm",
            text: "Validate",
            onClick: T,
            disabled: f
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
      label: {
        type: "text",
        label: "Label",
        defaultValue: "Select a date"
      },
      description: {
        type: "text",
        label: "Description",
        defaultValue: "Choose your preferred date"
      },
      disabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      required: {
        type: "boolean",
        label: "Required",
        defaultValue: false
      },
      granularity: {
        type: "select",
        label: "Granularity",
        options: [{
          label: "Day",
          value: "day"
        }, {
          label: "Hour",
          value: "hour"
        }, {
          label: "Minute",
          value: "minute"
        }, {
          label: "Second",
          value: "second"
        }],
        defaultValue: "day"
      },
      hourCycle: {
        type: "select",
        label: "Hour Cycle",
        options: [{
          label: "12 Hour",
          value: 12
        }, {
          label: "24 Hour",
          value: 24
        }],
        defaultValue: 24
      },
      hideTimeZone: {
        type: "boolean",
        label: "Hide Time Zone",
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