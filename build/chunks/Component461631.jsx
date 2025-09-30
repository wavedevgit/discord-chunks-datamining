/** Chunk was on 74477 **/
/** chunk id: 461631, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk143941 = require("./143941.jsx"),
  Chunk277511 = require("./277511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk624285 = require("./624285.js");

function d(e) {
  let {
    item: t,
    wishlistId: r,
    iconSize: i = "refresh_sm",
    className: d
  } = e, f = async () => {
    try {
      await o.Z.removeSkuFromWishlist(r, t.skuId), (0, a.showToast)((0, a.createToast)("", a.ToastType.CUSTOM, {
        component: (0, n.jsx)(s.k, {
          message: c.intl.string(c.t.DSXOiI)
        })
      }))
    } catch (e) {
      (0, a.showToast)((0, a.createToast)(c.intl.string(c.t.F8FvU1), a.ToastType.FAILURE))
    }
  };
  return (0, n.jsx)(a.ua7, {
    text: c.intl.string(c.t.jTW019),
    children: e => {
      var t, r;
      return (0, n.jsx)(a.P3F, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, e), r = r = {
        onClick: f,
        "aria-label": c.intl.string(c.t.jTW019),
        className: l()(d, u.clickable),
        children: (0, n.jsx)(a.XHJ, {
          size: i,
          className: u.icon,
          color: a.TVs.colors.ICON_FEEDBACK_CRITICAL
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    }
  })
}