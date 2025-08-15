/** Chunk was on 86357 **/
/** chunk id: 590026, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk876215 = require("./876215.js"),
  Chunk442837 = require("./442837.js"),
  Chunk676316 = require("./676316.js"),
  Chunk592125 = require("./592125.js"),
  Chunk146282 = require("./146282.js"),
  Chunk442853 = require("./442853.js"),
  Chunk520951 = require("./520951.js"),
  Chunk567493 = require("./567493.js"),
  Chunk897674 = require("./897674.js"),
  Chunk206583 = require("./206583.js");
let f = new Set([Chunk876215.s.PLAYED_GAME, Chunk876215.s.WATCHED_MEDIA, Chunk876215.s.TOP_GAME, Chunk876215.s.TOP_ARTIST, Chunk876215.s.LISTENED_SESSION, Chunk876215.s.LAUNCHED_ACTIVITY]);

function m(e) {
  let t = (0, l.e7)([o.Z], () => o.Z.getChannel(e)),
    n = null == t ? true : t.guild_id,
    i = (0, p.Z)({
      id: h.YN.GLOBAL_FEED
    });
  i = (0, c.Z)({
    entries: i,
    channelId: e
  }), i = r.useMemo(() => null == i ? true : i.filter(e => f.has(e.content_type)), [i]);
  let {
    entries: m,
    filteredIds: g
  } = (0, u.Z)(i);
  i = m;
  let b = (0, d.im)(n);
  i = r.useMemo(() => {
    if (null == i) return b;
    let e = new Set;
    for (let t of b) {
      let n = "".concat(t.author_id, ":").concat(t.extra.application_id);
      e.add(n)
    }
    return [...b, ...i.filter(t => {
      if ("application_id" in t.extra) {
        let n = "".concat(t.author_id, ":").concat(t.extra.application_id);
        return !e.has(n)
      }
      returntrue
    })]
  }, [i, b]);
  let {
    entriesWithLeaderboard: y,
    hasLeaderboardEntry: _
  } = (0, a.Z)({
    entries: i,
    channelId: e
  });
  return i = y, {
    requestId: (0, l.e7)([s.Z], () => s.Z.getFeedRequestId(h.YN.GLOBAL_FEED)),
    entries: i,
    impressionCappedEntryIds: g,
    hasLeaderboardEntry: _
  }
}