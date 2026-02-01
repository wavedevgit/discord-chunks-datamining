/** Chunk was on web.js **/
/** chunk id: 857175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => u
});
var Chunk955048 = require("./955048.js"),
  Chunk515702 = require("./515702.js"),
  Chunk376472 = require("./376472.js"),
  Chunk352404 = require("./352404.js"),
  Chunk142922 = require("./142922.js"),
  Chunk492313 = require("./492313.js"),
  Chunk64700 = require("./64700.js");

function u(e) {
  var t, n, u;
  let f = (0, c.useMemo)(() => new(0, i.p)(e.locale), [e.locale]),
    p = (0, c.useMemo)(() => f.resolvedOptions(), [f]),
    {
      locale: _,
      createCalendar: h,
      visibleDuration: m = {
        months: 1
      },
      minValue: g,
      maxValue: E,
      selectionAlignment: y,
      isDateUnavailable: b,
      pageBehavior: O = "visible",
      firstDayOfWeek: v
    } = e,
    A = (0, c.useMemo)(() => h(p.calendar), [h, p.calendar]),
    [I, S] = (0, l.P)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
    T = (0, c.useMemo)(() => I ? (0, a.yP)((0, a.gw)(I), A) : null, [I, A]),
    C = (0, c.useMemo)(() => I && "timeZone" in I ? I.timeZone : p.timeZone, [I, p.timeZone]),
    N = (0, c.useMemo)(() => e.focusedValue ? (0, r.X8)((0, a.yP)((0, a.gw)(e.focusedValue), A), g, E) : true, [e.focusedValue, A, g, E]),
    w = (0, c.useMemo)(() => (0, r.X8)(e.defaultFocusedValue ? (0, a.yP)((0, a.gw)(e.defaultFocusedValue), A) : T || (0, a.yP)((0, o.Ec)(C), A), g, E), [e.defaultFocusedValue, T, C, A, g, E]),
    [R, P] = (0, l.P)(N, w, e.onFocusChange),
    [D, L] = (0, c.useState)(() => {
      switch (y) {
        case "start":
          return (0, r.CT)(R, m, _, g, E);
        case "end":
          return (0, r.ZT)(R, m, _, g, E);
        default:
          return (0, r.Hu)(R, m, _, g, E)
      }
    }),
    [x, M] = (0, c.useState)(e.autoFocus || false),
    j = (0, c.useMemo)(() => {
      let e = {
        ...m
      };
      return e.days ? e.days-- : e.days = false, D.add(e)
    }, [D, m]),
    [k, U] = (0, c.useState)(A);
  if (!(0, o.Jg)(A, k)) {
    let e = (0, a.yP)(R, A);
    L((0, r.Hu)(e, m, _, g, E)), P(e), U(A)
  }

  function G(e) {
    P(e = (0, r.X8)(e, g, E))
  }

  function V(t) {
    if (!e.isDisabled && !e.isReadOnly) {
      let e = t;
      if (null === e) return void S(null);
      e = (0, r.X8)(e, g, E), (e = (0, r.Nf)(e, D, b)) && (e = (0, a.yP)(e, (null == I ? true : I.calendar) || new(0, s.FG)), I && "hour" in I ? S(I.set(e)) : S(e))
    }
  }(0, r.If)(R, g, E) ? P((0, r.X8)(R, g, E)): 0 > R.compare(D) ? L((0, r.ZT)(R, m, _, g, E)) : R.compare(j) > 0 && L((0, r.CT)(R, m, _, g, E));
  let F = (0, c.useMemo)(() => !!T && (!!(b && b(T)) || (0, r.If)(T, g, E)), [T, b, g, E]),
    B = e.isInvalid || "invalid" === e.validationState || F,
    H = B ? "invalid" : null,
    Y = (0, c.useMemo)(() => "visible" === O ? m : d(m), [O, m]);
  return {
    isDisabled: null != (n = e.isDisabled) && n,
    isReadOnly: null != (u = e.isReadOnly) && u,
    value: T,
    setValue: V,
    visibleRange: {
      start: D,
      end: j
    },
    minValue: g,
    maxValue: E,
    focusedDate: R,
    timeZone: C,
    validationState: H,
    isValueInvalid: B,
    setFocusedDate(e) {
      G(e), M(true)
    },
    focusNextDay() {
      G(R.add({
        days: 1
      }))
    },
    focusPreviousDay() {
      G(R.subtract({
        days: 1
      }))
    },
    focusNextRow() {
      m.days ? this.focusNextPage() : (m.weeks || m.months || m.years) && G(R.add({
        weeks: 1
      }))
    },
    focusPreviousRow() {
      m.days ? this.focusPreviousPage() : (m.weeks || m.months || m.years) && G(R.subtract({
        weeks: 1
      }))
    },
    focusNextPage() {
      let e = D.add(Y);
      P((0, r.X8)(R.add(Y), g, E)), L((0, r.CT)((0, r.Iw)(R, e, Y, _, g, E), Y, _))
    },
    focusPreviousPage() {
      let e = D.subtract(Y);
      P((0, r.X8)(R.subtract(Y), g, E)), L((0, r.CT)((0, r.Iw)(R, e, Y, _, g, E), Y, _))
    },
    focusSectionStart() {
      m.days ? G(D) : m.weeks ? G((0, o.kq)(R, _)) : (m.months || m.years) && G((0, o.wH)(R))
    },
    focusSectionEnd() {
      m.days ? G(j) : m.weeks ? G((0, o.$I)(R, _)) : (m.months || m.years) && G((0, o.p9)(R))
    },
    focusNextSection(e) {
      e || m.days ? m.days ? this.focusNextPage() : m.weeks ? G(R.add({
        months: 1
      })) : (m.months || m.years) && G(R.add({
        years: 1
      })) : G(R.add(d(m)))
    },
    focusPreviousSection(e) {
      e || m.days ? m.days ? this.focusPreviousPage() : m.weeks ? G(R.subtract({
        months: 1
      })) : (m.months || m.years) && G(R.subtract({
        years: 1
      })) : G(R.subtract(d(m)))
    },
    selectFocusedDate() {
      b && b(R) || V(R)
    },
    selectDate(e) {
      V(e)
    },
    isFocused: x,
    setFocused: M,
    isInvalid: e => (0, r.If)(e, g, E),
    isSelected(e) {
      return null != T && (0, o.ro)(e, T) && !this.isCellDisabled(e) && !this.isCellUnavailable(e)
    },
    isCellFocused: e => x && R && (0, o.ro)(e, R),
    isCellDisabled(t) {
      return e.isDisabled || 0 > t.compare(D) || t.compare(j) > 0 || this.isInvalid(t)
    },
    isCellUnavailable: t => !!e.isDateUnavailable && e.isDateUnavailable(t),
    isPreviousVisibleRangeInvalid() {
      let e = D.subtract({
        days: 1
      });
      return (0, o.ro)(e, D) || this.isInvalid(e)
    },
    isNextVisibleRangeInvalid() {
      let e = j.add({
        days: 1
      });
      return (0, o.ro)(e, j) || this.isInvalid(e)
    },
    getDatesInWeek(e, t = D) {
      let n = t.add({
          weeks: e
        }),
        r = [];
      n = (0, o.kq)(n, _, v);
      let i = (0, o.SJ)(n, _, v);
      for (let e = 0; e < i; e++) r.push(null);
      for (; r.length < 7;) {
        r.push(n);
        let e = n.add({
          days: 1
        });
        if ((0, o.ro)(n, e)) break;
        n = e
      }
      for (; r.length < 7;) r.push(null);
      return r
    }
  }
}

function d(e) {
  let t = {
    ...e
  };
  for (let n in e) t[n] = 1;
  return t
}