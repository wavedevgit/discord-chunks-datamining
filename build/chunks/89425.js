/** Chunk was on web.js **/
/** chunk id: 89425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./415506.js");
var Chunk430198 = require("./430198.js"),
  Chunk557135 = require("./557135.jsx"),
  Chunk66999 = require("./66999.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js");
let u = 1e4;
class d extends Error {}
async function f(e) {
  let {
    channelId: t,
    timeoutMs: n = u,
    bypassChangeModal: f = false
  } = e, p = o.Z.getChannel(t);
  if (null == p || !await i.Z.handleVoiceConnect({
      bypassGuildIdCheck: true,
      bypassChangeModal: f,
      channel: p,
      connected: c.Z.isInChannel(t),
      needSubscriptionToAccess: (0, a.$)(t, o.Z, r.Z, s.Z).needSubscriptionToAccess
    })) returnfalse;
  let _ = new Promise((e, r) => {
    let i = setTimeout(() => {
      r(new d("Joining voice channel has timed out."))
    }, n);
    l.Z.addConditionalChangeListener(() => l.Z.getVoiceChannelId() !== t || (clearTimeout(i), e(), false))
  });
  try {
    await _
  } catch (e) {
    if (e instanceof d) returnfalse;
    throw e
  }
  returntrue
}