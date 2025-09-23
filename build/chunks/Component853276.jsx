/** Chunk was on 71512 **/
/** chunk id: 853276, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk607070 = require("./607070.js"),
  Chunk596390 = require("./596390.js"),
  Chunk454089 = require("./454089.js");

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = Chunk647438.forwardRef(function(e, t) {
  var n, l;
  let {
    value: a,
    isSelected: c,
    isEditing: d,
    forceShowErrorTooltip: u = false,
    error: f
  } = e, [h, b, x] = i.useMemo(() => {
    if (null == f) return [];
    let {
      erroringCharacterOffset: e = 0,
      erroringCharacterLength: t = a.length
    } = null != f ? f : {}, n = a.slice(0, e);
    return [n, a.slice(e, e + t), a.slice(e + t)]
  }, [a, f]);
  return null == f ? (0, r.jsx)("div", {
    className: s()(m.chipletValue, {
      [m.isEditing]: d,
      [m.isSelected]: c
    }),
    ref: t,
    children: a
  }) : (null != (n = null == h ? true : h.length) ? n : 0) + (null != (l = null == b ? true : b.length) ? l : 0) > 70 ? (0, r.jsx)(o.ua7, {
    "aria-label": f.message,
    text: () => (0, r.jsxs)("div", {
      "aria-label": f.message,
      children: [f.message, " ", (0, r.jsx)("span", {
        className: m.errorOverflowValue,
        children: b
      })]
    }),
    tooltipClassName: m.errorTooltip,
    color: o.ua7.Colors.RED,
    position: "left",
    forceOpen: u || true,
    children: e => (0, r.jsxs)("div", p(g({
      ref: t,
      className: s()(m.chipletValue, {
        [m.isEditing]: d,
        [m.isError]: null != f && !d,
        [m.isOverflowing]: null != f && !d
      })
    }, e), {
      children: [(0, r.jsx)("span", {
        children: h
      }), (0, r.jsx)("span", {
        className: m.errorValue,
        children: b
      }), (0, r.jsx)("span", {
        children: x
      })]
    }))
  }) : (0, r.jsxs)("div", {
    ref: t,
    className: s()(m.chipletValue, {
      [m.isEditing]: d,
      [m.isError]: null != f && !d
    }),
    children: [(0, r.jsx)("span", {
      children: h
    }), (0, r.jsx)(o.ua7, {
      text: f.message,
      color: o.ua7.Colors.RED,
      position: "top",
      forceOpen: u || true,
      children: e => (0, r.jsx)("span", p(g({}, e), {
        className: m.errorValue,
        children: b
      }))
    }), (0, r.jsx)("span", {
      children: x
    })]
  })
});

function h(e) {
  let {
    value: t,
    onChange: n,
    onBlur: l,
    onFocus: g,
    onRemove: p,
    isSelected: h,
    isSelecting: b,
    error: x,
    forceShowErrorTooltip: j
  } = e, v = i.useRef(null), _ = i.useRef(null), [O, y] = i.useState(false), {
    ref: C,
    width: N = 0
  } = (0, c.ZP)(O), {
    ref: E,
    width: I = 0
  } = (0, c.ZP)(O), S = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), [T, P] = i.useState(j), w = i.useRef(null), R = N > I ? N : I;
  i.useEffect(() => {
    j ? (P(true), w.current = setTimeout(() => {
      P(false), w.current = null
    }, u.I5)) : P(false)
  }, [j]), i.useEffect(() => () => {
    clearTimeout(w.current)
  }, []);
  let Z = i.useCallback(e => {
      n(e.target.value)
    }, [n]),
    D = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      if (t.trim().length <= 0 && p(), null != v.current && null != C.current && null != _.current) {
        var n;
        v.current.scrollTo(0, 0), v.current.setSelectionRange(0, 0), v.current.scrollLeft = 0, C.current.scrollLeft = 0, (null == (n = _.current) ? true : n.ref) != null && (_.current.ref.scrollLeft = 0)
      }
      y(false), l(e)
    }, [t, C, l, p]),
    A = i.useCallback(e => {
      let n = t.trim().length <= 0;
      u.ye.has(e.key) ? (e.preventDefault(), e.stopPropagation(), D(true)) : "Backspace" === e.key && n && (e.preventDefault(), e.stopPropagation(), D(true))
    }, [D, t]),
    L = i.useCallback(e => {
      let t = e.metaKey || e.ctrlKey;
      g(t), t ? e.preventDefault() : y(true), e.stopPropagation()
    }, [g]),
    k = i.useCallback(e => {
      p()
    }, [p]);
  return (0, r.jsx)("div", {
    className: m.chipletFlexContainer,
    children: (0, r.jsxs)("div", {
      ref: E,
      className: s()(m.chipletContainer, {
        [m.isEditing]: O,
        [m.smallBlink]: !O && !S,
        [m.isSelected]: h,
        [m.isSelecting]: b,
        [m.isError]: null != x && !O
      }),
      children: [(0, r.jsxs)(o.P3F, {
        tag: "div",
        onBlur: () => D(false),
        onClick: L,
        ignoreKeyPress: true,
        onMouseEnter: () => P(true),
        onMouseLeave: () => P(false),
        className: s()(m.chipletContainerInner, {
          [m.isSelecting]: b,
          [m.isEditing]: O
        }),
        ref: _,
        children: [(0, r.jsx)("input", {
          className: s()(m.chipletInput, {
            [m.isEditing]: O,
            [m.isSelecting]: b
          }),
          ref: v,
          onChange: Z,
          onKeyDownCapture: A,
          value: t,
          style: {
            width: R > 0 ? R : "calc(".concat(t.length, "ch + 10px)")
          }
        }), (0, r.jsx)(f, {
          ref: C,
          value: t,
          isEditing: O,
          isSelected: h,
          error: x,
          forceShowErrorTooltip: T || O
        })]
      }), !O && (0, r.jsx)(o.P3F, {
        className: m.closeIconContainer,
        onClick: k,
        children: (0, r.jsx)(o.Dio, {
          size: "xxs",
          color: "currentColor",
          className: m.closeIcon
        })
      })]
    })
  })
}