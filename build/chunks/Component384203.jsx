/** Chunk was on 91173 **/
/** chunk id: 384203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk983436 = require("./983436.jsx"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let {
    code: t,
    message: n
  } = e, [c, u] = t.split("/"), d = i.Z.getChannel(u), p = l.Z.getGuild(c);
  return null != d && d.isGuildVocal() && null != p && a.Z.can(s.Plq.VIEW_CHANNEL, d) && a.Z.can(s.Plq.CONNECT, d) ? (0, r.jsx)(o.Z, {
    guild: p,
    channel: d,
    message: n
  }) : null
}