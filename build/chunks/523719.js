/** Chunk was on web.js **/
/** chunk id: 523719, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => p
});
var Chunk948932 = require("./948932.js"),
  Chunk177783 = require("./177783.js"),
  Chunk873505 = require("./873505.js"),
  Chunk880016 = require("./880016.js"),
  Chunk983977 = require("./983977.js"),
  Chunk752689 = require("./752689.js"),
  Chunk951726 = require("./951726.js"),
  Chunk158821 = require("./158821.js"),
  Chunk218769 = require("./218769.js"),
  Chunk473749 = require("./473749.js");

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
  let [v, I] = (0, f.useState)(false), T = e.isDisabled || t.isPreviousVisibleRangeInvalid();
  T && v && (I(false), t.setFocused(true));
  let S = (0, c.b)({
    id: e.id,
    "aria-label": [e["aria-label"], m].filter(Boolean).join(", "),
    "aria-labelledby": e["aria-labelledby"]
  });
  return {
    calendarProps: (0, u.d)(p, S, {
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
      isDisabled: T,
      onFocusChange: I
    },
    errorMessageProps: {
      id: E
    },
    title: h
  }
}