/** Chunk was on 40556 **/
/** chunk id: 730906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk508675 = require("./508675.js"),
  Chunk7584 = require("./7584.js");

function u(e) {
  let {
    emojiId: t,
    emojiName: n
  } = e, l = (0, a.bG)([r.Ay], () => null != t ? r.Ay.getCustomEmojiById(t) : null);
  if (null != l || null != n)
    if (null == t) return i()(null != n, "emojiName must be defined if emojiId is not defined"), s.Ay.convertSurrogateToName(n, false);
    else return null == l ? true : l.name
}