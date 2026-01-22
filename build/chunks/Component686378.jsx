/** Chunk was on 94503 **/
/** chunk id: 686378, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
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

function O(e) {
  let {
    member: t
  } = e, n = (0, s.bG)([g.A], () => g.A.getGuild(t.guildId)), a = (0, s.bG)([_.A], () => _.A.getSortedRoles(t.guildId)), O = r.useMemo(() => a.filter(e => e.id !== t.highestRoleId && t.roles.includes(e.id)), [t.roles, t.highestRoleId, a]), N = (0, s.bG)([u.A], () => u.A.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]), m = (0, E.YH)(N), S = (0, E.Cy)(t), p = (0, s.bG)([A.A], () => A.A.can(f.xBc.MANAGE_ROLES, n), [n]);
  return null == n ? null : (0, l.jsx)(c.D0$, {
    label: h.intl.string(h.t["LPJmL/"]),
    children: (0, l.jsx)(T.SQ, {
      children: (0, l.jsx)(T.RU, {
        description: t.roles.length > 0 || p ? (0, l.jsxs)("div", {
          className: I.yk,
          children: [(0, l.jsx)(o.m, {
            asContainer: true,
            "aria-label": h.intl.string(h.t["0g8Xd/"]),
            text: h.intl.string(h.t["93S+lG"]),
            children: (0, l.jsx)(c.DUT, {
              children: (0, l.jsx)(d.A, {
                className: i()(I.Zf, I.Lc),
                role: m,
                guildId: t.guildId
              })
            })
          }), O.map(e => (0, l.jsx)(d.A, {
            className: I.Zf,
            role: e,
            guildId: t.guildId
          }, e.id)), p && (0, l.jsx)(o.m, {
            asContainer: true,
            "aria-label": h.intl.string(h.t.ljnBlo),
            text: h.intl.string(h.t.ljnBlo),
            children: (0, l.jsx)(c.DUT, {
              onClick: S,
              className: I.$g,
              children: (0, l.jsx)(c.U1e, {
                size: "custom",
                color: "currentColor",
                className: I.fd,
                width: 20,
                height: 20
              })
            })
          })]
        }) : (0, l.jsx)("div", {
          className: I.pl,
          children: (0, l.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: h.intl.string(h.t.nZfHsf)
          })
        })
      })
    })
  })
}