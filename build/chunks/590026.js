/** Chunk was on 5665 **/
/** chunk id: 590026, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk876215 = require("./876215.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk146282 = require("./146282.js"),
  Chunk442853 = require("./442853.js"),
  Chunk520951 = require("./520951.js"),
  Chunk567493 = require("./567493.js"),
  Chunk897674 = require("./897674.js"),
  Chunk206583 = require("./206583.js");
let h = new Set([Chunk876215.s.PLAYED_GAME, Chunk876215.s.WATCHED_MEDIA, Chunk876215.s.TOP_GAME, Chunk876215.s.TOP_ARTIST, Chunk876215.s.LISTENED_SESSION, Chunk876215.s.LAUNCHED_ACTIVITY]);

function f(e) {
  let t = (0, l.e7)([a.Z], () => a.Z.getChannel(e)),
    n = null == t ? true : t.guild_id,
    i = (0, d.Z)({
      id: p.YN.GLOBAL_FEED
    });
  i = (0, s.Z)({
    entries: i,
    channelId: e
  }), i = r.useMemo(() => null == i ? true : i.filter(e => h.has(e.content_type)), [i]);
  let {
    entries: f,
    filteredIds: m
  } = (0, c.Z)(i);
  i = f;
  let g = (0, u.im)(n);
  return i = r.useMemo(() => {
    if (null == i) return g;
    let e = new Set;
    for (let t of g) {
      let n = "".concat(t.author_id, ":").concat(t.extra.application_id);
      e.add(n)
    }
    return [...g, ...i.filter(t => {
      if ("application_id" in t.extra) {
        let n = "".concat(t.author_id, ":").concat(t.extra.application_id);
        return !e.has(n)
      }
      returntrue
    })]
  }, [i, g]), {
    requestId: (0, l.e7)([o.Z], () => o.Z.getFeedRequestId(p.YN.GLOBAL_FEED)),
    entries: i,
    impressionCappedEntryIds: m
  }
}