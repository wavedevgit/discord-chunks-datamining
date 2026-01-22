/** Chunk was on 47841 **/
/** chunk id: 273875, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk775602 = require("./775602.js"),
  Chunk530552 = require("./530552.js"),
  Chunk318023 = require("./318023.js");
let b = Chunk64700.forwardRef(function(e, t) {
  var n, l;
  let {
    value: a,
    isSelected: o,
    isEditing: d,
    forceShowErrorTooltip: u = false,
    error: f
  } = e, [b, m, p] = i.useMemo(() => {
    if (null == f) return [];
    let {
      erroringCharacterOffset: e = 0,
      erroringCharacterLength: t = a.length
    } = null != f ? f : {};
    return [a.slice(0, e), a.slice(e, e + t), a.slice(e + t)]
  }, [a, f]);
  return null == f ? (0, r.jsx)("div", {
    className: s()(g.n5, {
      [g.JN]: d,
      [g.sp]: o
    }),
    ref: t,
    children: a
  }) : (null != (n = null == b ? true : b.length) ? n : 0) + (null != (l = null == m ? true : m.length) ? l : 0) > 70 ? (0, r.jsx)(c.m, {
    "aria-label": f.message,
    __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
      "aria-label": f.message,
      children: [f.message, " ", (0, r.jsx)("span", {
        className: g.io,
        children: m
      })]
    }),
    position: "left",
    forceOpen: u || true,
    children: (0, r.jsxs)("div", {
      ref: t,
      className: s()(g.n5, {
        [g.JN]: d,
        [g.bJ]: null != f && !d,
        [g.fR]: null != f && !d
      }),
      children: [(0, r.jsx)("span", {
        children: b
      }), (0, r.jsx)("span", {
        className: g.SD,
        children: m
      }), (0, r.jsx)("span", {
        children: p
      })]
    })
  }) : (0, r.jsxs)("div", {
    ref: t,
    className: s()(g.n5, {
      [g.JN]: d,
      [g.bJ]: null != f && !d
    }),
    children: [(0, r.jsx)("span", {
      children: b
    }), (0, r.jsx)(c.m, {
      text: f.message,
      position: "top",
      forceOpen: u || true,
      children: (0, r.jsx)("span", {
        className: g.SD,
        children: m
      })
    }), (0, r.jsx)("span", {
      children: p
    })]
  })
});

function m(e) {
  let {
    value: t,
    onChange: n,
    onBlur: l,
    onFocus: c,
    onRemove: m,
    isSelected: p,
    isSelecting: x,
    error: h,
    forceShowErrorTooltip: j
  } = e, O = i.useRef(null), y = i.useRef(null), [v, A] = i.useState(false), {
    ref: E,
    width: N = 0
  } = (0, d.Ay)(v), {
    ref: _,
    width: S = 0
  } = (0, d.Ay)(v), T = (0, a.bG)([u.A], () => u.A.useReducedMotion), [I, C] = i.useState(j), P = i.useRef(null), w = N > S ? N : S;
  i.useEffect(() => {
    j ? (C(true), P.current = setTimeout(() => {
      C(false), P.current = null
    }, f.Mw)) : C(false)
  }, [j]), i.useEffect(() => () => {
    clearTimeout(P.current)
  }, []);
  let R = i.useCallback(e => {
      n(e.target.value)
    }, [n]),
    D = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      if (t.trim().length <= 0 && m(), null != O.current && null != E.current && null != y.current) {
        var n;
        O.current.scrollTo(0, 0), O.current.setSelectionRange(0, 0), O.current.scrollLeft = 0, E.current.scrollLeft = 0, (null == (n = y.current) ? true : n.ref) != null && (y.current.ref.scrollLeft = 0)
      }
      A(false), l(e)
    }, [t, E, l, m]),
    G = i.useCallback(e => {
      let n = t.trim().length <= 0;
      f.Wu.has(e.key) ? (e.preventDefault(), e.stopPropagation(), D(true)) : "Backspace" === e.key && n && (e.preventDefault(), e.stopPropagation(), D(true))
    }, [D, t]),
    L = i.useCallback(e => {
      let t = e.metaKey || e.ctrlKey;
      c(t), t ? e.preventDefault() : A(true), e.stopPropagation()
    }, [c]),
    k = i.useCallback(e => {
      m()
    }, [m]);
  return (0, r.jsx)("div", {
    className: g.G1,
    children: (0, r.jsxs)("div", {
      ref: _,
      className: s()(g.Tm, {
        [g.JN]: v,
        [g.mV]: !v && !T,
        [g.sp]: p,
        [g.Pq]: x,
        [g.bJ]: null != h && !v
      }),
      children: [(0, r.jsxs)(o.DUT, {
        tag: "div",
        onBlur: () => D(false),
        onClick: L,
        ignoreKeyPress: true,
        onMouseEnter: () => C(true),
        onMouseLeave: () => C(false),
        className: s()(g.nz, {
          [g.Pq]: x,
          [g.JN]: v
        }),
        ref: y,
        children: [(0, r.jsx)("input", {
          className: s()(g.uS, {
            [g.JN]: v,
            [g.Pq]: x
          }),
          ref: O,
          onChange: R,
          onKeyDownCapture: G,
          value: t,
          style: {
            width: w > 0 ? w : "calc(".concat(t.length, "ch + 10px)")
          }
        }), (0, r.jsx)(b, {
          ref: E,
          value: t,
          isEditing: v,
          isSelected: p,
          error: h,
          forceShowErrorTooltip: I || v
        })]
      }), !v && (0, r.jsx)(o.DUT, {
        className: g.Nk,
        onClick: k,
        children: (0, r.jsx)(o.PGe, {
          size: "xxs",
          color: "currentColor",
          className: g.ut
        })
      })]
    })
  })
}