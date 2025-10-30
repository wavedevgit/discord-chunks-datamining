/** Chunk was on web.js **/
/** chunk id: 671593, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => p
});
var Chunk49603 = require("./49603.js"),
  Chunk580560 = require("./580560.js"),
  Chunk873505 = require("./873505.js"),
  Chunk735437 = require("./735437.js"),
  Chunk765112 = require("./765112.js"),
  Chunk677061 = require("./677061.js"),
  Chunk864019 = require("./864019.js"),
  Chunk43341 = require("./43341.js"),
  Chunk970185 = require("./970185.js"),
  Chunk647438 = require("./647438.js");

function _(e) {
  return e && e.__esModule ? e.default : e
}

function p(e, t) {
  let n = (0, d.q)(_(i.Z), "@react-aria/calendar"),
    p = (0, o.z)(e),
    h = (0, r.FK)(t.visibleRange.start, t.visibleRange.end, t.timeZone, false),
    m = (0, r.FK)(t.visibleRange.start, t.visibleRange.end, t.timeZone, true);
  (0, s.r)(() => {
    t.isFocused || (0, a.xQ)(m)
  }, [m]);
  let g = (0, r.So)(t);
  (0, s.r)(() => {
    g && (0, a.xQ)(g, "polite", 4e3)
  }, [g]);
  let E = (0, l.mp)([!!e.errorMessage, e.isInvalid, e.validationState]);
  r.Lh.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: e["aria-labelledby"],
    errorMessageId: E,
    selectedDateDescription: g
  });
  let [b, y] = (0, f.useState)(false), O = e.isDisabled || t.isNextVisibleRangeInvalid();
  O && b && (y(false), t.setFocused(true));
  let [v, I] = (0, f.useState)(false), S = e.isDisabled || t.isPreviousVisibleRangeInvalid();
  S && v && (I(false), t.setFocused(true));
  let T = (0, c.b)({
    id: e.id,
    "aria-label": [e["aria-label"], m].filter(Boolean).join(", "),
    "aria-labelledby": e["aria-labelledby"]
  });
  return {
    calendarProps: (0, u.d)(p, T, {
      role: "application",
      "aria-details": e["aria-details"] || true,
      "aria-describedby": e["aria-describedby"] || true
    }),
    nextButtonProps: {
      onPress: () => t.focusNextPage(),
      "aria-label": n.format("next"),
      isDisabled: O,
      onFocusChange: y
    },
    prevButtonProps: {
      onPress: () => t.focusPreviousPage(),
      "aria-label": n.format("previous"),
      isDisabled: S,
      onFocusChange: I
    },
    errorMessageProps: {
      id: E
    },
    title: h
  }
}