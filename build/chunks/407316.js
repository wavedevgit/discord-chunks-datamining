/** Chunk was on 2668 **/
/** chunk id: 407316, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => i
});
var Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function i(e) {
  let t = r.Z.getChannel(e),
    n = null == t ? true : t.isPrivate(),
    i = null == t ? true : t.isForumChannel();
  return n || l.Z.can(a.Plq.ATTACH_FILES, t) && l.Z.can(a.Plq.SEND_MESSAGES, t) && !i
}