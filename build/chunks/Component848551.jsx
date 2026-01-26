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
    row: r
  } = e, l = "[".concat(c, '="').concat(t, '"]'), i = "[".concat("aria-colindex", '="').concat(n, '"]'), a = "[".concat("aria-rowindex", '="').concat(r, '"]');
  return "".concat(l).concat(i).concat(a)
}

function h(e) {
  let {
    id: t,
    isEnabled: n,
    setFocus: r
  } = e, c = l.useRef(null), h = l.useRef(false), g = l.useRef(null), f = l.useRef(n);
  l.useLayoutEffect(() => {
    f.current = n
  }, [n]);
  let x = l.useCallback(e => {
      var t;
      return (null != (t = g.current) ? t : document).querySelector(e)
    }, []),
    p = l.useCallback((e, t) => {
      f.current && r(e, t)
    }, [r]),
    b = l.useCallback(e => {
      if (f.current) {
        var t;
        null == (t = document.querySelector(e)) || t.focus()
      }
    }, []),
    j = l.useCallback(e => {
      c.current = e;
      let n = (0, s.Mz)(e, o),
        r = (0, s.HP)(e);
      p(n, r), (0, i.T)(t, r, true)
    }, [t, p]),
    [v, _] = l.useState(false),
    y = l.useRef(v);
  l.useLayoutEffect(() => {
    y.current = v
  }, [v]), l.useLayoutEffect(() => {
    let e = g.current;
    if (null != e) return e.addEventListener("focusin", n), e.addEventListener("focusout", r), e.addEventListener("focus", l), e.addEventListener("scroll", i, {
      passive: true
    }), () => {
      e.removeEventListener("focusin", n), e.removeEventListener("focusout", r), e.removeEventListener("focus", l), e.removeEventListener("scroll", i)
    };

    function n() {
      _(true)
    }

    function r(e) {
      e.currentTarget.contains(e.relatedTarget) || (_(false), requestAnimationFrame(() => {
        let e = c.current;
        null !== e && null == x((0, s.Mz)(e, o)) && b((0, s.Mz)(t, "data-grid-id"))
      }))
    }

    function l() {
      let e = g.current;
      if (y.current || null == e) return
    }

    function i() {
      h.current = true
    }
  }, [t, p, b, j, x]);
  let A = l.useCallback(e => {
      var t, n;
      if (!f.current) return;
      let r = c.current,
        l = g.current;
      if (null == r) return;
      let i = (0, s.Mz)(r, o),
        h = null == l ? true : l.querySelector(i);
      if (null == h) return;
      let p = parseInt(null != (t = h.getAttribute("data-grid-section")) ? t : ""),
        b = parseInt(h.getAttribute("aria-rowindex")),
        v = parseInt(h.getAttribute("aria-colindex"));
      switch (u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key) {
        case a.D$.RIGHT: {
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
        case a.D$.LEFT: {
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
        case a.D$.DOWN: {
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
        case a.D$.UP: {
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
        case a.D$.SPACE:
        case a.D$.ENTER: {
          if (e.repeat) return;
          let t = c.current;
          if (null != t) {
            let r = x((0, s.Mz)(t, o)),
              l = null != (n = null == r ? true : r.ownerDocument) ? n : document,
              i = r === l.activeElement;
            null != r && i && (e.preventDefault(), e.stopPropagation(), null == r || r.click())
          }
        }
      }
    }, [x, j]),
    C = l.useCallback(e => {
      c.current = null != e ? (0, s.t$)(t, e) : null
    }, [t]);
  return l.useMemo(() => ({
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
  f = Chunk64700.createContext({
    id: "NO_LIST",
    setFocus() {}
  }),
  x = Chunk64700.createContext(g);

function p(e) {
  let {
    id: t,
    section: n,
    row: r,
    column: a,
    boundaries: u
  } = e, [m, h] = l.useState(0 === r && 0 === a ? 0 : false), {
    id: g,
    setFocus: x
  } = l.useContext(f), p = l.useCallback(() => x(t), [t, x]);
  return l.useLayoutEffect(() => (0, i.e)(g, e => {
    h(e === t ? 0 : false)
  }), [t, g]), {
    [o]: (0, s.t$)(g, t),
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
    id: i,
    setFocus: a,
    containerProps: {
      onKeyDown: s,
      ref: o
    }
  } = n, c = l.useMemo(() => ({
    id: i,
    setFocus: a
  }), [i, a]), d = l.useMemo(() => ({
    onKeyDown: s,
    ref: o,
    id: i
  }), [s, o, i]);
  return (0, r.jsx)(x.Provider, {
    value: d,
    children: (0, r.jsx)(f.Provider, {
      value: c,
      children: t
    })
  })
}