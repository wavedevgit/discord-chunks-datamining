/** Chunk was on 61344 **/
/** chunk id: 285745, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    channel: t,
    user: n,
    guild: g
  } = e, A = (0, r.bG)([h.default, u.A, d.A], () => null != n && null != g && (0, s.b)(g.id, n.id, [h.default, u.A, d.A])), [b, _] = (0, o.Ay)(null == n ? true : n.id, t.guild_id), y = (0, r.bG)([c.Ay], () => null != g && null != n && null != c.Ay.getMember(g.id, n.id));
  if (!A || !y) return null;
  let v = "timeout-user-".concat(null == n ? true : n.id);
  return (0, l.jsx)(p.A, {
    text: _ ? m.intl.string(f.default["6uMZbv"]) : m.intl.string(f.default["Sgg/uI"]),
    icon: i.O4,
    onClick: () => {
      null != n && (0, a.R)({
        guildId: t.guild_id,
        userId: n.id,
        modReportId: t.id
      })
    },
    disabled: _
  }, v)
}