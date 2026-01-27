/** Chunk was on 49056 **/
/** chunk id: 97187, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk624458 = require("./624458.js"),
  Chunk513461 = require("./513461.js"),
  Chunk212455 = require("./212455.js"),
  Chunk976860 = require("./976860.js"),
  Chunk967198 = require("./967198.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function E(t) {
  let {
    guild: i,
    onSelect: n
  } = t, E = i.id, h = (0, o.A)({
    id: i.id,
    label: m.intl.string(m.t["94lLD7"])
  }), C = (0, e.bG)([p.A], () => p.A.getRequest(E)), b = () => {
    d.A.removeGuildJoinRequest(E), g.A.getGuildId() === E && (0, c.pX)(A.BVt.ME)
  };
  return (0, l.jsxs)(r.W1t, {
    "data-menu-migrated-auto": true,
    navId: "join-request-guild-context",
    onClose: s.Z_,
    "aria-label": m.intl.string(m.t.HpQykc),
    onSelect: n,
    children: [(null == C ? true : C.applicationStatus) === u.B5.REJECTED && (0, l.jsx)(r.Drp, {
      id: "reapply",
      label: m.intl.string(m.t.rpFCLs),
      action: () => {
        d.A.resetGuildJoinRequest(E).then(() => {
          (0, c.pX)(A.BVt.GUILD_MEMBER_VERIFICATION(E))
        })
      },
      color: "default"
    }), (0, l.jsx)(r.Drp, {
      id: "withdraw",
      label: (null == C ? true : C.applicationStatus) === u.B5.STARTED ? m.intl.string(m.t.OQFlFD) : m.intl.string(m.t.mqtdmQ),
      action: () => {
        (0, a.A)({
          title: m.intl.string(m.t.y0CVes),
          subtitle: (null == C ? true : C.applicationStatus) === u.B5.STARTED ? m.intl.string(m.t.fJwWVt) : m.intl.format(m.t["9ZezpN"], {
            name: i.name
          }),
          confirmText: m.intl.string(m.t.p89ACt),
          cancelText: m.intl.string(m.t.oEAioF),
          onConfirm: b
        })
      },
      color: "danger"
    }), (0, l.jsx)(r.rXV, {
      children: h
    })]
  })
}