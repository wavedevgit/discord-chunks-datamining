/** Chunk was on web.js **/
/** chunk id: 168463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk306349 = require("./306349.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = false;

function h() {
  let [e, t] = Chunk647438.useState(false), u = Chunk647438.useCallback(() => {
    exports(true)
  }, []), f = Chunk647438.useCallback(() => {
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("82077").then(require.bind(require, 953848));
      return n => (0, r.jsx)(e, _(d({}, n), {
        onSubmitted: () => t(true)
      }))
    })
  }, []);
  return (Chunk647438.useEffect(() => () => {
    module && (p = true)
  }, [module]), module) ? (0, Chunk951288.jsx)(Chunk502762.Z.Overlay, {
    className: Chunk306349.container,
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk306349.content,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: Chunk306349.description,
        children: Chunk388032.intl.string(Chunk388032.t.X0TrNT)
      })
    })
  }) : (0, Chunk951288.jsx)(Chunk502762.Z.Overlay, {
    className: Chunk306349.container,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk306349.content,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: Chunk306349.description,
        children: Chunk388032.intl.string(Chunk388032.t.Qian09)
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk306349.buttons,
        children: [(0, Chunk951288.jsx)(Chunk755721.zx, {
          size: Chunk755721.zx.Sizes.SMALL,
          look: Chunk755721.zx.Looks.FILLED,
          color: Chunk755721.zx.Colors.PRIMARY,
          onClick: u,
          className: Chunk306349.button,
          children: Chunk388032.intl.string(Chunk388032.t.p89ACg)
        }), (0, Chunk951288.jsx)(Chunk755721.zx, {
          size: Chunk755721.zx.Sizes.SMALL,
          look: Chunk755721.zx.Looks.FILLED,
          color: Chunk755721.zx.Colors.PRIMARY,
          onClick: f,
          className: Chunk306349.button,
          children: Chunk388032.intl.string(Chunk388032.t.gm1Ven)
        })]
      })]
    })
  })
}

function m() {
  return p ? null : (0, Chunk951288.jsx)(h, {})
}