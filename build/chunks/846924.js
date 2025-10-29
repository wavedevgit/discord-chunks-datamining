/** Chunk was on web.js **/
/** chunk id: 846924, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => u
});
var Chunk49603 = require("./49603.js"),
  Chunk533426 = require("./533426.js"),
  Chunk647438 = require("./647438.js"),
  Chunk864019 = require("./864019.js"),
  Chunk43341 = require("./43341.js"),
  Chunk594886 = require("./594886.js"),
  Chunk298806 = require("./298806.js");

function u(e, t) {
  let {
    startDate: n = t.visibleRange.start,
    endDate: u = t.visibleRange.end,
    firstDayOfWeek: d
  } = e, {
    direction: f
  } = (0, l.j)(), _ = e => {
    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault(), t.selectFocusedDate();
        break;
      case "PageUp":
        e.preventDefault(), e.stopPropagation(), t.focusPreviousSection(e.shiftKey);
        break;
      case "PageDown":
        e.preventDefault(), e.stopPropagation(), t.focusNextSection(e.shiftKey);
        break;
      case "End":
        e.preventDefault(), e.stopPropagation(), t.focusSectionEnd();
        break;
      case "Home":
        e.preventDefault(), e.stopPropagation(), t.focusSectionStart();
        break;
      case "ArrowLeft":
        e.preventDefault(), e.stopPropagation(), "rtl" === f ? t.focusNextDay() : t.focusPreviousDay();
        break;
      case "ArrowUp":
        e.preventDefault(), e.stopPropagation(), t.focusPreviousRow();
        break;
      case "ArrowRight":
        e.preventDefault(), e.stopPropagation(), "rtl" === f ? t.focusPreviousDay() : t.focusNextDay();
        break;
      case "ArrowDown":
        e.preventDefault(), e.stopPropagation(), t.focusNextRow();
        break;
      case "Escape":
        "setAnchorDate" in t && (e.preventDefault(), t.setAnchorDate(null))
    }
  }, p = (0, r.FK)(n, u, t.timeZone, true), {
    ariaLabel: h,
    ariaLabelledBy: m
  } = r.Lh.get(t), g = (0, o.b)({
    "aria-label": [h, p].filter(Boolean).join(", "),
    "aria-labelledby": m
  }), E = (0, c.a)({
    weekday: e.weekdayStyle || "narrow",
    timeZone: t.timeZone
  }), {
    locale: b
  } = (0, l.j)(), y = (0, a.useMemo)(() => {
    let e = (0, i.zJ)((0, i.Lg)(t.timeZone), b, d);
    return [...Array(7).keys()].map(n => {
      let r = e.add({
        days: n
      }).toDate(t.timeZone);
      return E.format(r)
    })
  }, [b, t.timeZone, E, d]), O = (0, i.Rn)(n, b, d);
  return {
    gridProps: (0, s.d)(g, {
      role: "grid",
      "aria-readonly": t.isReadOnly || true,
      "aria-disabled": t.isDisabled || true,
      "aria-multiselectable": "highlightedRange" in t || true,
      onKeyDown: _,
      onFocus: () => t.setFocused(true),
      onBlur: () => t.setFocused(false)
    }),
    headerProps: {
      "aria-hidden": true
    },
    weekDays: y,
    weeksInMonth: O
  }
}