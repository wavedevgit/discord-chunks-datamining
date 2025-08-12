/** Chunk was on 873 **/
/** chunk id: 787469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk983843 = require("./983843.js");

function f(e) {
  let {
    member: t
  } = e, n = (0, a.e7)([_.Z], () => _.Z.getGuild(t.guildId)), s = (0, a.e7)([d.Z], () => d.Z.getSortedRoles(t.guildId)), f = l.useMemo(() => s.filter(e => e.id !== t.highestRoleId && t.roles.includes(e.id)), [t.roles, t.highestRoleId, s]), N = (0, a.e7)([u.Z], () => u.Z.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]), h = (0, c.zq)(N), O = (0, c.vN)(t), p = (0, a.e7)([A.Z], () => A.Z.can(m.Plq.MANAGE_ROLES, n), [n]);
  return null == n ? null : (0, r.jsx)(o.xJW, {
    title: I.intl.string(I.t.LPJmLy),
    titleClassName: g.infoTitle,
    children: (0, r.jsx)(T.WM, {
      children: (0, r.jsx)(T._2, {
        description: t.roles.length > 0 || p ? (0, r.jsxs)("div", {
          className: g.roleContainer,
          children: [(0, r.jsx)(o.ua7, {
            "aria-label": I.intl.string(I.t["0g8Xd3"]),
            allowOverflow: true,
            text: I.intl.string(I.t["93S+lJ"]),
            children: e => {
              let {
                onMouseEnter: n,
                onMouseLeave: l
              } = e;
              return (0, r.jsx)(o.P3F, {
                onMouseEnter: n,
                onMouseLeave: l,
                children: (0, r.jsx)(E.Z, {
                  className: i()(g.roleTooltipItem, g.highestRole),
                  role: h,
                  guildId: t.guildId
                })
              })
            }
          }), f.map(e => (0, r.jsx)(E.Z, {
            className: g.roleTooltipItem,
            role: e,
            guildId: t.guildId
          }, e.id)), p && (0, r.jsx)(o.ua7, {
            "aria-label": I.intl.string(I.t.ljnBlp),
            allowOverflow: true,
            text: I.intl.string(I.t.ljnBlp),
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, r.jsx)(o.P3F, {
                className: g.addRoleContainer,
                onClick: O,
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
            children: I.intl.string(I.t.nZfHsb)
          })
        })
      })
    })
  })
}