/** Chunk was on web.js **/
/** chunk id: 443228, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  } = e, [c, u] = t.split("/"), d = i.A.getChannel(u), f = a.A.getGuild(c);
  return null != d && d.isGuildVocal() && null != f && s.A.can(l.xBc.VIEW_CHANNEL, d) && s.A.can(l.xBc.CONNECT, d) ? (0, r.jsx)(o.A, {
    guild: f,
    channel: d,
    message: n
  }) : null
}