/** Chunk was on web.js **/
/** chunk id: 376943, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  En: () => h,
  Ju: () => _,
  SK: () => g,
  nc: () => E,
  r9: () => y,
  vu: () => m
}), require("./591487.js"), require("./727858.js"), require("./747238.js");
var Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk257120 = require("./257120.js"),
  Chunk652215 = require("./652215.js");
let l = Array.from(require("./746080.js").qW).map(e => o.A.escape(e)).join("|"),
  c = new RegExp("^/channels/(\\d+|".concat(Chunk652215.ME, ")(?:/)?(\\d+|").concat(l, ")?")),
  u = new RegExp("^/channels/(\\d+|".concat(Chunk652215.ME, ")(?:/)(\\d+|").concat(l, ")(?:/)(\\d+)")),
  d = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
  f = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
  p = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
  _ = new RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|".concat(Chunk652215.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
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
  return !!e.isPrivate() || a.A.can(s.xBc.VIEW_CHANNEL, e)
}

function y(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  if (null == i.A.getGuild(t) && t !== s.ME) returnfalse;
  if (null == n) returntrue;
  let a = r.A.getChannel(n);
  return null != a && E(a)
}