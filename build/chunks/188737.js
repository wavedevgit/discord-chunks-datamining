/** Chunk was on web.js **/
/** chunk id: 188737, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk681154 = require("./681154.js"),
  Chunk311907 = require("./311907.js"),
  Chunk941726 = require("./941726.jsx"),
  Chunk99753 = require("./99753.js"),
  Chunk903790 = require("./903790.js"),
  Chunk929509 = require("./929509.js"),
  Chunk475450 = require("./475450.js"),
  Chunk424994 = require("./424994.js");
let f = new Set([Chunk681154.ContentInventoryEntryType.PLAYED_GAME, Chunk681154.ContentInventoryEntryType.WATCHED_MEDIA, Chunk681154.ContentInventoryEntryType.TOP_GAME, Chunk681154.ContentInventoryEntryType.TOP_ARTIST, Chunk681154.ContentInventoryEntryType.LISTENED_SESSION, Chunk681154.ContentInventoryEntryType.LAUNCHED_ACTIVITY]);

function p(e) {
  let t = (0, u.A)({
    id: d.X1.GLOBAL_FEED
  });
  t = (0, l.A)({
    entries: t,
    channelId: e
  }), t = r.useMemo(() => null == t ? true : t.filter(e => f.has(e.content_type)), [t]);
  let {
    entries: n,
    filteredIds: i
  } = (0, c.A)(t);
  return t = n, {
    requestId: (0, a.bG)([o.A], () => o.A.getFeedRequestId(d.X1.GLOBAL_FEED)),
    entries: t = (0, s.Ay)(t),
    impressionCappedEntryIds: i
  }
}