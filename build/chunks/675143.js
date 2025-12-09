/** Chunk was on web.js **/
/** chunk id: 675143, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => E
});
var Chunk948932 = require("./948932.js"),
  Chunk177783 = require("./177783.js"),
  Chunk533426 = require("./533426.js"),
  Chunk122136 = require("./122136.js"),
  Chunk645537 = require("./645537.js"),
  Chunk928276 = require("./928276.js"),
  Chunk776608 = require("./776608.js"),
  Chunk348672 = require("./348672.js"),
  Chunk158821 = require("./158821.js"),
  Chunk226098 = require("./226098.js"),
  Chunk981166 = require("./981166.js"),
  Chunk218769 = require("./218769.js"),
  Chunk750996 = require("./750996.js"),
  Chunk473749 = require("./473749.js");

function g(e) {
  return e && e.__esModule ? e.default : e
}

function E(e, t, n) {
  let E, {
      date: b,
      isDisabled: y
    } = e,
    {
      errorMessageId: O,
      selectedDateDescription: v
    } = r.Lh.get(t),
    S = (0, _.q)(g(i.Z), "@react-aria/calendar"),
    I = (0, m.a)({
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      era: (0, r.tN)(b),
      timeZone: t.timeZone
    }),
    T = t.isSelected(b),
    A = t.isCellFocused(b) && !e.isOutsideMonth;
  y = y || t.isCellDisabled(b);
  let C = t.isCellUnavailable(b),
    N = !y && !C,
    P = t.isValueInvalid && !!("highlightedRange" in t ? !t.anchorDate && t.highlightedRange && b.compare(t.highlightedRange.start) >= 0 && 0 >= b.compare(t.highlightedRange.end) : t.value && (0, a.KC)(t.value, b));
  P && (T = true), b = (0, o.v)(b, a.N9);
  let R = (0, h.useMemo)(() => b.toDate(t.timeZone), [b, t.timeZone]),
    D = (0, a.zk)(b, t.timeZone),
    w = (0, h.useMemo)(() => {
      let e = "";
      return "highlightedRange" in t && t.value && !t.anchorDate && ((0, a.KC)(b, t.value.start) || (0, a.KC)(b, t.value.end)) && (e = v + ", "), e += I.format(R), D ? e = S.format(T ? "todayDateSelected" : "todayDate", {
        date: e
      }) : T && (e = S.format("dateSelected", {
        date: e
      })), t.minValue && (0, a.KC)(b, t.minValue) ? e += ", " + S.format("minimumDate") : t.maxValue && (0, a.KC)(b, t.maxValue) && (e += ", " + S.format("maximumDate")), e
    }, [I, R, S, T, D, b, t, v]),
    x = "";
  "anchorDate" in t && A && !t.isReadOnly && N && (x = t.anchorDate ? S.format("finishRangeSelectionPrompt") : S.format("startRangeSelectionPrompt"));
  let L = (0, s.P)(x),
    j = (0, h.useRef)(false),
    M = (0, h.useRef)(false),
    k = (0, h.useRef)(true),
    {
      pressProps: U,
      isPressed: G
    } = (0, f.r)({
      shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
      preventFocusOnPress: true,
      isDisabled: !N || t.isReadOnly,
      onPressStart(e) {
        if (t.isReadOnly) return void t.setFocusedDate(b);
        if ("highlightedRange" in t && !t.anchorDate && ("mouse" === e.pointerType || "touch" === e.pointerType)) {
          if (t.highlightedRange && !P) {
            if ((0, a.KC)(b, t.highlightedRange.start)) {
              t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(b), t.setDragging(true), M.current = true;
              return
            } else if ((0, a.KC)(b, t.highlightedRange.end)) {
              t.setAnchorDate(t.highlightedRange.start), t.setFocusedDate(b), t.setDragging(true), M.current = true;
              return
            }
          }
          let n = () => {
            t.setDragging(true), k.current = true, t.selectDate(b), t.setFocusedDate(b), j.current = true
          };
          "touch" === e.pointerType ? k.current = setTimeout(n, 200) : n()
        }
      },
      onPressEnd() {
        M.current = false, j.current = false, clearTimeout(k.current), k.current = true
      },
      onPress() {
        "anchorDate" in t || t.isReadOnly || (t.selectDate(b), t.setFocusedDate(b))
      },
      onPressUp(e) {
        if (!t.isReadOnly && ("anchorDate" in t && k.current && (t.selectDate(b), t.setFocusedDate(b)), "anchorDate" in t))
          if (M.current) t.setAnchorDate(b);
          else if (t.anchorDate && !j.current) t.selectDate(b), t.setFocusedDate(b);
        else if ("keyboard" !== e.pointerType || t.anchorDate) "virtual" === e.pointerType && (t.selectDate(b), t.setFocusedDate(b));
        else {
          t.selectDate(b);
          let e = b.add({
            days: 1
          });
          t.isInvalid(e) && (e = b.subtract({
            days: 1
          })), t.isInvalid(e) || t.setFocusedDate(e)
        }
      }
    });
  y || (E = (0, a.KC)(b, t.focusedDate) ? 0 : false), (0, h.useEffect)(() => {
    A && n.current && ((0, l.A)(n.current), "pointer" !== (0, p.Jz)() && document.activeElement === n.current && (0, c.G)(n.current, {
      containingElement: (0, u.r)(n.current)
    }))
  }, [A, n]);
  let Z = (0, m.a)({
      day: "numeric",
      timeZone: t.timeZone,
      calendar: b.calendar.identifier
    }),
    B = (0, h.useMemo)(() => Z.formatToParts(R).find(e => "day" === e.type).value, [Z, R]);
  return {
    cellProps: {
      role: "gridcell",
      "aria-disabled": !N || true,
      "aria-selected": T || true,
      "aria-invalid": P || true
    },
    buttonProps: (0, d.d)(U, {
      onFocus() {
        y || t.setFocusedDate(b)
      },
      tabIndex: E,
      role: "button",
      "aria-disabled": !N || true,
      "aria-label": w,
      "aria-invalid": P || true,
      "aria-describedby": [P ? O : true, L["aria-describedby"]].filter(Boolean).join(" ") || true,
      onPointerEnter(e) {
        "highlightDate" in t && ("touch" !== e.pointerType || t.isDragging) && N && t.highlightDate(b)
      },
      onPointerDown(e) {
        "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId)
      },
      onContextMenu(e) {
        e.preventDefault()
      }
    }),
    isPressed: G,
    isFocused: A,
    isSelected: T,
    isDisabled: y,
    isUnavailable: C,
    isOutsideVisibleRange: 0 > b.compare(t.visibleRange.start) || b.compare(t.visibleRange.end) > 0,
    isInvalid: P,
    formattedDate: B
  }
}