/** Chunk was on web.js **/
/** chunk id: 869938, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let t = 0;
  return "" !== e.content && t++, null != e.activity && t++, (e.stickers.length > 0 || e.stickerItems.length > 0) && t++, e.components.length > 0 && t++, e.messageSnapshots.length > 0 && t++, null != e.poll && t++, t
}
require.d(exports, {
  A: () => r
})