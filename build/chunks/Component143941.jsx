/** Chunk was on web.js **/
/** chunk id: 143941, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk277511 = require("./277511.js"),
  Chunk602733 = require("./602733.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820657 = require("./820657.js"),
  Chunk74866 = require("./74866.js");

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
let O = e => {
    let {
      message: t
    } = e;
    return (0, r.jsxs)("div", {
      className: m.toast,
      children: [(0, r.jsx)(l.kSu, {
        size: "refresh_sm",
        className: h.toastIcon,
        color: l.TVs.colors.STATUS_POSITIVE
      }), (0, r.jsx)(l.Text, {
        color: "text-default",
        variant: "text-sm/semibold",
        children: t
      })]
    })
  },
  v = e => {
    let {
      skuId: t,
      iconSize: n = 20,
      className: a,
      enableHoverEffect: m = false
    } = e, [g, b] = (0, u.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), v = g === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, I = (0, f.n)("123", t), T = i.useRef(null), S = (0, c.Z)(T), A = I ? l.h_8 : l.Pzh, C = I || S ? h.wishlistedOrHoveredIconColor : h.normalIconColor, N = i.useCallback(e => {
      e.stopPropagation(), I ? (d.Z.removeSkuFromWishlist("123", t), (0, l.showToast)((0, l.createToast)("", l.ToastType.CUSTOM, {
        component: (0, r.jsx)(O, {
          message: p.intl.string(p.t.DSXOiI)
        })
      }))) : (d.Z.addSkuToWishlist("123", t), (0, l.showToast)((0, l.createToast)("", l.ToastType.CUSTOM, {
        component: (0, r.jsx)(O, {
          message: p.intl.string(p.t["3T2jbW"])
        })
      })), v && b(_.L.USER_DISMISS))
    }, [I, t, v, b]), R = I ? p.intl.string(p.t.yr9TTU) : p.intl.string(p.t["8DkMER"]), P = v ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        children: p.intl.string(p.t["47Rhc3"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        children: p.intl.string(p.t.PXjA0d)
      })]
    }) : R;
    return (0, r.jsx)(l.ua7, {
      text: P,
      "aria-label": R,
      children: e => (0, r.jsx)(l.P3F, y(E({}, e), {
        className: o()(h.wishlistButton, m && h.withHover, a),
        innerRef: T,
        onClick: N,
        "aria-label": R,
        children: (0, r.jsx)(A, {
          colorClass: C,
          size: "custom",
          height: n,
          width: n
        })
      }))
    })
  }