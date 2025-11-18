/** Chunk was on 32923 **/
/** chunk id: 806774, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => i
});
var Chunk570140 = require("./570140.js");

function i(e) {
  let {
    emojiId: t,
    userImage: n
  } = e;
  r.Z.dispatch({
    type: "EMOJI_CACHE_RAW_EMOJI_ASSET",
    emojiId: t,
    userImage: n
  })
}