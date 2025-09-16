/** Chunk was on 10576 **/
/** chunk id: 791176, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk285173 = require("./285173.jsx"),
  Chunk422559 = require("./422559.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk233608 = require("./233608.js"),
  Chunk776767 = require("./776767.jsx"),
  Chunk351127 = require("./351127.js"),
  Chunk50493 = require("./50493.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk536037 = require("./536037.js");

function N(e) {
  var t, n;
  let {
    permission: l,
    roleIds: i,
    guild: d,
    specMap: _
  } = e, A = I.Plq[l], m = null != (n = null == (t = _[A.toString()]) ? true : t.title) ? n : (0, c.wt)(A), N = T._o.has(A), O = (0, s.Wu)([E.Z], () => E.Z.getManyRoles(d.id, i), [d.id, i]);
  return (0, r.jsx)(o.ua7, {
    "aria-label": g.intl.string(g.t["0g8Xd3"]),
    tooltipClassName: h.roleTooltipContainer,
    tooltipContentClassName: h.roleTooltipContentContainer,
    allowOverflow: true,
    text: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: N ? g.intl.string(g.t["GEuu/P"]) : g.intl.string(g.t.wgGiCg)
      }), O.map(e => (0, r.jsx)("div", {
        className: h.roleTooltipItem,
        children: (0, r.jsx)(u.Z, {
          role: e,
          guildId: d.id
        })
      }, e.id))]
    }),
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, r.jsxs)(o.P3F, {
        className: a()(h.permissionChiplet, {
          [h.elevatedPermission]: N
        }),
        onMouseEnter: t,
        onMouseLeave: n,
        children: [N && (0, r.jsx)(o.tQf, {
          size: "custom",
          width: 16,
          height: 16,
          color: o.TVs.colors.TEXT_BRAND
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: m
        })]
      })
    }
  })
}
let O = Chunk647438.memo(function(e) {
  let {
    member: t,
    onNavigate: n
  } = e, i = (0, s.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]), u = (0, T.B2)(t.userId, t.guildId, T.Qn), c = (0, T.B2)(t.userId, t.guildId, T.pd), E = Object.keys(u).length, O = Object.keys(c).length, f = l.useMemo(() => null != i ? _.Z.getGuildPermissionSpecMap(i) : null, [i]), p = l.useMemo(() => null != i ? _.Z.generateGuildPermissionSpec(i) : null, [i]), R = l.useMemo(() => {
    if (null == i || null == f) return null;
    if (0 === E) return (0, r.jsx)("div", {
      className: a()(h.permissionChiplet, h.noModPerms),
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-positive",
        children: g.intl.string(g.t.sXhykZ)
      })
    });
    let e = [];
    return null == p || p.forEach(t => {
      t.permissions.forEach(t => {
        let n = t.flag,
          l = T.pd.find(e => I.Plq[e] === n);
        if (null == l) return;
        let a = u[l];
        null != a && e.push((0, r.jsx)(N, {
          permission: l,
          roleIds: a,
          guild: i,
          specMap: f
        }, l))
      })
    }), e
  }, [i, E, u, p, f]);
  return null == i ? null : (0, r.jsx)(o.xJW, {
    title: (0, r.jsxs)("div", {
      className: h.headerContainer,
      children: [(0, r.jsx)(o.Text, {
        variant: "eyebrow",
        color: "header-secondary",
        children: g.intl.string(g.t.ZCq2nJ)
      }), (0, r.jsxs)(o.P3F, {
        className: h.viewAllPermissions,
        onClick: () => n(m.k.PERMISSIONS),
        children: [(0, r.jsx)(o.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: g.intl.format(g.t["0x6aTk"], {
            count: O
          })
        }), (0, r.jsx)(o.Fbu, {
          size: "custom",
          width: 16,
          height: 16
        })]
      })]
    }),
    children: (0, r.jsx)(A.WM, {
      children: (0, r.jsx)(A._2, {
        description: (0, r.jsx)("div", {
          className: h.permissionsContainer,
          children: R
        })
      })
    })
  })
})