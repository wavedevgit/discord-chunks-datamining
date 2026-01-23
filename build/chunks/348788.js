/** Chunk was on web.js **/
/** chunk id: 348788, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => E
});
var Chunk457312 = require("./457312.js"),
  Chunk701366 = require("./701366.js"),
  Chunk352404 = require("./352404.js"),
  Chunk7521 = require("./7521.js"),
  Chunk807177 = require("./807177.js"),
  Chunk401705 = require("./401705.js"),
  Chunk400606 = require("./400606.js"),
  Chunk150047 = require("./150047.js"),
  Chunk803082 = require("./803082.js"),
  Chunk8321 = require("./8321.js"),
  Chunk885714 = require("./885714.js"),
  Chunk47276 = require("./47276.js"),
  Chunk849352 = require("./849352.js"),
  Chunk64700 = require("./64700.js");

function g(e) {
  return e && e.__esModule ? e.default : e
}

function E(e, t, n) {
  let E, {
      date: y,
      isDisabled: b
    } = e,
    {
      errorMessageId: O,
      selectedDateDescription: v
    } = r.OX.get(t),
    A = (0, _.o)(g(i.A), "@react-aria/calendar"),
    I = (0, h.i)({
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      era: (0, r.cf)(y),
      timeZone: t.timeZone
    }),
    S = t.isSelected(y),
    T = t.isCellFocused(y) && !e.isOutsideMonth;
  b = b || t.isCellDisabled(y);
  let C = t.isCellUnavailable(y),
    N = !b && !C,
    w = t.isValueInvalid && !!("highlightedRange" in t ? !t.anchorDate && t.highlightedRange && y.compare(t.highlightedRange.start) >= 0 && 0 >= y.compare(t.highlightedRange.end) : t.value && (0, a.ro)(t.value, y));
  w && (S = true), y = (0, s.k)(y, a.NV);
  let R = (0, m.useMemo)(() => y.toDate(t.timeZone), [y, t.timeZone]),
    P = (0, a.cK)(y, t.timeZone),
    D = (0, m.useMemo)(() => {
      let e = "";
      return "highlightedRange" in t && t.value && !t.anchorDate && ((0, a.ro)(y, t.value.start) || (0, a.ro)(y, t.value.end)) && (e = v + ", "), e += I.format(R), P ? e = A.format(S ? "todayDateSelected" : "todayDate", {
        date: e
      }) : S && (e = A.format("dateSelected", {
        date: e
      })), t.minValue && (0, a.ro)(y, t.minValue) ? e += ", " + A.format("minimumDate") : t.maxValue && (0, a.ro)(y, t.maxValue) && (e += ", " + A.format("maximumDate")), e
    }, [I, R, A, S, P, y, t, v]),
    x = "";
  "anchorDate" in t && T && !t.isReadOnly && N && (x = t.anchorDate ? A.format("finishRangeSelectionPrompt") : A.format("startRangeSelectionPrompt"));
  let L = (0, o.I)(x),
    j = (0, m.useRef)(false),
    M = (0, m.useRef)(false),
    k = (0, m.useRef)(true),
    {
      pressProps: U,
      isPressed: G
    } = (0, f.d)({
      shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
      preventFocusOnPress: true,
      isDisabled: !N || t.isReadOnly,
      onPressStart(e) {
        if (t.isReadOnly) return void t.setFocusedDate(y);
        if ("highlightedRange" in t && !t.anchorDate && ("mouse" === e.pointerType || "touch" === e.pointerType)) {
          if (t.highlightedRange && !w) {
            if ((0, a.ro)(y, t.highlightedRange.start)) {
              t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(y), t.setDragging(true), M.current = true;
              return
            } else if ((0, a.ro)(y, t.highlightedRange.end)) {
              t.setAnchorDate(t.highlightedRange.start), t.setFocusedDate(y), t.setDragging(true), M.current = true;
              return
            }
          }
          let n = () => {
            t.setDragging(true), k.current = true, t.selectDate(y), t.setFocusedDate(y), j.current = true
          };
          "touch" === e.pointerType ? k.current = setTimeout(n, 200) : n()
        }
      },
      onPressEnd() {
        M.current = false, j.current = false, clearTimeout(k.current), k.current = true
      },
      onPress() {
        "anchorDate" in t || t.isReadOnly || (t.selectDate(y), t.setFocusedDate(y))
      },
      onPressUp(e) {
        if (!t.isReadOnly && ("anchorDate" in t && k.current && (t.selectDate(y), t.setFocusedDate(y)), "anchorDate" in t))
          if (M.current) t.setAnchorDate(y);
          else if (t.anchorDate && !j.current) t.selectDate(y), t.setFocusedDate(y);
        else if ("keyboard" !== e.pointerType || t.anchorDate) "virtual" === e.pointerType && (t.selectDate(y), t.setFocusedDate(y));
        else {
          t.selectDate(y);
          let e = y.add({
            days: 1
          });
          t.isInvalid(e) && (e = y.subtract({
            days: 1
          })), t.isInvalid(e) || t.setFocusedDate(e)
        }
      }
    });
  b || (E = (0, a.ro)(y, t.focusedDate) ? 0 : false), (0, m.useEffect)(() => {
    T && n.current && ((0, l.e)(n.current), "pointer" !== (0, p.ME)() && document.activeElement === n.current && (0, c.o)(n.current, {
      containingElement: (0, u.m)(n.current)
    }))
  }, [T, n]);
  let V = (0, h.i)({
      day: "numeric",
      timeZone: t.timeZone,
      calendar: y.calendar.identifier
    }),
    F = (0, m.useMemo)(() => V.formatToParts(R).find(e => "day" === e.type).value, [V, R]);
  return {
    cellProps: {
      role: "gridcell",
      "aria-disabled": !N || true,
      "aria-selected": S || true,
      "aria-invalid": w || true
    },
    buttonProps: (0, d.v)(U, {
      onFocus() {
        b || t.setFocusedDate(y)
      },
      tabIndex: E,
      role: "button",
      "aria-disabled": !N || true,
      "aria-label": D,
      "aria-invalid": w || true,
      "aria-describedby": [w ? O : true, L["aria-describedby"]].filter(Boolean).join(" ") || true,
      onPointerEnter(e) {
        "highlightDate" in t && ("touch" !== e.pointerType || t.isDragging) && N && t.highlightDate(y)
      },
      onPointerDown(e) {
        "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId)
      },
      onContextMenu(e) {
        e.preventDefault()
      }
    }),
    isPressed: G,
    isFocused: T,
    isSelected: S,
    isDisabled: b,
    isUnavailable: C,
    isOutsideVisibleRange: 0 > y.compare(t.visibleRange.start) || y.compare(t.visibleRange.end) > 0,
    isInvalid: w,
    formattedDate: F
  }
}