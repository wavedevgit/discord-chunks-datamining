/** Chunk was on web.js **/
/** chunk id: 205184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk681154 = require("./681154.js"),
  Chunk475450 = require("./475450.js"),
  Chunk661191 = require("./661191.js"),
  Chunk424994 = require("./424994.js");
let u = new Set([Chunk681154.ContentInventoryEntryType.PLAYED_GAME, Chunk681154.ContentInventoryEntryType.LAUNCHED_ACTIVITY]),
  d = e => u.has(e.content_type);

function f(e) {
  let t = (0, o.A)({
      id: c.X1.GLOBAL_FEED
    }),
    n = (0, o.A)({
      id: c.X1.GLOBAL_FEED,
      unrankedEntries: true
    });
  return r.useMemo(() => a()(n).unionBy(t, e => e.id).filter(d).filter(t => t.extra.application_id === e).orderBy(e => l.default.extractTimestamp(e.id), "desc").uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id).value(), [n, e, t])
}