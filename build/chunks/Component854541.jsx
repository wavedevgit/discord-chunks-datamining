/** Chunk was on web.js **/
/** chunk id: 854541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AG: () => R,
  Z$: () => D,
  jH: () => P,
  zH: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk924826 = require("./924826.js"),
  Chunk866442 = require("./866442.js"),
  Chunk793030 = require("./793030.js"),
  Chunk507274 = require("./507274.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk408886 = require("./408886.js"),
  Chunk44315 = require("./44315.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk164688 = require("./164688.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let S = Chunk647438.lazy(() => Promise.all([require.e("3115"), require.e("28102")]).then(require.bind(require, 534828))),
  T = 7,
  A = () => Promise.resolve();

function C(e) {
  return null == e ? null : "string" == typeof e ? (0, c.FX)(e) ? (0, c._i)(e) : null : e
}

function N(e) {
  let {
    color: t,
    isDefault: n = false,
    isCustom: i = false,
    isSelected: a = false,
    disabled: l = false,
    style: d = {},
    onClick: _,
    isGradient: m = false,
    "aria-label": E,
    gradientStart: y,
    gradientEnd: v,
    gradientDegrees: I = 180
  } = e, S = (0, s.JA)("color-".concat(t)), T = {};
  if (m && null != y && null != v) {
    let e = (0, c.Rf)(y),
      t = (0, c.Rf)(v);
    T = {
      background: "linear-gradient(".concat(I, "deg, ").concat(e, ", ").concat(t, ")")
    }
  } else T = {
    backgroundColor: null != t ? (0, c.Rf)(t) : d.backgroundColor
  };
  let A = m ? y : t,
    C = false;

  function N() {
    let e = 16,
      t = 16;
    if ((i || n) && (e = "38%", t = "auto"), a) return (0, r.jsx)(f.dz2, {
      size: "custom",
      width: e,
      height: t,
      color: (0, p.Lq)(C ? h.Ilk.WHITE_500 : h.Ilk.BLACK_500)
    })
  }
  return i && !a ? C = true : (i || a) && (C = (0, c.Bd)(null != A ? A : h.p6O) > .2), (0, r.jsx)(u.tEY, {
    offset: false,
    children: (0, r.jsxs)("button", O(b({
      type: "button",
      className: o()(g.colorPickerSwatch, {
        [g.disabled]: l,
        [g.default]: n,
        [g.custom]: i,
        [g.noColor]: null == t && !m,
        [g.gradientPreset]: m
      }),
      disabled: l,
      onClick: () => null == _ ? true : _(m ? {
        start: y,
        end: v
      } : t),
      style: b({}, d, T),
      "aria-label": null != E ? E : m ? "Gradient ".concat(y, "-").concat(v) : T.backgroundColor
    }, S), {
      children: [i ? (0, r.jsx)(f.vdY, {
        size: "custom",
        className: g.colorPickerDropper,
        width: 14,
        height: 14,
        color: (0, p.Lq)(C ? h.Ilk.WHITE_500 : h.Ilk.BLACK_500)
      }) : null, N()]
    }))
  })
}
class R extends Chunk647438.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: n,
      disabled: i,
      allowBlackCustomColor: a
    } = this.props;
    return (0, Chunk951288.jsx)(N, {
      isDefault: true,
      color: module,
      isSelected: module === require || 0 === require && !Chunk120356,
      onClick: exports,
      disabled: Chunk647438
    })
  }
}
class P extends Chunk647438.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: n,
      "aria-label": i,
      presets: a
    } = this.props;
    return (0, Chunk951288.jsx)(N, {
      isCustom: true,
      color: module,
      isSelected: exports === module && !Chunk120356.includes(module),
      disabled: require,
      "aria-label": Chunk647438
    })
  }
}

function w(e) {
  let {
    value: t,
    eagerUpdate: n = false,
    onChange: a,
    onClose: s,
    suggestedColors: l,
    middle: p,
    footer: h,
    showEyeDropper: E,
    wrapperComponentType: y,
    className: v
  } = e, I = (0, _.Z)(), A = C(t), N = null != A ? A : 0, R = (0, c.Rf)(N), P = (0, c.O)(N), [w, D] = i.useState({
    current: N,
    pending: {
      hex: R,
      hsl: P
    },
    input: R
  });
  i.useEffect(() => {
    if (null == A || A === w.current) return;
    let e = (0, c.Rf)(A),
      t = (0, c.O)(A);
    D({
      current: A,
      pending: {
        hex: e,
        hsl: t
      },
      input: e
    })
  }, [A, w]), i.useEffect(() => s, [s]);
  let L = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, c.FX)(t)) return void D(e => O(b({}, e), {
        input: t
      }));
      let n = (0, c._i)(t),
        r = (0, c.O)(n);
      D({
        current: n,
        pending: {
          hex: t,
          hsl: r
        },
        input: t
      }), a(n)
    },
    x = async () => {
      if (null != I) try {
        let {
          sRGBHex: e
        } = await I.open();
        L(e)
      } catch (e) {}
    }, M = i.useCallback(e => {
      D(t => O(b({}, t), {
        pending: e,
        input: e.hex
      })), n && a((0, c._i)(e.hex))
    }, [n, a]), k = e => {
      a((0, c._i)(e))
    }, j = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.Suspense, {
        fallback: null,
        children: (0, r.jsx)(S, {
          onChange: M,
          onChangeComplete: e => {
            let {
              hex: t
            } = e;
            return k(t)
          },
          color: w.pending.hsl
        })
      }), p, (0, r.jsx)(f.oil, {
        value: w.input.slice(1),
        onChange: L,
        maxLength: T - 1,
        leading: "#",
        trailing: E && null != I ? {
          icon: f.ilE,
          onClick: x,
          "aria-label": m.intl.string(m.t["0dU9Ny"])
        } : true
      }), null != l && l.length > 0 && (0, r.jsx)("div", {
        className: g.suggestedColors,
        children: l.map((e, t) => (0, r.jsx)(u.P3F, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: g.suggestedColor,
          onClick: () => L(e)
        }, "".concat(e, "-").concat(t)))
      }), h]
    }), U = null != y ? y : d.V;
  return (0, r.jsx)(U, {
    "aria-label": m.intl.string(m.t.WTqQ5e),
    className: o()(g.customColorPicker, v),
    children: j
  })
}
let D = Chunk647438.memo(w);

function L(e) {
  let {
    className: t,
    defaultColor: n,
    customColor: i,
    colors: a,
    value: c,
    secondaryValue: u,
    disabled: d,
    onChange: f,
    renderDefaultButton: _,
    renderCustomButton: p,
    colorContainerClassName: h,
    isGradient: m,
    renderGradientCustomButton: E,
    gradientDegrees: y,
    allowBlackCustomColor: I
  } = e, S = e => (0, r.jsx)("div", {
    className: g.colorPickerRow,
    children: m ? e.map(e => (0, r.jsx)(N, {
      gradientStart: e.start,
      gradientEnd: e.end,
      color: 0,
      isSelected: c === e.start && u === e.end,
      onClick: () => f(e.start, e.end),
      disabled: d,
      isGradient: true,
      "aria-label": e.name,
      gradientDegrees: y
    }, "".concat(e.start, "-").concat(e.end))) : e.map(e => (0, r.jsx)(N, {
      color: e,
      isSelected: e === c,
      onClick: f,
      disabled: d,
      isGradient: false
    }, e))
  }), T = a.slice(0, a.length / 2), C = a.slice(a.length / 2, a.length), R = (0, l.ZP)({
    id: "color-picker",
    isEnabled: true,
    scrollToStart: A,
    scrollToEnd: A
  });
  return (0, r.jsx)(s.bG, {
    navigator: R,
    children: (0, r.jsx)(s.SJ, {
      children: e => {
        var {
          ref: s
        } = e, l = v(e, ["ref"]);
        return (0, r.jsxs)("div", O(b({
          className: o()(g.container, t, {
            [g.gradient]: m
          }),
          ref: s
        }, l), {
          children: [!m && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              className: o()(g.defaultContainer, h),
              children: _({
                value: c,
                color: n,
                onChange: f,
                disabled: d,
                allowBlackCustomColor: I
              })
            }), (0, r.jsx)("div", {
              className: o()(g.customContainer, h),
              children: p({
                value: c,
                customColor: i,
                disabled: d,
                presets: a
              })
            })]
          }), m && null != E && (0, r.jsx)("div", {
            children: E({
              value: c,
              startColor: n,
              endColor: n,
              disabled: d
            })
          }), (0, r.jsxs)("div", {
            children: [S(T), S(C)]
          })]
        }))
      }
    })
  })
}