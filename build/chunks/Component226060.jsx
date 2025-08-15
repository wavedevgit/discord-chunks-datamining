/** Chunk was on 66866 **/
/** chunk id: 226060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk430824 = require("./430824.js"),
  Chunk506071 = require("./506071.js"),
  Chunk267101 = require("./267101.js"),
  Chunk240864 = require("./240864.js"),
  Chunk57949 = require("./57949.jsx"),
  Chunk400916 = require("./400916.jsx"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    guildId: t,
    guildProductListingId: n,
    sourceAnalyticsLocations: i
  } = e, g = (0, a.e7)([p.Z], () => p.Z.getGuildProduct(n)), h = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]), b = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), E = (0, u.n)();
  return (l()(null != h, "guild cannot be null"), l()(null != g, "guildProductListing cannot be null"), (0, d.SO)(h)) ? (0, r.jsx)(o.ua7, {
    text: _.intl.string(_.t.sAJr9f),
    children: e => {
      var t, n;
      return (0, r.jsx)(o.zxk, (t = function(e) {
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
      }({
        variant: "primary",
        text: _.intl.string(_.t.xUi3BA)
      }, e), n = n = {
        disabled: true
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
  }) : g.has_entitlement ? null != g.attachments ? (0, r.jsx)(f.Z, {
    guildId: h.id,
    productId: g.id
  }) : (0, r.jsx)(o.zxk, {
    variant: "secondary",
    text: _.intl.string(_.t.RcTOGB),
    disabled: true
  }) : (0, r.jsx)(o.gtL, {
    shineSize: o.gtL.ShineSizes.SMALL,
    pauseAnimation: b || !E,
    onClick: () => (0, m.z)({
      guildProductListing: g,
      guildId: h.id,
      sourceAnalyticsLocations: i
    }),
    children: _.intl.string(_.t.xUi3BA)
  })
}