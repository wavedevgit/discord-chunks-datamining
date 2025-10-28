/** Chunk was on 33622 **/
/** chunk id: 846924, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Q: () => d
});
var Chunk49603 = require("./49603.js"),
  Chunk533426 = require("./533426.js"),
  Chunk647438 = require("./647438.js"),
  Chunk864019 = require("./864019.js"),
  Chunk43341 = require("./43341.js"),
  Chunk594886 = require("./594886.js"),
  Chunk298806 = require("./298806.js");

function d(e, a) {
  let {
    startDate: t = a.visibleRange.start,
    endDate: d = a.visibleRange.end,
    firstDayOfWeek: c
  } = e, {
    direction: m
  } = (0, l.j)(), D = (0, u.FK)(t, d, a.timeZone, true), {
    ariaLabel: h,
    ariaLabelledBy: f
  } = u.Lh.get(a), y = (0, i.b)({
    "aria-label": [h, D].filter(Boolean).join(", "),
    "aria-labelledby": f
  }), p = (0, s.a)({
    weekday: e.weekdayStyle || "narrow",
    timeZone: a.timeZone
  }), {
    locale: g
  } = (0, l.j)(), v = (0, r.useMemo)(() => {
    let e = (0, n.zJ)((0, n.Lg)(a.timeZone), g, c);
    return [...Array(7).keys()].map(t => {
      let u = e.add({
        days: t
      }).toDate(a.timeZone);
      return p.format(u)
    })
  }, [g, a.timeZone, p, c]), b = (0, n.Rn)(t, g, c);
  return {
    gridProps: (0, o.d)(y, {
      role: "grid",
      "aria-readonly": a.isReadOnly || true,
      "aria-disabled": a.isDisabled || true,
      "aria-multiselectable": "highlightedRange" in a || true,
      onKeyDown: e => {
        switch (e.key) {
          case "Enter":
          case " ":
            e.preventDefault(), a.selectFocusedDate();
            break;
          case "PageUp":
            e.preventDefault(), e.stopPropagation(), a.focusPreviousSection(e.shiftKey);
            break;
          case "PageDown":
            e.preventDefault(), e.stopPropagation(), a.focusNextSection(e.shiftKey);
            break;
          case "End":
            e.preventDefault(), e.stopPropagation(), a.focusSectionEnd();
            break;
          case "Home":
            e.preventDefault(), e.stopPropagation(), a.focusSectionStart();
            break;
          case "ArrowLeft":
            e.preventDefault(), e.stopPropagation(), "rtl" === m ? a.focusNextDay() : a.focusPreviousDay();
            break;
          case "ArrowUp":
            e.preventDefault(), e.stopPropagation(), a.focusPreviousRow();
            break;
          case "ArrowRight":
            e.preventDefault(), e.stopPropagation(), "rtl" === m ? a.focusPreviousDay() : a.focusNextDay();
            break;
          case "ArrowDown":
            e.preventDefault(), e.stopPropagation(), a.focusNextRow();
            break;
          case "Escape":
            "setAnchorDate" in a && (e.preventDefault(), a.setAnchorDate(null))
        }
      },
      onFocus: () => a.setFocused(true),
      onBlur: () => a.setFocused(false)
    }),
    headerProps: {
      "aria-hidden": true
    },
    weekDays: v,
    weeksInMonth: b
  }
}