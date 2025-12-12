/** Chunk was on web.js **/
/** chunk id: 187506, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => o
}), require("./388685.js");
var Chunk876215 = require("./876215.js"),
  Chunk911969 = require("./911969.js");
let a = new Set([Chunk876215.s.TOP_ARTIST, Chunk876215.s.TOP_GAME, Chunk876215.s.PLAYED_GAME, Chunk876215.s.WATCHED_MEDIA, Chunk876215.s.LISTENED_SESSION, Chunk876215.s.LAUNCHED_ACTIVITY]);

function o(e) {
  var t;
  let n = (null != (t = e.components) ? t : []).filter(e => e.type === i.re.CONTENT_INVENTORY_ENTRY);
  return 0 === n.length || n.some(e => {
    let {
      contentInventoryEntry: t
    } = e;
    return !a.has(t.content_type)
  })
}