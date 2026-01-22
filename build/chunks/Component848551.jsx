/** Chunk was on 46875 **/
/** chunk id: 848551, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => h,
  E: () => b,
  JR: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk461771 = require("./461771.js"),
  Chunk741918 = require("./741918.js"),
  Chunk602034 = require("./602034.js");
let c = "data-grid-item-id",
  o = "data-grid-section",
  d = "data-grid-prev-section-boundary",
  u = new Set([Chunk741918.D$.UP, Chunk741918.D$.DOWN, Chunk741918.D$.LEFT, Chunk741918.D$.RIGHT]);

function m(e) {
  let {
    section: t,
    column: n,
    row: l
  } = e, r = "[".concat(o, '="').concat(t, '"]'), a = "[".concat("aria-colindex", '="').concat(n, '"]'), i = "[".concat("aria-rowindex", '="').concat(l, '"]');
  return "".concat(r).concat(a).concat(i)
}

function h(e) {
  let {
    id: t,
    isEnabled: n,
    setFocus: l
  } = e, o = r.useRef(null), h = r.useRef(false), f = r.useRef(null), g = r.useRef(n);
  r.useLayoutEffect(() => {
    g.current = n
  }, [n]);
  let x = r.useCallback(e => {
      var t;
      return (null != (t = f.current) ? t : document).querySelector(e)
    }, []),
    b = r.useCallback((e, t) => {
      g.current && l(e, t)
    }, [l]),
    p = r.useCallback(e => {
      if (g.current) {
        var t;
        null == (t = document.querySelector(e)) || t.focus()
      }
    }, []),
    j = r.useCallback(e => {
      o.current = e;
      let n = (0, s.Mz)(e, c),
        l = (0, s.HP)(e);
      b(n, l), (0, a.T)(t, l, true)
    }, [t, b]),
    [v, y] = r.useState(false),
    A = r.useRef(v);
  r.useLayoutEffect(() => {
    A.current = v
  }, [v]), r.useLayoutEffect(() => {
    let e = f.current;
    if (null != e) return e.addEventListener("focusin", n), e.addEventListener("focusout", l), e.addEventListener("focus", r), e.addEventListener("scroll", a, {
      passive: true
    }), () => {
      e.removeEventListener("focusin", n), e.removeEventListener("focusout", l), e.removeEventListener("focus", r), e.removeEventListener("scroll", a)
    };

    function n() {
      y(true)
    }

    function l(e) {
      e.currentTarget.contains(e.relatedTarget) || (y(false), requestAnimationFrame(() => {
        let e = o.current;
        null !== e && null == x((0, s.Mz)(e, c)) && p((0, s.Mz)(t, "data-grid-id"))
      }))
    }

    function r() {
      let e = f.current;
      if (A.current || null == e) return
    }

    function a() {
      h.current = true
    }
  }, [t, b, p, j, x]);
  let C = r.useCallback(e => {
      var t, n;
      if (!g.current) return;
      let l = o.current,
        r = f.current;
      if (null == l) return;
      let a = (0, s.Mz)(l, c),
        h = null == r ? true : r.querySelector(a);
      if (null == h) return;
      let b = parseInt(null != (t = h.getAttribute("data-grid-section")) ? t : ""),
        p = parseInt(h.getAttribute("aria-rowindex")),
        v = parseInt(h.getAttribute("aria-colindex"));
      switch (u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key) {
        case i.D$.RIGHT: {
          let e = x(m({
            section: b,
            row: p,
            column: v + 1
          }));
          if (null != e) {
            let t = e.getAttribute(c);
            null != t && j(t)
          }
          return
        }
        case i.D$.LEFT: {
          let e = x(m({
            section: b,
            row: p,
            column: v - 1
          }));
          if (null != e) {
            let t = e.getAttribute(c);
            null != t && j(t)
          }
          return
        }
        case i.D$.DOWN: {
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
            let t = e.getAttribute(c);
            null != t && j(t)
          }
          return
        }
        case i.D$.UP: {
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
            let t = e.getAttribute(c);
            null != t && j(t)
          }
          return
        }
        case i.D$.SPACE:
        case i.D$.ENTER: {
          if (e.repeat) return;
          let t = o.current;
          if (null != t) {
            let l = x((0, s.Mz)(t, c)),
              r = null != (n = null == l ? true : l.ownerDocument) ? n : document,
              a = l === r.activeElement;
            null != l && a && (e.preventDefault(), e.stopPropagation(), null == l || l.click())
          }
        }
      }
    }, [x, j]),
    O = r.useCallback(e => {
      o.current = null != e ? (0, s.t$)(t, e) : null
    }, [t]);
  return r.useMemo(() => ({
    id: t,
    containerProps: {
      onKeyDown: C,
      ref: f
    },
    setFocus: O
  }), [t, C, O])
}
let f = {
    id: "NO_LIST",
    onKeyDown() {},
    ref: Chunk64700.createRef()
  },
  g = Chunk64700.createContext({
    id: "NO_LIST",
    setFocus() {}
  }),
  x = Chunk64700.createContext(f);

function b(e) {
  let {
    id: t,
    section: n,
    row: l,
    column: i,
    boundaries: u
  } = e, [m, h] = r.useState(0 === l && 0 === i ? 0 : false), {
    id: f,
    setFocus: x
  } = r.useContext(g), b = r.useCallback(() => x(t), [t, x]);
  return r.useLayoutEffect(() => (0, a.e)(f, e => {
    h(e === t ? 0 : false)
  }), [t, f]), {
    [c]: (0, s.t$)(f, t),
    [o]: n,
    [d]: u[n],
    role: "gridcell",
    "aria-rowindex": l,
    "aria-colindex": i,
    tabIndex: m,
    onFocus: b
  }
}

function p(e) {
  let {
    children: t,
    navigator: n
  } = e, {
    id: a,
    setFocus: i,
    containerProps: {
      onKeyDown: s,
      ref: c
    }
  } = n, o = r.useMemo(() => ({
    id: a,
    setFocus: i
  }), [a, i]), d = r.useMemo(() => ({
    onKeyDown: s,
    ref: c,
    id: a
  }), [s, c, a]);
  return (0, l.jsx)(x.Provider, {
    value: d,
    children: (0, l.jsx)(g.Provider, {
      value: o,
      children: t
    })
  })
}