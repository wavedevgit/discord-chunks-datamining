/** Chunk was on 84239 **/
/** chunk id: 838433, original params: e,t,u (module,exports,require) **/
require.r(exports), require.d(exports, {
  openGuildProductLink: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk336197 = require("./336197.js"),
  Chunk430824 = require("./430824.js"),
  Chunk240864 = require("./240864.js"),
  Chunk981631 = require("./981631.js");

function d(e, t) {
  var d;
  let a = i.Z.getGuild(e);
  c.Z.getGuildProductFetchState(t) === c.M.FETCHED && (null == (d = c.Z.getGuildProduct(t)) ? true : d.published) !== true && null != a ? (0, r.ZDy)(async () => {
    let {
      default: e
    } = await u.e("29396").then(u.bind(u, 513239));
    return t => (0, n.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var u = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(u);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(u).filter(function(e) {
          return Object.getOwnPropertyDescriptor(u, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = u[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, t))
  }) : (null == a ? true : a.features.has(o.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) ? (0, l.Z)(o.Z5c.GUILD_PRODUCT(e, t)) : (0, l.Z)(o.Z5c.CHANNEL(e))
}