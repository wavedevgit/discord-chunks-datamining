/** Chunk was on 7384 **/
/** chunk id: 193528, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk866442 = require("./866442.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk699682 = require("./699682.js"),
  Chunk44315 = require("./44315.js"),
  Chunk654904 = require("./654904.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk707892 = require("./707892.js");

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  let {
    onChange: t,
    onClose: n,
    color: s,
    suggestedColors: _,
    disabled: j,
    label: E,
    colorPickerMiddle: C,
    colorPickerFooter: O,
    showEyeDropper: v
  } = e, S = r.useRef(null), T = (0, d.dQu)(c.Z.colors.BACKGROUND_BASE_LOW).hex(), I = c.Z.colors.BACKGROUND_ACCENT.css, N = (0, p.DP)(s), y = (0, o.Rf)(s), A = y === T ? I : y, P = (0, m.Lq)(N ? g.Ilk.WHITE_500 : g.Ilk.PRIMARY_530), R = (0, u.Z)(C), D = (0, u.Z)(O), [Z, w] = r.useState((0, l.Z)());
  return r.useEffect(() => {
    (R !== C || D !== O) && w((0, l.Z)())
  }, [O, C, D, R]), (0, i.jsx)(d.yRy, {
    targetElementRef: S,
    positionKey: Z,
    renderPopout: e => (0, i.jsx)(d.Z$W, x(b({}, e), {
      value: s,
      onChange: t,
      suggestedColors: _,
      middle: C,
      footer: O,
      showEyeDropper: v
    })),
    onRequestClose: n,
    children: e => {
      var {
        onClick: t
      } = e, n = function(e, t) {
        if (null == e) return {};
        var n, i, r = function(e, t) {
          if (null == e) return {};
          var n, i, r = {},
            s = Object.keys(e);
          for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
      }(e, ["onClick"]);
      return (0, i.jsxs)("div", {
        ref: S,
        className: a()(f.colorSwatch, {
          [f.disabled]: j
        }),
        children: [(0, i.jsx)(d.P3F, x(b({}, n), {
          tabIndex: j ? false : 0,
          onClick: j ? g.dG4 : t,
          style: {
            backgroundColor: y,
            borderColor: A
          },
          className: f.swatch,
          "aria-label": h.intl.string(h.t.Qp04hI),
          focusProps: {
            ringTarget: S
          },
          children: (0, i.jsx)(d.vdY, {
            size: "custom",
            className: f.editPencilIcon,
            width: 14,
            height: 14,
            color: P
          })
        })), E]
      })
    }
  })
}