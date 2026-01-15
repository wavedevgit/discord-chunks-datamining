/** Chunk was on web.js **/
/** chunk id: 754688, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ao: () => g,
  Jv: () => _,
  M0: () => h,
  Qj: () => m,
  VO: () => b,
  YO: () => E
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk226951 = require("./226951.js"),
  Chunk981631 = require("./981631.js");
let l = Array.from(require("./176505.js").Vg).map(e => o.Z.escape(e)).join("|"),
  c = new RegExp("^/channels/(\\d+|".concat(Chunk981631.ME, ")(?:/)?(\\d+|").concat(l, ")?")),
  u = new RegExp("^/channels/(\\d+|".concat(Chunk981631.ME, ")(?:/)(\\d+|").concat(l, ")(?:/)(\\d+)")),
  d = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
  f = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
  p = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
  _ = new RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|".concat(Chunk981631.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
  h = RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

function m(e) {
  if (null == e) return null;
  let t = e.match(u);
  if (null != t && t.length > 3) return {
    guildId: t[1],
    channelId: t[2],
    messageId: t[3]
  };
  let n = e.match(d);
  if (null != n && n.length > 4) return {
    guildId: n[1],
    channelId: n[2],
    threadId: n[3],
    messageId: n[4]
  };
  let r = e.match(c);
  if (null != r && r.length > 1) {
    var i;
    return {
      guildId: r[1],
      channelId: null != (i = r[2]) ? i : true
    }
  }
  let a = e.match(f);
  return null != a && a.length > 1 ? {
    guildId: a[1]
  } : null
}

function g(e) {
  if (null == e) return null;
  let t = e.match(p);
  return null != t && t.length > 1 ? {
    guildId: t[1],
    guildEventId: t[2],
    recurrenceId: t[3]
  } : null
}

function E(e) {
  return !!e.isPrivate() || a.Z.can(s.Plq.VIEW_CHANNEL, e)
}

function b(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  if (null == i.Z.getGuild(t) && t !== s.ME) returnfalse;
  if (null == n) returntrue;
  let a = r.Z.getChannel(n);
  return null != a && E(a)
}