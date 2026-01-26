/** Chunk was on 39048 **/
/** chunk id: 273875, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
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
let p = Chunk64700.forwardRef(function(e, t) {
  var n, l;
  let {
    value: a,
    isSelected: c,
    isEditing: d,
    forceShowErrorTooltip: u = false,
    error: g
  } = e, [p, f, h] = i.useMemo(() => {
    if (null == g) return [];
    let {
      erroringCharacterOffset: e = 0,
      erroringCharacterLength: t = a.length
    } = null != g ? g : {};
    return [a.slice(0, e), a.slice(e, e + t), a.slice(e + t)]
  }, [a, g]);
  return null == g ? (0, r.jsx)("div", {
    className: s()(m.n5, {
      [m.JN]: d,
      [m.sp]: c
    }),
    ref: t,
    children: a
  }) : (null != (n = null == p ? true : p.length) ? n : 0) + (null != (l = null == f ? true : f.length) ? l : 0) > 70 ? (0, r.jsx)(o.m, {
    "aria-label": g.message,
    __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
      "aria-label": g.message,
      children: [g.message, " ", (0, r.jsx)("span", {
        className: m.io,
        children: f
      })]
    }),
    position: "left",
    forceOpen: u || true,
    children: (0, r.jsxs)("div", {
      ref: t,
      className: s()(m.n5, {
        [m.JN]: d,
        [m.bJ]: null != g && !d,
        [m.fR]: null != g && !d
      }),
      children: [(0, r.jsx)("span", {
        children: p
      }), (0, r.jsx)("span", {
        className: m.SD,
        children: f
      }), (0, r.jsx)("span", {
        children: h
      })]
    })
  }) : (0, r.jsxs)("div", {
    ref: t,
    className: s()(m.n5, {
      [m.JN]: d,
      [m.bJ]: null != g && !d
    }),
    children: [(0, r.jsx)("span", {
      children: p
    }), (0, r.jsx)(o.m, {
      text: g.message,
      position: "top",
      forceOpen: u || true,
      children: (0, r.jsx)("span", {
        className: m.SD,
        children: f
      })
    }), (0, r.jsx)("span", {
      children: h
    })]
  })
});

function f(e) {
  let {
    value: t,
    onChange: n,
    onBlur: l,
    onFocus: o,
    onRemove: f,
    isSelected: h,
    isSelecting: b,
    error: x,
    forceShowErrorTooltip: j
  } = e, _ = i.useRef(null), O = i.useRef(null), [v, y] = i.useState(false), {
    ref: A,
    width: E = 0
  } = (0, d.Ay)(v), {
    ref: N,
    width: S = 0
  } = (0, d.Ay)(v), I = (0, a.bG)([u.A], () => u.A.useReducedMotion), [T, C] = i.useState(j), P = i.useRef(null), w = E > S ? E : S;
  i.useEffect(() => {
    j ? (C(true), P.current = setTimeout(() => {
      C(false), P.current = null
    }, g.Mw)) : C(false)
  }, [j]), i.useEffect(() => () => {
    clearTimeout(P.current)
  }, []);
  let R = i.useCallback(e => {
      n(e.target.value)
    }, [n]),
    D = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      if (t.trim().length <= 0 && f(), null != _.current && null != A.current && null != O.current) {
        var n;
        _.current.scrollTo(0, 0), _.current.setSelectionRange(0, 0), _.current.scrollLeft = 0, A.current.scrollLeft = 0, (null == (n = O.current) ? true : n.ref) != null && (O.current.ref.scrollLeft = 0)
      }
      y(false), l(e)
    }, [t, A, l, f]),
    G = i.useCallback(e => {
      let n = t.trim().length <= 0;
      g.Wu.has(e.key) ? (e.preventDefault(), e.stopPropagation(), D(true)) : "Backspace" === e.key && n && (e.preventDefault(), e.stopPropagation(), D(true))
    }, [D, t]),
    L = i.useCallback(e => {
      let t = e.metaKey || e.ctrlKey;
      o(t), t ? e.preventDefault() : y(true), e.stopPropagation()
    }, [o]),
    k = i.useCallback(e => {
      f()
    }, [f]);
  return (0, r.jsx)("div", {
    className: m.G1,
    children: (0, r.jsxs)("div", {
      ref: N,
      className: s()(m.Tm, {
        [m.JN]: v,
        [m.mV]: !v && !I,
        [m.sp]: h,
        [m.Pq]: b,
        [m.bJ]: null != x && !v
      }),
      children: [(0, r.jsxs)(c.DUT, {
        tag: "div",
        onBlur: () => D(false),
        onClick: L,
        ignoreKeyPress: true,
        onMouseEnter: () => C(true),
        onMouseLeave: () => C(false),
        className: s()(m.nz, {
          [m.Pq]: b,
          [m.JN]: v
        }),
        ref: O,
        children: [(0, r.jsx)("input", {
          className: s()(m.uS, {
            [m.JN]: v,
            [m.Pq]: b
          }),
          ref: _,
          onChange: R,
          onKeyDownCapture: G,
          value: t,
          style: {
            width: w > 0 ? w : "calc(".concat(t.length, "ch + 10px)")
          }
        }), (0, r.jsx)(p, {
          ref: A,
          value: t,
          isEditing: v,
          isSelected: h,
          error: x,
          forceShowErrorTooltip: T || v
        })]
      }), !v && (0, r.jsx)(c.DUT, {
        className: m.Nk,
        onClick: k,
        children: (0, r.jsx)(c.PGe, {
          size: "xxs",
          color: "currentColor",
          className: m.ut
        })
      })]
    })
  })
}