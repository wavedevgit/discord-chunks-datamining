/** Chunk was on 6368 **/
/** chunk id: 987999, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk693546 = require("./693546.js"),
  Chunk246364 = require("./246364.js"),
  Chunk937111 = require("./937111.js"),
  Chunk703656 = require("./703656.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function E(t) {
  let {
    guild: i,
    onSelect: n
  } = t, E = i.id, C = (0, o.Z)({
    id: i.id,
    label: Z.intl.string(Z.t["94lLD7"])
  }), f = (0, e.e7)([c.Z], () => c.Z.getRequest(E)), m = () => {
    d.Z.removeGuildJoinRequest(E), g.Z.getGuildId() === E && (0, p.uL)(h.Z5c.ME)
  };
  return (0, l.jsxs)(a.v2r, {
    navId: "join-request-guild-context",
    onClose: r.Zy,
    "aria-label": Z.intl.string(Z.t.HpQykc),
    onSelect: n,
    children: [(null == f ? true : f.applicationStatus) === u.wB.REJECTED && (0, l.jsx)(a.sNh, {
      id: "reapply",
      label: Z.intl.string(Z.t.rpFCLs),
      action: () => {
        d.Z.resetGuildJoinRequest(E).then(() => {
          (0, p.uL)(h.Z5c.GUILD_MEMBER_VERIFICATION(E))
        })
      },
      color: "default"
    }), (0, l.jsx)(a.sNh, {
      id: "withdraw",
      label: (null == f ? true : f.applicationStatus) === u.wB.STARTED ? Z.intl.string(Z.t.OQFlFD) : Z.intl.string(Z.t.mqtdmQ),
      action: () => {
        (0, s.Z)({
          title: Z.intl.string(Z.t.y0CVes),
          subtitle: (null == f ? true : f.applicationStatus) === u.wB.STARTED ? Z.intl.string(Z.t.fJwWVt) : Z.intl.format(Z.t["9ZezpN"], {
            name: i.name
          }),
          confirmText: Z.intl.string(Z.t.p89ACt),
          cancelText: Z.intl.string(Z.t.oEAioF),
          onConfirm: m
        })
      },
      color: "danger"
    }), (0, l.jsx)(a.kSQ, {
      children: C
    })]
  })
}