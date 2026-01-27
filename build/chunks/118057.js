/** Chunk was on web.js **/
/** chunk id: 118057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js"), require("./747238.js");
var Chunk64700 = require("./64700.js"),
  Chunk788413 = require("./788413.js"),
  Chunk741918 = require("./741918.js"),
  Chunk602034 = require("./602034.js");
let s = [Chunk741918.D$.TAB];

function l(e) {
  switch (e.key) {
    case a.D$.ENTER:
      return a.X2.SELECT_FOCUSED_ITEM;
    case a.D$.UP:
      return a.X2.NAVIGATE_UP;
    case a.D$.DOWN:
      return a.X2.NAVIGATE_DOWN;
    case a.D$.RIGHT:
      return a.X2.NAVIGATE_RIGHT;
    case a.D$.LEFT:
      return a.X2.NAVIGATE_LEFT;
    case a.D$.HOME:
      if (e.ctrlKey) return a.X2.NAVIGATE_START;
      return a.X2.NAVIGATE_INLINE_START;
    case a.D$.END:
      if (e.ctrlKey) return a.X2.NAVIGATE_END;
      return a.X2.NAVIGATE_INLINE_END
  }
}

function c(e, t, n) {
  return null != t && null != n ? "#".concat((0, o.Aq)(e, t, n)) : "[data-ref-id=".concat(e, "]")
}

function u(e) {
  return document.querySelector(e)
}

function d(e) {
  return (null == e ? true : e.ownerDocument.activeElement) === e
}

function f(e) {
  let {
    navId: t,
    columnCounts: n,
    focusedX: f,
    focusedY: p,
    onSelect: _,
    prepareFocus: h,
    getNewFocusPosition: m,
    dispatch: g,
    maintainFocusPosition: E,
    enabled: y,
    autoFocusElement: b,
    useVirtualFocus: O
  } = e, v = r.useRef(y), A = u(c(t, f, p)), [I, S] = r.useState(false), [T, C] = r.useState(false), [N, w] = r.useState(false), [R] = r.useState(() => new o.Lp(e => {
    let [t, n] = e.split(",").map(Number);
    return () => {
      S(true), g({
        type: i.n.SET_FOCUSED_POSITION,
        x: t,
        y: n
      })
    }
  }));
  r.useEffect(() => () => R.clean(), [R]);
  let P = r.useCallback(e => {
      if (!v.current || !b) returnfalse;
      e.focus()
    }, [b]),
    D = r.useCallback((e, n) => {
      let r = c(t, e, n);
      (null != h ? h(e, n, r) : Promise.resolve()).then(() => {
        let e = u(r);
        null != e ? (P(e), C(false)) : requestAnimationFrame(() => C(true))
      })
    }, [t, h, P]),
    L = r.useCallback(function() {
      let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
        [n, r] = null != m ? m(f, p) : [f, p];
      if ((n !== f || r !== p) && (g({
          type: i.n.SET_FOCUSED_POSITION,
          x: n,
          y: r
        }), !e)) return void w(true);
      let a = u(c(t, n, r));
      null != a && (w(true), P(a))
    }, [g, f, p, m, t, P]),
    [x, M] = r.useState(false);
  r.useEffect(() => {
    if (!x || !I) return;
    M(false);
    let e = u(c(t, f, p));
    if (null != e) return void P(e);
    S(false);
    let n = u(c(t));
    null != n && P(n)
  }, [t, x, I, P, f, p]);
  let j = r.useCallback(e => {
    v.current && null == e && M(true)
  }, []);
  r.useEffect(() => {
    I && T && null != A && (P(A), C(false))
  }, [T, A]), r.useEffect(() => {
    I && (N || D(f, p), w(false))
  }, [f, p]);
  let k = r.useCallback(e => {
      if (!v.current) return;
      if (!O && s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
        e.preventDefault(), e.stopPropagation(), L();
        return
      }
      let t = l(e);
      switch (t) {
        case a.X2.NAVIGATE_UP:
        case a.X2.NAVIGATE_DOWN:
        case a.X2.NAVIGATE_RIGHT:
        case a.X2.NAVIGATE_LEFT:
        case a.X2.NAVIGATE_INLINE_START:
        case a.X2.NAVIGATE_INLINE_END:
        case a.X2.NAVIGATE_START:
        case a.X2.NAVIGATE_END:
          0 !== n.length && (0 !== f || 0 !== p || t !== a.X2.NAVIGATE_LEFT) && (e.preventDefault(), e.stopPropagation()), g({
            type: t
          });
          return;
        case a.X2.SELECT_FOCUSED_ITEM:
          if (b && !d(A) || e.repeat) return;
          e.preventDefault(), e.stopPropagation(), g({
            type: t
          }), null != _ ? _(f, p, e) : null != A && A.click()
      }
    }, [L, g, b, A, _, f, p]),
    U = r.useCallback(e => e.currentTarget !== e.target ? (I || (S(true), w(true)), false) : I ? (L(false), false) : void(E && null != A ? D(f, p) : L(true)), [I, E, A, L, D, f, p]),
    G = r.useCallback(e => {
      if (e.target !== e.currentTarget) {
        if (e.currentTarget.contains(e.relatedTarget)) returnfalse;
        S(false)
      }
    }, []),
    F = r.useMemo(() => Math.max(...n), [n]),
    V = r.useCallback(() => ({
      role: "grid",
      "aria-rowcount": n.length,
      "aria-colcount": F,
      tabIndex: I && E ? false : 0,
      "data-ref-id": t,
      onKeyDown: k,
      onFocus: U,
      onBlur: G
    }), [n.length, F, I, E, t, k, U, G]),
    B = r.useCallback((e, n) => {
      let r = {
        role: "gridcell",
        "aria-rowindex": n + 1,
        "aria-colindex": e + 1,
        id: (0, o.Aq)(t, e, n),
        tabIndex: E && e === f && n === p ? 0 : false,
        onFocus: R.get("".concat(e, ",").concat(n))
      };
      return e === f && n === p && (r.ref = j), r
    }, [t, E, f, p, R, j]),
    H = r.useCallback(e => ({
      role: "row",
      "aria-rowindex": e + 1
    }), []);
  return r.useMemo(() => ({
    dispatch: g,
    getContainerProps: V,
    getItemProps: B,
    getRowProps: H
  }), [g, V, B, H])
}

function p(e) {
  let {
    navId: t,
    columnCounts: n,
    focusedX: a = 0,
    focusedY: s = 0,
    onSelect: l,
    prepareFocus: c,
    getNewFocusPosition: u,
    maintainFocusPosition: d = true,
    enabled: p = true,
    onDispatch: _,
    autoFocusElement: h = true,
    useVirtualFocus: m = false
  } = e, g = r.useCallback((e, t) => {
    let n = (0, i.A)(e, t);
    return null != _ && _(e, n, t), n
  }, [_]), [E, y] = r.useReducer(g, {
    focusedX: a,
    focusedY: s,
    columnCounts: n
  }), {
    columnCounts: b,
    focusedX: O,
    focusedY: v
  } = E, [A] = r.useState(() => (0, o.nF)(y, 16));
  return r.useEffect(() => {
    y({
      type: i.n.UPDATE_COLUMN_COUNTS,
      columnCounts: n
    })
  }, [n]), f({
    navId: t,
    columnCounts: b,
    focusedX: O,
    focusedY: v,
    dispatch: A,
    onSelect: l,
    prepareFocus: c,
    getNewFocusPosition: u,
    maintainFocusPosition: d,
    enabled: p,
    autoFocusElement: h,
    useVirtualFocus: m
  })
}