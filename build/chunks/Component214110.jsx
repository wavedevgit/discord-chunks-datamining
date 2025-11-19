/** Chunk was on 34740 **/
/** chunk id: 214110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk251794 = require("./251794.jsx"),
  Chunk386696 = require("./386696.js"),
  Chunk71619 = require("./71619.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk796263 = require("./796263.jsx"),
  Chunk342153 = require("./342153.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    channel: t,
    user: n,
    guild: g
  } = e, b = (0, r.e7)([p.default, u.Z, d.Z], () => null != n && null != g && (0, o.F)(g.id, n.id, [p.default, u.Z, d.Z])), [y, C] = (0, s.ZP)(null == n ? true : n.id, t.guild_id), v = (0, r.e7)([c.ZP], () => null != g && null != n && null != c.ZP.getMember(g.id, n.id));
  if (!b || !v) return null;
  let _ = "timeout-user-".concat(null == n ? true : n.id);
  return (0, i.jsx)(h.Z, {
    text: C ? m.intl.string(f.default["6uMZbv"]) : m.intl.string(f.default["Sgg/uI"]),
    icon: l.T39,
    onClick: () => {
      null != n && (0, a.z)({
        guildId: t.guild_id,
        userId: n.id,
        modReportId: t.id
      })
    },
    disabled: C
  }, _)
}