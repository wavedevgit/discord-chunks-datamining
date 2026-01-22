/** Chunk was on web.js **/
/** chunk id: 445077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => l
}), require("./938796.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk529942 = require("./529942.js"),
  Chunk164956 = require("./164956.js"),
  Chunk652215 = require("./652215.js");

function l(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return s.A.isFullServerPreview(e) ? void(0, a.Z$)(e, {
    memberOptions: t
  }) : (i.h.dispatch({
    type: "GUILD_MEMBER_UPDATE_LOCAL",
    guildId: e,
    roles: t.roles,
    flags: t.flags
  }), r.Bo.patch({
    url: o.Rsh.SET_GUILD_MEMBER(e),
    body: t,
    oldFormErrors: !!n || true,
    rejectWithError: false
  }))
}