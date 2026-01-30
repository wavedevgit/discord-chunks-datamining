/** Chunk was on 64935 **/
/** chunk id: 118331, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => a
}), require("./896048.js");
var Chunk681154 = require("./681154.js"),
  Chunk155718 = require("./155718.js");
let l = new Set([Chunk681154.ContentInventoryEntryType.TOP_ARTIST, Chunk681154.ContentInventoryEntryType.TOP_GAME, Chunk681154.ContentInventoryEntryType.PLAYED_GAME, Chunk681154.ContentInventoryEntryType.WATCHED_MEDIA, Chunk681154.ContentInventoryEntryType.LISTENED_SESSION, Chunk681154.ContentInventoryEntryType.LAUNCHED_ACTIVITY]);

function a(e) {
  var t;
  let n = (null != (t = e.components) ? t : []).filter(e => e.type === i.I5.CONTENT_INVENTORY_ENTRY);
  return 0 === n.length || n.some(e => {
    let {
      contentInventoryEntry: t
    } = e;
    return !l.has(t.content_type)
  })
}