/** Chunk was on 11814 (5b4cc71a9b5101b0.js) **/
n.d(t, {
  M: () => o
}), n(47120);
var r = n(876215),
  i = n(911969);
let a = new Set([r.s.TOP_ARTIST, r.s.TOP_GAME, r.s.PLAYED_GAME, r.s.WATCHED_MEDIA, r.s.LISTENED_SESSION, r.s.LAUNCHED_ACTIVITY]);

function o(e) {
  var t;
  let n = (null !== (t = e.components) && void 0 !== t ? t : []).filter(e => e.type === i.re.CONTENT_INVENTORY_ENTRY);
  return 0 === n.length || n.some(e => {
    let {
      contentInventoryEntry: t
    } = e;
    return !a.has(t.content_type)
  })
}