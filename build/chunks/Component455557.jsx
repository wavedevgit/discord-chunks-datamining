/** Chunk was on 10758 **/
/** chunk id: 455557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk808728 = require("./808728.js"),
  Chunk911612 = require("./911612.jsx"),
  Chunk153594 = require("./153594.jsx"),
  Chunk531335 = require("./531335.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    guild: t,
    onSelect: n
  } = e, p = c.Ay.getDefaultChannel(t.id, true, u.xBc.CREATE_INSTANT_INVITE), b = (0, a.A)(t.id), y = (0, o.A)(t), O = (0, s.A)({
    guild: t,
    source: u.PE1.GUILD_CONTEXT_MENU,
    channel: p
  });
  return (0, r.jsxs)(i.W1t, {
    "data-menu-needs-migration": true,
    navId: "guild-context",
    "aria-label": d.intl.string(d.t.HpQykc),
    onClose: l.Z_,
    onSelect: n,
    children: [(0, r.jsx)(i.rXV, {
      children: b
    }), (0, r.jsxs)(i.rXV, {
      children: [y, O]
    })]
  })
}