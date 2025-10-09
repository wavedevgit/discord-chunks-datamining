/** Chunk was on 36529 **/
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
  Chunk747615 = require("./747615.js");

function g(e) {
  let {
    item: t,
    wishlistId: r,
    iconSize: i = "refresh_sm",
    className: g
  } = e, {
    analyticsLocations: p
  } = (0, l.ZP)(), b = async () => {
    try {
      await c.Z.removeSkuFromWishlist(r, t.skuId, p)
    } catch (e) {
      (0, s.L$)(u.qb.SOMETHING_WENT_WRONG)
    }
  };
  return (0, n.jsx)(o.ua7, {
    "data-migration-pending": true,
    text: d.intl.string(d.t.jTW019),
    children: e => {
      var t, r;
      return (0, n.jsx)(o.P3F, (t = function(e) {
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
        onClick: b,
        "aria-label": d.intl.string(d.t.jTW019),
        className: a()(g, f.clickable),
        children: (0, n.jsx)(o.XHJ, {
          size: i,
          className: f.icon,
          color: o.TVs.colors.ICON_FEEDBACK_CRITICAL
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