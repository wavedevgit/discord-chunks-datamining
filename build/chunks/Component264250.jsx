/** Chunk was on 97492 **/
/** chunk id: 264250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk934551 = require("./934551.js"),
  Chunk367513 = require("./367513.js"),
  Chunk812771 = require("./812771.jsx"),
  Chunk58736 = require("./58736.jsx"),
  Chunk43189 = require("./43189.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    channel: t,
    maxWidth: n
  } = e, u = (0, r.jsx)(s.Ay.Icon, {
    icon: l.XSmallIcon,
    tooltip: c.intl.string(c.t.cpT0Cq),
    onClick: () => i.A.toggleParticipantsList(t.id, false)
  });
  return (0, r.jsx)(a.A, {
    sidebarType: a.X.ParticipantsSidebar,
    maxWidth: n,
    floatingLayer: o.Ay,
    children: (0, r.jsxs)(s.Ay, {
      toolbar: u,
      "aria-label": c.intl.string(c.t["jNqDh/"]),
      children: [(0, r.jsx)(s.Ay.Icon, {
        icon: l.GroupIcon,
        disabled: true,
        "aria-label": c.intl.string(c.t["jNqDh/"])
      }), (0, r.jsx)(s.Ay.Title, {
        children: c.intl.string(c.t["jNqDh/"])
      })]
    })
  })
}