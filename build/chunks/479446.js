/** Chunk was on web.js **/
/** chunk id: 479446, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ou: () => p,
  SR: () => d,
  YD: () => f
}), require("./415506.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk493683 = require("./493683.js"),
  Chunk904245 = require("./904245.js"),
  Chunk957730 = require("./957730.js"),
  Chunk592125 = require("./592125.js"),
  Chunk669079 = require("./669079.js"),
  Chunk959517 = require("./959517.js"),
  d = function(e) {
    return e.ACTION = "action", e.LOOP = "loop", e.IDLE = "idle", e
  }({});
let f = async (e, t) => {
  if (null == t) throw Error("giftCode must be defined");
  if (null == e) throw Error("Recipient must be defined");
  let n = await o.Z.openPrivateChannel({
      recipientIds: e.id
    }).then(e => {
      let t = l.Z.getChannel(e);
      if (i()(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
      return t
    }),
    r = (0, c.Nz)(t);
  return a.Z.sendMessage(n.id, s.ZP.parse(n, r), true, {
    isGiftLinkSentOnBehalfOfUser: true,
    location: u.dy.GIFTING
  })
}, p = e => {}