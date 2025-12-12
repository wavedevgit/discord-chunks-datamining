/** Chunk was on web.js **/
/** chunk id: 674043, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => f
}), require("./953529.js"), require("./388685.js");
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
        hourCycle: m,
        hideTimeZone: h,
        showMinMax: g
      } = e, [E, b] = i.useState((0, o.Lg)((0, o.iT)())), [y, O] = i.useState(""), v = i.useCallback(e => {
        b(e), O("")
      }, []), S = i.useCallback(() => {
        b(null)
      }, []), I = i.useCallback(() => {
        b((0, o.Lg)((0, o.iT)()))
      }, []), T = i.useCallback(() => {
        "day" === _ ? b((0, a.sG)("2024-12-25")) : b((0, a.wG)("2024-12-25T15:30"))
      }, [_]), C = i.useCallback(() => {
        if (p && null == E) O("This field is required");
        else if (g && null != E) {
          let e = (0, a.sG)("2024-01-01"),
            t = (0, a.sG)("2024-12-31");
          (0 > E.compare(e) || E.compare(t) > 0) && O("Date must be within 2024")
        }
      }, [E, p, g]);
      return (0, d.K)("CalendarStory") ? (0, r.jsxs)(c.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(l.M, {
          label: t,
          description: "" !== n ? n : true,
          value: E,
          onChange: v,
          disabled: f,
          required: p,
          granularity: _,
          hourCycle: m,
          hideTimeZone: h,
          minValue: g ? (0, a.sG)("2024-01-01") : true,
          maxValue: g ? (0, a.sG)("2024-12-31") : true,
          errorMessage: y,
          helperText: null != E ? (0, s.default)(E.toDate((0, o.iT)()), "MMMM d, yyyy") : ""
        }), (0, r.jsxs)(c.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(u.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Clear",
            onClick: S,
            disabled: f
          }), (0, r.jsx)(u.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Set Today",
            onClick: I,
            disabled: f
          }), (0, r.jsx)(u.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Set Dec 25",
            onClick: T,
            disabled: f
          }), (0, r.jsx)(u.zxk, {
            variant: "primary",
            size: "sm",
            text: "Validate",
            onClick: C,
            disabled: f
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