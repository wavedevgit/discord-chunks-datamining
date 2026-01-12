/** Chunk was on 9536 **/
/** chunk id: 853276, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk607070 = require("./607070.js"),
  Chunk596390 = require("./596390.js"),
  Chunk812234 = require("./812234.js");
let f = Chunk473749.forwardRef(function(e, t) {
  var n, l;
  let {
    value: s,
    isSelected: c,
    isEditing: d,
    forceShowErrorTooltip: u = false,
    error: g
  } = e, [f, b, p] = i.useMemo(() => {
    if (null == g) return [];
    let {
      erroringCharacterOffset: e = 0,
      erroringCharacterLength: t = s.length
    } = null != g ? g : {}, n = s.slice(0, e);
    return [n, s.slice(e, e + t), s.slice(e + t)]
  }, [s, g]);
  return null == g ? (0, r.jsx)("div", {
    className: a()(m.chipletValue, {
      [m.isEditing]: d,
      [m.isSelected]: c
    }),
    ref: t,
    children: s
  }) : (null != (n = null == f ? true : f.length) ? n : 0) + (null != (l = null == b ? true : b.length) ? l : 0) > 70 ? (0, r.jsx)(o.u, {
    "aria-label": g.message,
    __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
      "aria-label": g.message,
      children: [g.message, " ", (0, r.jsx)("span", {
        className: m.errorOverflowValue,
        children: b
      })]
    }),
    position: "left",
    forceOpen: u || true,
    children: (0, r.jsxs)("div", {
      ref: t,
      className: a()(m.chipletValue, {
        [m.isEditing]: d,
        [m.isError]: null != g && !d,
        [m.isOverflowing]: null != g && !d
      }),
      children: [(0, r.jsx)("span", {
        children: f
      }), (0, r.jsx)("span", {
        className: m.errorValue,
        children: b
      }), (0, r.jsx)("span", {
        children: p
      })]
    })
  }) : (0, r.jsxs)("div", {
    ref: t,
    className: a()(m.chipletValue, {
      [m.isEditing]: d,
      [m.isError]: null != g && !d
    }),
    children: [(0, r.jsx)("span", {
      children: f
    }), (0, r.jsx)(o.u, {
      text: g.message,
      position: "top",
      forceOpen: u || true,
      children: (0, r.jsx)("span", {
        className: m.errorValue,
        children: b
      })
    }), (0, r.jsx)("span", {
      children: p
    })]
  })
});

function b(e) {
  let {
    value: t,
    onChange: n,
    onBlur: l,
    onFocus: o,
    onRemove: b,
    isSelected: p,
    isSelecting: h,
    error: x,
    forceShowErrorTooltip: j
  } = e, v = i.useRef(null), O = i.useRef(null), [y, C] = i.useState(false), {
    ref: N,
    width: E = 0
  } = (0, d.ZP)(y), {
    ref: I,
    width: S = 0
  } = (0, d.ZP)(y), _ = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), [T, P] = i.useState(j), w = i.useRef(null), Z = E > S ? E : S;
  i.useEffect(() => {
    j ? (P(true), w.current = setTimeout(() => {
      P(false), w.current = null
    }, g.I5)) : P(false)
  }, [j]), i.useEffect(() => () => {
    clearTimeout(w.current)
  }, []);
  let R = i.useCallback(e => {
      n(e.target.value)
    }, [n]),
    D = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      if (t.trim().length <= 0 && b(), null != v.current && null != N.current && null != O.current) {
        var n;
        v.current.scrollTo(0, 0), v.current.setSelectionRange(0, 0), v.current.scrollLeft = 0, N.current.scrollLeft = 0, (null == (n = O.current) ? true : n.ref) != null && (O.current.ref.scrollLeft = 0)
      }
      C(false), l(e)
    }, [t, N, l, b]),
    A = i.useCallback(e => {
      let n = t.trim().length <= 0;
      g.ye.has(e.key) ? (e.preventDefault(), e.stopPropagation(), D(true)) : "Backspace" === e.key && n && (e.preventDefault(), e.stopPropagation(), D(true))
    }, [D, t]),
    L = i.useCallback(e => {
      let t = e.metaKey || e.ctrlKey;
      o(t), t ? e.preventDefault() : C(true), e.stopPropagation()
    }, [o]),
    k = i.useCallback(e => {
      b()
    }, [b]);
  return (0, r.jsx)("div", {
    className: m.chipletFlexContainer,
    children: (0, r.jsxs)("div", {
      ref: I,
      className: a()(m.chipletContainer, {
        [m.isEditing]: y,
        [m.smallBlink]: !y && !_,
        [m.isSelected]: p,
        [m.isSelecting]: h,
        [m.isError]: null != x && !y
      }),
      children: [(0, r.jsxs)(c.P3F, {
        tag: "div",
        onBlur: () => D(false),
        onClick: L,
        ignoreKeyPress: true,
        onMouseEnter: () => P(true),
        onMouseLeave: () => P(false),
        className: a()(m.chipletContainerInner, {
          [m.isSelecting]: h,
          [m.isEditing]: y
        }),
        ref: O,
        children: [(0, r.jsx)("input", {
          className: a()(m.chipletInput, {
            [m.isEditing]: y,
            [m.isSelecting]: h
          }),
          ref: v,
          onChange: R,
          onKeyDownCapture: A,
          value: t,
          style: {
            width: Z > 0 ? Z : "calc(".concat(t.length, "ch + 10px)")
          }
        }), (0, r.jsx)(f, {
          ref: N,
          value: t,
          isEditing: y,
          isSelected: p,
          error: x,
          forceShowErrorTooltip: T || y
        })]
      }), !y && (0, r.jsx)(c.P3F, {
        className: m.closeIconContainer,
        onClick: k,
        children: (0, r.jsx)(c.Dio, {
          size: "xxs",
          color: "currentColor",
          className: m.closeIcon
        })
      })]
    })
  })
}