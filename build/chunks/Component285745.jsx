/** Chunk was on 97887 **/
/** chunk id: 285745, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk991982 = require("./991982.jsx"),
  Chunk838111 = require("./838111.js"),
  Chunk870136 = require("./870136.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk102817 = require("./102817.jsx"),
  Chunk641131 = require("./641131.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  let {
    channel: t,
    user: n,
    guild: m
  } = e, b = (0, l.bG)([p.default, u.A, d.A], () => null != n && null != m && (0, a.b)(m.id, n.id, [p.default, u.A, d.A])), [A, y] = (0, o.Ay)(null == n ? true : n.id, t.guild_id), _ = (0, l.bG)([c.Ay], () => null != m && null != n && null != c.Ay.getMember(m.id, n.id));
  if (!b || !_) return null;
  let O = "timeout-user-".concat(null == n ? true : n.id);
  return (0, r.jsx)(h.A, {
    text: y ? g.intl.string(f.default["6uMZbv"]) : g.intl.string(f.default["Sgg/uI"]),
    icon: i.O4,
    onClick: () => {
      null != n && (0, s.R)({
        guildId: t.guild_id,
        userId: n.id,
        modReportId: t.id
      })
    },
    disabled: y
  }, O)
}