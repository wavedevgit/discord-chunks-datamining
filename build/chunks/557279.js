/** Chunk was on web.js **/
/** chunk id: 557279, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Di: () => c,
  S: () => u,
  gz: () => l
});
var Chunk617617 = require("./617617.js"),
  Chunk287809 = require("./287809.js"),
  Chunk349435 = require("./349435.js"),
  Chunk665909 = require("./665909.js");

function o(e) {
  return a.Ay.getChannelSafetyWarnings(e).filter(e => e.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_1)
}

function l() {
  var e, t, n, a;
  let o = (null == (t = i.default.getCurrentUser()) ? true : t.isStaff()) === true,
    l = null == (e = null == (a = r.A.settings.privacy) || null == (n = a.inappropriateConversationWarnings) ? true : n.value) || e;
  return ((0, s.Wu)() || o) && l
}

function c(e) {
  let t = o(e);
  if (t.filter(e => null != e.dismiss_timestamp).length > 0) return null;
  let n = t.filter(e => null == e.dismiss_timestamp);
  return 1 === n.length ? n[0] : null
}

function u(e) {
  let t = e.filter(e => e.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_1);
  return t.length > 0 && t.every(e => null == e.dismiss_timestamp)
}