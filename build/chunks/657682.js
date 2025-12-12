/** Chunk was on web.js **/
/** chunk id: 657682, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NF: () => d,
  Zy: () => u
}), require("./35282.js"), require("./388685.js"), require("./512722.js");
var Chunk626135 = require("./626135.js"),
  Chunk777754 = require("./777754.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let s = /^\d+$/,
  l = /^(.+?@.+?\..+?|.+?#\d{4})$/,
  c = /^[a-zA-Z0-9_\\.]+$/;

function u(e) {
  return c.test(e) || e.includes("#") && l.test(e) ? null : (f(e), a.intl.string(a.t.paDJBM))
}

function d(e, t) {
  switch (e) {
    case o.evJ.RELATIONSHIP_INCOMING_DISABLED:
      return a.intl.format(a.t.Oxe6Ur, {
        discordTag: t
      });
    case o.evJ.TOO_MANY_FRIENDS:
      return a.intl.string(a.t.tnBalD);
    case o.evJ.RELATIONSHIP_ALREADY_FRIENDS:
      return a.intl.string(a.t.VNLneq);
    case o.evJ.USER_QUARANTINED:
    case o.evJ.USER_FRIEND_REQUEST_LIMITED_ACCESS:
      return a.intl.string(a.t.EouHwv);
    case o.evJ.TOO_MANY_BLOCKED_USERS:
      return a.intl.string(a.t.sIGo1i);
    case o.evJ.TOO_MANY_PENDING_OUTGOING:
      return a.intl.string(a.t.k1K15p);
    case o.evJ.RELATIONSHIP_INCOMING_BLOCKED:
    case o.evJ.RELATIONSHIP_INVALID_SELF:
    case o.evJ.RELATIONSHIP_INVALUD_USER_BOT:
    case o.evJ.RELATIONSHIP_INVALID_DISCORD_TAG:
    default:
      return a.intl.string(a.t.paDJBM)
  }
}

function f(e) {
  let [t, n] = e.split("#");
  r.default.track(o.rMx.FRIEND_REQUEST_FAILED, {
    reason: "Invalid Username",
    query: e,
    discrim_len: (null != n ? n : "").length,
    username_len: t.length,
    is_email_like: i.Z.isEmail(e),
    is_invite_like: i.Z.isInvite(e),
    is_num_only: s.test(e)
  })
}