/** Chunk was on 73726 **/
/** chunk id: 214110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
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
  Chunk43617 = require("./43617.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    channel: t,
    user: n,
    guild: g
  } = e, b = (0, i.e7)([p.default, u.Z, d.Z], () => null != n && null != g && (0, o.F)(g.id, n.id, [p.default, u.Z, d.Z])), [_, y] = (0, s.ZP)(null == n ? true : n.id, t.guild_id), C = (0, i.e7)([c.ZP], () => null != g && null != n && null != c.ZP.getMember(g.id, n.id));
  if (!b || !C) return null;
  let v = "timeout-user-".concat(null == n ? true : n.id);
  return (0, r.jsx)(f.Z, {
    text: y ? m.intl.string(h.default["6uMZbv"]) : m.intl.string(h.default["Sgg/uI"]),
    icon: l.T39,
    onClick: () => {
      null != n && (0, a.z)({
        guildId: t.guild_id,
        userId: n.id,
        modReportId: t.id
      })
    },
    disabled: y
  }, v)
}