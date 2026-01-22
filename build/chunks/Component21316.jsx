/** Chunk was on web.js **/
/** chunk id: 21316, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk197305 = require("./197305.js"),
  Chunk711014 = require("./711014.js"),
  Chunk686423 = require("./686423.jsx"),
  Chunk358172 = require("./358172.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk853762 = require("./853762.js");
let p = 3,
  _ = function(e) {
    let {
      canAddBoosts: t,
      canApplyBoosts: n
    } = e, _ = (0, a.bG)([o.A], () => o.A.affinities), h = (0, a.bG)([l.Ay], () => l.Ay.getFlattenedGuildIds()), m = i.useMemo(() => {
      let e = _.slice(0, p).map(e => e.guildId);
      for (let t = 0; t < h.length && !(e.length >= 3); t++) {
        let n = h[t];
        e.includes(n) || e.push(n)
      }
      return e
    }, [_, h]);
    return 0 === m.length ? null : (0, r.jsxs)("div", {
      className: f.iE,
      children: [t && (0, r.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        className: f.wx,
        children: d.intl.string(d.t.r90Wgo)
      }), m.map(e => (0, r.jsx)(u.A, {
        className: f.ZS,
        guildId: e,
        boostingVariant: true
      }, e)), h.length > p && n && (0, r.jsx)(c.A, {})]
    })
  }