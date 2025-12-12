/** Chunk was on web.js **/
/** chunk id: 723170, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => d,
  J: () => u
}), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk9156 = require("./9156.js"),
  Chunk569471 = require("./569471.js"),
  Chunk124368 = require("./124368.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s.Z,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : a.ZP,
    i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : o.Z,
    u = t.flags(e.id);
  if (null == u) return l.iN.NO_MESSAGES;
  if ((0, r.yE)(u, l.iN.ALL_MESSAGES)) return l.iN.ALL_MESSAGES;
  if ((0, r.yE)(u, l.iN.ONLY_MENTIONS)) return l.iN.ONLY_MENTIONS;
  if ((0, r.yE)(u, l.iN.NO_MESSAGES)) return l.iN.NO_MESSAGES;
  let d = i.getChannel(e.parent_id);
  if (null == d || n.isGuildOrCategoryOrChannelMuted(d.guild_id, d.id)) return l.iN.NO_MESSAGES;
  let f = n.resolvedMessageNotifications(d);
  return f === c.bL.NO_MESSAGES ? l.iN.NO_MESSAGES : f === c.bL.ONLY_MENTIONS ? l.iN.ONLY_MENTIONS : l.iN.ALL_MESSAGES
}

function d(e) {
  return (0, i.e7)([s.Z, a.ZP, o.Z], () => u(e), [e])
}