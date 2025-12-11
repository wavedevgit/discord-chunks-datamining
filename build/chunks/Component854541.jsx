/** Chunk was on web.js **/
/** chunk id: 854541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AG: () => P,
  Z$: () => D,
  jH: () => R,
  zH: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk924826 = require("./924826.js"),
  Chunk866442 = require("./866442.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk507274 = require("./507274.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk408886 = require("./408886.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk352005 = require("./352005.js");

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
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let I = Chunk473749.lazy(() => Promise.all([require.e("66382"), require.e("28102")]).then(require.bind(require, 534828))),
  T = 7,
  C = () => Promise.resolve();

function A(e) {
  return null == e ? null : "string" == typeof e ? (0, c.FX)(e) ? (0, c._i)(e) : null : e
}

function N(e) {
  let {
    color: t,
    isDefault: n = false,
    isCustom: i = false,
    isSelected: a = false,
    disabled: l = false,
    style: f = {},
    onClick: _,
    isGradient: h = false,
    "aria-label": E,
    gradientStart: y,
    gradientEnd: v,
    gradientDegrees: S = 180
  } = e, I = (0, s.JA)("color-".concat(t)), T = {};
  if (h && null != y && null != v) {
    let e = (0, c.Rf)(y),
      t = (0, c.Rf)(v);
    T = {
      background: "linear-gradient(".concat(S, "deg, ").concat(e, ", ").concat(t, ")")
    }
  } else T = {
    backgroundColor: null != t ? (0, c.Rf)(t) : f.backgroundColor
  };
  let C = h ? y : t,
    A = false;

  function N() {
    let e = 16,
      t = 16;
    if ((i || n) && (e = "38%", t = "auto"), a) return (0, r.jsx)(p.dz2, {
      size: "custom",
      width: e,
      height: t,
      color: A ? d.Z.colors.WHITE.css : d.Z.colors.BLACK.css
    })
  }
  return i && !a ? A = true : (i || a) && (A = (0, c.Bd)(null != C ? C : m.p6O) > .2), (0, r.jsx)(u.tEY, {
    offset: false,
    children: (0, r.jsxs)("button", O(b({
      type: "button",
      className: o()(g.colorPickerSwatch, {
        [g.disabled]: l,
        [g.default]: n,
        [g.custom]: i,
        [g.noColor]: null == t && !h,
        [g.gradientPreset]: h
      }),
      disabled: l,
      onClick: () => null == _ ? true : _(h ? {
        start: y,
        end: v
      } : t),
      style: b({}, f, T),
      "aria-label": null != E ? E : h ? "Gradient ".concat(y, "-").concat(v) : T.backgroundColor
    }, I), {
      children: [i ? (0, r.jsx)(p.vdY, {
        size: "custom",
        className: g.colorPickerDropper,
        width: 14,
        height: 14,
        color: A ? d.Z.colors.WHITE.css : d.Z.colors.BLACK.css
      }) : null, N()]
    }))
  })
}
class P extends Chunk473749.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: n,
      disabled: i,
      allowBlackCustomColor: a
    } = this.props;
    return (0, Chunk54381.jsx)(N, {
      isDefault: true,
      color: module,
      isSelected: module === require || 0 === require && !Chunk120356,
      onClick: exports,
      disabled: Chunk473749
    })
  }
}
class R extends Chunk473749.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: n,
      "aria-label": i,
      presets: a
    } = this.props;
    return (0, Chunk54381.jsx)(N, {
      isCustom: true,
      color: module,
      isSelected: exports === module && !Chunk120356.includes(module),
      disabled: require,
      "aria-label": Chunk473749
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
    middle: d,
    footer: m,
    showEyeDropper: E,
    wrapperComponentType: y,
    className: v
  } = e, S = (0, _.Z)(), C = A(t), N = null != C ? C : 0, P = (0, c.Rf)(N), R = (0, c.O)(N), [w, D] = i.useState({
    current: N,
    pending: {
      hex: P,
      hsl: R
    },
    input: P
  });
  i.useEffect(() => {
    if (null == C || C === w.current) return;
    let e = (0, c.Rf)(C),
      t = (0, c.O)(C);
    D({
      current: C,
      pending: {
        hex: e,
        hsl: t
      },
      input: e
    })
  }, [C, w]), i.useEffect(() => s, [s]);
  let x = e => {
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
    L = async () => {
      if (null != S) try {
        let {
          sRGBHex: e
        } = await S.open();
        x(e)
      } catch (e) {}
    }, j = i.useCallback(e => {
      D(t => O(b({}, t), {
        pending: e,
        input: e.hex
      })), n && a((0, c._i)(e.hex))
    }, [n, a]), M = e => {
      a((0, c._i)(e))
    }, k = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.Suspense, {
        fallback: null,
        children: (0, r.jsx)(I, {
          onChange: j,
          onChangeComplete: e => {
            let {
              hex: t
            } = e;
            return M(t)
          },
          color: w.pending.hsl
        })
      }), d, (0, r.jsx)(p.oil, {
        value: w.input.slice(1),
        onChange: x,
        maxLength: T - 1,
        leading: "#",
        trailing: E && null != S ? {
          icon: p.ilE,
          onClick: L,
          "aria-label": h.intl.string(h.t["0dU9Ny"])
        } : true
      }), null != l && l.length > 0 && (0, r.jsx)("div", {
        className: g.suggestedColors,
        children: l.map((e, t) => (0, r.jsx)(u.P3F, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: g.suggestedColor,
          onClick: () => x(e)
        }, "".concat(e, "-").concat(t)))
      }), m]
    }), U = null != y ? y : f.V;
  return (0, r.jsx)(U, {
    "aria-label": h.intl.string(h.t.WTqQ5e),
    className: o()(g.customColorPicker, v),
    children: k
  })
}
let D = Chunk473749.memo(w);

function x(e) {
  let {
    className: t,
    defaultColor: n,
    customColor: i,
    colors: a,
    value: c,
    secondaryValue: u,
    disabled: d,
    onChange: f,
    renderDefaultButton: p,
    renderCustomButton: _,
    colorContainerClassName: m,
    isGradient: h,
    renderGradientCustomButton: E,
    gradientDegrees: y,
    allowBlackCustomColor: S
  } = e, I = e => (0, r.jsx)("div", {
    className: g.colorPickerRow,
    children: h ? e.map(e => (0, r.jsx)(N, {
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
  }), T = a.slice(0, a.length / 2), A = a.slice(a.length / 2, a.length), P = (0, l.ZP)({
    id: "color-picker",
    isEnabled: true,
    scrollToStart: C,
    scrollToEnd: C
  });
  return (0, r.jsx)(s.bG, {
    navigator: P,
    children: (0, r.jsx)(s.SJ, {
      children: e => {
        var {
          ref: s
        } = e, l = v(e, ["ref"]);
        return (0, r.jsxs)("div", O(b({
          className: o()(g.container, t, {
            [g.gradient]: h
          }),
          ref: s
        }, l), {
          children: [!h && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              className: o()(g.defaultContainer, m),
              children: p({
                value: c,
                color: n,
                onChange: f,
                disabled: d,
                allowBlackCustomColor: S
              })
            }), (0, r.jsx)("div", {
              className: o()(g.customContainer, m),
              children: _({
                value: c,
                customColor: i,
                disabled: d,
                presets: a
              })
            })]
          }), h && null != E && (0, r.jsx)("div", {
            children: E({
              value: c,
              startColor: n,
              endColor: n,
              disabled: d
            })
          }), (0, r.jsxs)("div", {
            children: [I(T), I(A)]
          })]
        }))
      }
    })
  })
}