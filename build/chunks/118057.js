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
let o = [Chunk741918.D$.TAB];

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
  return null != t && null != n ? "#".concat((0, s.Aq)(e, t, n)) : "[data-ref-id=".concat(e, "]")
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
    enabled: b,
    autoFocusElement: y,
    useVirtualFocus: O
  } = e, A = r.useRef(b), v = u(c(t, f, p)), [S, I] = r.useState(false), [T, C] = r.useState(false), [N, R] = r.useState(false), [w] = r.useState(() => new s.Lp(e => {
    let [t, n] = e.split(",").map(Number);
    return () => {
      I(true), g({
        type: i.n.SET_FOCUSED_POSITION,
        x: t,
        y: n
      })
    }
  }));
  r.useEffect(() => () => w.clean(), [w]);
  let P = r.useCallback(e => {
      if (!A.current || !y) returnfalse;
      e.focus()
    }, [y]),
    D = r.useCallback((e, n) => {
      let r = c(t, e, n);
      (null != h ? h(e, n, r) : Promise.resolve()).then(() => {
        let e = u(r);
        null != e ? (P(e), C(false)) : requestAnimationFrame(() => C(true))
      })
    }, [t, h, P]),
    x = r.useCallback(function() {
      let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
        [n, r] = null != m ? m(f, p) : [f, p];
      if ((n !== f || r !== p) && (g({
          type: i.n.SET_FOCUSED_POSITION,
          x: n,
          y: r
        }), !e)) return void R(true);
      let a = u(c(t, n, r));
      null != a && (R(true), P(a))
    }, [g, f, p, m, t, P]),
    [L, j] = r.useState(false);
  r.useEffect(() => {
    if (!L || !S) return;
    j(false);
    let e = u(c(t, f, p));
    if (null != e) return void P(e);
    I(false);
    let n = u(c(t));
    null != n && P(n)
  }, [t, L, S, P, f, p]);
  let M = r.useCallback(e => {
    A.current && null == e && j(true)
  }, []);
  r.useEffect(() => {
    S && T && null != v && (P(v), C(false))
  }, [T, v]), r.useEffect(() => {
    S && (N || D(f, p), R(false))
  }, [f, p]);
  let k = r.useCallback(e => {
      if (!A.current) return;
      if (!O && o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
        e.preventDefault(), e.stopPropagation(), x();
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
          if (y && !d(v) || e.repeat) return;
          e.preventDefault(), e.stopPropagation(), g({
            type: t
          }), null != _ ? _(f, p, e) : null != v && v.click()
      }
    }, [x, g, y, v, _, f, p]),
    U = r.useCallback(e => e.currentTarget !== e.target ? (S || (I(true), R(true)), false) : S ? (x(false), false) : void(E && null != v ? D(f, p) : x(true)), [S, E, v, x, D, f, p]),
    G = r.useCallback(e => {
      if (e.target !== e.currentTarget) {
        if (e.currentTarget.contains(e.relatedTarget)) returnfalse;
        I(false)
      }
    }, []),
    V = r.useMemo(() => Math.max(...n), [n]),
    F = r.useCallback(() => ({
      role: "grid",
      "aria-rowcount": n.length,
      "aria-colcount": V,
      tabIndex: S && E ? false : 0,
      "data-ref-id": t,
      onKeyDown: k,
      onFocus: U,
      onBlur: G
    }), [n.length, V, S, E, t, k, U, G]),
    B = r.useCallback((e, n) => {
      let r = {
        role: "gridcell",
        "aria-rowindex": n + 1,
        "aria-colindex": e + 1,
        id: (0, s.Aq)(t, e, n),
        tabIndex: E && e === f && n === p ? 0 : false,
        onFocus: w.get("".concat(e, ",").concat(n))
      };
      return e === f && n === p && (r.ref = M), r
    }, [t, E, f, p, w, M]),
    H = r.useCallback(e => ({
      role: "row",
      "aria-rowindex": e + 1
    }), []);
  return r.useMemo(() => ({
    dispatch: g,
    getContainerProps: F,
    getItemProps: B,
    getRowProps: H
  }), [g, F, B, H])
}

function p(e) {
  let {
    navId: t,
    columnCounts: n,
    focusedX: a = 0,
    focusedY: o = 0,
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
  }, [_]), [E, b] = r.useReducer(g, {
    focusedX: a,
    focusedY: o,
    columnCounts: n
  }), {
    columnCounts: y,
    focusedX: O,
    focusedY: A
  } = E, [v] = r.useState(() => (0, s.nF)(b, 16));
  return r.useEffect(() => {
    b({
      type: i.n.UPDATE_COLUMN_COUNTS,
      columnCounts: n
    })
  }, [n]), f({
    navId: t,
    columnCounts: y,
    focusedX: O,
    focusedY: A,
    dispatch: v,
    onSelect: l,
    prepareFocus: c,
    getNewFocusPosition: u,
    maintainFocusPosition: d,
    enabled: p,
    autoFocusElement: h,
    useVirtualFocus: m
  })
}