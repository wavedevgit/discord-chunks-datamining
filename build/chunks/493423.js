/** Chunk was on web.js **/
/** chunk id: 493423, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => _
});
var Chunk457312 = require("./457312.js"),
  Chunk701366 = require("./701366.js"),
  Chunk217512 = require("./217512.js"),
  Chunk290424 = require("./290424.js"),
  Chunk98909 = require("./98909.js"),
  Chunk723906 = require("./723906.js"),
  Chunk48284 = require("./48284.js"),
  Chunk803082 = require("./803082.js"),
  Chunk47276 = require("./47276.js"),
  Chunk64700 = require("./64700.js");

function p(e) {
  return e && e.__esModule ? e.default : e
}

function _(e, t) {
  let n = (0, d.o)(p(i.A), "@react-aria/calendar"),
    _ = (0, s.$)(e),
    h = (0, r.ZR)(t.visibleRange.start, t.visibleRange.end, t.timeZone, false),
    m = (0, r.ZR)(t.visibleRange.start, t.visibleRange.end, t.timeZone, true);
  (0, o.w)(() => {
    t.isFocused || (0, a.iP)(m)
  }, [m]);
  let g = (0, r.ZI)(t);
  (0, o.w)(() => {
    g && (0, a.iP)(g, "polite", 4e3)
  }, [g]);
  let E = (0, l.X1)([!!e.errorMessage, e.isInvalid, e.validationState]);
  r.OX.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: e["aria-labelledby"],
    errorMessageId: E,
    selectedDateDescription: g
  });
  let [y, b] = (0, f.useState)(false), O = e.isDisabled || t.isNextVisibleRangeInvalid();
  O && y && (b(false), t.setFocused(true));
  let [v, A] = (0, f.useState)(false), I = e.isDisabled || t.isPreviousVisibleRangeInvalid();
  I && v && (A(false), t.setFocused(true));
  let S = (0, c.b)({
    id: e.id,
    "aria-label": [e["aria-label"], m].filter(Boolean).join(", "),
    "aria-labelledby": e["aria-labelledby"]
  });
  return {
    calendarProps: (0, u.v)(_, S, {
      role: "application",
      "aria-details": e["aria-details"] || true,
      "aria-describedby": e["aria-describedby"] || true
    }),
    nextButtonProps: {
      onPress: () => t.focusNextPage(),
      "aria-label": n.format("next"),
      isDisabled: O,
      onFocusChange: b
    },
    prevButtonProps: {
      onPress: () => t.focusPreviousPage(),
      "aria-label": n.format("previous"),
      isDisabled: I,
      onFocusChange: A
    },
    errorMessageProps: {
      id: E
    },
    title: h
  }
}