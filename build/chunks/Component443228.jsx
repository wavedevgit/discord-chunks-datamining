/** Chunk was on 92917 **/
/** chunk id: 443228, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk483660 = require("./483660.jsx"),
  Chunk652215 = require("./652215.js");

function c(e) {
  let {
    code: t,
    message: n
  } = e, [c, u] = t.split("/"), d = i.A.getChannel(u), p = l.A.getGuild(c);
  return null != d && d.isGuildVocal() && null != p && a.A.can(o.xBc.VIEW_CHANNEL, d) && a.A.can(o.xBc.CONNECT, d) ? (0, r.jsx)(s.A, {
    guild: p,
    channel: d,
    message: n
  }) : null
}