/** Chunk was on 49902 **/
/** chunk id: 461631, original params: e,t,n (module,exports,require) **/
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
  Chunk624285 = require("./624285.js");

function f(e) {
  let {
    item: t,
    wishlistId: n,
    iconSize: i = "refresh_sm",
    className: f
  } = e, g = async () => {
    try {
      await s.Z.removeSkuFromWishlist(n, t.skuId)
    } catch (e) {
      (0, o.L$)(c.qb.SOMETHING_WENT_WRONG)
    }
  };
  return (0, r.jsx)(a.ua7, {
    text: u.intl.string(u.t.jTW019),
    children: e => {
      var t, n;
      return (0, r.jsx)(a.P3F, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, e), n = n = {
        onClick: g,
        "aria-label": u.intl.string(u.t.jTW019),
        className: l()(f, d.clickable),
        children: (0, r.jsx)(a.XHJ, {
          size: i,
          className: d.icon,
          color: a.TVs.colors.ICON_FEEDBACK_CRITICAL
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
}