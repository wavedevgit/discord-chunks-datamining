/** Chunk was on web.js **/
/** chunk id: 938078, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk727785 = require("./727785.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.Z,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : o.default,
    c = arguments.length > 3 && true !== arguments[3] ? arguments[3] : a.Z,
    u = t.getChannel(e);
  if (null == u) return null;
  let d = (0, r.F6)(u, n, c);
  switch (u.type) {
    case l.d4z.DM: {
      let e = n.getUser(u.getRecipientId());
      if (null == e) return null;
      return {
        type: s.h8.USER,
        record: e,
        score: 0,
        comparator: d
      }
    }
    case l.d4z.GROUP_DM:
      return {
        type: s.h8.GROUP_DM, record: u, score: 0, comparator: d
      };
    case l.d4z.GUILD_VOICE:
    case l.d4z.GUILD_STAGE_VOICE:
      return {
        type: s.h8.VOICE_CHANNEL, record: u, score: 0, comparator: d
      };
    default:
      return {
        type: s.h8.TEXT_CHANNEL, record: u, score: 0, comparator: d
      }
  }
}