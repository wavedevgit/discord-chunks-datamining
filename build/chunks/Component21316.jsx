/** Chunk was on 60667 **/
/** chunk id: 21316, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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
let p = function(e) {
  let {
    canAddBoosts: t,
    canApplyBoosts: n
  } = e, p = (0, l.bG)([a.A], () => a.A.affinities), m = (0, l.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()), g = i.useMemo(() => {
    let e = p.slice(0, 3).map(e => e.guildId);
    for (let t = 0; t < m.length && !(e.length >= 3); t++) {
      let n = m[t];
      e.includes(n) || e.push(n)
    }
    return e
  }, [p, m]);
  return 0 === g.length ? null : (0, r.jsxs)("div", {
    className: _.iE,
    children: [t && (0, r.jsx)(s.Heading, {
      variant: "heading-lg/semibold",
      className: _.wx,
      children: u.intl.string(u.t.r90Wgo)
    }), g.map(e => (0, r.jsx)(d.A, {
      className: _.ZS,
      guildId: e,
      boostingVariant: true
    }, e)), m.length > 3 && n && (0, r.jsx)(c.A, {})]
  })
}