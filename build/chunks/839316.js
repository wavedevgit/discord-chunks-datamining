/** Chunk was on web.js **/
/** chunk id: 839316, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => u
});
var Chunk457312 = require("./457312.js"),
  Chunk352404 = require("./352404.js"),
  Chunk64700 = require("./64700.js"),
  Chunk48284 = require("./48284.js"),
  Chunk803082 = require("./803082.js"),
  Chunk853590 = require("./853590.js"),
  Chunk849352 = require("./849352.js");

function u(e, t) {
  let {
    startDate: n = t.visibleRange.start,
    endDate: u = t.visibleRange.end,
    firstDayOfWeek: d
  } = e, {
    direction: f
  } = (0, l.Y)(), p = e => {
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
  }, _ = (0, r.ZR)(n, u, t.timeZone, true), {
    ariaLabel: h,
    ariaLabelledBy: m
  } = r.OX.get(t), g = (0, s.b)({
    "aria-label": [h, _].filter(Boolean).join(", "),
    "aria-labelledby": m
  }), E = (0, c.i)({
    weekday: e.weekdayStyle || "narrow",
    timeZone: t.timeZone
  }), {
    locale: b
  } = (0, l.Y)(), y = (0, a.useMemo)(() => {
    let e = (0, i.kq)((0, i.Ec)(t.timeZone), b, d);
    return [...Array(7).keys()].map(n => {
      let r = e.add({
        days: n
      }).toDate(t.timeZone);
      return E.format(r)
    })
  }, [b, t.timeZone, E, d]), O = (0, i.RZ)(n, b, d);
  return {
    gridProps: (0, o.v)(g, {
      role: "grid",
      "aria-readonly": t.isReadOnly || true,
      "aria-disabled": t.isDisabled || true,
      "aria-multiselectable": "highlightedRange" in t || true,
      onKeyDown: p,
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