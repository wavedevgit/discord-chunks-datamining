/** Chunk was on 33622 **/
/** chunk id: 671593, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  z: () => D
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

function D(e, a) {
  var t;
  let D = (0, c.q)((t = n.Z) && t.__esModule ? t.default : t, "@react-aria/calendar"),
    h = (0, i.z)(e),
    f = (0, u.FK)(a.visibleRange.start, a.visibleRange.end, a.timeZone, false),
    y = (0, u.FK)(a.visibleRange.start, a.visibleRange.end, a.timeZone, true);
  (0, o.r)(() => {
    a.isFocused || (0, r.xQ)(y)
  }, [y]);
  let p = (0, u.So)(a);
  (0, o.r)(() => {
    p && (0, r.xQ)(p, "polite", 4e3)
  }, [p]);
  let g = (0, l.mp)([!!e.errorMessage, e.isInvalid, e.validationState]);
  u.Lh.set(a, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: e["aria-labelledby"],
    errorMessageId: g,
    selectedDateDescription: p
  });
  let [v, b] = (0, m.useState)(false), C = e.isDisabled || a.isNextVisibleRangeInvalid();
  C && v && (b(false), a.setFocused(true));
  let [x, B] = (0, m.useState)(false), E = e.isDisabled || a.isPreviousVisibleRangeInvalid();
  E && x && (B(false), a.setFocused(true));
  let F = (0, s.b)({
    id: e.id,
    "aria-label": [e["aria-label"], y].filter(Boolean).join(", "),
    "aria-labelledby": e["aria-labelledby"]
  });
  return {
    calendarProps: (0, d.d)(h, F, {
      role: "application",
      "aria-details": e["aria-details"] || true,
      "aria-describedby": e["aria-describedby"] || true
    }),
    nextButtonProps: {
      onPress: () => a.focusNextPage(),
      "aria-label": D.format("next"),
      isDisabled: C,
      onFocusChange: b
    },
    prevButtonProps: {
      onPress: () => a.focusPreviousPage(),
      "aria-label": D.format("previous"),
      isDisabled: E,
      onFocusChange: B
    },
    errorMessageProps: {
      id: g
    },
    title: f
  }
}