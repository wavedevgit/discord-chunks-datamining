/** Chunk was on 76443 **/
/** chunk id: 288224, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => r
});
var Chunk73153 = require("./73153.js");

function r(e) {
  let {
    emojiId: t,
    userImage: n
  } = e;
  l.h.dispatch({
    type: "EMOJI_CACHE_RAW_EMOJI_ASSET",
    emojiId: t,
    userImage: n
  })
}