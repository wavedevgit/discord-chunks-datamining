/** Chunk was on 91053 **/
/** chunk id: 605953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479313 = require("./479313.js"),
  Chunk765104 = require("./765104.js"),
  Chunk626135 = require("./626135.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk814249 = require("./814249.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    channel: t
  } = e, n = (0, i.e7)([s.Z], () => s.Z.shouldShowTopicsBar());
  return (0, r.jsx)(c.ZP.Icon, {
    icon: l.sVe,
    onClick: () => {
      o.default.track(d.rMx.SUMMARIES_SIDEBAR_TOGGLED, {
        summaries_sidebar_open: !n,
        source: u.Dc.TOOLBAR_BUTTON,
        guild_id: t.guild_id,
        channel_id: t.id,
        channel_type: t.type
      }), (0, a.e7)()
    },
    tooltip: n ? p.intl.string(p.t.nGs3kO) : p.intl.string(p.t.bIm2sF),
    selected: n,
    "aria-expanded": n
  })
}