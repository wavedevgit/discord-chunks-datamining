/** Chunk was on 66147 **/
/** chunk id: 48736, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk317097 = require("./317097.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk333354 = require("./333354.js"),
  Chunk873790 = require("./873790.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      o = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), o.forEach(function(t) {
      var o;
      o = r[t], t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = o
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r.push.apply(r, o)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let j = e => {
    let {
      position: t,
      color: r,
      disabled: n
    } = e, l = function(e, t) {
      if (null == e) return {};
      var r, o, n, l = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (n = 0, r = Reflect.ownKeys(e); n < r.length; n++) o = r[n], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (l[o] = e[o]);
        return l
      }
      if (l = function(e, t) {
          if (null == e) return {};
          var r, o, n = {},
            l = Object.getOwnPropertyNames(e);
          for (o = 0; o < l.length; o++) r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
          return n
        }(e, t), Object.getOwnPropertySymbols)
        for (n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) o = r[n], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (l[o] = e[o]);
      return l
    }(e, ["position", "color", "disabled"]), i = (0, a.OK)(null != r ? r : c.TGz) > .1;
    return (0, o.jsx)("div", h(f({}, l), {
      className: s()("left" === t ? b.Zv : b.Un, i ? b.xA : b.fQ, {
        [b.r9]: n
      }),
      children: (0, o.jsx)("div", {
        className: b.Ol,
        style: {
          background: (0, a.Hl)(r)
        },
        children: (0, o.jsx)(u.dDg, {
          size: "custom",
          colorClass: i ? b.wW : b.yD,
          width: 14,
          height: 14
        })
      })
    }))
  },
  g = e => {
    let {
      isStart: t,
      buttonRef: r,
      color: n,
      showPopout: l,
      position: s,
      onRequestClose: a,
      onShowPopout: c,
      onColorChange: g,
      disabled: m
    } = e;
    return (0, o.jsx)(u.vN3, {
      children: (0, o.jsx)(u.YNO, {
        targetElementRef: r,
        renderPopout: () => (0, o.jsx)(u.VNw, {
          onChange: e => g(e, t),
          value: n
        }),
        position: s,
        shouldShow: l,
        onRequestClose: a,
        children: e => (0, o.jsx)("div", {
          ref: r,
          children: (0, o.jsx)(u.DUT, h(f({}, e), {
            className: b.tj,
            onClick: c,
            "data-position": t ? "left" : "right",
            "aria-label": d.intl.string(t ? p.default.apbXbH : p.default.JaVq1b),
            children: (0, o.jsx)(i.m, {
              text: d.intl.string(t ? p.default.apbXbH : p.default.JaVq1b),
              position: "bottom",
              children: (0, o.jsx)(j, {
                position: t ? "left" : "right",
                color: null != n ? n : 0,
                disabled: m
              })
            })
          }))
        })
      })
    })
  };

function m(e) {
  let {
    defaultColor: t,
    colors: r,
    value: l,
    onChange: p,
    disabled: m = false,
    customPickerPosition: O = "bottom",
    secondaryValue: y,
    onChangeGradientColors: x,
    isGradient: w = false,
    gradientButtonClassName: C,
    allowBlackCustomColor: v = false
  } = e, P = n.useCallback(e => (0 !== e || v) && e !== t && !r.some(t => t === e) && (v || 0 !== e), [r, t, v]), k = n.useRef(null), _ = n.useRef(null), R = n.useRef(null), [S, D] = n.useState(() => P(l) ? l : null), [E, N] = n.useState({
    start: l,
    end: null != y ? y : c.TGz
  }), [G, z] = n.useState({
    showStart: false,
    showEnd: false
  });
  n.useEffect(() => {
    D(P(l) ? l : null), N({
      start: l,
      end: null != y ? y : c.TGz
    })
  }, [l, P, y]);
  let H = n.useCallback(e => {
      null == p || p(e), D(null)
    }, [p, D]),
    T = n.useCallback(e => {
      null == p || p(e), D(e)
    }, [p, D]),
    B = n.useCallback((e, t) => {
      N({
        start: e,
        end: t
      }), null == x || x([e, t])
    }, [x]),
    q = n.useCallback((e, t) => {
      z(r => h(f({}, r), {
        [e]: t
      }))
    }, []),
    I = n.useCallback(() => {
      var e, t, r, n, l;
      let i = {
          background: "linear-gradient(90deg, ".concat((0, a.Hl)(null != (e = E.start) ? e : c.TGz), " 0%, ").concat((0, a.Hl)(E.end), " 100%)")
        },
        u = (0, o.jsxs)("div", {
          className: b.em,
          children: [(0, o.jsx)("div", {
            className: b.Ri,
            style: i
          }), (0, o.jsx)(j, {
            position: "left",
            color: null != (t = E.start) ? t : c.TGz,
            disabled: m
          }), (0, o.jsx)(j, {
            position: "right",
            color: null != (r = E.end) ? r : 0,
            disabled: m
          })]
        });
      return m ? u : (0, o.jsxs)("div", {
        className: s()(b.em, C),
        children: [(0, o.jsx)("div", {
          className: b.Ri,
          style: i
        }), (0, o.jsx)(g, {
          isStart: true,
          buttonRef: _,
          color: null != (n = E.start) ? n : c.TGz,
          showPopout: G.showStart,
          position: O,
          onRequestClose: () => q("showStart", false),
          onShowPopout: () => q("showStart", true),
          onColorChange: e => B(e, E.end),
          disabled: m
        }), (0, o.jsx)(g, {
          isStart: false,
          buttonRef: R,
          color: null != (l = E.end) ? l : 0,
          showPopout: G.showEnd,
          position: O,
          onRequestClose: () => q("showEnd", false),
          onShowPopout: () => q("showEnd", true),
          onColorChange: e => {
            var t;
            return B(null != (t = E.start) ? t : c.TGz, e)
          },
          disabled: m
        })]
      })
    }, [O, m, E, G, B, q, C]),
    V = n.useCallback(() => (0, o.jsx)(u.VNw, {
      onChange: T,
      value: l
    }), [T, l]),
    A = n.useCallback(e => {
      var r;
      let n = l !== t && (0 !== l || v),
        s = (0, o.jsx)(u.nJu, h(f({}, e), {
          customColor: null != (r = e.customColor) ? r : n ? l : null,
          "aria-label": d.intl.string(d.t["FHBa/1"])
        }));
      return m ? s : (0, o.jsx)(u.YNO, {
        targetElementRef: k,
        renderPopout: V,
        position: O,
        children: e => (0, o.jsx)(i.m, {
          targetElementRef: k,
          text: d.intl.string(d.t["FHBa/1"]),
          position: "bottom",
          children: (0, o.jsx)("div", h(f({}, e), {
            ref: k,
            children: s
          }))
        })
      })
    }, [O, m, V, l, t, v]),
    J = n.useCallback(e => {
      let t = (0, o.jsx)(u.fyo, f({}, e));
      return m ? t : (0, o.jsx)(i.m, {
        text: d.intl.string(d.t.bBvAEH),
        position: "bottom",
        children: (0, o.jsx)("div", {
          children: t
        })
      })
    }, [m]);
  return (0, o.jsx)(u.skP, h(f({}, e), {
    renderDefaultButton: J,
    renderCustomButton: A,
    renderGradientCustomButton: I,
    isGradient: w,
    customColor: S,
    onChange: w ? B : H
  }))
}