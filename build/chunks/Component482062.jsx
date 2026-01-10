/** Chunk was on 49131 **/
/** chunk id: 482062, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  KT: () => p,
  ZP: () => h,
  nX: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk25441 = require("./25441.js"),
  Chunk536895 = require("./536895.js"),
  Chunk260866 = require("./260866.js");
let o = "data-grid-item-id",
  c = "data-grid-section",
  d = "data-grid-prev-section-boundary",
  u = new Set([Chunk536895.R8.UP, Chunk536895.R8.DOWN, Chunk536895.R8.LEFT, Chunk536895.R8.RIGHT]);

function m(e) {
  let {
    section: t,
    column: n,
    row: r
  } = e, a = "[".concat(c, '="').concat(t, '"]'), i = "[".concat("aria-colindex", '="').concat(n, '"]'), l = "[".concat("aria-rowindex", '="').concat(r, '"]');
  return "".concat(a).concat(i).concat(l)
}

function h(e) {
  let {
    id: t,
    isEnabled: n,
    setFocus: r
  } = e, c = a.useRef(null), h = a.useRef(false), f = a.useRef(null), g = a.useRef(n);
  a.useLayoutEffect(() => {
    g.current = n
  }, [n]);
  let x = a.useCallback(e => {
      var t;
      return (null != (t = f.current) ? t : document).querySelector(e)
    }, []),
    b = a.useCallback((e, t) => {
      g.current && r(e, t)
    }, [r]),
    p = a.useCallback(e => {
      if (g.current) {
        var t;
        null == (t = document.querySelector(e)) || t.focus()
      }
    }, []),
    j = a.useCallback(e => {
      c.current = e;
      let n = (0, s.P1)(e, o),
        r = (0, s.x3)(e);
      b(n, r), (0, i.h)(t, r, true)
    }, [t, b]),
    [v, C] = a.useState(false),
    y = a.useRef(v);
  a.useLayoutEffect(() => {
    y.current = v
  }, [v]), a.useLayoutEffect(() => {
    let e = f.current;
    if (null != e) return e.addEventListener("focusin", n), e.addEventListener("focusout", r), e.addEventListener("focus", a), e.addEventListener("scroll", i, {
      passive: true
    }), () => {
      e.removeEventListener("focusin", n), e.removeEventListener("focusout", r), e.removeEventListener("focus", a), e.removeEventListener("scroll", i)
    };

    function n() {
      C(true)
    }

    function r(e) {
      e.currentTarget.contains(e.relatedTarget) || (C(false), requestAnimationFrame(() => {
        let e = c.current;
        null !== e && null == x((0, s.P1)(e, o)) && p((0, s.P1)(t, "data-grid-id"))
      }))
    }

    function a() {
      let e = f.current;
      if (y.current || null == e) return
    }

    function i() {
      h.current = true
    }
  }, [t, b, p, j, x]);
  let T = a.useCallback(e => {
      var t, n;
      if (!g.current) return;
      let r = c.current,
        a = f.current;
      if (null == r) return;
      let i = (0, s.P1)(r, o),
        h = null == a ? true : a.querySelector(i);
      if (null == h) return;
      let b = parseInt(null != (t = h.getAttribute("data-grid-section")) ? t : ""),
        p = parseInt(h.getAttribute("aria-rowindex")),
        v = parseInt(h.getAttribute("aria-colindex"));
      switch (u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key) {
        case l.R8.RIGHT: {
          let e = x(m({
            section: b,
            row: p,
            column: v + 1
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && j(t)
          }
          return
        }
        case l.R8.LEFT: {
          let e = x(m({
            section: b,
            row: p,
            column: v - 1
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && j(t)
          }
          return
        }
        case l.R8.DOWN: {
          let e = x(m({
            section: b,
            row: p + 1,
            column: v
          }));
          if (null == e && (e = x(m({
              section: b + 1,
              row: 0,
              column: v
            }))), null != e) {
            let t = e.getAttribute(o);
            null != t && j(t)
          }
          return
        }
        case l.R8.UP: {
          let e;
          if (0 === p) {
            let t = parseInt(h.getAttribute(d));
            null == (e = x(m({
              section: b - 1,
              row: t,
              column: v
            }))) && (e = x(m({
              section: b - 1,
              row: t - 1,
              column: v
            })))
          } else e = x(m({
            section: b,
            row: p - 1,
            column: v
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && j(t)
          }
          return
        }
        case l.R8.SPACE:
        case l.R8.ENTER: {
          if (e.repeat) return;
          let t = c.current;
          if (null != t) {
            let r = x((0, s.P1)(t, o)),
              a = null != (n = null == r ? true : r.ownerDocument) ? n : document,
              i = r === a.activeElement;
            null != r && i && (e.preventDefault(), e.stopPropagation(), null == r || r.click())
          }
        }
      }
    }, [x, j]),
    S = a.useCallback(e => {
      c.current = null != e ? (0, s.jb)(t, e) : null
    }, [t]);
  return a.useMemo(() => ({
    id: t,
    containerProps: {
      onKeyDown: T,
      ref: f
    },
    setFocus: S
  }), [t, T, S])
}
let f = {
    id: "NO_LIST",
    onKeyDown() {},
    ref: Chunk473749.createRef()
  },
  g = Chunk473749.createContext({
    id: "NO_LIST",
    setFocus() {}
  }),
  x = Chunk473749.createContext(f);

function b(e) {
  let {
    id: t,
    section: n,
    row: r,
    column: l,
    boundaries: u
  } = e, [m, h] = a.useState(0 === r && 0 === l ? 0 : false), {
    id: f,
    setFocus: x
  } = a.useContext(g), b = a.useCallback(() => x(t), [t, x]);
  return a.useLayoutEffect(() => (0, i.N)(f, e => {
    h(e === t ? 0 : false)
  }), [t, f]), {
    [o]: (0, s.jb)(f, t),
    [c]: n,
    [d]: u[n],
    role: "gridcell",
    "aria-rowindex": r,
    "aria-colindex": l,
    tabIndex: m,
    onFocus: b
  }
}

function p(e) {
  let {
    children: t,
    navigator: n
  } = e, {
    id: i,
    setFocus: l,
    containerProps: {
      onKeyDown: s,
      ref: o
    }
  } = n, c = a.useMemo(() => ({
    id: i,
    setFocus: l
  }), [i, l]), d = a.useMemo(() => ({
    onKeyDown: s,
    ref: o,
    id: i
  }), [s, o, i]);
  return (0, r.jsx)(x.Provider, {
    value: d,
    children: (0, r.jsx)(g.Provider, {
      value: c,
      children: t
    })
  })
}