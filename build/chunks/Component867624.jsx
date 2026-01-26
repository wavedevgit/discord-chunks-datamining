/** Chunk was on 97887 **/
/** chunk id: 867624, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk863922 = require("./863922.js"),
  Chunk513272 = require("./513272.js"),
  Chunk954571 = require("./954571.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk521732 = require("./521732.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    channel: t
  } = e, n = (0, l.bG)([a.A], () => a.A.shouldShowTopicsBar());
  return (0, r.jsx)(c.Ay.Icon, {
    icon: i.Kck,
    onClick: () => {
      o.default.track(u.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
        summaries_sidebar_open: !n,
        source: d.er.TOOLBAR_BUTTON,
        guild_id: t.guild_id,
        channel_id: t.id,
        channel_type: t.type
      }), (0, s.Oz)()
    },
    tooltip: n ? p.intl.string(p.t.nGs3kO) : p.intl.string(p.t.bIm2sF),
    selected: n,
    "aria-expanded": n
  })
}