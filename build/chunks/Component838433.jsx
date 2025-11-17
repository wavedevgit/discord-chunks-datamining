/** Chunk was on 84239 **/
/** chunk id: 838433, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  openGuildProductLink: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk336197 = require("./336197.js"),
  Chunk430824 = require("./430824.js"),
  Chunk240864 = require("./240864.js"),
  Chunk981631 = require("./981631.js");

function a(e, t) {
  var a;
  let d = i.Z.getGuild(e);
  l.Z.getGuildProductFetchState(t) === l.M.FETCHED && (null == (a = l.Z.getGuildProduct(t)) ? true : a.published) !== true && null != d ? (0, u.ZDy)(async () => {
    let {
      default: e
    } = await r.e("29396").then(r.bind(r, 513239));
    return t => (0, n.jsx)(e, function(e) {
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
    }({}, t))
  }) : (null == d ? true : d.features.has(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) ? (0, c.Z)(o.Z5c.GUILD_PRODUCT(e, t)) : (0, c.Z)(o.Z5c.CHANNEL(e))
}