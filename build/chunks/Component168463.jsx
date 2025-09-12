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
  Chunk982629 = require("./982629.js");

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

function h(e) {
  let {
    variant: t = "vertical"
  } = e, [u, f] = i.useState(false), h = "vertical" === t, m = i.useCallback(() => {
    f(true)
  }, []), g = i.useCallback(() => {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("82077").then(n.bind(n, 953848));
      return t => (0, r.jsx)(e, _(d({}, t), {
        onSubmitted: () => f(true)
      }))
    })
  }, []);
  return (i.useEffect(() => () => {
    u && (p = true)
  }, [u]), u) ? (0, r.jsx)(s.Z.Overlay, {
    className: c.container,
    children: (0, r.jsx)("div", {
      className: h ? c.contentVertical : c.contentHorizontal,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: c.description,
        children: l.intl.string(l.t.X0TrNT)
      })
    })
  }) : (0, r.jsx)(s.Z.Overlay, {
    className: c.container,
    children: (0, r.jsxs)("div", {
      className: h ? c.contentVertical : c.contentHorizontal,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: c.description,
        children: l.intl.string(l.t.Qian09)
      }), (0, r.jsxs)("div", {
        className: h ? c.buttonsVertical : c.buttonsHorizontal,
        children: [(0, r.jsx)(a.zx, {
          size: a.zx.Sizes.SMALL,
          look: a.zx.Looks.FILLED,
          color: a.zx.Colors.PRIMARY,
          onClick: m,
          className: h ? c.buttonVertical : c.buttonHorizontal,
          children: l.intl.string(l.t.p89ACg)
        }), (0, r.jsx)(a.zx, {
          size: a.zx.Sizes.SMALL,
          look: a.zx.Looks.FILLED,
          color: a.zx.Colors.PRIMARY,
          onClick: g,
          className: h ? c.buttonVertical : c.buttonHorizontal,
          children: l.intl.string(l.t.gm1Ven)
        })]
      })]
    })
  })
}

function m(e) {
  let {
    variant: t
  } = e;
  return p ? null : (0, r.jsx)(h, {
    variant: t
  })
}