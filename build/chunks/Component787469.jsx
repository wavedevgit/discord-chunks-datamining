/** Chunk was on 66201 **/
/** chunk id: 787469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk893966 = require("./893966.js"),
  Chunk472596 = require("./472596.js"),
  Chunk285173 = require("./285173.jsx"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk776767 = require("./776767.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk152540 = require("./152540.js");

function h(e) {
  let {
    member: t
  } = e, n = (0, a.e7)([A.Z], () => A.Z.getGuild(t.guildId)), i = (0, a.e7)([_.Z], () => _.Z.getSortedRoles(t.guildId)), h = l.useMemo(() => i.filter(e => e.id !== t.highestRoleId && t.roles.includes(e.id)), [t.roles, t.highestRoleId, i]), O = (0, a.e7)([c.Z], () => c.Z.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]), f = (0, E.zq)(O), R = (0, E.vN)(t), S = (0, a.e7)([T.Z], () => T.Z.can(m.Plq.MANAGE_ROLES, n), [n]);
  return null == n ? null : (0, r.jsx)(u.gNt, {
    label: g.intl.string(g.t["LPJmL/"]),
    children: (0, r.jsx)(I.WM, {
      children: (0, r.jsx)(I._2, {
        description: t.roles.length > 0 || S ? (0, r.jsxs)("div", {
          className: N.roleContainer,
          children: [(0, r.jsx)(o.u, {
            asContainer: true,
            "aria-label": g.intl.string(g.t["0g8Xd/"]),
            text: g.intl.string(g.t["93S+lG"]),
            children: (0, r.jsx)(u.P3F, {
              children: (0, r.jsx)(d.Z, {
                className: s()(N.roleTooltipItem, N.highestRole),
                role: f,
                guildId: t.guildId
              })
            })
          }), h.map(e => (0, r.jsx)(d.Z, {
            className: N.roleTooltipItem,
            role: e,
            guildId: t.guildId
          }, e.id)), S && (0, r.jsx)(o.u, {
            asContainer: true,
            "aria-label": g.intl.string(g.t.ljnBlo),
            text: g.intl.string(g.t.ljnBlo),
            children: (0, r.jsx)(u.P3F, {
              onClick: R,
              className: N.addRoleContainer,
              children: (0, r.jsx)(u.oFk, {
                size: "custom",
                color: "currentColor",
                className: N.addRoleIcon,
                width: 20,
                height: 20
              })
            })
          })]
        }) : (0, r.jsx)("div", {
          className: N.noRoles,
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: g.intl.string(g.t.nZfHsf)
          })
        })
      })
    })
  })
}