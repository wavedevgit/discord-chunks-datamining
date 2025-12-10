/** Chunk was on 37220 **/
/** chunk id: 941389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk496675 = require("./496675.js"),
  Chunk996861 = require("./996861.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t) {
  let n = t.getGuildId();
  return null != n && e.type === a.uaV.USER_JOIN && l.Z.canWithPartialContext(a.Plq.MANAGE_GUILD, {
    guildId: n
  }) ? (0, r.jsx)(i.sNh, {
    id: "configure",
    label: s.intl.string(s.t.NpHUi1),
    icon: i.idN,
    action: () => (0, o.zW)(t)
  }) : null
}