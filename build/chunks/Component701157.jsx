/** Chunk was on web.js **/
/** chunk id: 701157, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk165630 = require("./165630.js"),
  Chunk771845 = require("./771845.js"),
  Chunk11844 = require("./11844.jsx"),
  Chunk300037 = require("./300037.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk43658 = require("./43658.js");
let p = 3,
  _ = function(e) {
    let {
      canAddBoosts: t,
      canApplyBoosts: n
    } = e, _ = (0, a.e7)([s.Z], () => s.Z.affinities), h = (0, a.e7)([l.ZP], () => l.ZP.getFlattenedGuildIds()), m = i.useMemo(() => {
      let e = _.slice(0, p).map(e => e.guildId);
      for (let t = 0; t < h.length && !(e.length >= 3); t++) {
        let n = h[t];
        e.includes(n) || e.push(n)
      }
      return e
    }, [_, h]);
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
      }, e)), h.length > p && n && (0, r.jsx)(c.Z, {})]
    })
  }