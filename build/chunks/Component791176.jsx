/** Chunk was on 78079 **/
/** chunk id: 791176, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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

function w(A) {
  var e, t;
  let {
    permission: r,
    roleIds: l,
    guild: f,
    specMap: v
  } = A, u = E.Plq[r], d = null != (t = null == (e = v[u.toString()]) ? true : e.title) ? t : (0, g.wt)(u), w = h._o.has(u), D = (0, a.Wu)([c.Z], () => c.Z.getManyRoles(f.id, l), [f.id, l]);
  return (0, n.jsx)(s.ua7, {
    "aria-label": C.intl.string(C.t["0g8Xd3"]),
    tooltipClassName: B.roleTooltipContainer,
    tooltipContentClassName: B.roleTooltipContentContainer,
    allowOverflow: true,
    text: (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: w ? C.intl.string(C.t["GEuu/P"]) : C.intl.string(C.t.wgGiCg)
      }), D.map(A => (0, n.jsx)("div", {
        className: B.roleTooltipItem,
        children: (0, n.jsx)(o.Z, {
          role: A,
          guildId: f.id
        })
      }, A.id))]
    }),
    children: A => {
      let {
        onMouseEnter: e,
        onMouseLeave: t
      } = A;
      return (0, n.jsxs)(s.P3F, {
        className: i()(B.permissionChiplet, {
          [B.elevatedPermission]: w
        }),
        onMouseEnter: e,
        onMouseLeave: t,
        children: [w && (0, n.jsx)(s.tQf, {
          size: "custom",
          width: 16,
          height: 16,
          color: s.TVs.colors.TEXT_BRAND
        }), (0, n.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: d
        })]
      })
    }
  })
}
let D = Chunk647438.memo(function(A) {
  let {
    member: e,
    onNavigate: t
  } = A, l = (0, a.e7)([f.Z], () => f.Z.getGuild(e.guildId), [e.guildId]), o = (0, h.B2)(e.userId, e.guildId, h.Qn), g = (0, h.B2)(e.userId, e.guildId, h.pd), c = Object.keys(o).length, D = Object.keys(g).length, M = r.useMemo(() => null != l ? v.Z.getGuildPermissionSpecMap(l) : null, [l]), p = r.useMemo(() => null != l ? v.Z.generateGuildPermissionSpec(l) : null, [l]), I = r.useMemo(() => {
    if (null == l || null == M) return null;
    if (0 === c) return (0, n.jsx)("div", {
      className: i()(B.permissionChiplet, B.noModPerms),
      children: (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-positive",
        children: C.intl.string(C.t.sXhykZ)
      })
    });
    let A = [];
    return null == p || p.forEach(e => {
      e.permissions.forEach(e => {
        let t = e.flag,
          r = h.pd.find(A => E.Plq[A] === t);
        if (null == r) return;
        let i = o[r];
        null != i && A.push((0, n.jsx)(w, {
          permission: r,
          roleIds: i,
          guild: l,
          specMap: M
        }, r))
      })
    }), A
  }, [l, c, o, p, M]);
  return null == l ? null : (0, n.jsx)(s.xJW, {
    title: (0, n.jsxs)("div", {
      className: B.headerContainer,
      children: [(0, n.jsx)(s.Text, {
        variant: "eyebrow",
        color: "header-secondary",
        children: C.intl.string(C.t.ZCq2nJ)
      }), (0, n.jsxs)(s.P3F, {
        className: B.viewAllPermissions,
        onClick: () => t(d.k.PERMISSIONS),
        children: [(0, n.jsx)(s.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: C.intl.format(C.t["0x6aTk"], {
            count: D
          })
        }), (0, n.jsx)(s.Fbu, {
          size: "custom",
          width: 16,
          height: 16
        })]
      })]
    }),
    children: (0, n.jsx)(u.WM, {
      children: (0, n.jsx)(u._2, {
        description: (0, n.jsx)("div", {
          className: B.permissionsContainer,
          children: I
        })
      })
    })
  })
})