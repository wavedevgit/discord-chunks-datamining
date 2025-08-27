/** Chunk was on web.js **/
/** chunk id: 82085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js");
let a = {
  onOpenHubInvite(e) {
    let {
      guild: t
    } = e;
    null != t && (0, r.uL)(i.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, e.code))
  }
}