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
    let e = Chunk592125.Z.getChannel(Chunk944486.Z.getChannelId());
    return null == module || module.isManaged() || Chunk585483.S.dispatch(Chunk981631.CkL.UPLOAD_FILE, {
      channelId: module.id
    }), false
  }
}