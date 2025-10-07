/** Chunk was on 47495 **/
/** chunk id: 797967, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk989308 = require("./989308.js"),
  Chunk616132 = require("./616132.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      o = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), o.forEach(function(t) {
      var o;
      o = n[t], t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = o
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n.push.apply(n, o)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = e => {
    var {
      position: t,
      color: n,
      disabled: l
    } = e, r = function(e, t) {
      if (null == e) return {};
      var n, o, l = function(e, t) {
        if (null == e) return {};
        var n, o, l = {},
          r = Object.keys(e);
        for (o = 0; o < r.length; o++) n = r[o], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (o = 0; o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["position", "color", "disabled"]);
    let s = (0, i.Bd)(null != n ? n : d.p6O) > .1;
    return (0, o.jsx)("div", g(f({}, r), {
      className: a()("left" === t ? m.colorPickerDropperLeft : m.colorPickerDropperRight, s ? m.lightRing : m.darkRing, {
        [m.disabled]: l
      }),
      children: (0, o.jsx)("div", {
        className: m.colorPickerDropperInner,
        style: {
          background: (0, i.Rf)(n)
        },
        children: (0, o.jsx)(c.ilE, {
          size: "custom",
          colorClass: s ? m.colorPickerDropperLight : m.colorPickerDropperDark,
          width: 14,
          height: 14
        })
      })
    }))
  },
  x = e => {
    let {
      isStart: t,
      buttonRef: n,
      color: l,
      showPopout: r,
      position: a,
      onRequestClose: i,
      onShowPopout: d,
      onColorChange: x,
      disabled: _
    } = e;
    return (0, o.jsx)(c.tEY, {
      children: (0, o.jsx)(c.yRy, {
        targetElementRef: n,
        renderPopout: () => (0, o.jsx)(c.Z$W, {
          onChange: e => x(e, t),
          value: l
        }),
        position: a,
        shouldShow: r,
        onRequestClose: i,
        children: e => (0, o.jsx)("div", {
          ref: n,
          children: (0, o.jsx)(c.P3F, g(f({}, e), {
            className: m.colorSelectorPopoutContainer,
            onClick: d,
            "data-position": t ? "left" : "right",
            "aria-label": u.intl.string(t ? p.default.apbXbG : p.default.JaVq1d),
            children: (0, o.jsx)(s.u, {
              text: u.intl.string(t ? p.default.apbXbG : p.default.JaVq1d),
              position: "bottom",
              children: (0, o.jsx)(h, {
                position: t ? "left" : "right",
                color: null != l ? l : 0,
                disabled: _
              })
            })
          }))
        })
      })
    })
  };

function _(e) {
  let {
    defaultColor: t,
    colors: n,
    value: r,
    onChange: p,
    disabled: _ = false,
    customPickerPosition: b = "bottom",
    secondaryValue: S,
    onChangeGradientColors: C,
    isGradient: j = false,
    gradientButtonClassName: v,
    allowBlackCustomColor: P = false
  } = e, N = l.useCallback(e => (0 !== e || P) && e !== t && !n.some(t => t === e) && (P || 0 !== e), [n, t, P]), k = l.useRef(null), y = l.useRef(null), O = l.useRef(null), [T, E] = l.useState(() => N(r) ? r : null), [D, R] = l.useState({
    start: r,
    end: null != S ? S : d.p6O
  }), [A, L] = l.useState({
    showStart: false,
    showEnd: false
  });
  l.useEffect(() => {
    E(N(r) ? r : null), R({
      start: r,
      end: null != S ? S : d.p6O
    })
  }, [r, N, S]);
  let I = l.useCallback(e => {
      null == p || p(e), E(null)
    }, [p, E]),
    w = l.useCallback(e => {
      null == p || p(e), E(e)
    }, [p, E]),
    B = l.useCallback((e, t) => {
      R({
        start: e,
        end: t
      }), null == C || C([e, t])
    }, [C]),
    M = l.useCallback((e, t) => {
      L(n => g(f({}, n), {
        [e]: t
      }))
    }, []),
    Z = l.useCallback(() => {
      var e, t, n, l, r;
      let s = {
          background: "linear-gradient(90deg, ".concat((0, i.Rf)(null != (e = D.start) ? e : d.p6O), " 0%, ").concat((0, i.Rf)(D.end), " 100%)")
        },
        c = (0, o.jsxs)("div", {
          className: m.gradientButtonContainer,
          children: [(0, o.jsx)("div", {
            className: m.gradientSwatch,
            style: s
          }), (0, o.jsx)(h, {
            position: "left",
            color: null != (t = D.start) ? t : d.p6O,
            disabled: _
          }), (0, o.jsx)(h, {
            position: "right",
            color: null != (n = D.end) ? n : 0,
            disabled: _
          })]
        });
      return _ ? c : (0, o.jsxs)("div", {
        className: a()(m.gradientButtonContainer, v),
        children: [(0, o.jsx)("div", {
          className: m.gradientSwatch,
          style: s
        }), (0, o.jsx)(x, {
          isStart: true,
          buttonRef: y,
          color: null != (l = D.start) ? l : d.p6O,
          showPopout: A.showStart,
          position: b,
          onRequestClose: () => M("showStart", false),
          onShowPopout: () => M("showStart", true),
          onColorChange: e => B(e, D.end),
          disabled: _
        }), (0, o.jsx)(x, {
          isStart: false,
          buttonRef: O,
          color: null != (r = D.end) ? r : 0,
          showPopout: A.showEnd,
          position: b,
          onRequestClose: () => M("showEnd", false),
          onShowPopout: () => M("showEnd", true),
          onColorChange: e => {
            var t;
            return B(null != (t = D.start) ? t : d.p6O, e)
          },
          disabled: _
        })]
      })
    }, [b, _, D, A, B, M, v]),
    G = l.useCallback(() => (0, o.jsx)(c.Z$W, {
      onChange: w,
      value: r
    }), [w, r]),
    Y = l.useCallback(e => {
      var n;
      let l = r !== t && (0 !== r || P),
        a = (0, o.jsx)(c.jHW, g(f({}, e), {
          customColor: null != (n = e.customColor) ? n : l ? r : null,
          "aria-label": u.intl.string(u.t["FHBa//"])
        }));
      return _ ? a : (0, o.jsx)(c.yRy, {
        targetElementRef: k,
        renderPopout: G,
        position: b,
        children: e => (0, o.jsx)(s.u, {
          targetElementRef: k,
          text: u.intl.string(u.t["FHBa//"]),
          position: "bottom",
          children: (0, o.jsx)("div", g(f({}, e), {
            ref: k,
            children: a
          }))
        })
      })
    }, [b, _, G, r, t, P]),
    H = l.useCallback(e => {
      let t = (0, o.jsx)(c.AGO, f({}, e));
      return _ ? t : (0, o.jsx)(s.u, {
        text: u.intl.string(u.t.bBvAEB),
        position: "bottom",
        children: (0, o.jsx)("div", {
          children: t
        })
      })
    }, [_]);
  return (0, o.jsx)(c.zH8, g(f({}, e), {
    renderDefaultButton: H,
    renderCustomButton: Y,
    renderGradientCustomButton: Z,
    isGradient: j,
    customColor: T,
    onChange: j ? B : I
  }))
}