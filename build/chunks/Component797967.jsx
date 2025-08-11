/** Chunk was on 59256 **/
/** chunk id: 797967, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk93841 = require("./93841.js"),
  Chunk675602 = require("./675602.js");

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
let b = e => {
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
    let u = (0, s.Bd)(null != n ? n : c.p6O) > .1;
    return (0, r.jsx)("div", m(f({}, l), {
      className: a()("left" === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight, u ? p.lightRing : p.darkRing, {
        [p.disabled]: o
      }),
      children: (0, r.jsx)("div", {
        className: p.colorPickerDropperInner,
        style: {
          background: (0, s.Rf)(n)
        },
        children: (0, r.jsx)(i.ilE, {
          size: "custom",
          colorClass: u ? p.colorPickerDropperLight : p.colorPickerDropperDark,
          width: 14,
          height: 14
        })
      })
    }))
  },
  g = e => {
    let {
      isStart: t,
      buttonRef: n,
      color: o,
      showPopout: l,
      position: a,
      onRequestClose: s,
      onShowPopout: c,
      onColorChange: g,
      disabled: h
    } = e;
    return (0, r.jsx)(i.tEY, {
      children: (0, r.jsx)(i.yRy, {
        targetElementRef: n,
        renderPopout: () => (0, r.jsx)(i.Z$W, {
          onChange: e => g(e, t),
          value: o
        }),
        position: a,
        shouldShow: l,
        onRequestClose: s,
        children: e => (0, r.jsx)("div", {
          ref: n,
          children: (0, r.jsx)(i.P3F, m(f({}, e), {
            className: p.colorSelectorPopoutContainer,
            onClick: c,
            "data-position": t ? "left" : "right",
            "aria-label": u.intl.string(t ? d.default.apbXbG : d.default.JaVq1d),
            children: (0, r.jsx)(i.ua7, {
              text: u.intl.string(t ? d.default.apbXbG : d.default.JaVq1d),
              position: "bottom",
              children: e => (0, r.jsx)(b, m(f({}, e), {
                position: t ? "left" : "right",
                color: null != o ? o : 0,
                disabled: h
              }))
            })
          }))
        })
      })
    })
  };

function h(e) {
  let {
    defaultColor: t,
    colors: n,
    value: l,
    onChange: d,
    disabled: h = false,
    customPickerPosition: _ = "bottom",
    secondaryValue: j,
    onChangeGradientColors: x,
    isGradient: v = false,
    gradientButtonClassName: y,
    allowBlackCustomColor: O = false
  } = e, k = o.useCallback(e => (0 !== e || O) && e !== t && !n.some(t => t === e) && (O || 0 !== e), [n, t, O]), C = o.useRef(null), P = o.useRef(null), w = o.useRef(null), [S, I] = o.useState(() => k(l) ? l : null), [E, N] = o.useState({
    start: l,
    end: null != j ? j : c.p6O
  }), [B, R] = o.useState({
    showStart: false,
    showEnd: false
  });
  o.useEffect(() => {
    I(k(l) ? l : null), N({
      start: l,
      end: null != j ? j : c.p6O
    })
  }, [l, k, j]);
  let D = o.useCallback(e => {
      null == d || d(e), I(null)
    }, [d, I]),
    A = o.useCallback(e => {
      null == d || d(e), I(e)
    }, [d, I]),
    T = o.useCallback((e, t) => {
      N({
        start: e,
        end: t
      }), null == x || x([e, t])
    }, [x]),
    Z = o.useCallback((e, t) => {
      R(n => m(f({}, n), {
        [e]: t
      }))
    }, []),
    L = o.useCallback(() => {
      var e, t, n, o, l;
      let i = {
          background: "linear-gradient(90deg, ".concat((0, s.Rf)(null != (e = E.start) ? e : c.p6O), " 0%, ").concat((0, s.Rf)(E.end), " 100%)")
        },
        u = (0, r.jsxs)("div", {
          className: p.gradientButtonContainer,
          children: [(0, r.jsx)("div", {
            className: p.gradientSwatch,
            style: i
          }), (0, r.jsx)(b, {
            position: "left",
            color: null != (t = E.start) ? t : c.p6O,
            disabled: h
          }), (0, r.jsx)(b, {
            position: "right",
            color: null != (n = E.end) ? n : 0,
            disabled: h
          })]
        });
      return h ? u : (0, r.jsxs)("div", {
        className: a()(p.gradientButtonContainer, y),
        children: [(0, r.jsx)("div", {
          className: p.gradientSwatch,
          style: i
        }), (0, r.jsx)(g, {
          isStart: true,
          buttonRef: P,
          color: null != (o = E.start) ? o : c.p6O,
          showPopout: B.showStart,
          position: _,
          onRequestClose: () => Z("showStart", false),
          onShowPopout: () => Z("showStart", true),
          onColorChange: e => T(e, E.end),
          disabled: h
        }), (0, r.jsx)(g, {
          isStart: false,
          buttonRef: w,
          color: null != (l = E.end) ? l : 0,
          showPopout: B.showEnd,
          position: _,
          onRequestClose: () => Z("showEnd", false),
          onShowPopout: () => Z("showEnd", true),
          onColorChange: e => {
            var t;
            return T(null != (t = E.start) ? t : c.p6O, e)
          },
          disabled: h
        })]
      })
    }, [_, h, E, B, T, Z, y]),
    U = o.useCallback(() => (0, r.jsx)(i.Z$W, {
      onChange: A,
      value: S
    }), [A, S]),
    G = o.useCallback(e => {
      let t = (0, r.jsx)(i.jHW, m(f({}, e), {
        "aria-label": u.intl.string(u.t["FHBa//"])
      }));
      return h ? t : (0, r.jsx)(i.yRy, {
        targetElementRef: C,
        renderPopout: U,
        position: _,
        children: e => (0, r.jsx)(i.ua7, {
          targetElementRef: C,
          text: u.intl.string(u.t["FHBa//"]),
          position: "bottom",
          children: n => (0, r.jsx)("div", m(f({
            ref: C
          }, n, e), {
            children: t
          }))
        })
      })
    }, [_, h, U]),
    F = o.useCallback(e => {
      let t = (0, r.jsx)(i.AGO, f({}, e));
      return h ? t : (0, r.jsx)(i.ua7, {
        text: u.intl.string(u.t.bBvAEB),
        position: "bottom",
        children: e => (0, r.jsx)("div", m(f({}, e), {
          children: t
        }))
      })
    }, [h]);
  return (0, r.jsx)(i.zH8, m(f({}, e), {
    renderDefaultButton: F,
    renderCustomButton: G,
    renderGradientCustomButton: L,
    isGradient: v,
    customColor: S,
    onChange: v ? T : D
  }))
}