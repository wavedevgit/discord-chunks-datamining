/** Chunk was on web.js **/
/** chunk id: 384203, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk983436 = require("./983436.jsx"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let {
    code: t,
    message: n
  } = e, [c, u] = t.split("/"), d = i.Z.getChannel(u), f = o.Z.getGuild(c);
  return null != d && d.isGuildVocal() && null != f && a.Z.can(l.Plq.VIEW_CHANNEL, d) && a.Z.can(l.Plq.CONNECT, d) ? (0, r.jsx)(s.Z, {
    guild: f,
    channel: d,
    message: n
  }) : null
}