/** Chunk was on 30202 **/
/** chunk id: 701157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk165630 = require("./165630.js"),
  Chunk771845 = require("./771845.js"),
  Chunk11844 = require("./11844.jsx"),
  Chunk300037 = require("./300037.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk567897 = require("./567897.js");
let p = function(e) {
  let {
    canAddBoosts: t,
    canApplyBoosts: n
  } = e, p = (0, s.e7)([l.Z], () => l.Z.affinities), g = (0, s.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds()), h = r.useMemo(() => {
    let e = p.slice(0, 3).map(e => e.guildId);
    for (let t = 0; t < g.length && !(e.length >= 3); t++) {
      let n = g[t];
      e.includes(n) || e.push(n)
    }
    return e
  }, [p, g]);
  return 0 === h.length ? null : (0, i.jsxs)("div", {
    className: m.wrapper,
    children: [t && (0, i.jsx)(a.X6q, {
      variant: "heading-lg/semibold",
      className: m.header,
      children: u.intl.string(u.t.r90Wgo)
    }), h.map(e => (0, i.jsx)(d.Z, {
      className: m.recommendedServerCard,
      guildId: e,
      boostingVariant: true
    }, e)), g.length > 3 && n && (0, i.jsx)(c.Z, {})]
  })
}