/** Chunk was on web.js **/
/** chunk id: 193528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
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

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function I(e) {
  let {
    onChange: t,
    onClose: n,
    color: a,
    suggestedColors: g,
    disabled: b,
    label: v,
    colorPickerMiddle: I,
    colorPickerFooter: T,
    showEyeDropper: S
  } = e, A = i.useRef(null), C = (0, u.dQu)(c.Z.colors.BACKGROUND_BASE_LOW).hex(), N = c.Z.colors.BACKGROUND_ACCENT.css, R = (0, _.DP)(a), P = (0, l.Rf)(a), D = P === C ? N : P, w = (0, f.Lq)(R ? p.Ilk.WHITE_500 : p.Ilk.PRIMARY_530), L = (0, d.Z)(I), x = (0, d.Z)(T), [M, k] = i.useState((0, s.Z)());
  return i.useEffect(() => {
    (L !== I || x !== T) && k((0, s.Z)())
  }, [T, I, x, L]), (0, r.jsx)(u.yRy, {
    targetElementRef: A,
    positionKey: M,
    renderPopout: e => (0, r.jsx)(u.Z$W, y(E({}, e), {
      value: a,
      onChange: t,
      suggestedColors: g,
      middle: I,
      footer: T,
      showEyeDropper: S
    })),
    onRequestClose: n,
    children: e => {
      var {
        onClick: t
      } = e, n = O(e, ["onClick"]);
      return (0, r.jsxs)("div", {
        ref: A,
        className: o()(m.colorSwatch, {
          [m.disabled]: b
        }),
        children: [(0, r.jsx)(u.P3F, y(E({}, n), {
          tabIndex: b ? false : 0,
          onClick: b ? p.dG4 : t,
          style: {
            backgroundColor: P,
            borderColor: D
          },
          className: m.swatch,
          "aria-label": h.intl.string(h.t.Qp04hK),
          focusProps: {
            ringTarget: A
          },
          children: (0, r.jsx)(u.vdY, {
            size: "custom",
            className: m.editPencilIcon,
            width: 14,
            height: 14,
            color: w
          })
        })), v]
      })
    }
  })
}