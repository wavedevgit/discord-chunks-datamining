/** Chunk was on 57478 **/
/** chunk id: 407316, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => i
});
var Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function i(e) {
  let t = l.Z.getChannel(e),
    n = null == t ? true : t.isPrivate(),
    i = null == t ? true : t.isForumChannel();
  return n || a.Z.can(r.Plq.ATTACH_FILES, t) && a.Z.can(r.Plq.SEND_MESSAGES, t) && !i
}