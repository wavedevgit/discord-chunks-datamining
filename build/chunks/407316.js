/** Chunk was on web.js **/
/** chunk id: 407316, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => a
});
var Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  let t = r.Z.getChannel(e),
    n = null == t ? true : t.isPrivate(),
    a = null == t ? true : t.isForumChannel();
  return n || i.Z.can(o.Plq.ATTACH_FILES, t) && i.Z.can(o.Plq.SEND_MESSAGES, t) && !a
}