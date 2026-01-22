/** Chunk was on 67670 **/
/** chunk id: 271872, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk562465 = require("./562465.js"),
  Chunk47167 = require("./47167.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk544105 = require("./544105.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e, t) {
  var r;
  let {
    nonce: u,
    forQRCode: p
  } = t, b = e.getGuildId(), m = a.A.getGuild(b), g = (0, c.hw)({
    guildId: null != b ? b : f.D0I,
    channelId: e.id,
    channelName: (0, s.m1)(e, o.default, l.A),
    guildName: null != (r = null == m ? true : m.name) ? r : d.intl.string(d.t.LJpTRF),
    muted: i.A.isSelfMute(),
    deafened: i.A.isSelfDeaf(),
    nonce: u
  });
  return p ? "".concat((0, n.TP)()).concat(f.Rsh.XBOX_HANDOFF, "?").concat(g.toString()) : "".concat(c.Gp, "?").concat(g.toString())
}