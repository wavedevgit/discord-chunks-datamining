/** Chunk was on 11814 (fd05d34d70cdbd56.js) **/
n.d(t, {
  Z: () => r
});

function r(e) {
  let t = 0;
  return "" !== e.content && t++, null != e.activity && t++, (e.stickers.length > 0 || e.stickerItems.length > 0) && t++, e.components.length > 0 && t++, e.messageSnapshots.length > 0 && t++, null != e.poll && t++, t
}