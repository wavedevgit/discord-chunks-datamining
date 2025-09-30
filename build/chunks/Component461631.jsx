/** Chunk was on 49902 **/
/** chunk id: 461631, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk277511 = require("./277511.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk747615 = require("./747615.js");

function f(e) {
  let {
    item: t,
    wishlistId: r,
    iconSize: i = "refresh_sm",
    className: f
  } = e, g = async () => {
    try {
      await s.Z.removeSkuFromWishlist(r, t.skuId), (0, o.L$)(c.qb.WISHLIST_ITEM_REMOVED)
    } catch (e) {
      (0, o.L$)(c.qb.SOMETHING_WENT_WRONG)
    }
  };
  return (0, n.jsx)(a.ua7, {
    text: u.intl.string(u.t.jTW019),
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
        onClick: g,
        "aria-label": u.intl.string(u.t.jTW019),
        className: l()(f, d.clickable),
        children: (0, n.jsx)(a.XHJ, {
          size: i,
          className: d.icon,
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