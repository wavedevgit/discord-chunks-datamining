/** Chunk was on web.js **/
/** chunk id: 242874, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UN: () => f,
  oA: () => d,
  yE: () => p
}), require("./65821.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk308528 = require("./308528.js"),
  Chunk843472 = require("./843472.js"),
  Chunk451909 = require("./451909.js"),
  Chunk734057 = require("./734057.js"),
  Chunk45938 = require("./45938.js"),
  Chunk381941 = require("./381941.js"),
  d = function(e) {
    return e.ACTION = "action", e.LOOP = "loop", e.IDLE = "idle", e
  }({});
let f = async (e, t) => {
  if (null == t) throw Error("giftCode must be defined");
  if (null == e) throw Error("Recipient must be defined");
  let n = await a.A.openPrivateChannel({
      recipientIds: e.id
    }).then(e => {
      let t = l.A.getChannel(e);
      if (i()(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
      return t
    }),
    r = (0, c.Zq)(t);
  return s.A.sendMessage(n.id, o.Ay.parse(n, r), true, {
    isGiftLinkSentOnBehalfOfUser: true,
    location: u.Hx.GIFTING
  })
}, p = e => {}