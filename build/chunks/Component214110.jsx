/** Chunk was on web.js **/
/** chunk id: 214110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
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
  Chunk130883 = require("./130883.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    channel: t,
    user: n,
    guild: m
  } = e, g = (0, i.e7)([f.default, u.Z, d.Z], () => null != n && null != m && (0, s.F)(m.id, n.id, [f.default, u.Z, d.Z])), [E, b] = (0, l.ZP)(null == n ? true : n.id, t.guild_id), y = (0, i.e7)([c.ZP], () => null != m && null != n && null != c.ZP.getMember(m.id, n.id));
  if (!g || !y) return null;
  let O = () => {
    null != n && (0, a.z)({
      guildId: t.guild_id,
      userId: n.id,
      modReportId: t.id
    })
  };

  function v() {
    return b ? h.intl.string(p.default["6uMZbm"]) : h.intl.string(p.default["Sgg/uL"])
  }
  let I = "timeout-user-".concat(null == n ? true : n.id);
  return (0, r.jsx)(_.Z, {
    text: v(),
    icon: o.T39,
    onClick: O,
    disabled: b
  }, I)
}