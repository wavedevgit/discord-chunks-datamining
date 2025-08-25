/** Chunk was on web.js **/
/** chunk id: 854541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AG: () => P,
  Z$: () => x,
  jH: () => w,
  zH: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk924826 = require("./924826.js"),
  Chunk866442 = require("./866442.js"),
  Chunk1561 = require("./1561.jsx"),
  Chunk507274 = require("./507274.jsx"),
  Chunk84735 = require("./84735.js"),
  Chunk481060 = require("./481060.js"),
  Chunk408886 = require("./408886.js"),
  Chunk44315 = require("./44315.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk701224 = require("./701224.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let S = Chunk647438.lazy(() => Promise.all([require.e("3115"), require.e("28102")]).then(require.bind(require, 534828))),
  A = 7,
  C = () => Promise.resolve();

function N(e) {
  return null == e ? null : "string" == typeof e ? (0, c.FX)(e) ? (0, c._i)(e) : null : e
}

function R(e) {
  let {
    color: t,
    isDefault: n = false,
    isCustom: i = false,
    isSelected: o = false,
    disabled: l = false,
    style: u = {},
    onClick: d,
    isGradient: p = false,
    "aria-label": g,
    gradientStart: b,
    gradientEnd: O,
    gradientDegrees: I = 180
  } = e, T = (0, s.JA)("color-".concat(t)), S = {};
  if (p && null != b && null != O) {
    let e = (0, c.Rf)(b),
      t = (0, c.Rf)(O);
    S = {
      background: "linear-gradient(".concat(I, "deg, ").concat(e, ", ").concat(t, ")")
    }
  } else S = {
    backgroundColor: null != t ? (0, c.Rf)(t) : u.backgroundColor
  };
  let A = p ? b : t,
    C = false;

  function N() {
    let e = 16,
      t = 16;
    if ((i || n) && (e = "38%", t = "auto"), o) return (0, r.jsx)(_.dz2, {
      size: "custom",
      width: e,
      height: t,
      color: (0, h.Lq)(C ? m.Ilk.WHITE_500 : m.Ilk.BLACK_500)
    })
  }
  return i && !o ? C = true : (i || o) && (C = (0, c.Bd)(null != A ? A : m.p6O) > .2), (0, r.jsx)(f.t, {
    offset: false,
    children: (0, r.jsxs)("button", v(y({
      type: "button",
      className: a()(E.colorPickerSwatch, {
        [E.disabled]: l,
        [E.default]: n,
        [E.custom]: i,
        [E.noColor]: null == t && !p,
        [E.gradientPreset]: p
      }),
      disabled: l,
      onClick: () => null == d ? true : d(p ? {
        start: b,
        end: O
      } : t),
      style: y({}, u, S),
      "aria-label": null != g ? g : p ? "Gradient ".concat(b, "-").concat(O) : S.backgroundColor
    }, T), {
      children: [i ? (0, r.jsx)(_.vdY, {
        size: "custom",
        className: E.colorPickerDropper,
        width: 14,
        height: 14,
        color: (0, h.Lq)(C ? m.Ilk.WHITE_500 : m.Ilk.BLACK_500)
      }) : null, N()]
    }))
  })
}
class P extends Chunk647438.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: n,
      disabled: i,
      allowBlackCustomColor: o
    } = this.props;
    return (0, Chunk951288.jsx)(R, {
      isDefault: true,
      color: module,
      isSelected: module === require || 0 === require && !Chunk120356,
      onClick: exports,
      disabled: Chunk647438
    })
  }
}
class w extends Chunk647438.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: n,
      "aria-label": i
    } = this.props;
    return (0, Chunk951288.jsx)(R, {
      isCustom: true,
      color: module,
      isSelected: exports === module,
      disabled: require,
      "aria-label": Chunk647438
    })
  }
}

function D(e) {
  let {
    value: t,
    eagerUpdate: n = false,
    onChange: o,
    onClose: s,
    suggestedColors: l,
    middle: f,
    footer: h,
    showEyeDropper: m,
    wrapperComponentType: b,
    className: O
  } = e, I = (0, p.Z)(), T = N(t), C = null != T ? T : 0, R = (0, c.Rf)(C), P = (0, c.O)(C), [w, D] = i.useState({
    current: C,
    pending: {
      hex: R,
      hsl: P
    },
    input: R
  });
  i.useEffect(() => {
    if (null == T || T === w.current) return;
    let e = (0, c.Rf)(T),
      t = (0, c.O)(T);
    D({
      current: T,
      pending: {
        hex: e,
        hsl: t
      },
      input: e
    })
  }, [T, w]), i.useEffect(() => s, [s]);
  let x = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, c.FX)(t)) return void D(e => v(y({}, e), {
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
      }), o(n)
    },
    L = async () => {
      if (null != I) try {
        let {
          sRGBHex: e
        } = await I.open();
        x(e)
      } catch (e) {}
    }, j = i.useCallback(e => {
      D(t => v(y({}, t), {
        pending: e,
        input: e.hex
      })), n && o((0, c._i)(e.hex))
    }, [n, o]), k = e => {
      o((0, c._i)(e))
    }, M = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.Suspense, {
        fallback: null,
        children: (0, r.jsx)(S, {
          onChange: j,
          onChangeComplete: e => {
            let {
              hex: t
            } = e;
            return k(t)
          },
          color: w.pending.hsl
        })
      }), f, (0, r.jsx)(_.oil, {
        value: w.input.slice(1),
        onChange: x,
        maxLength: A - 1,
        leading: "#",
        trailing: m && null != I ? {
          icon: _.ilE,
          onClick: L,
          "aria-label": g.intl.string(g.t["0dU9Nz"])
        } : true
      }), null != l && l.length > 0 && (0, r.jsx)("div", {
        className: E.suggestedColors,
        children: l.map((e, t) => (0, r.jsx)(u.P, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: E.suggestedColor,
          onClick: () => x(e)
        }, "".concat(e, "-").concat(t)))
      }), h]
    }), U = null != b ? b : d.V;
  return (0, r.jsx)(U, {
    "aria-label": g.intl.string(g.t.WTqQ5e),
    className: a()(E.customColorPicker, O),
    children: M
  })
}
let x = Chunk647438.memo(D);

function L(e) {
  let {
    className: t,
    defaultColor: n,
    customColor: i,
    colors: o,
    value: c,
    secondaryValue: u,
    disabled: d,
    onChange: f,
    renderDefaultButton: _,
    renderCustomButton: p,
    colorContainerClassName: h,
    isGradient: m,
    renderGradientCustomButton: g,
    gradientDegrees: b,
    allowBlackCustomColor: O
  } = e, T = e => (0, r.jsx)("div", {
    className: E.colorPickerRow,
    children: m ? e.map(e => (0, r.jsx)(R, {
      gradientStart: e.start,
      gradientEnd: e.end,
      color: 0,
      isSelected: c === e.start && u === e.end,
      onClick: () => f(e.start, e.end),
      disabled: d,
      isGradient: true,
      "aria-label": e.name,
      gradientDegrees: b
    }, "".concat(e.start, "-").concat(e.end))) : e.map(e => (0, r.jsx)(R, {
      color: e,
      isSelected: e === c,
      onClick: f,
      disabled: d,
      isGradient: false
    }, e))
  }), S = o.slice(0, o.length / 2), A = o.slice(o.length / 2, o.length), N = (0, l.ZP)({
    id: "color-picker",
    isEnabled: true,
    scrollToStart: C,
    scrollToEnd: C
  });
  return (0, r.jsx)(s.bG, {
    navigator: N,
    children: (0, r.jsx)(s.SJ, {
      children: e => {
        var {
          ref: o
        } = e, s = I(e, ["ref"]);
        return (0, r.jsxs)("div", v(y({
          className: a()(E.container, t, {
            [E.gradient]: m
          }),
          ref: o
        }, s), {
          children: [!m && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              className: a()(E.defaultContainer, h),
              children: _({
                value: c,
                color: n,
                onChange: f,
                disabled: d,
                allowBlackCustomColor: O
              })
            }), (0, r.jsx)("div", {
              className: a()(E.customContainer, h),
              children: p({
                value: c,
                customColor: i,
                disabled: d
              })
            })]
          }), m && null != g && (0, r.jsx)("div", {
            children: g({
              value: c,
              startColor: n,
              endColor: n,
              disabled: d
            })
          }), (0, r.jsxs)("div", {
            children: [T(S), T(A)]
          })]
        }))
      }
    })
  })
}