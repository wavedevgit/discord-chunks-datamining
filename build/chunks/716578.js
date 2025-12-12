/** Chunk was on web.js **/
/** chunk id: 716578, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  dg: () => l,
  tX: () => u,
  uu: () => c
});
var Chunk581883 = require("./581883.js"),
  Chunk594174 = require("./594174.js"),
  Chunk359119 = require("./359119.js"),
  Chunk473092 = require("./473092.js");

function s(e) {
  return o.ZP.getChannelSafetyWarnings(e).filter(e => e.type === o.pj.INAPPROPRIATE_CONVERSATION_TIER_1)
}

function l() {
  var e, t, n, o;
  let s = (null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) === true,
    l = null == (o = null == (n = Chunk581883.Z.settings.privacy) || null == (t = require.inappropriateConversationWarnings) ? true : exports.value) || Chunk359119;
  return ((0, Chunk473092.Lm)() || s) && l
}

function c(e) {
  let t = s(e);
  if (t.filter(e => null != e.dismiss_timestamp).length > 0) return null;
  let n = t.filter(e => null == e.dismiss_timestamp);
  return 1 === n.length ? n[0] : null
}

function u(e) {
  let t = e.filter(e => e.type === o.pj.INAPPROPRIATE_CONVERSATION_TIER_1);
  return t.length > 0 && t.every(e => null == e.dismiss_timestamp)
}