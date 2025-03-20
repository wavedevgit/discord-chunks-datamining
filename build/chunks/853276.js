/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => p
}), n(47120), n(566702);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  A = n(393238),
  c = n(607070),
  d = n(596390),
  u = n(651095);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function f(e, t) {
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
let m = i.forwardRef(function(e, t) {
  var n, s;
  let {
    value: l,
    isSelected: A,
    isEditing: c,
    forceShowErrorTooltip: d = !1,
    error: m
  } = e, [p, h, C] = i.useMemo(() => {
    if (null == m) return [];
    let {
      erroringCharacterOffset: e = 0,
      erroringCharacterLength: t = l.length
    } = null != m ? m : {}, n = l.slice(0, e);
    return [n, l.slice(e, e + t), l.slice(e + t)]
  }, [l, m]);
  return null == m ? (0, r.jsx)("div", {
    className: a()(u.chipletValue, {
      [u.isEditing]: c,
      [u.isSelected]: A
    }),
    ref: t,
    children: l
  }) : (null !== (n = null == p ? void 0 : p.length) && void 0 !== n ? n : 0) + (null !== (s = null == h ? void 0 : h.length) && void 0 !== s ? s : 0) > 70 ? (0, r.jsx)(o.ua7, {
    "aria-label": m.message,
    text: () => (0, r.jsxs)("div", {
      "aria-label": m.message,
      children: [m.message, " ", (0, r.jsx)("span", {
        className: u.errorOverflowValue,
        children: h
      })]
    }),
    tooltipClassName: u.errorTooltip,
    color: o.ua7.Colors.RED,
    position: "left",
    forceOpen: d || void 0,
    children: e => (0, r.jsxs)("div", f(g({
      ref: t,
      className: a()(u.chipletValue, {
        [u.isEditing]: c,
        [u.isError]: null != m && !c,
        [u.isOverflowing]: null != m && !c
      })
    }, e), {
      children: [(0, r.jsx)("span", {
        children: p
      }), (0, r.jsx)("span", {
        className: u.errorValue,
        children: h
      }), (0, r.jsx)("span", {
        children: C
      })]
    }))
  }) : (0, r.jsxs)("div", {
    ref: t,
    className: a()(u.chipletValue, {
      [u.isEditing]: c,
      [u.isError]: null != m && !c
    }),
    children: [(0, r.jsx)("span", {
      children: p
    }), (0, r.jsx)(o.ua7, {
      text: m.message,
      color: o.ua7.Colors.RED,
      position: "top",
      forceOpen: d || void 0,
      children: e => (0, r.jsx)("span", f(g({}, e), {
        className: u.errorValue,
        children: h
      }))
    }), (0, r.jsx)("span", {
      children: C
    })]
  })
});

function p(e) {
  let {
    value: t,
    onChange: n,
    onBlur: s,
    onFocus: g,
    onRemove: f,
    isSelected: p,
    isSelecting: h,
    error: C,
    forceShowErrorTooltip: b
  } = e, v = i.useRef(null), x = i.useRef(null), [N, j] = i.useState(!1), {
    ref: E,
    width: I = 0
  } = (0, A.Z)(N), {
    ref: O,
    width: y = 0
  } = (0, A.Z)(N), w = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), [P, B] = i.useState(b), D = i.useRef(null), T = I > y ? I : y;
  i.useEffect(() => {
    b ? (B(!0), D.current = setTimeout(() => {
      B(!1), D.current = null
    }, d.I5)) : B(!1)
  }, [b]), i.useEffect(() => () => {
    clearTimeout(D.current)
  }, []);
  let S = i.useCallback(e => {
      n(e.target.value)
    }, [n]),
    L = i.useCallback(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (t.trim().length <= 0 && f(), null != v.current && null != E.current && null != x.current) {
        var n;
        v.current.scrollTo(0, 0), v.current.setSelectionRange(0, 0), v.current.scrollLeft = 0, E.current.scrollLeft = 0, (null === (n = x.current) || void 0 === n ? void 0 : n.ref) != null && (x.current.ref.scrollLeft = 0)
      }
      j(!1), s(e)
    }, [t, E, s, f]),
    R = i.useCallback(e => {
      let n = t.trim().length <= 0;
      d.ye.has(e.key) ? (e.preventDefault(), e.stopPropagation(), L(!0)) : "Backspace" === e.key && n && (e.preventDefault(), e.stopPropagation(), L(!0))
    }, [L, t]),
    Q = i.useCallback(e => {
      let t = e.metaKey || e.ctrlKey;
      g(t), t ? e.preventDefault() : j(!0), e.stopPropagation()
    }, [g]),
    W = i.useCallback(e => {
      f()
    }, [f]);
  return (0, r.jsx)("div", {
    className: u.chipletFlexContainer,
    children: (0, r.jsxs)("div", {
      ref: O,
      className: a()(u.chipletContainer, {
        [u.isEditing]: N,
        [u.smallBlink]: !N && !w,
        [u.isSelected]: p,
        [u.isSelecting]: h,
        [u.isError]: null != C && !N
      }),
      children: [(0, r.jsxs)(o.P3F, {
        tag: "div",
        onBlur: () => L(!1),
        onClick: Q,
        ignoreKeyPress: !0,
        onMouseEnter: () => B(!0),
        onMouseLeave: () => B(!1),
        className: a()(u.chipletContainerInner, {
          [u.isSelecting]: h,
          [u.isEditing]: N
        }),
        ref: x,
        children: [(0, r.jsx)("input", {
          className: a()(u.chipletInput, {
            [u.isEditing]: N,
            [u.isSelecting]: h
          }),
          ref: v,
          onChange: S,
          onKeyDownCapture: R,
          value: t,
          style: {
            width: T > 0 ? T : "calc(".concat(t.length, "ch + 10px)")
          }
        }), (0, r.jsx)(m, {
          ref: E,
          value: t,
          isEditing: N,
          isSelected: p,
          error: C,
          forceShowErrorTooltip: P || N
        })]
      }), !N && (0, r.jsx)(o.P3F, {
        className: u.closeIconContainer,
        onClick: W,
        children: (0, r.jsx)(o.Dio, {
          size: "xxs",
          color: "currentColor",
          className: u.closeIcon
        })
      })]
    })
  })
}