/** Chunk was on web.js **/
/** chunk id: 193528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk866442 = require("./866442.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk699682 = require("./699682.js"),
  Chunk654904 = require("./654904.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk317238 = require("./317238.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function v(e) {
  let {
    onChange: t,
    onClose: n,
    color: a,
    suggestedColors: h,
    disabled: E,
    label: O,
    colorPickerMiddle: v,
    colorPickerFooter: S,
    showEyeDropper: I
  } = e, T = i.useRef(null), C = (0, u.dQu)(c.Z.colors.BACKGROUND_BASE_LOW).hex(), A = c.Z.colors.BACKGROUND_ACCENT.css, N = (0, f.DP)(a), P = (0, l.Rf)(a), R = P === C ? A : P, w = N ? c.Z.unsafe_rawColors.WHITE.css : c.Z.unsafe_rawColors.PRIMARY_530.css, D = (0, d.Z)(v), x = (0, d.Z)(S), [L, j] = i.useState((0, s.Z)());
  return i.useEffect(() => {
    (D !== v || x !== S) && j((0, s.Z)())
  }, [S, v, x, D]), (0, r.jsx)(u.yRy, {
    targetElementRef: T,
    positionKey: L,
    renderPopout: e => (0, r.jsx)(u.Z$W, b(g({}, e), {
      value: a,
      onChange: t,
      suggestedColors: h,
      middle: v,
      footer: S,
      showEyeDropper: I
    })),
    onRequestClose: n,
    children: e => {
      var {
        onClick: t
      } = e, n = y(e, ["onClick"]);
      return (0, r.jsxs)("div", {
        ref: T,
        className: o()(m.colorSwatch, {
          [m.disabled]: E
        }),
        children: [(0, r.jsx)(u.P3F, b(g({}, n), {
          tabIndex: E ? false : 0,
          onClick: E ? p.dG4 : t,
          style: {
            backgroundColor: P,
            borderColor: R
          },
          className: m.swatch,
          "aria-label": _.intl.string(_.t.Qp04hK),
          focusProps: {
            ringTarget: T
          },
          children: (0, r.jsx)(u.vdY, {
            size: "custom",
            className: m.editPencilIcon,
            width: 14,
            height: 14,
            color: w
          })
        })), O]
      })
    }
  })
}