/** Chunk was on web.js **/
/** chunk id: 407316, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => o
});
var Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  let t = r.Z.getChannel(e),
    n = null == t ? true : t.isPrivate(),
    o = null == t ? true : t.isForumChannel();
  return n || i.Z.can(a.Plq.ATTACH_FILES, t) && i.Z.can(a.Plq.SEND_MESSAGES, t) && !o
}