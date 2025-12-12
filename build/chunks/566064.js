/** Chunk was on web.js **/
/** chunk id: 566064, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk611144 = require("./611144.js"),
  Chunk536895 = require("./536895.js"),
  Chunk260866 = require("./260866.js");
let s = [Chunk536895.R8.TAB];

function l(e) {
  switch (e.key) {
    case o.R8.ENTER:
      return o.Us.SELECT_FOCUSED_ITEM;
    case o.R8.UP:
      return o.Us.NAVIGATE_UP;
    case o.R8.DOWN:
      return o.Us.NAVIGATE_DOWN;
    case o.R8.RIGHT:
      return o.Us.NAVIGATE_RIGHT;
    case o.R8.LEFT:
      return o.Us.NAVIGATE_LEFT;
    case o.R8.HOME:
      if (e.ctrlKey) return o.Us.NAVIGATE_START;
      return o.Us.NAVIGATE_INLINE_START;
    case o.R8.END:
      if (e.ctrlKey) return o.Us.NAVIGATE_END;
      return o.Us.NAVIGATE_INLINE_END
  }
}

function c(e, t, n) {
  return null != t && null != n ? "#".concat((0, a.NE)(e, t, n)) : "[data-ref-id=".concat(e, "]")
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
    prepareFocus: m,
    getNewFocusPosition: h,
    dispatch: g,
    maintainFocusPosition: E,
    enabled: b,
    autoFocusElement: y,
    useVirtualFocus: O
  } = e, v = r.useRef(b), S = u(c(t, f, p)), [I, T] = r.useState(false), [C, A] = r.useState(false), [N, P] = r.useState(false), [R] = r.useState(() => new a.$o(e => {
    let [t, n] = e.split(",").map(Number);
    return () => {
      T(true), g({
        type: i.s.SET_FOCUSED_POSITION,
        x: t,
        y: n
      })
    }
  }));
  r.useEffect(() => () => R.clean(), [R]);
  let w = r.useCallback(e => {
      if (!v.current || !y) returnfalse;
      e.focus()
    }, [y]),
    D = r.useCallback((e, n) => {
      let r = c(t, e, n);
      (null != m ? m(e, n, r) : Promise.resolve()).then(() => {
        let e = u(r);
        null != e ? (w(e), A(false)) : requestAnimationFrame(() => A(true))
      })
    }, [t, m, w]),
    x = r.useCallback(function() {
      let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
        [n, r] = null != h ? h(f, p) : [f, p];
      if ((n !== f || r !== p) && (g({
          type: i.s.SET_FOCUSED_POSITION,
          x: n,
          y: r
        }), !e)) return void P(true);
      let o = u(c(t, n, r));
      null != o && (P(true), w(o))
    }, [g, f, p, h, t, w]),
    [L, j] = r.useState(false);
  r.useEffect(() => {
    if (!L || !I) return;
    j(false);
    let e = u(c(t, f, p));
    if (null != e) return void w(e);
    T(false);
    let n = u(c(t));
    null != n && w(n)
  }, [t, L, I, w, f, p]);
  let M = r.useCallback(e => {
    v.current && null == e && j(true)
  }, []);
  r.useEffect(() => {
    I && C && null != S && (w(S), A(false))
  }, [C, S]), r.useEffect(() => {
    I && (N || D(f, p), P(false))
  }, [f, p]);
  let k = r.useCallback(e => {
      if (!v.current) return;
      if (!O && s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
        e.preventDefault(), e.stopPropagation(), x();
        return
      }
      let t = l(e);
      switch (t) {
        case o.Us.NAVIGATE_UP:
        case o.Us.NAVIGATE_DOWN:
        case o.Us.NAVIGATE_RIGHT:
        case o.Us.NAVIGATE_LEFT:
        case o.Us.NAVIGATE_INLINE_START:
        case o.Us.NAVIGATE_INLINE_END:
        case o.Us.NAVIGATE_START:
        case o.Us.NAVIGATE_END:
          0 !== n.length && (0 !== f || 0 !== p || t !== o.Us.NAVIGATE_LEFT) && (e.preventDefault(), e.stopPropagation()), g({
            type: t
          });
          return;
        case o.Us.SELECT_FOCUSED_ITEM:
          if (y && !d(S) || e.repeat) return;
          e.preventDefault(), e.stopPropagation(), g({
            type: t
          }), null != _ ? _(f, p, e) : null != S && S.click()
      }
    }, [x, g, y, S, _, f, p]),
    U = r.useCallback(e => e.currentTarget !== e.target ? (I || (T(true), P(true)), false) : I ? (x(false), false) : void(E && null != S ? D(f, p) : x(true)), [I, E, S, x, D, f, p]),
    G = r.useCallback(e => {
      if (e.target !== e.currentTarget) {
        if (e.currentTarget.contains(e.relatedTarget)) returnfalse;
        T(false)
      }
    }, []),
    Z = r.useMemo(() => Math.max(...n), [n]),
    F = r.useCallback(() => ({
      role: "grid",
      "aria-rowcount": n.length,
      "aria-colcount": Z,
      tabIndex: I && E ? false : 0,
      "data-ref-id": t,
      onKeyDown: k,
      onFocus: U,
      onBlur: G
    }), [n.length, Z, I, E, t, k, U, G]),
    B = r.useCallback((e, n) => {
      let r = {
        role: "gridcell",
        "aria-rowindex": n + 1,
        "aria-colindex": e + 1,
        id: (0, a.NE)(t, e, n),
        tabIndex: E && e === f && n === p ? 0 : false,
        onFocus: R.get("".concat(e, ",").concat(n))
      };
      return e === f && n === p && (r.ref = M), r
    }, [t, E, f, p, R, M]),
    V = r.useCallback(e => ({
      role: "row",
      "aria-rowindex": e + 1
    }), []);
  return r.useMemo(() => ({
    dispatch: g,
    getContainerProps: F,
    getItemProps: B,
    getRowProps: V
  }), [g, F, B, V])
}

function p(e) {
  let {
    navId: t,
    columnCounts: n,
    focusedX: o = 0,
    focusedY: s = 0,
    onSelect: l,
    prepareFocus: c,
    getNewFocusPosition: u,
    maintainFocusPosition: d = true,
    enabled: p = true,
    onDispatch: _,
    autoFocusElement: m = true,
    useVirtualFocus: h = false
  } = e, g = r.useCallback((e, t) => {
    let n = (0, i.Z)(e, t);
    return null != _ && _(e, n, t), n
  }, [_]), [E, b] = r.useReducer(g, {
    focusedX: o,
    focusedY: s,
    columnCounts: n
  }), {
    columnCounts: y,
    focusedX: O,
    focusedY: v
  } = E, [S] = r.useState(() => (0, a.P2)(b, 16));
  return r.useEffect(() => {
    b({
      type: i.s.UPDATE_COLUMN_COUNTS,
      columnCounts: n
    })
  }, [n]), f({
    navId: t,
    columnCounts: y,
    focusedX: O,
    focusedY: v,
    dispatch: S,
    onSelect: l,
    prepareFocus: c,
    getNewFocusPosition: u,
    maintainFocusPosition: d,
    enabled: p,
    autoFocusElement: m,
    useVirtualFocus: h
  })
}