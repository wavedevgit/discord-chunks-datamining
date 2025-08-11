/** Chunk was on web.js **/
/** chunk id: 781792, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => l
}), require("./997841.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk962086 = require("./962086.js"),
  Chunk160404 = require("./160404.js"),
  Chunk981631 = require("./981631.js");

function l(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return a.Z.isFullServerPreview(e) ? void(0, o.aq)(e, {
    memberOptions: t
  }) : (i.Z.dispatch({
    type: "GUILD_MEMBER_UPDATE_LOCAL",
    guildId: e,
    roles: t.roles,
    flags: t.flags
  }), r.tn.patch({
    url: s.ANM.SET_GUILD_MEMBER(e),
    body: t,
    oldFormErrors: !!n || true,
    rejectWithError: false
  }))
}