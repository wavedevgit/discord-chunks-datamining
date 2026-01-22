/** Chunk was on 66147 **/
/** chunk id: 48736, original params: e,t,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => O
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

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(t)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l))
  }), e
}
let j = e => {
    let {
      position: t,
      color: l,
      disabled: r
    } = e, o = function(e, t) {
      if (null == e) return {};
      var l, n, r, o = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, l = Reflect.ownKeys(e); r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
        return o
      }
      if (o = function(e, t) {
          if (null == e) return {};
          var l, n, r = {},
            o = Object.getOwnPropertyNames(e);
          for (n = 0; n < o.length; n++) l = o[n], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
          return r
        }(e, t), Object.getOwnPropertySymbols)
        for (r = 0, l = Object.getOwnPropertySymbols(e); r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
      return o
    }(e, ["position", "color", "disabled"]), i = (0, a.OK)(null != l ? l : c.TGz) > .1;
    return (0, n.jsx)("div", h(p({}, o), {
      className: s()("left" === t ? f.Zv : f.Un, i ? f.xA : f.fQ, {
        [f.r9]: r
      }),
      children: (0, n.jsx)("div", {
        className: f.Ol,
        style: {
          background: (0, a.Hl)(l)
        },
        children: (0, n.jsx)(u.dDg, {
          size: "custom",
          colorClass: i ? f.wW : f.yD,
          width: 14,
          height: 14
        })
      })
    }))
  },
  m = e => {
    let {
      isStart: t,
      buttonRef: l,
      color: r,
      showPopout: o,
      position: s,
      onRequestClose: a,
      onShowPopout: c,
      onColorChange: m,
      disabled: O
    } = e;
    return (0, n.jsx)(u.vN3, {
      children: (0, n.jsx)(u.YNO, {
        targetElementRef: l,
        renderPopout: () => (0, n.jsx)(u.VNw, {
          onChange: e => m(e, t),
          value: r
        }),
        position: s,
        shouldShow: o,
        onRequestClose: a,
        children: e => (0, n.jsx)("div", {
          ref: l,
          children: (0, n.jsx)(u.DUT, h(p({}, e), {
            className: f.tj,
            onClick: c,
            "data-position": t ? "left" : "right",
            "aria-label": d.intl.string(t ? b.default.apbXbH : b.default.JaVq1b),
            children: (0, n.jsx)(i.m, {
              text: d.intl.string(t ? b.default.apbXbH : b.default.JaVq1b),
              position: "bottom",
              children: (0, n.jsx)(j, {
                position: t ? "left" : "right",
                color: null != r ? r : 0,
                disabled: O
              })
            })
          }))
        })
      })
    })
  };

function O(e) {
  let {
    defaultColor: t,
    colors: l,
    value: o,
    onChange: b,
    disabled: O = false,
    customPickerPosition: g = "bottom",
    secondaryValue: y,
    onChangeGradientColors: x,
    isGradient: w = false,
    gradientButtonClassName: C,
    allowBlackCustomColor: v = false
  } = e, P = r.useCallback(e => (0 !== e || v) && e !== t && !l.some(t => t === e) && (v || 0 !== e), [l, t, v]), k = r.useRef(null), S = r.useRef(null), R = r.useRef(null), [E, N] = r.useState(() => P(o) ? o : null), [_, D] = r.useState({
    start: o,
    end: null != y ? y : c.TGz
  }), [G, z] = r.useState({
    showStart: false,
    showEnd: false
  });
  r.useEffect(() => {
    N(P(o) ? o : null), D({
      start: o,
      end: null != y ? y : c.TGz
    })
  }, [o, P, y]);
  let H = r.useCallback(e => {
      null == b || b(e), N(null)
    }, [b, N]),
    T = r.useCallback(e => {
      null == b || b(e), N(e)
    }, [b, N]),
    B = r.useCallback((e, t) => {
      D({
        start: e,
        end: t
      }), null == x || x([e, t])
    }, [x]),
    q = r.useCallback((e, t) => {
      z(l => h(p({}, l), {
        [e]: t
      }))
    }, []),
    V = r.useCallback(() => {
      var e, t, l, r, o;
      let i = {
          background: "linear-gradient(90deg, ".concat((0, a.Hl)(null != (e = _.start) ? e : c.TGz), " 0%, ").concat((0, a.Hl)(_.end), " 100%)")
        },
        u = (0, n.jsxs)("div", {
          className: f.em,
          children: [(0, n.jsx)("div", {
            className: f.Ri,
            style: i
          }), (0, n.jsx)(j, {
            position: "left",
            color: null != (t = _.start) ? t : c.TGz,
            disabled: O
          }), (0, n.jsx)(j, {
            position: "right",
            color: null != (l = _.end) ? l : 0,
            disabled: O
          })]
        });
      return O ? u : (0, n.jsxs)("div", {
        className: s()(f.em, C),
        children: [(0, n.jsx)("div", {
          className: f.Ri,
          style: i
        }), (0, n.jsx)(m, {
          isStart: true,
          buttonRef: S,
          color: null != (r = _.start) ? r : c.TGz,
          showPopout: G.showStart,
          position: g,
          onRequestClose: () => q("showStart", false),
          onShowPopout: () => q("showStart", true),
          onColorChange: e => B(e, _.end),
          disabled: O
        }), (0, n.jsx)(m, {
          isStart: false,
          buttonRef: R,
          color: null != (o = _.end) ? o : 0,
          showPopout: G.showEnd,
          position: g,
          onRequestClose: () => q("showEnd", false),
          onShowPopout: () => q("showEnd", true),
          onColorChange: e => {
            var t;
            return B(null != (t = _.start) ? t : c.TGz, e)
          },
          disabled: O
        })]
      })
    }, [g, O, _, G, B, q, C]),
    A = r.useCallback(() => (0, n.jsx)(u.VNw, {
      onChange: T,
      value: o
    }), [T, o]),
    I = r.useCallback(e => {
      var l;
      let r = o !== t && (0 !== o || v),
        s = (0, n.jsx)(u.nJu, h(p({}, e), {
          customColor: null != (l = e.customColor) ? l : r ? o : null,
          "aria-label": d.intl.string(d.t["FHBa/1"])
        }));
      return O ? s : (0, n.jsx)(u.YNO, {
        targetElementRef: k,
        renderPopout: A,
        position: g,
        children: e => (0, n.jsx)(i.m, {
          targetElementRef: k,
          text: d.intl.string(d.t["FHBa/1"]),
          position: "bottom",
          children: (0, n.jsx)("div", h(p({}, e), {
            ref: k,
            children: s
          }))
        })
      })
    }, [g, O, A, o, t, v]),
    J = r.useCallback(e => {
      let t = (0, n.jsx)(u.fyo, p({}, e));
      return O ? t : (0, n.jsx)(i.m, {
        text: d.intl.string(d.t.bBvAEH),
        position: "bottom",
        children: (0, n.jsx)("div", {
          children: t
        })
      })
    }, [O]);
  return (0, n.jsx)(u.skP, h(p({}, e), {
    renderDefaultButton: J,
    renderCustomButton: I,
    renderGradientCustomButton: V,
    isGradient: w,
    customColor: E,
    onChange: w ? B : H
  }))
}