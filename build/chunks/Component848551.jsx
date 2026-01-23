/** Chunk was on 46875 **/
/** chunk id: 848551, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => h,
  E: () => p,
  JR: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk461771 = require("./461771.js"),
  Chunk741918 = require("./741918.js"),
  Chunk602034 = require("./602034.js");
let o = "data-grid-item-id",
  c = "data-grid-section",
  d = "data-grid-prev-section-boundary",
  u = new Set([Chunk741918.D$.UP, Chunk741918.D$.DOWN, Chunk741918.D$.LEFT, Chunk741918.D$.RIGHT]);

function m(e) {
  let {
    section: t,
    column: n,
    row: l
  } = e, r = "[".concat(c, '="').concat(t, '"]'), i = "[".concat("aria-colindex", '="').concat(n, '"]'), a = "[".concat("aria-rowindex", '="').concat(l, '"]');
  return "".concat(r).concat(i).concat(a)
}

function h(e) {
  let {
    id: t,
    isEnabled: n,
    setFocus: l
  } = e, c = r.useRef(null), h = r.useRef(false), g = r.useRef(null), x = r.useRef(n);
  r.useLayoutEffect(() => {
    x.current = n
  }, [n]);
  let f = r.useCallback(e => {
      var t;
      return (null != (t = g.current) ? t : document).querySelector(e)
    }, []),
    p = r.useCallback((e, t) => {
      x.current && l(e, t)
    }, [l]),
    b = r.useCallback(e => {
      if (x.current) {
        var t;
        null == (t = document.querySelector(e)) || t.focus()
      }
    }, []),
    j = r.useCallback(e => {
      c.current = e;
      let n = (0, s.Mz)(e, o),
        l = (0, s.HP)(e);
      p(n, l), (0, i.T)(t, l, true)
    }, [t, p]),
    [v, _] = r.useState(false),
    y = r.useRef(v);
  r.useLayoutEffect(() => {
    y.current = v
  }, [v]), r.useLayoutEffect(() => {
    let e = g.current;
    if (null != e) return e.addEventListener("focusin", n), e.addEventListener("focusout", l), e.addEventListener("focus", r), e.addEventListener("scroll", i, {
      passive: true
    }), () => {
      e.removeEventListener("focusin", n), e.removeEventListener("focusout", l), e.removeEventListener("focus", r), e.removeEventListener("scroll", i)
    };

    function n() {
      _(true)
    }

    function l(e) {
      e.currentTarget.contains(e.relatedTarget) || (_(false), requestAnimationFrame(() => {
        let e = c.current;
        null !== e && null == f((0, s.Mz)(e, o)) && b((0, s.Mz)(t, "data-grid-id"))
      }))
    }

    function r() {
      let e = g.current;
      if (y.current || null == e) return
    }

    function i() {
      h.current = true
    }
  }, [t, p, b, j, f]);
  let A = r.useCallback(e => {
      var t, n;
      if (!x.current) return;
      let l = c.current,
        r = g.current;
      if (null == l) return;
      let i = (0, s.Mz)(l, o),
        h = null == r ? true : r.querySelector(i);
      if (null == h) return;
      let p = parseInt(null != (t = h.getAttribute("data-grid-section")) ? t : ""),
        b = parseInt(h.getAttribute("aria-rowindex")),
        v = parseInt(h.getAttribute("aria-colindex"));
      switch (u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key) {
        case a.D$.RIGHT: {
          let e = f(m({
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
        case a.D$.LEFT: {
          let e = f(m({
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
        case a.D$.DOWN: {
          let e = f(m({
            section: p,
            row: b + 1,
            column: v
          }));
          if (null == e && (e = f(m({
              section: p + 1,
              row: 0,
              column: v
            }))), null != e) {
            let t = e.getAttribute(o);
            null != t && j(t)
          }
          return
        }
        case a.D$.UP: {
          let e;
          if (0 === b) {
            let t = parseInt(h.getAttribute(d));
            null == (e = f(m({
              section: p - 1,
              row: t,
              column: v
            }))) && (e = f(m({
              section: p - 1,
              row: t - 1,
              column: v
            })))
          } else e = f(m({
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
        case a.D$.SPACE:
        case a.D$.ENTER: {
          if (e.repeat) return;
          let t = c.current;
          if (null != t) {
            let l = f((0, s.Mz)(t, o)),
              r = null != (n = null == l ? true : l.ownerDocument) ? n : document,
              i = l === r.activeElement;
            null != l && i && (e.preventDefault(), e.stopPropagation(), null == l || l.click())
          }
        }
      }
    }, [f, j]),
    C = r.useCallback(e => {
      c.current = null != e ? (0, s.t$)(t, e) : null
    }, [t]);
  return r.useMemo(() => ({
    id: t,
    containerProps: {
      onKeyDown: A,
      ref: g
    },
    setFocus: C
  }), [t, A, C])
}
let g = {
    id: "NO_LIST",
    onKeyDown() {},
    ref: Chunk64700.createRef()
  },
  x = Chunk64700.createContext({
    id: "NO_LIST",
    setFocus() {}
  }),
  f = Chunk64700.createContext(g);

function p(e) {
  let {
    id: t,
    section: n,
    row: l,
    column: a,
    boundaries: u
  } = e, [m, h] = r.useState(0 === l && 0 === a ? 0 : false), {
    id: g,
    setFocus: f
  } = r.useContext(x), p = r.useCallback(() => f(t), [t, f]);
  return r.useLayoutEffect(() => (0, i.e)(g, e => {
    h(e === t ? 0 : false)
  }), [t, g]), {
    [o]: (0, s.t$)(g, t),
    [c]: n,
    [d]: u[n],
    role: "gridcell",
    "aria-rowindex": l,
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
    id: i,
    setFocus: a,
    containerProps: {
      onKeyDown: s,
      ref: o
    }
  } = n, c = r.useMemo(() => ({
    id: i,
    setFocus: a
  }), [i, a]), d = r.useMemo(() => ({
    onKeyDown: s,
    ref: o,
    id: i
  }), [s, o, i]);
  return (0, l.jsx)(f.Provider, {
    value: d,
    children: (0, l.jsx)(x.Provider, {
      value: c,
      children: t
    })
  })
}