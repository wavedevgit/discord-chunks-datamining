/** Chunk was on 11814 (3b351e4cb7c7b881.js) **/
n.d(t, {
  Z: () => r
});

function r(e) {
  let t = 0;
  return "" !== e.content && t++, null != e.activity && t++, (e.stickers.length > 0 || e.stickerItems.length > 0) && t++, e.components.length > 0 && t++, e.messageSnapshots.length > 0 && t++, null != e.poll && t++, t
}