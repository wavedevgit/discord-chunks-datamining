/** Chunk was on web.js **/
/** chunk id: 705371, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => d
});
var Chunk904245 = require("./904245.js"),
  Chunk181945 = require("./181945.js"),
  Chunk888369 = require("./888369.js"),
  Chunk375954 = require("./375954.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let d = {
  binds: ["shift+esc"],
  comboKeysBindGlobal: true,
  action() {
    let e = l.Z.getGuildId();
    if (null == e || !a.default.getGuildHasUnreadIgnoreMuted(e)) return;
    (0, i.Z)([e]);
    let t = s.Z.getChannelId(e);
    null != t && (o.Z.getMessages(t).hasMoreAfter ? r.Z.jumpToPresent(t, u.AQB) : c.S.dispatch(u.CkL.SCROLLTO_PRESENT))
  }
}