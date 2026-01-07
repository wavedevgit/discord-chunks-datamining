/** Chunk was on web.js **/
/** chunk id: 997292, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => _
});
var Chunk106351 = require("./106351.js"),
  Chunk475179 = require("./475179.js"),
  Chunk816782 = require("./816782.js"),
  Chunk358221 = require("./358221.js"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js");
let _ = {
  binds: ["mod+u"],
  comboKeysBindGlobal: true,
  action() {
    let e = f.Z.getGuildId(),
      t = d.Z.getChannelId(e),
      n = u.Z.getChannel(t);
    if (null != t && null != n && n.type === r.d.GUILD_VOICE) return i.Z.updateChatOpen(t, !o.Z.getChatOpen(t)), false;
    if (null != t && null != n && n.type === r.d.DM) {
      let e = c.ZP.getSection(t, null == n ? true : n.isDM()),
        r = (0, l.Of)(n.getRecipientId()),
        i = e === p.ULH.PROFILE;
      return (0, s.TY)({
        displayProfile: r,
        isProfileOpen: !i
      }), a.Z.toggleUserProfileSidebarSection(), false
    }
    return a.Z.toggleMembersSection(), false
  }
}