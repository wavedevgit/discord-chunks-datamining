/** Chunk was on 9456 **/
/** chunk id: 482062, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  KT: () => b,
  ZP: () => h,
  nX: () => p
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
  } = e, i = "[".concat(c, '="').concat(t, '"]'), l = "[".concat("aria-colindex", '="').concat(n, '"]'), a = "[".concat("aria-rowindex", '="').concat(r, '"]');
  return "".concat(i).concat(l).concat(a)
}

function h(e) {
  let {
    id: t,
    isEnabled: n,
    setFocus: r
  } = e, c = i.useRef(null), h = i.useRef(false), g = i.useRef(null), f = i.useRef(n);
  i.useLayoutEffect(() => {
    f.current = n
  }, [n]);
  let x = i.useCallback(e => {
      var t;
      return (null != (t = g.current) ? t : document).querySelector(e)
    }, []),
    p = i.useCallback((e, t) => {
      f.current && r(e, t)
    }, [r]),
    b = i.useCallback(e => {
      if (f.current) {
        var t;
        null == (t = document.querySelector(e)) || t.focus()
      }
    }, []),
    j = i.useCallback(e => {
      c.current = e;
      let n = (0, s.P1)(e, o),
        r = (0, s.x3)(e);
      p(n, r), (0, l.h)(t, r, true)
    }, [t, p]),
    [v, _] = i.useState(false),
    C = i.useRef(v);
  i.useLayoutEffect(() => {
    C.current = v
  }, [v]), i.useLayoutEffect(() => {
    let e = g.current;
    if (null != e) return e.addEventListener("focusin", n), e.addEventListener("focusout", r), e.addEventListener("focus", i), e.addEventListener("scroll", l, {
      passive: true
    }), () => {
      e.removeEventListener("focusin", n), e.removeEventListener("focusout", r), e.removeEventListener("focus", i), e.removeEventListener("scroll", l)
    };

    function n() {
      _(true)
    }

    function r(e) {
      e.currentTarget.contains(e.relatedTarget) || (_(false), requestAnimationFrame(() => {
        let e = c.current;
        null !== e && null == x((0, s.P1)(e, o)) && b((0, s.P1)(t, "data-grid-id"))
      }))
    }

    function i() {
      let e = g.current;
      if (C.current || null == e) return
    }

    function l() {
      h.current = true
    }
  }, [t, p, b, j, x]);
  let y = i.useCallback(e => {
      var t, n;
      if (!f.current) return;
      let r = c.current,
        i = g.current;
      if (null == r) return;
      let l = (0, s.P1)(r, o),
        h = null == i ? true : i.querySelector(l);
      if (null == h) return;
      let p = parseInt(null != (t = h.getAttribute("data-grid-section")) ? t : ""),
        b = parseInt(h.getAttribute("aria-rowindex")),
        v = parseInt(h.getAttribute("aria-colindex"));
      switch (u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key) {
        case a.R8.RIGHT: {
          let e = x(m({
            section: p,
            row: b,
            column: v + 1
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && j(t)
          }
          return
        }
        case a.R8.LEFT: {
          let e = x(m({
            section: p,
            row: b,
            column: v - 1
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && j(t)
          }
          return
        }
        case a.R8.DOWN: {
          let e = x(m({
            section: p,
            row: b + 1,
            column: v
          }));
          if (null == e && (e = x(m({
              section: p + 1,
              row: 0,
              column: v
            }))), null != e) {
            let t = e.getAttribute(o);
            null != t && j(t)
          }
          return
        }
        case a.R8.UP: {
          let e;
          if (0 === b) {
            let t = parseInt(h.getAttribute(d));
            null == (e = x(m({
              section: p - 1,
              row: t,
              column: v
            }))) && (e = x(m({
              section: p - 1,
              row: t - 1,
              column: v
            })))
          } else e = x(m({
            section: p,
            row: b - 1,
            column: v
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && j(t)
          }
          return
        }
        case a.R8.SPACE:
        case a.R8.ENTER: {
          if (e.repeat) return;
          let t = c.current;
          if (null != t) {
            let r = x((0, s.P1)(t, o)),
              i = null != (n = null == r ? true : r.ownerDocument) ? n : document,
              l = r === i.activeElement;
            null != r && l && (e.preventDefault(), e.stopPropagation(), null == r || r.click())
          }
        }
      }
    }, [x, j]),
    T = i.useCallback(e => {
      c.current = null != e ? (0, s.jb)(t, e) : null
    }, [t]);
  return i.useMemo(() => ({
    id: t,
    containerProps: {
      onKeyDown: y,
      ref: g
    },
    setFocus: T
  }), [t, y, T])
}
let g = {
    id: "NO_LIST",
    onKeyDown() {},
    ref: Chunk473749.createRef()
  },
  f = Chunk473749.createContext({
    id: "NO_LIST",
    setFocus() {}
  }),
  x = Chunk473749.createContext(g);

function p(e) {
  let {
    id: t,
    section: n,
    row: r,
    column: a,
    boundaries: u
  } = e, [m, h] = i.useState(0 === r && 0 === a ? 0 : false), {
    id: g,
    setFocus: x
  } = i.useContext(f), p = i.useCallback(() => x(t), [t, x]);
  return i.useLayoutEffect(() => (0, l.N)(g, e => {
    h(e === t ? 0 : false)
  }), [t, g]), {
    [o]: (0, s.jb)(g, t),
    [c]: n,
    [d]: u[n],
    role: "gridcell",
    "aria-rowindex": r,
    "aria-colindex": a,
    tabIndex: m,
    onFocus: p
  }
}

function b(e) {
  let {
    children: t,
    navigator: n
  } = e, {
    id: l,
    setFocus: a,
    containerProps: {
      onKeyDown: s,
      ref: o
    }
  } = n, c = i.useMemo(() => ({
    id: l,
    setFocus: a
  }), [l, a]), d = i.useMemo(() => ({
    onKeyDown: s,
    ref: o,
    id: l
  }), [s, o, l]);
  return (0, r.jsx)(x.Provider, {
    value: d,
    children: (0, r.jsx)(f.Provider, {
      value: c,
      children: t
    })
  })
}