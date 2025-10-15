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
  return c.test(e) || e.includes("#") && l.test(e) ? null : (f(e), o.intl.string(o.t.paDJBM))
}

function d(e, t) {
  switch (e) {
    case a.evJ.RELATIONSHIP_INCOMING_DISABLED:
      return o.intl.format(o.t.Oxe6Ur, {
        discordTag: t
      });
    case a.evJ.TOO_MANY_FRIENDS:
      return o.intl.string(o.t.tnBalD);
    case a.evJ.RELATIONSHIP_ALREADY_FRIENDS:
      return o.intl.string(o.t.VNLneq);
    case a.evJ.USER_QUARANTINED:
    case a.evJ.USER_FRIEND_REQUEST_LIMITED_ACCESS:
      return o.intl.string(o.t.EouHwv);
    case a.evJ.TOO_MANY_BLOCKED_USERS:
      return o.intl.string(o.t.sIGo1i);
    case a.evJ.TOO_MANY_PENDING_OUTGOING:
      return o.intl.string(o.t.k1K15p);
    case a.evJ.RELATIONSHIP_INCOMING_BLOCKED:
    case a.evJ.RELATIONSHIP_INVALID_SELF:
    case a.evJ.RELATIONSHIP_INVALUD_USER_BOT:
    case a.evJ.RELATIONSHIP_INVALID_DISCORD_TAG:
    default:
      return o.intl.string(o.t.paDJBM)
  }
}

function f(e) {
  let [t, n] = e.split("#");
  r.default.track(a.rMx.FRIEND_REQUEST_FAILED, {
    reason: "Invalid Username",
    query: e,
    discrim_len: (null != n ? n : "").length,
    username_len: t.length,
    is_email_like: i.Z.isEmail(e),
    is_invite_like: i.Z.isInvite(e),
    is_num_only: s.test(e)
  })
}