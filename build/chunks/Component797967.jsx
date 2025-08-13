/** Chunk was on 47495 **/
/** chunk id: 797967, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk93841 = require("./93841.js"),
  Chunk857924 = require("./857924.js");

function f(e) {
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

function m(e, t) {
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
let g = e => {
    var {
      position: t,
      color: n,
      disabled: o
    } = e, l = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["position", "color", "disabled"]);
    let d = (0, a.Bd)(null != n ? n : c.p6O) > .1;
    return (0, r.jsx)("div", m(f({}, l), {
      className: i()("left" === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight, d ? p.lightRing : p.darkRing, {
        [p.disabled]: o
      }),
      children: (0, r.jsx)("div", {
        className: p.colorPickerDropperInner,
        style: {
          background: (0, a.Rf)(n)
        },
        children: (0, r.jsx)(s.ilE, {
          size: "custom",
          colorClass: d ? p.colorPickerDropperLight : p.colorPickerDropperDark,
          width: 14,
          height: 14
        })
      })
    }))
  },
  h = e => {
    let {
      isStart: t,
      buttonRef: n,
      color: o,
      showPopout: l,
      position: i,
      onRequestClose: a,
      onShowPopout: c,
      onColorChange: h,
      disabled: b
    } = e;
    return (0, r.jsx)(s.tEY, {
      children: (0, r.jsx)(s.yRy, {
        targetElementRef: n,
        renderPopout: () => (0, r.jsx)(s.Z$W, {
          onChange: e => h(e, t),
          value: o
        }),
        position: i,
        shouldShow: l,
        onRequestClose: a,
        children: e => (0, r.jsx)("div", {
          ref: n,
          children: (0, r.jsx)(s.P3F, m(f({}, e), {
            className: p.colorSelectorPopoutContainer,
            onClick: c,
            "data-position": t ? "left" : "right",
            "aria-label": d.intl.string(t ? u.default.apbXbG : u.default.JaVq1d),
            children: (0, r.jsx)(s.ua7, {
              text: d.intl.string(t ? u.default.apbXbG : u.default.JaVq1d),
              position: "bottom",
              children: e => (0, r.jsx)(g, m(f({}, e), {
                position: t ? "left" : "right",
                color: null != o ? o : 0,
                disabled: b
              }))
            })
          }))
        })
      })
    })
  };

function b(e) {
  let {
    defaultColor: t,
    colors: n,
    value: l,
    onChange: u,
    disabled: b = false,
    customPickerPosition: x = "bottom",
    secondaryValue: j,
    onChangeGradientColors: _,
    isGradient: S = false,
    gradientButtonClassName: C,
    allowBlackCustomColor: O = false
  } = e, y = o.useCallback(e => (0 !== e || O) && e !== t && !n.some(t => t === e) && (O || 0 !== e), [n, t, O]), P = o.useRef(null), v = o.useRef(null), k = o.useRef(null), [E, T] = o.useState(() => y(l) ? l : null), [N, D] = o.useState({
    start: l,
    end: null != j ? j : c.p6O
  }), [w, R] = o.useState({
    showStart: false,
    showEnd: false
  });
  o.useEffect(() => {
    T(y(l) ? l : null), D({
      start: l,
      end: null != j ? j : c.p6O
    })
  }, [l, y, j]);
  let A = o.useCallback(e => {
      null == u || u(e), T(null)
    }, [u, T]),
    I = o.useCallback(e => {
      null == u || u(e), T(e)
    }, [u, T]),
    L = o.useCallback((e, t) => {
      D({
        start: e,
        end: t
      }), null == _ || _([e, t])
    }, [_]),
    B = o.useCallback((e, t) => {
      R(n => m(f({}, n), {
        [e]: t
      }))
    }, []),
    M = o.useCallback(() => {
      var e, t, n, o, l;
      let s = {
          background: "linear-gradient(90deg, ".concat((0, a.Rf)(null != (e = N.start) ? e : c.p6O), " 0%, ").concat((0, a.Rf)(N.end), " 100%)")
        },
        d = (0, r.jsxs)("div", {
          className: p.gradientButtonContainer,
          children: [(0, r.jsx)("div", {
            className: p.gradientSwatch,
            style: s
          }), (0, r.jsx)(g, {
            position: "left",
            color: null != (t = N.start) ? t : c.p6O,
            disabled: b
          }), (0, r.jsx)(g, {
            position: "right",
            color: null != (n = N.end) ? n : 0,
            disabled: b
          })]
        });
      return b ? d : (0, r.jsxs)("div", {
        className: i()(p.gradientButtonContainer, C),
        children: [(0, r.jsx)("div", {
          className: p.gradientSwatch,
          style: s
        }), (0, r.jsx)(h, {
          isStart: true,
          buttonRef: v,
          color: null != (o = N.start) ? o : c.p6O,
          showPopout: w.showStart,
          position: x,
          onRequestClose: () => B("showStart", false),
          onShowPopout: () => B("showStart", true),
          onColorChange: e => L(e, N.end),
          disabled: b
        }), (0, r.jsx)(h, {
          isStart: false,
          buttonRef: k,
          color: null != (l = N.end) ? l : 0,
          showPopout: w.showEnd,
          position: x,
          onRequestClose: () => B("showEnd", false),
          onShowPopout: () => B("showEnd", true),
          onColorChange: e => {
            var t;
            return L(null != (t = N.start) ? t : c.p6O, e)
          },
          disabled: b
        })]
      })
    }, [x, b, N, w, L, B, C]),
    Z = o.useCallback(() => (0, r.jsx)(s.Z$W, {
      onChange: I,
      value: E
    }), [I, E]),
    G = o.useCallback(e => {
      let t = (0, r.jsx)(s.jHW, m(f({}, e), {
        "aria-label": d.intl.string(d.t["FHBa//"])
      }));
      return b ? t : (0, r.jsx)(s.yRy, {
        targetElementRef: P,
        renderPopout: Z,
        position: x,
        children: e => (0, r.jsx)(s.ua7, {
          targetElementRef: P,
          text: d.intl.string(d.t["FHBa//"]),
          position: "bottom",
          children: n => (0, r.jsx)("div", m(f({
            ref: P
          }, n, e), {
            children: t
          }))
        })
      })
    }, [x, b, Z]),
    Y = o.useCallback(e => {
      let t = (0, r.jsx)(s.AGO, f({}, e));
      return b ? t : (0, r.jsx)(s.ua7, {
        text: d.intl.string(d.t.bBvAEB),
        position: "bottom",
        children: e => (0, r.jsx)("div", m(f({}, e), {
          children: t
        }))
      })
    }, [b]);
  return (0, r.jsx)(s.zH8, m(f({}, e), {
    renderDefaultButton: Y,
    renderCustomButton: G,
    renderGradientCustomButton: M,
    isGradient: S,
    customColor: E,
    onChange: S ? L : A
  }))
}