/** Chunk was on 33622 **/
/** chunk id: 710943, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  J: () => p
});
var Chunk49603 = require("./49603.js"),
  Chunk580560 = require("./580560.js"),
  Chunk533426 = require("./533426.js"),
  Chunk872 = require("./872.js"),
  Chunk682308 = require("./682308.js"),
  Chunk328106 = require("./328106.js"),
  Chunk565963 = require("./565963.js"),
  Chunk470649 = require("./470649.js"),
  Chunk43341 = require("./43341.js"),
  Chunk647199 = require("./647199.js"),
  Chunk521707 = require("./521707.js"),
  Chunk970185 = require("./970185.js"),
  Chunk298806 = require("./298806.js"),
  Chunk647438 = require("./647438.js");

function p(e, a, t) {
  var p;
  let g, {
      date: v,
      isDisabled: b
    } = e,
    {
      errorMessageId: C,
      selectedDateDescription: x
    } = u.Lh.get(a),
    B = (0, h.q)((p = n.Z) && p.__esModule ? p.default : p, "@react-aria/calendar"),
    E = (0, f.a)({
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      era: (0, u.tN)(v),
      timeZone: a.timeZone
    }),
    F = a.isSelected(v),
    w = a.isCellFocused(v) && !e.isOutsideMonth;
  b = b || a.isCellDisabled(v);
  let $ = a.isCellUnavailable(v),
    R = !b && !$,
    Z = a.isValueInvalid && !!("highlightedRange" in a ? !a.anchorDate && a.highlightedRange && v.compare(a.highlightedRange.start) >= 0 && 0 >= v.compare(a.highlightedRange.end) : a.value && (0, r.KC)(a.value, v));
  Z && (F = true), v = (0, i.v)(v, r.N9);
  let k = (0, y.useMemo)(() => v.toDate(a.timeZone), [v, a.timeZone]),
    A = (0, r.zk)(v, a.timeZone),
    P = (0, y.useMemo)(() => {
      let e = "";
      return "highlightedRange" in a && a.value && !a.anchorDate && ((0, r.KC)(v, a.value.start) || (0, r.KC)(v, a.value.end)) && (e = x + ", "), e += E.format(k), A ? e = B.format(F ? "todayDateSelected" : "todayDate", {
        date: e
      }) : F && (e = B.format("dateSelected", {
        date: e
      })), a.minValue && (0, r.KC)(v, a.minValue) ? e += ", " + B.format("minimumDate") : a.maxValue && (0, r.KC)(v, a.maxValue) && (e += ", " + B.format("maximumDate")), e
    }, [E, k, B, F, A, v, a, x]),
    S = "";
  "anchorDate" in a && w && !a.isReadOnly && R && (S = a.anchorDate ? B.format("finishRangeSelectionPrompt") : B.format("startRangeSelectionPrompt"));
  let M = (0, o.P)(S),
    V = (0, y.useRef)(false),
    I = (0, y.useRef)(false),
    z = (0, y.useRef)(true),
    {
      pressProps: O,
      isPressed: j
    } = (0, m.r)({
      shouldCancelOnPointerExit: "anchorDate" in a && !!a.anchorDate,
      preventFocusOnPress: true,
      isDisabled: !R || a.isReadOnly,
      onPressStart(e) {
        if (a.isReadOnly) return void a.setFocusedDate(v);
        if ("highlightedRange" in a && !a.anchorDate && ("mouse" === e.pointerType || "touch" === e.pointerType)) {
          if (a.highlightedRange && !Z) {
            if ((0, r.KC)(v, a.highlightedRange.start)) {
              a.setAnchorDate(a.highlightedRange.end), a.setFocusedDate(v), a.setDragging(true), I.current = true;
              return
            } else if ((0, r.KC)(v, a.highlightedRange.end)) {
              a.setAnchorDate(a.highlightedRange.start), a.setFocusedDate(v), a.setDragging(true), I.current = true;
              return
            }
          }
          let t = () => {
            a.setDragging(true), z.current = true, a.selectDate(v), a.setFocusedDate(v), V.current = true
          };
          "touch" === e.pointerType ? z.current = setTimeout(t, 200) : t()
        }
      },
      onPressEnd() {
        I.current = false, V.current = false, clearTimeout(z.current), z.current = true
      },
      onPress() {
        "anchorDate" in a || a.isReadOnly || (a.selectDate(v), a.setFocusedDate(v))
      },
      onPressUp(e) {
        if (!a.isReadOnly && ("anchorDate" in a && z.current && (a.selectDate(v), a.setFocusedDate(v)), "anchorDate" in a))
          if (I.current) a.setAnchorDate(v);
          else if (a.anchorDate && !V.current) a.selectDate(v), a.setFocusedDate(v);
        else if ("keyboard" !== e.pointerType || a.anchorDate) "virtual" === e.pointerType && (a.selectDate(v), a.setFocusedDate(v));
        else {
          a.selectDate(v);
          let e = v.add({
            days: 1
          });
          a.isInvalid(e) && (e = v.subtract({
            days: 1
          })), a.isInvalid(e) || a.setFocusedDate(e)
        }
      }
    });
  b || (g = (0, r.KC)(v, a.focusedDate) ? 0 : false), (0, y.useEffect)(() => {
    w && t.current && ((0, l.A)(t.current), "pointer" !== (0, D.Jz)() && document.activeElement === t.current && (0, s.G)(t.current, {
      containingElement: (0, d.r)(t.current)
    }))
  }, [w, t]);
  let T = (0, f.a)({
      day: "numeric",
      timeZone: a.timeZone,
      calendar: v.calendar.identifier
    }),
    N = (0, y.useMemo)(() => T.formatToParts(k).find(e => "day" === e.type).value, [T, k]);
  return {
    cellProps: {
      role: "gridcell",
      "aria-disabled": !R || true,
      "aria-selected": F || true,
      "aria-invalid": Z || true
    },
    buttonProps: (0, c.d)(O, {
      onFocus() {
        b || a.setFocusedDate(v)
      },
      tabIndex: g,
      role: "button",
      "aria-disabled": !R || true,
      "aria-label": P,
      "aria-invalid": Z || true,
      "aria-describedby": [Z ? C : true, M["aria-describedby"]].filter(Boolean).join(" ") || true,
      onPointerEnter(e) {
        "highlightDate" in a && ("touch" !== e.pointerType || a.isDragging) && R && a.highlightDate(v)
      },
      onPointerDown(e) {
        "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId)
      },
      onContextMenu(e) {
        e.preventDefault()
      }
    }),
    isPressed: j,
    isFocused: w,
    isSelected: F,
    isDisabled: b,
    isUnavailable: $,
    isOutsideVisibleRange: 0 > v.compare(a.visibleRange.start) || v.compare(a.visibleRange.end) > 0,
    isInvalid: Z,
    formattedDate: N
  }
}