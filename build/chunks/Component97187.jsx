/** Chunk was on 49056 **/
/** chunk id: 97187, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => h
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

function h(t) {
  let {
    guild: i,
    onSelect: n
  } = t, h = i.id, C = (0, o.A)({
    id: i.id,
    label: E.intl.string(E.t["94lLD7"])
  }), b = (0, e.bG)([u.A], () => u.A.getRequest(h)), m = () => {
    d.A.removeGuildJoinRequest(h), g.A.getGuildId() === h && (0, c.pX)(A.BVt.ME)
  };
  return (0, l.jsxs)(a.W1t, {
    navId: "join-request-guild-context",
    onClose: s.Z_,
    "aria-label": E.intl.string(E.t.HpQykc),
    onSelect: n,
    children: [(null == b ? true : b.applicationStatus) === p.B5.REJECTED && (0, l.jsx)(a.Drp, {
      id: "reapply",
      label: E.intl.string(E.t.rpFCLs),
      action: () => {
        d.A.resetGuildJoinRequest(h).then(() => {
          (0, c.pX)(A.BVt.GUILD_MEMBER_VERIFICATION(h))
        })
      },
      color: "default"
    }), (0, l.jsx)(a.Drp, {
      id: "withdraw",
      label: (null == b ? true : b.applicationStatus) === p.B5.STARTED ? E.intl.string(E.t.OQFlFD) : E.intl.string(E.t.mqtdmQ),
      action: () => {
        (0, r.A)({
          title: E.intl.string(E.t.y0CVes),
          subtitle: (null == b ? true : b.applicationStatus) === p.B5.STARTED ? E.intl.string(E.t.fJwWVt) : E.intl.format(E.t["9ZezpN"], {
            name: i.name
          }),
          confirmText: E.intl.string(E.t.p89ACt),
          cancelText: E.intl.string(E.t.oEAioF),
          onConfirm: m
        })
      },
      color: "danger"
    }), (0, l.jsx)(a.rXV, {
      children: C
    })]
  })
}