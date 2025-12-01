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
    let e = Chunk914010.Z.getGuildId(),
      t = Chunk944486.Z.getChannelId(module),
      n = Chunk592125.Z.getChannel(exports);
    if (null != exports && null != require && require.type === Chunk106351.d.GUILD_VOICE) return Chunk475179.Z.updateChatOpen(exports, !Chunk358221.Z.getChatOpen(exports)), false;
    if (null != exports && null != require && require.type === Chunk106351.d.DM) {
      let e = Chunk433355.ZP.getSection(exports, null == require ? true : require.isDM()),
        r = (0, Chunk687158.Of)(require.getRecipientId()),
        i = module === Chunk981631.ULH.PROFILE;
      return (0, Chunk221292.TY)({
        displayProfile: Chunk106351,
        isProfileOpen: !Chunk475179
      }), Chunk816782.Z.toggleUserProfileSidebarSection(), false
    }
    return Chunk816782.Z.toggleMembersSection(), false
  }
}