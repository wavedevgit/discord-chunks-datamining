/** Chunk was on web.js **/
/** chunk id: 701157, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
let _ = 3,
  p = function(e) {
    let {
      canAddBoosts: t,
      canApplyBoosts: n
    } = e, p = (0, a.e7)([s.Z], () => s.Z.affinities), h = (0, a.e7)([l.ZP], () => l.ZP.getFlattenedGuildIds()), m = i.useMemo(() => {
      let e = p.slice(0, _).map(e => e.guildId);
      for (let t = 0; t < h.length && !(e.length >= 3); t++) {
        let n = h[t];
        e.includes(n) || e.push(n)
      }
      return e
    }, [p, h]);
    return 0 === m.length ? null : (0, r.jsxs)("div", {
      className: f.wrapper,
      children: [t && (0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        className: f.header,
        children: d.intl.string(d.t.r90Wgo)
      }), m.map(e => (0, r.jsx)(u.Z, {
        className: f.recommendedServerCard,
        guildId: e,
        boostingVariant: true
      }, e)), h.length > _ && n && (0, r.jsx)(c.Z, {})]
    })
  }