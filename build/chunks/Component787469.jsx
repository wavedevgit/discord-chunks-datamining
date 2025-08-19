/** Chunk was on 12630 **/
/** chunk id: 787469, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => B
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk87819 = require("./87819.js");

function B(A) {
  let {
    member: e
  } = A, t = (0, s.e7)([v.Z], () => v.Z.getGuild(e.guildId)), l = (0, s.e7)([f.Z], () => f.Z.getSortedRoles(e.guildId)), B = r.useMemo(() => l.filter(A => A.id !== e.highestRoleId && e.roles.includes(A.id)), [e.roles, e.highestRoleId, l]), w = (0, s.e7)([o.Z], () => o.Z.getEnhancedMember(e.guildId, e.userId), [e.guildId, e.userId]), D = (0, g.zq)(w), M = (0, g.vN)(e), p = (0, s.e7)([u.Z], () => u.Z.can(d.Plq.MANAGE_ROLES, t), [t]);
  return null == t ? null : (0, n.jsx)(a.xJW, {
    title: E.intl.string(E.t.LPJmLy),
    titleClassName: C.infoTitle,
    children: (0, n.jsx)(h.WM, {
      children: (0, n.jsx)(h._2, {
        description: e.roles.length > 0 || p ? (0, n.jsxs)("div", {
          className: C.roleContainer,
          children: [(0, n.jsx)(a.ua7, {
            "aria-label": E.intl.string(E.t["0g8Xd3"]),
            allowOverflow: true,
            text: E.intl.string(E.t["93S+lJ"]),
            children: A => {
              let {
                onMouseEnter: t,
                onMouseLeave: r
              } = A;
              return (0, n.jsx)(a.P3F, {
                onMouseEnter: t,
                onMouseLeave: r,
                children: (0, n.jsx)(c.Z, {
                  className: i()(C.roleTooltipItem, C.highestRole),
                  role: D,
                  guildId: e.guildId
                })
              })
            }
          }), B.map(A => (0, n.jsx)(c.Z, {
            className: C.roleTooltipItem,
            role: A,
            guildId: e.guildId
          }, A.id)), p && (0, n.jsx)(a.ua7, {
            "aria-label": E.intl.string(E.t.ljnBlp),
            allowOverflow: true,
            text: E.intl.string(E.t.ljnBlp),
            children: A => {
              let {
                onMouseEnter: e,
                onMouseLeave: t
              } = A;
              return (0, n.jsx)(a.P3F, {
                className: C.addRoleContainer,
                onClick: M,
                onMouseEnter: e,
                onMouseLeave: t,
                children: (0, n.jsx)(a.oFk, {
                  size: "custom",
                  color: "currentColor",
                  className: C.addRoleIcon,
                  width: 20,
                  height: 20
                })
              })
            }
          })]
        }) : (0, n.jsx)("div", {
          className: C.noRoles,
          children: (0, n.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: E.intl.string(E.t.nZfHsb)
          })
        })
      })
    })
  })
}