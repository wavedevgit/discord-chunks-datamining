/** Chunk was on 56848 **/
/** chunk id: 461631, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk277511 = require("./277511.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk624285 = require("./624285.js");

function g(e) {
  let {
    item: t,
    wishlistId: r,
    iconSize: i = "refresh_sm",
    className: g
  } = e, {
    analyticsLocations: h
  } = (0, s.ZP)(), p = async () => {
    try {
      await o.Z.removeSkuFromWishlist(r, t.skuId, h)
    } catch (e) {
      (0, c.L$)(u.qb.SOMETHING_WENT_WRONG)
    }
  };
  return (0, n.jsx)(l.ua7, {
    text: d.intl.string(d.t.jTW019),
    children: e => {
      var t, r;
      return (0, n.jsx)(l.P3F, (t = function(e) {
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
        onClick: p,
        "aria-label": d.intl.string(d.t.jTW019),
        className: a()(g, f.clickable),
        children: (0, n.jsx)(l.XHJ, {
          size: i,
          className: f.icon,
          color: l.TVs.colors.ICON_FEEDBACK_CRITICAL
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