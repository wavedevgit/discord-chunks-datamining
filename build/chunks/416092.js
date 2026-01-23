/** Chunk was on web.js **/
/** chunk id: 416092, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => _
});
var Chunk478437 = require("./478437.js"),
  Chunk367513 = require("./367513.js"),
  Chunk604681 = require("./604681.js"),
  Chunk313961 = require("./313961.js"),
  Chunk672385 = require("./672385.js"),
  Chunk950191 = require("./950191.js"),
  Chunk761640 = require("./761640.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk652215 = require("./652215.js");
let _ = {
  binds: ["mod+u"],
  comboKeysBindGlobal: true,
  action() {
    let e = f.A.getGuildId(),
      t = d.A.getChannelId(e),
      n = u.A.getChannel(t);
    if (null != t && null != n && n.type === r.r.GUILD_VOICE) return i.A.updateChatOpen(t, !s.A.getChatOpen(t), "toggle users keybind"), false;
    if (null != t && null != n && n.type === r.r.DM) {
      let e = c.Ay.getSection(t, null == n ? true : n.isDM()),
        r = (0, l.AP)(n.getRecipientId()),
        i = e === p.YvQ.PROFILE;
      return (0, o.am)({
        displayProfile: r,
        isProfileOpen: !i
      }), a.A.toggleUserProfileSidebarSection(), false
    }
    return a.A.toggleMembersSection(), false
  }
}