/** Chunk was on 38985 **/
/** chunk id: 686378, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk266047 = require("./266047.js"),
  Chunk189552 = require("./189552.js"),
  Chunk950072 = require("./950072.jsx"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk829887 = require("./829887.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk438536 = require("./438536.js");

function m(e) {
  let {
    member: t
  } = e, n = (0, s.bG)([g.A], () => g.A.getGuild(t.guildId)), a = (0, s.bG)([_.A], () => _.A.getSortedRoles(t.guildId)), m = r.useMemo(() => a.filter(e => e.id !== t.highestRoleId && t.roles.includes(e.id)), [t.roles, t.highestRoleId, a]), N = (0, s.bG)([c.A], () => c.A.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]), f = (0, E.YH)(N), p = (0, E.Cy)(t), S = (0, s.bG)([A.A], () => A.A.can(h.xBc.MANAGE_ROLES, n), [n]);
  return null == n ? null : (0, l.jsx)(u.D0$, {
    label: I.intl.string(I.t["LPJmL/"]),
    children: (0, l.jsx)(T.SQ, {
      children: (0, l.jsx)(T.RU, {
        description: t.roles.length > 0 || S ? (0, l.jsxs)("div", {
          className: O.yk,
          children: [(0, l.jsx)(o.m, {
            asContainer: true,
            "aria-label": I.intl.string(I.t["0g8Xd/"]),
            text: I.intl.string(I.t["93S+lG"]),
            children: (0, l.jsx)(u.DUT, {
              children: (0, l.jsx)(d.A, {
                className: i()(O.Zf, O.Lc),
                role: f,
                guildId: t.guildId
              })
            })
          }), m.map(e => (0, l.jsx)(d.A, {
            className: O.Zf,
            role: e,
            guildId: t.guildId
          }, e.id)), S && (0, l.jsx)(o.m, {
            asContainer: true,
            "aria-label": I.intl.string(I.t.ljnBlo),
            text: I.intl.string(I.t.ljnBlo),
            children: (0, l.jsx)(u.DUT, {
              onClick: p,
              className: O.$g,
              children: (0, l.jsx)(u.U1e, {
                size: "custom",
                color: "currentColor",
                className: O.fd,
                width: 20,
                height: 20
              })
            })
          })]
        }) : (0, l.jsx)("div", {
          className: O.pl,
          children: (0, l.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: I.intl.string(I.t.nZfHsf)
          })
        })
      })
    })
  })
}