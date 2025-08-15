/** Chunk was on 89311 **/
/** chunk id: 567409, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  N: () => m
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk876215 = require("./876215.js"),
  Chunk897674 = require("./897674.js"),
  Chunk709054 = require("./709054.js"),
  Chunk206583 = require("./206583.js");
let u = new Set([Chunk876215.s.PLAYED_GAME, Chunk876215.s.LAUNCHED_ACTIVITY]),
  d = e => u.has(e.content_type);

function m(e) {
  let t = (0, o.Z)({
      id: c.YN.GLOBAL_FEED
    }),
    r = (0, o.Z)({
      id: c.YN.GLOBAL_FEED,
      unrankedEntries: true
    });
  return n.useMemo(() => i()(r).unionBy(t, e => e.id).filter(d).filter(t => t.extra.application_id === e).orderBy(e => s.default.extractTimestamp(e.id), "desc").uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id).value(), [r, e, t])
}