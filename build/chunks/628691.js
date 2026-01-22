/** Chunk was on web.js **/
/** chunk id: 628691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AR: () => f,
  UN: () => c,
  ul: () => u
});
var Chunk734057 = require("./734057.js"),
  Chunk498642 = require("./498642.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");
let l = 50;

function c(e) {
  if (null == e) returnfalse;
  let t = e.id,
    n = s.default.getCurrentUser();
  return null != n && n.id !== t && true !== e.system
}

function u(e) {
  return null != e && c(e.author)
}

function d(e) {
  let t = r.A.getChannel(e);
  if (null == t) returnfalse;
  if (t.type === o.rbe.DM || t.type === o.rbe.GROUP_DM) returntrue;
  if (a.A.canWithPartialContext(o.xBc.MANAGE_MESSAGES, {
      channelId: e
    })) {
    let e = i.A.getMemberCount(t.getGuildId());
    return null != e && e >= l
  }
  returnfalse
}

function f(e) {
  return null != e && u(e) && d(e.getChannelId())
}