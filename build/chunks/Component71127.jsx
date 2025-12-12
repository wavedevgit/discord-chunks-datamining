/** Chunk was on 7891 **/
/** chunk id: 71127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  } = e, u = (0, i.jsx)(o.ZP.Icon, {
    icon: r.Dio,
    tooltip: c.intl.string(c.t.cpT0Cq),
    onClick: () => l.Z.toggleParticipantsList(t.id, false)
  });
  return (0, i.jsx)(a.Z, {
    sidebarType: a.y.ParticipantsSidebar,
    maxWidth: n,
    floatingLayer: s.ZP,
    children: (0, i.jsxs)(o.ZP, {
      toolbar: u,
      "aria-label": c.intl.string(c.t["jNqDh/"]),
      children: [(0, i.jsx)(o.ZP.Icon, {
        icon: r.BFJ,
        disabled: true,
        "aria-label": c.intl.string(c.t["jNqDh/"])
      }), (0, i.jsx)(o.ZP.Title, {
        children: c.intl.string(c.t["jNqDh/"])
      })]
    })
  })
}