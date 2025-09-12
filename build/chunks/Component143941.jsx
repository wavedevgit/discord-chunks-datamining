/** Chunk was on web.js **/
/** chunk id: 143941, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk607550 = require("./607550.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk890088 = require("./890088.js"),
  Chunk583140 = require("./583140.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = e => {
    let {
      message: t
    } = e;
    return (0, r.jsxs)("div", {
      className: f.toast,
      children: [(0, r.jsx)(s.kSu, {
        size: "refresh_sm",
        className: d.toastIcon,
        color: s.TVs.colors.STATUS_POSITIVE
      }), (0, r.jsx)(s.Text, {
        color: "text-default",
        variant: "text-sm/semibold",
        children: t
      })]
    })
  },
  E = e => {
    let {
      skuId: t,
      className: n
    } = e, a = (0, c.ny)(t), f = i.useRef(null), _ = a ? u.intl.string(u.t.yr9TTU) : u.intl.string(u.t["8DkMER"]), h = (0, l.Z)(f), E = a ? s.h_8 : s.Pzh, b = a || h ? d.wishlistedOrHoveredIconColor : d.normalIconColor, y = i.useCallback(e => {
      e.stopPropagation(), a ? ((0, c.yj)(t), (0, s.showToast)((0, s.createToast)("", s.ToastType.CUSTOM, {
        component: (0, r.jsx)(g, {
          message: u.intl.string(u.t.DSXOiI)
        })
      }))) : ((0, c.iI)(t), (0, s.showToast)((0, s.createToast)("", s.ToastType.CUSTOM, {
        component: (0, r.jsx)(g, {
          message: u.intl.string(u.t["3T2jbW"])
        })
      })))
    }, [a, t]);
    return (0, r.jsx)(s.ua7, {
      text: _,
      children: e => (0, r.jsx)(s.P3F, m(p({}, e), {
        className: o()(n, d.wishlistButton),
        innerRef: f,
        onClick: y,
        "aria-label": _,
        children: (0, r.jsx)(E, {
          colorClass: b,
          size: "custom",
          height: 20,
          width: 20
        })
      }))
    })
  }