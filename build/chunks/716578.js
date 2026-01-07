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
  return a.ZP.getChannelSafetyWarnings(e).filter(e => e.type === a.pj.INAPPROPRIATE_CONVERSATION_TIER_1)
}

function l() {
  var e, t, n, a;
  let s = (null == (e = i.default.getCurrentUser()) ? true : e.isStaff()) === true,
    l = null == (a = null == (n = r.Z.settings.privacy) || null == (t = n.inappropriateConversationWarnings) ? true : t.value) || a;
  return ((0, o.Lm)() || s) && l
}

function c(e) {
  let t = s(e);
  if (t.filter(e => null != e.dismiss_timestamp).length > 0) return null;
  let n = t.filter(e => null == e.dismiss_timestamp);
  return 1 === n.length ? n[0] : null
}

function u(e) {
  let t = e.filter(e => e.type === a.pj.INAPPROPRIATE_CONVERSATION_TIER_1);
  return t.length > 0 && t.every(e => null == e.dismiss_timestamp)
}