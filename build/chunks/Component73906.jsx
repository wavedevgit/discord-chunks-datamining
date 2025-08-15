/** Chunk was on 27978 **/
/** chunk id: 73906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./35282.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk3570 = require("./3570.js"),
  Chunk685311 = require("./685311.jsx"),
  Chunk186901 = require("./186901.js");
let s = function(e) {
  let {
    match: t,
    location: n
  } = e, s = async (e, t) => {
    await (0, i.s)(a.jE.CHANNEL, {
      guildId: e.params.guildId,
      channelId: e.params.channelId,
      messageId: e.params.messageId,
      search: t.search
    })
  };
  return (0, r.jsx)(l.Z, {
    match: t,
    location: n,
    attemptDeepLink: s
  })
}