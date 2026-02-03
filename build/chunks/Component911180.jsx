/** Chunk was on 9207 **/
/** chunk id: 911180, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk317097 = require("./317097.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk919796 = require("./919796.js"),
  Chunk385612 = require("./385612.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk567458 = require("./567458.js");

function A(e) {
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

function b(e) {
  let {
    onChange: t,
    onClose: n,
    color: l,
    suggestedColors: b,
    disabled: h,
    label: E,
    colorPickerMiddle: O,
    colorPickerFooter: x,
    showEyeDropper: C
  } = e, S = i.useRef(null), T = (0, d.rdh)(c.A.colors.BACKGROUND_BASE_LOW).hex(), I = c.A.colors.BACKGROUND_MOD_MUTED.css, N = (0, _.sN)(l), j = (0, o.Hl)(l), y = j === T ? I : j, v = N ? c.A.unsafe_rawColors.WHITE.css : c.A.unsafe_rawColors.PRIMARY_530.css, P = (0, u.A)(O), R = (0, u.A)(x), [D, L] = i.useState((0, a.A)());
  return i.useEffect(() => {
    (P !== O || R !== x) && L((0, a.A)())
  }, [x, O, R, P]), (0, r.jsx)(d.YNO, {
    targetElementRef: S,
    positionKey: D,
    renderPopout: e => (0, r.jsx)(d.VNw, f(A({}, e), {
      value: l,
      onChange: t,
      suggestedColors: b,
      middle: O,
      footer: x,
      showEyeDropper: C
    })),
    onRequestClose: n,
    children: e => {
      let {
        onClick: t
      } = e, n = function(e, t) {
        if (null == e) return {};
        var n, r, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }
        if (l = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i
          }(e, t), Object.getOwnPropertySymbols)
          for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, ["onClick"]);
      return (0, r.jsxs)("div", {
        ref: S,
        className: s()(g.oP, {
          [g.r9]: h
        }),
        children: [(0, r.jsx)(d.DUT, f(A({}, n), {
          tabIndex: h ? false : 0,
          onClick: h ? p.tEg : t,
          style: {
            backgroundColor: j,
            borderColor: y
          },
          className: g.nf,
          "aria-label": m.intl.string(m.t.Qp04hK),
          focusProps: {
            ringTarget: S
          },
          children: (0, r.jsx)(d.R2l, {
            size: "custom",
            className: g.BW,
            width: 14,
            height: 14,
            color: v
          })
        })), E]
      })
    }
  })
}