/** Chunk was on 2262 **/
/** chunk id: 806774, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => r
});
var Chunk570140 = require("./570140.js");

function r(e) {
  let {
    emojiId: t,
    userImage: n
  } = e;
  l.Z.dispatch({
    type: "EMOJI_CACHE_RAW_EMOJI_ASSET",
    emojiId: t,
    userImage: n
  })
}