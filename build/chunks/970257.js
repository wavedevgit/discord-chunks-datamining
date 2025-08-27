/** Chunk was on web.js **/
/** chunk id: 970257, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fi: () => c,
  a4: () => u,
  vc: () => f
});
var Chunk592125 = require("./592125.js"),
  Chunk650774 = require("./650774.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");
let l = 50;

function c(e) {
  if (null == e) returnfalse;
  let t = e.id,
    n = o.default.getCurrentUser();
  return null != n && n.id !== t && true !== e.system
}

function u(e) {
  return null != e && c(e.author)
}

function d(e) {
  let t = r.Z.getChannel(e);
  if (null == t) returnfalse;
  if (t.type === s.d4z.DM || t.type === s.d4z.GROUP_DM) returntrue;
  if (a.Z.canWithPartialContext(s.Plq.MANAGE_MESSAGES, {
      channelId: e
    })) {
    let e = i.Z.getMemberCount(t.getGuildId());
    return null != e && e >= l
  }
  returnfalse
}

function f(e) {
  return null != e && u(e) && d(e.getChannelId())
}