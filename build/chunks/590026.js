/** Chunk was on 91053 **/
/** chunk id: 590026, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk876215 = require("./876215.js"),
  Chunk442837 = require("./442837.js"),
  Chunk146282 = require("./146282.js"),
  Chunk442853 = require("./442853.js"),
  Chunk520951 = require("./520951.js"),
  Chunk897674 = require("./897674.js"),
  Chunk206583 = require("./206583.js");
let u = new Set([Chunk876215.s.PLAYED_GAME, Chunk876215.s.WATCHED_MEDIA, Chunk876215.s.TOP_GAME, Chunk876215.s.TOP_ARTIST, Chunk876215.s.LISTENED_SESSION, Chunk876215.s.LAUNCHED_ACTIVITY]);

function p(e) {
  let t = (0, c.Z)({
    id: d.YN.GLOBAL_FEED
  });
  t = (0, s.Z)({
    entries: t,
    channelId: e
  }), t = r.useMemo(() => null == t ? true : t.filter(e => u.has(e.content_type)), [t]);
  let {
    entries: n,
    filteredIds: i
  } = (0, o.Z)(t);
  return t = n, {
    requestId: (0, l.e7)([a.Z], () => a.Z.getFeedRequestId(d.YN.GLOBAL_FEED)),
    entries: t,
    impressionCappedEntryIds: i
  }
}