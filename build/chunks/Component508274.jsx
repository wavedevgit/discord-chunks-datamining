/** Chunk was on web.js **/
/** chunk id: 508274, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  VN: () => D,
  fy: () => w,
  nJ: () => R,
  sk: () => L
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk884362 = require("./884362.js"),
  Chunk317097 = require("./317097.js"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk305866 = require("./305866.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk971745 = require("./971745.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk710032 = require("./710032.js");

function E(e, t, n) {
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
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = A(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let I = Chunk64700.lazy(() => Promise.all([n.e("47950"), n.e("87680")]).then(n.bind(n, 370640))),
  S = 7,
  T = () => Promise.resolve();

function C(e) {
  return null == e ? null : "string" == typeof e ? (0, c.qt)(e) ? (0, c.LX)(e) : null : e
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
    isGradient: m = false,
    "aria-label": E,
    gradientStart: b,
    gradientEnd: v,
    gradientDegrees: A = 180
  } = e, I = (0, s.rm)("color-".concat(t)), S = {};
  if (m && null != b && null != v) {
    let e = (0, c.Hl)(b),
      t = (0, c.Hl)(v);
    S = {
      background: "linear-gradient(".concat(A, "deg, ").concat(e, ", ").concat(t, ")")
    }
  } else S = {
    backgroundColor: null != t ? (0, c.Hl)(t) : f.backgroundColor
  };
  let T = m ? b : t,
    C = false;

  function N() {
    let e = 16,
      t = 16;
    if ((i || n) && (e = "38%", t = "auto"), a) return (0, r.jsx)(p.A9s, {
      size: "custom",
      width: e,
      height: t,
      color: C ? d.A.colors.WHITE.css : d.A.colors.BLACK.css
    })
  }
  return i && !a ? C = true : (i || a) && (C = (0, c.OK)(null != T ? T : h.TGz) > .2), (0, r.jsx)(u.vN3, {
    offset: false,
    children: (0, r.jsxs)("button", O(y({
      type: "button",
      className: o()(g.iH, {
        [g.r9]: l,
        [g.Ay]: n,
        [g.Ie]: i,
        [g.dw]: null == t && !m,
        [g.hb]: m
      }),
      disabled: l,
      onClick: () => null == _ ? true : _(m ? {
        start: b,
        end: v
      } : t),
      style: y({}, f, S),
      "aria-label": null != E ? E : m ? "Gradient ".concat(b, "-").concat(v) : S.backgroundColor
    }, I), {
      children: [i ? (0, r.jsx)(p.R2l, {
        size: "custom",
        className: g.M2,
        width: 14,
        height: 14,
        color: C ? d.A.colors.WHITE.css : d.A.colors.BLACK.css
      }) : null, N()]
    }))
  })
}
class w extends Chunk64700.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: n,
      disabled: i,
      allowBlackCustomColor: a
    } = this.props;
    return (0, r.jsx)(N, {
      isDefault: true,
      color: e,
      isSelected: e === n || 0 === n && !a,
      onClick: t,
      disabled: i
    })
  }
}
class R extends Chunk64700.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: n,
      "aria-label": i,
      presets: a
    } = this.props;
    return (0, r.jsx)(N, {
      isCustom: true,
      color: e,
      isSelected: t === e && !a.includes(e),
      disabled: n,
      "aria-label": i
    })
  }
}

function P(e) {
  let {
    value: t,
    eagerUpdate: n = false,
    onChange: a,
    onClose: s,
    suggestedColors: l,
    middle: d,
    footer: h,
    showEyeDropper: E,
    wrapperComponentType: b,
    className: v
  } = e, A = (0, _.A)(), T = C(t), N = null != T ? T : 0, w = (0, c.Hl)(N), R = (0, c.tf)(N), [P, D] = i.useState({
    current: N,
    pending: {
      hex: w,
      hsl: R
    },
    input: w
  });
  i.useEffect(() => {
    if (null == T || T === P.current) return;
    let e = (0, c.Hl)(T),
      t = (0, c.tf)(T);
    D({
      current: T,
      pending: {
        hex: e,
        hsl: t
      },
      input: e
    })
  }, [T, P]), i.useEffect(() => s, [s]);
  let L = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, c.qt)(t)) return void D(e => O(y({}, e), {
        input: t
      }));
      let n = (0, c.LX)(t),
        r = (0, c.tf)(n);
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
      if (null != A) try {
        let {
          sRGBHex: e
        } = await A.open();
        L(e)
      } catch (e) {}
    }, M = i.useCallback(e => {
      D(t => O(y({}, t), {
        pending: e,
        input: e.hex
      })), n && a((0, c.LX)(e.hex))
    }, [n, a]), j = e => {
      a((0, c.LX)(e))
    }, k = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.Suspense, {
        fallback: null,
        children: (0, r.jsx)(I, {
          onChange: M,
          onChangeComplete: e => {
            let {
              hex: t
            } = e;
            return j(t)
          },
          color: P.pending.hsl
        })
      }), d, (0, r.jsx)(p.ksK, {
        value: P.input.slice(1),
        onChange: L,
        maxLength: S - 1,
        leading: "#",
        trailing: E && null != A ? {
          icon: p.dDg,
          onClick: x,
          "aria-label": m.intl.string(m.t["0dU9Ny"])
        } : true
      }), null != l && l.length > 0 && (0, r.jsx)("div", {
        className: g.I1,
        children: l.map((e, t) => (0, r.jsx)(u.DUT, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: g.db,
          onClick: () => L(e)
        }, "".concat(e, "-").concat(t)))
      }), h]
    }), U = null != b ? b : f.l;
  return (0, r.jsx)(U, {
    "aria-label": m.intl.string(m.t.WTqQ5e),
    className: o()(g.zi, v),
    children: k
  })
}
let D = Chunk64700.memo(P);

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
    renderDefaultButton: p,
    renderCustomButton: _,
    colorContainerClassName: h,
    isGradient: m,
    renderGradientCustomButton: E,
    gradientDegrees: b,
    allowBlackCustomColor: A
  } = e, I = e => (0, r.jsx)("div", {
    className: g._D,
    children: m ? e.map(e => (0, r.jsx)(N, {
      gradientStart: e.start,
      gradientEnd: e.end,
      color: 0,
      isSelected: c === e.start && u === e.end,
      onClick: () => f(e.start, e.end),
      disabled: d,
      isGradient: true,
      "aria-label": e.name,
      gradientDegrees: b
    }, "".concat(e.start, "-").concat(e.end))) : e.map(e => (0, r.jsx)(N, {
      color: e,
      isSelected: e === c,
      onClick: f,
      disabled: d,
      isGradient: false
    }, e))
  }), S = a.slice(0, a.length / 2), C = a.slice(a.length / 2, a.length), w = (0, l.Ay)({
    id: "color-picker",
    isEnabled: true,
    scrollToStart: T,
    scrollToEnd: T
  });
  return (0, r.jsx)(s.hD, {
    navigator: w,
    children: (0, r.jsx)(s.PR, {
      children: e => {
        let {
          ref: s
        } = e, l = v(e, ["ref"]);
        return (0, r.jsxs)("div", O(y({
          className: o()(g.kL, t, {
            [g.D7]: m
          }),
          ref: s
        }, l), {
          children: [!m && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              className: o()(g.$R, h),
              children: p({
                value: c,
                color: n,
                onChange: f,
                disabled: d,
                allowBlackCustomColor: A
              })
            }), (0, r.jsx)("div", {
              className: o()(g.BQ, h),
              children: _({
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
            children: [I(S), I(C)]
          })]
        }))
      }
    })
  })
}