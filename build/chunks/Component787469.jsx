/** Chunk was on 69937 **/
/** chunk id: 787469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk280533 = require("./280533.js");

function h(e) {
  let {
    member: t
  } = e, n = (0, s.e7)([A.Z], () => A.Z.getGuild(t.guildId)), i = (0, s.e7)([_.Z], () => _.Z.getSortedRoles(t.guildId)), h = l.useMemo(() => i.filter(e => e.id !== t.highestRoleId && t.roles.includes(e.id)), [t.roles, t.highestRoleId, i]), N = (0, s.e7)([u.Z], () => u.Z.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]), O = (0, d.zq)(N), p = (0, d.vN)(t), R = (0, s.e7)([f.Z], () => f.Z.can(g.Plq.MANAGE_ROLES, n), [n]);
  return null == n ? null : (0, r.jsx)(c.gNt, {
    label: I.intl.string(I.t["LPJmL/"]),
    children: (0, r.jsx)(T.WM, {
      children: (0, r.jsx)(T._2, {
        description: t.roles.length > 0 || R ? (0, r.jsxs)("div", {
          className: m.roleContainer,
          children: [(0, r.jsx)(o.u, {
            asContainer: true,
            "aria-label": I.intl.string(I.t["0g8Xd/"]),
            text: I.intl.string(I.t["93S+lG"]),
            children: (0, r.jsx)(c.P3F, {
              children: (0, r.jsx)(E.Z, {
                className: a()(m.roleTooltipItem, m.highestRole),
                role: O,
                guildId: t.guildId
              })
            })
          }), h.map(e => (0, r.jsx)(E.Z, {
            className: m.roleTooltipItem,
            role: e,
            guildId: t.guildId
          }, e.id)), R && (0, r.jsx)(o.u, {
            asContainer: true,
            "aria-label": I.intl.string(I.t.ljnBlo),
            text: I.intl.string(I.t.ljnBlo),
            children: (0, r.jsx)(c.P3F, {
              onClick: p,
              className: m.addRoleContainer,
              children: (0, r.jsx)(c.oFk, {
                size: "custom",
                color: "currentColor",
                className: m.addRoleIcon,
                width: 20,
                height: 20
              })
            })
          })]
        }) : (0, r.jsx)("div", {
          className: m.noRoles,
          children: (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: I.intl.string(I.t.nZfHsf)
          })
        })
      })
    })
  })
}