/** Chunk was on 522 **/
/** chunk id: 259408, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk544891 = require("./544891.js"),
  Chunk933557 = require("./933557.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk927923 = require("./927923.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t) {
  var r;
  let {
    nonce: f,
    forQRCode: m
  } = t, p = e.getGuildId(), x = a.Z.getGuild(p), b = (0, l.Lc)({
    guildId: null != p ? p : d.aIL,
    channelId: e.id,
    channelName: (0, s.F6)(e, o.default, c.Z),
    guildName: null != (r = null == x ? true : x.name) ? r : u.intl.string(u.t.LJpTRF),
    muted: i.Z.isSelfMute(),
    deafened: i.Z.isSelfDeaf(),
    nonce: f
  });
  return m ? "".concat((0, n.K0)()).concat(d.ANM.XBOX_HANDOFF, "?").concat(b.toString()) : "".concat(l.bJ, "?").concat(b.toString())
}