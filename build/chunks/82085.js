/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(703656),
  i = n(981631);
let o = {
  onOpenHubInvite(e) {
    let {
      guild: t
    } = e;
    null != t && (0, r.uL)(i.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, e.code))
  }
}