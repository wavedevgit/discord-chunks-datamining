/** Chunk was on web.js **/
/** chunk id: 590026, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk876215 = require("./876215.js"),
  Chunk442837 = require("./442837.js"),
  Chunk146282 = require("./146282.js"),
  Chunk442853 = require("./442853.js"),
  Chunk520951 = require("./520951.js"),
  Chunk897674 = require("./897674.js"),
  Chunk206583 = require("./206583.js");
let d = new Set([Chunk876215.s.PLAYED_GAME, Chunk876215.s.WATCHED_MEDIA, Chunk876215.s.TOP_GAME, Chunk876215.s.TOP_ARTIST, Chunk876215.s.LISTENED_SESSION, Chunk876215.s.LAUNCHED_ACTIVITY]);

function f(e) {
  let t = (0, c.Z)({
    id: u.YN.GLOBAL_FEED
  });
  t = (0, s.Z)({
    entries: t,
    channelId: e
  }), t = r.useMemo(() => null == t ? true : t.filter(e => d.has(e.content_type)), [t]);
  let {
    entries: n,
    filteredIds: i
  } = (0, l.Z)(t);
  return t = n, {
    requestId: (0, a.e7)([o.Z], () => o.Z.getFeedRequestId(u.YN.GLOBAL_FEED)),
    entries: t,
    impressionCappedEntryIds: i
  }
}