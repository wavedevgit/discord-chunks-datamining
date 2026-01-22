/** Chunk was on web.js **/
/** chunk id: 90804, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./65821.js");
var Chunk717125 = require("./717125.js"),
  Chunk262763 = require("./262763.jsx"),
  Chunk721592 = require("./721592.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk977997 = require("./977997.js");
let u = 1e4;
class d extends Error {}
async function f(e) {
  let {
    channelId: t,
    timeoutMs: n = u,
    bypassChangeModal: f = false
  } = e, p = s.A.getChannel(t);
  if (null == p || !await i.A.handleVoiceConnect({
      bypassGuildIdCheck: true,
      bypassChangeModal: f,
      channel: p,
      connected: c.A.isInChannel(t),
      needSubscriptionToAccess: (0, a.p)(t, s.A, r.A, o.A).needSubscriptionToAccess
    })) returnfalse;
  let _ = new Promise((e, r) => {
    let i = setTimeout(() => {
      r(new d("Joining voice channel has timed out."))
    }, n);
    l.A.addConditionalChangeListener(() => l.A.getVoiceChannelId() !== t || (clearTimeout(i), e(), false))
  });
  try {
    await _
  } catch (e) {
    if (e instanceof d) returnfalse;
    throw e
  }
  returntrue
}