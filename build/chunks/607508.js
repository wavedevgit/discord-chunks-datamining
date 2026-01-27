/** Chunk was on web.js **/
/** chunk id: 607508, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => d,
  l: () => u
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk543465 = require("./543465.js"),
  Chunk152007 = require("./152007.js"),
  Chunk37411 = require("./37411.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s.A,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : o.Ay,
    i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : a.A,
    u = t.flags(e.id);
  if (null == u) return l.CP.NO_MESSAGES;
  if ((0, r.Lt)(u, l.CP.ALL_MESSAGES)) return l.CP.ALL_MESSAGES;
  if ((0, r.Lt)(u, l.CP.ONLY_MENTIONS)) return l.CP.ONLY_MENTIONS;
  if ((0, r.Lt)(u, l.CP.NO_MESSAGES)) return l.CP.NO_MESSAGES;
  let d = i.getChannel(e.parent_id);
  if (null == d || n.isGuildOrCategoryOrChannelMuted(d.guild_id, d.id)) return l.CP.NO_MESSAGES;
  let f = n.resolvedMessageNotifications(d);
  return f === c.orn.NO_MESSAGES ? l.CP.NO_MESSAGES : f === c.orn.ONLY_MENTIONS ? l.CP.ONLY_MENTIONS : l.CP.ALL_MESSAGES
}

function d(e) {
  return (0, i.bG)([s.A, o.Ay, a.A], () => u(e), [e])
}