/** Chunk was on web.js **/
/** chunk id: 188737, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk681154 = require("./681154.js"),
  Chunk311907 = require("./311907.js"),
  Chunk99753 = require("./99753.js"),
  Chunk903790 = require("./903790.js"),
  Chunk929509 = require("./929509.js"),
  Chunk475450 = require("./475450.js"),
  Chunk424994 = require("./424994.js");
let d = new Set([Chunk681154.I.PLAYED_GAME, Chunk681154.I.WATCHED_MEDIA, Chunk681154.I.TOP_GAME, Chunk681154.I.TOP_ARTIST, Chunk681154.I.LISTENED_SESSION, Chunk681154.I.LAUNCHED_ACTIVITY]);

function f(e) {
  let t = (0, c.A)({
    id: u.X1.GLOBAL_FEED
  });
  t = (0, o.A)({
    entries: t,
    channelId: e
  }), t = r.useMemo(() => null == t ? true : t.filter(e => d.has(e.content_type)), [t]);
  let {
    entries: n,
    filteredIds: i
  } = (0, l.A)(t);
  return t = n, {
    requestId: (0, a.bG)([s.A], () => s.A.getFeedRequestId(u.X1.GLOBAL_FEED)),
    entries: t,
    impressionCappedEntryIds: i
  }
}