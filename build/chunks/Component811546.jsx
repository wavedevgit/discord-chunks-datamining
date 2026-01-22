/** Chunk was on 49607 **/
/** chunk id: 811546, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  openGuildProductLink: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk22007 = require("./22007.js"),
  Chunk71393 = require("./71393.js"),
  Chunk871109 = require("./871109.js"),
  Chunk652215 = require("./652215.js");

function o(e, t) {
  var o;
  let d = l.A.getGuild(e);
  a.A.getGuildProductFetchState(t) === a.e.FETCHED && (null == (o = a.A.getGuildProduct(t)) ? true : o.published) !== true && null != d ? (0, u.mMO)(async () => {
    let {
      default: e
    } = await r.e("57968").then(r.bind(r, 558067));
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
  }) : (null == d ? true : d.features.has(c.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) ? (0, i.A)(c.BVt.GUILD_PRODUCT(e, t)) : (0, i.A)(c.BVt.CHANNEL(e))
}