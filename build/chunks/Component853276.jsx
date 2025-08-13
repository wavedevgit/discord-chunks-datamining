/** Chunk was on 60458 **/
/** chunk id: 853276, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk607070 = require("./607070.js"),
  Chunk596390 = require("./596390.js"),
  Chunk334189 = require("./334189.js");

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
let h = Chunk73800.forwardRef(function(e, t) {
  var n, l;
  let {
    value: s,
    isSelected: c,
    isEditing: d,
    forceShowErrorTooltip: u = false,
    error: h
  } = e, [f, b, x] = i.useMemo(() => {
    if (null == h) return [];
    let {
      erroringCharacterOffset: e = 0,
      erroringCharacterLength: t = s.length
    } = null != h ? h : {}, n = s.slice(0, e);
    return [n, s.slice(e, e + t), s.slice(e + t)]
  }, [s, h]);
  return null == h ? (0, r.jsx)("div", {
    className: a()(m.chipletValue, {
      [m.isEditing]: d,
      [m.isSelected]: c
    }),
    ref: t,
    children: s
  }) : (null != (n = null == f ? true : f.length) ? n : 0) + (null != (l = null == b ? true : b.length) ? l : 0) > 70 ? (0, r.jsx)(o.ua7, {
    "aria-label": h.message,
    text: () => (0, r.jsxs)("div", {
      "aria-label": h.message,
      children: [h.message, " ", (0, r.jsx)("span", {
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
      className: a()(m.chipletValue, {
        [m.isEditing]: d,
        [m.isError]: null != h && !d,
        [m.isOverflowing]: null != h && !d
      })
    }, e), {
      children: [(0, r.jsx)("span", {
        children: f
      }), (0, r.jsx)("span", {
        className: m.errorValue,
        children: b
      }), (0, r.jsx)("span", {
        children: x
      })]
    }))
  }) : (0, r.jsxs)("div", {
    ref: t,
    className: a()(m.chipletValue, {
      [m.isEditing]: d,
      [m.isError]: null != h && !d
    }),
    children: [(0, r.jsx)("span", {
      children: f
    }), (0, r.jsx)(o.ua7, {
      text: h.message,
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

function f(e) {
  let {
    value: t,
    onChange: n,
    onBlur: l,
    onFocus: g,
    onRemove: p,
    isSelected: f,
    isSelecting: b,
    error: x,
    forceShowErrorTooltip: j
  } = e, v = i.useRef(null), _ = i.useRef(null), [O, y] = i.useState(false), {
    ref: C,
    width: N = 0
  } = (0, c.ZP)(O), {
    ref: I,
    width: E = 0
  } = (0, c.ZP)(O), S = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), [T, P] = i.useState(j), w = i.useRef(null), R = N > E ? N : E;
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
    k = i.useCallback(e => {
      let t = e.metaKey || e.ctrlKey;
      g(t), t ? e.preventDefault() : y(true), e.stopPropagation()
    }, [g]),
    L = i.useCallback(e => {
      p()
    }, [p]);
  return (0, r.jsx)("div", {
    className: m.chipletFlexContainer,
    children: (0, r.jsxs)("div", {
      ref: I,
      className: a()(m.chipletContainer, {
        [m.isEditing]: O,
        [m.smallBlink]: !O && !S,
        [m.isSelected]: f,
        [m.isSelecting]: b,
        [m.isError]: null != x && !O
      }),
      children: [(0, r.jsxs)(o.P3F, {
        tag: "div",
        onBlur: () => D(false),
        onClick: k,
        ignoreKeyPress: true,
        onMouseEnter: () => P(true),
        onMouseLeave: () => P(false),
        className: a()(m.chipletContainerInner, {
          [m.isSelecting]: b,
          [m.isEditing]: O
        }),
        ref: _,
        children: [(0, r.jsx)("input", {
          className: a()(m.chipletInput, {
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
        }), (0, r.jsx)(h, {
          ref: C,
          value: t,
          isEditing: O,
          isSelected: f,
          error: x,
          forceShowErrorTooltip: T || O
        })]
      }), !O && (0, r.jsx)(o.P3F, {
        className: m.closeIconContainer,
        onClick: L,
        children: (0, r.jsx)(o.Dio, {
          size: "xxs",
          color: "currentColor",
          className: m.closeIcon
        })
      })]
    })
  })
}