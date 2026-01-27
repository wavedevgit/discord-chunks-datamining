/** Chunk was on web.js **/
/** chunk id: 280157, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk926140 = require("./926140.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.A,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : o.default,
    c = arguments.length > 3 && true !== arguments[3] ? arguments[3] : a.A,
    u = t.getChannel(e);
  if (null == u) return null;
  let d = (0, r.m1)(u, n, c);
  switch (u.type) {
    case l.rbe.DM: {
      let e = n.getUser(u.getRecipientId());
      if (null == e) return null;
      return {
        type: s.rD.USER,
        record: e,
        score: 0,
        comparator: d
      }
    }
    case l.rbe.GROUP_DM:
      return {
        type: s.rD.GROUP_DM, record: u, score: 0, comparator: d
      };
    case l.rbe.GUILD_VOICE:
    case l.rbe.GUILD_STAGE_VOICE:
      return {
        type: s.rD.VOICE_CHANNEL, record: u, score: 0, comparator: d
      };
    default:
      return {
        type: s.rD.TEXT_CHANNEL, record: u, score: 0, comparator: d
      }
  }
}