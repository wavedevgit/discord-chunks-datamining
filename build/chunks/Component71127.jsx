/** Chunk was on web.js **/
/** chunk id: 71127, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk657707 = require("./657707.js"),
  Chunk475179 = require("./475179.js"),
  Chunk325708 = require("./325708.jsx"),
  Chunk665149 = require("./665149.jsx"),
  Chunk909820 = require("./909820.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    channel: t,
    maxWidth: n
  } = e, u = () => o.Z.toggleParticipantsList(t.id, false), d = (0, r.jsx)(s.ZP.Icon, {
    icon: i.Dio,
    tooltip: c.intl.string(c.t.cpT0Cg),
    onClick: u
  });
  return (0, r.jsx)(a.Z, {
    sidebarType: a.y.ParticipantsSidebar,
    maxWidth: n,
    floatingLayer: l.ZP,
    children: (0, r.jsxs)(s.ZP, {
      toolbar: d,
      "aria-label": c.intl.string(c.t.jNqDh4),
      children: [(0, r.jsx)(s.ZP.Icon, {
        icon: i.BFJ,
        disabled: true,
        "aria-label": c.intl.string(c.t.jNqDh4)
      }), (0, r.jsx)(s.ZP.Title, {
        children: c.intl.string(c.t.jNqDh4)
      })]
    })
  })
}