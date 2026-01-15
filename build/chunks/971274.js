/** Chunk was on web.js **/
/** chunk id: 971274, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u
});
var Chunk911668 = require("./911668.js"),
  Chunk45728 = require("./45728.js"),
  Chunk640475 = require("./640475.js"),
  Chunk533426 = require("./533426.js"),
  Chunk274738 = require("./274738.js"),
  Chunk386239 = require("./386239.js"),
  Chunk473749 = require("./473749.js");

function u(e) {
  var t, n, u;
  let f = (0, c.useMemo)(() => new(0, i.C)(e.locale), [e.locale]),
    p = (0, c.useMemo)(() => f.resolvedOptions(), [f]),
    {
      locale: _,
      createCalendar: h,
      visibleDuration: m = {
        months: 1
      },
      minValue: g,
      maxValue: E,
      selectionAlignment: b,
      isDateUnavailable: y,
      pageBehavior: O = "visible",
      firstDayOfWeek: v
    } = e,
    S = (0, c.useMemo)(() => h(p.calendar), [h, p.calendar]),
    [I, T] = (0, l.z)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
    C = (0, c.useMemo)(() => I ? (0, a.Mw)((0, a.WG)(I), S) : null, [I, S]),
    A = (0, c.useMemo)(() => I && "timeZone" in I ? I.timeZone : p.timeZone, [I, p.timeZone]),
    N = (0, c.useMemo)(() => e.focusedValue ? (0, r.Me)((0, a.Mw)((0, a.WG)(e.focusedValue), S), g, E) : true, [e.focusedValue, S, g, E]),
    P = (0, c.useMemo)(() => (0, r.Me)(e.defaultFocusedValue ? (0, a.Mw)((0, a.WG)(e.defaultFocusedValue), S) : C || (0, a.Mw)((0, o.Lg)(A), S), g, E), [e.defaultFocusedValue, C, A, S, g, E]),
    [w, R] = (0, l.z)(N, P, e.onFocusChange),
    [D, x] = (0, c.useState)(() => {
      switch (b) {
        case "start":
          return (0, r.Yn)(w, m, _, g, E);
        case "end":
          return (0, r.N2)(w, m, _, g, E);
        default:
          return (0, r.A8)(w, m, _, g, E)
      }
    }),
    [L, j] = (0, c.useState)(e.autoFocus || false),
    M = (0, c.useMemo)(() => {
      let e = {
        ...m
      };
      return e.days ? e.days-- : e.days = false, D.add(e)
    }, [D, m]),
    [k, U] = (0, c.useState)(S);
  if (!(0, o.jv)(S, k)) {
    let e = (0, a.Mw)(w, S);
    x((0, r.A8)(e, m, _, g, E)), R(e), U(S)
  }

  function G(e) {
    R(e = (0, r.Me)(e, g, E))
  }

  function Z(t) {
    if (!e.isDisabled && !e.isReadOnly) {
      let e = t;
      if (null === e) return void T(null);
      e = (0, r.Me)(e, g, E), (e = (0, r.UC)(e, D, y)) && (e = (0, a.Mw)(e, (null == I ? true : I.calendar) || new(0, s.IQ)), I && "hour" in I ? T(I.set(e)) : T(e))
    }
  }(0, r.wp)(w, g, E) ? R((0, r.Me)(w, g, E)): 0 > w.compare(D) ? x((0, r.N2)(w, m, _, g, E)) : w.compare(M) > 0 && x((0, r.Yn)(w, m, _, g, E));
  let F = (0, c.useMemo)(() => !!C && (!!(y && y(C)) || (0, r.wp)(C, g, E)), [C, y, g, E]),
    B = e.isInvalid || "invalid" === e.validationState || F,
    V = B ? "invalid" : null,
    H = (0, c.useMemo)(() => "visible" === O ? m : d(m), [O, m]);
  return {
    isDisabled: null != (n = e.isDisabled) && n,
    isReadOnly: null != (u = e.isReadOnly) && u,
    value: C,
    setValue: Z,
    visibleRange: {
      start: D,
      end: M
    },
    minValue: g,
    maxValue: E,
    focusedDate: w,
    timeZone: A,
    validationState: V,
    isValueInvalid: B,
    setFocusedDate(e) {
      G(e), j(true)
    },
    focusNextDay() {
      G(w.add({
        days: 1
      }))
    },
    focusPreviousDay() {
      G(w.subtract({
        days: 1
      }))
    },
    focusNextRow() {
      m.days ? this.focusNextPage() : (m.weeks || m.months || m.years) && G(w.add({
        weeks: 1
      }))
    },
    focusPreviousRow() {
      m.days ? this.focusPreviousPage() : (m.weeks || m.months || m.years) && G(w.subtract({
        weeks: 1
      }))
    },
    focusNextPage() {
      let e = D.add(H);
      R((0, r.Me)(w.add(H), g, E)), x((0, r.Yn)((0, r.PJ)(w, e, H, _, g, E), H, _))
    },
    focusPreviousPage() {
      let e = D.subtract(H);
      R((0, r.Me)(w.subtract(H), g, E)), x((0, r.Yn)((0, r.PJ)(w, e, H, _, g, E), H, _))
    },
    focusSectionStart() {
      m.days ? G(D) : m.weeks ? G((0, o.zJ)(w, _)) : (m.months || m.years) && G((0, o.Nm)(w))
    },
    focusSectionEnd() {
      m.days ? G(M) : m.weeks ? G((0, o.vV)(w, _)) : (m.months || m.years) && G((0, o.Vf)(w))
    },
    focusNextSection(e) {
      if (!e && !m.days) return void G(w.add(d(m)));
      m.days ? this.focusNextPage() : m.weeks ? G(w.add({
        months: 1
      })) : (m.months || m.years) && G(w.add({
        years: 1
      }))
    },
    focusPreviousSection(e) {
      if (!e && !m.days) return void G(w.subtract(d(m)));
      m.days ? this.focusPreviousPage() : m.weeks ? G(w.subtract({
        months: 1
      })) : (m.months || m.years) && G(w.subtract({
        years: 1
      }))
    },
    selectFocusedDate() {
      y && y(w) || Z(w)
    },
    selectDate(e) {
      Z(e)
    },
    isFocused: L,
    setFocused: j,
    isInvalid: e => (0, r.wp)(e, g, E),
    isSelected(e) {
      return null != C && (0, o.KC)(e, C) && !this.isCellDisabled(e) && !this.isCellUnavailable(e)
    },
    isCellFocused: e => L && w && (0, o.KC)(e, w),
    isCellDisabled(t) {
      return e.isDisabled || 0 > t.compare(D) || t.compare(M) > 0 || this.isInvalid(t)
    },
    isCellUnavailable: t => !!e.isDateUnavailable && e.isDateUnavailable(t),
    isPreviousVisibleRangeInvalid() {
      let e = D.subtract({
        days: 1
      });
      return (0, o.KC)(e, D) || this.isInvalid(e)
    },
    isNextVisibleRangeInvalid() {
      let e = M.add({
        days: 1
      });
      return (0, o.KC)(e, M) || this.isInvalid(e)
    },
    getDatesInWeek(e, t = D) {
      let n = t.add({
          weeks: e
        }),
        r = [];
      n = (0, o.zJ)(n, _, v);
      let i = (0, o.ji)(n, _, v);
      for (let e = 0; e < i; e++) r.push(null);
      for (; r.length < 7;) {
        r.push(n);
        let e = n.add({
          days: 1
        });
        if ((0, o.KC)(n, e)) break;
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