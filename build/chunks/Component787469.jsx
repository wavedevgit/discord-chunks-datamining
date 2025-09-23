/** Chunk was on 66201 **/
/** chunk id: 787469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
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
  Chunk87819 = require("./87819.js");

function N(e) {
  let {
    member: t
  } = e, n = (0, a.e7)([_.Z], () => _.Z.getGuild(t.guildId)), i = (0, a.e7)([d.Z], () => d.Z.getSortedRoles(t.guildId)), N = l.useMemo(() => i.filter(e => e.id !== t.highestRoleId && t.roles.includes(e.id)), [t.roles, t.highestRoleId, i]), O = (0, a.e7)([u.Z], () => u.Z.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]), h = (0, c.zq)(O), f = (0, c.vN)(t), R = (0, a.e7)([A.Z], () => A.Z.can(I.Plq.MANAGE_ROLES, n), [n]);
  return null == n ? null : (0, r.jsx)(o.xJW, {
    title: m.intl.string(m.t.LPJmLy),
    titleClassName: g.infoTitle,
    children: (0, r.jsx)(T.WM, {
      children: (0, r.jsx)(T._2, {
        description: t.roles.length > 0 || R ? (0, r.jsxs)("div", {
          className: g.roleContainer,
          children: [(0, r.jsx)(o.ua7, {
            "aria-label": m.intl.string(m.t["0g8Xd3"]),
            allowOverflow: true,
            text: m.intl.string(m.t["93S+lJ"]),
            children: e => {
              let {
                onMouseEnter: n,
                onMouseLeave: l
              } = e;
              return (0, r.jsx)(o.P3F, {
                onMouseEnter: n,
                onMouseLeave: l,
                children: (0, r.jsx)(E.Z, {
                  className: s()(g.roleTooltipItem, g.highestRole),
                  role: h,
                  guildId: t.guildId
                })
              })
            }
          }), N.map(e => (0, r.jsx)(E.Z, {
            className: g.roleTooltipItem,
            role: e,
            guildId: t.guildId
          }, e.id)), R && (0, r.jsx)(o.ua7, {
            "aria-label": m.intl.string(m.t.ljnBlp),
            allowOverflow: true,
            text: m.intl.string(m.t.ljnBlp),
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, r.jsx)(o.P3F, {
                className: g.addRoleContainer,
                onClick: f,
                onMouseEnter: t,
                onMouseLeave: n,
                children: (0, r.jsx)(o.oFk, {
                  size: "custom",
                  color: "currentColor",
                  className: g.addRoleIcon,
                  width: 20,
                  height: 20
                })
              })
            }
          })]
        }) : (0, r.jsx)("div", {
          className: g.noRoles,
          children: (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: m.intl.string(m.t.nZfHsb)
          })
        })
      })
    })
  })
}