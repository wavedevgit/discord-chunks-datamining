/** Chunk was on web.js **/
/** chunk id: 620212, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => s
});
var Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let s = {
  binds: ["mod+shift+u"],
  comboKeysBindGlobal: true,
  action() {
    let e = r.Z.getChannel(i.Z.getChannelId());
    return null == e || e.isManaged() || a.S.dispatch(o.CkL.UPLOAD_FILE, {
      channelId: e.id
    }), false
  }
}