/** Chunk was on 37447 **/
/** chunk id: 2660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk204418 = require("./204418.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk113434 = require("./113434.js"),
  Chunk182294 = require("./182294.js"),
  Chunk522226 = require("./522226.js");
let d = e => {
    let {
      questConfig: t,
      fallback: n,
      isFocused: d
    } = e, m = (0, s.e7)([a.default], () => a.default.getCurrentUser()), {
      avatarDecoration: p,
      isFetching: g
    } = (0, l.DU)(t);
    return g ? (0, r.jsx)("div", {
      className: u.questsCollectibleReward,
      children: (0, r.jsx)(o.$jN, {})
    }) : null == m || null == p ? n : (0, r.jsx)("div", {
      className: u.questsCollectibleReward,
      children: (0, r.jsx)(i.Z, {
        avatarSize: c.EF.SIZE_56,
        user: m,
        guildId: null,
        avatarDecorationOverride: p,
        animateOnHover: !d
      })
    })
  },
  m = e => (0, r.jsx)(d, function(e) {
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
  }({}, e))