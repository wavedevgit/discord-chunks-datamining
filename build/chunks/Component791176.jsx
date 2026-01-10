/** Chunk was on 69937 **/
/** chunk id: 791176, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk471302 = require("./471302.js");

function N(e) {
  var t, n;
  let {
    permission: l,
    roleIds: i,
    guild: _,
    specMap: A
  } = e, f = I.Plq[l], g = null != (n = null == (t = A[f.toString()]) ? true : t.title) ? n : (0, d.wt)(f), N = T._o.has(f), O = (0, s.Wu)([E.Z], () => E.Z.getManyRoles(_.id, i), [_.id, i]);
  return (0, r.jsx)(o.u, {
    "aria-label": m.intl.string(m.t["0g8Xd/"]),
    __unsupportedReactNodeAsText: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: N ? m.intl.string(m.t["GEuu/O"]) : m.intl.string(m.t.wgGiCk)
      }), O.map(e => (0, r.jsx)("div", {
        className: h.roleTooltipItem,
        children: (0, r.jsx)(u.Z, {
          role: e,
          guildId: _.id
        })
      }, e.id))]
    }),
    children: (0, r.jsxs)(c.P3F, {
      className: a()(h.permissionChiplet, {
        [h.elevatedPermission]: N
      }),
      children: [N && (0, r.jsx)(c.tQf, {
        size: "custom",
        width: 16,
        height: 16,
        color: c.TVs.colors.TEXT_BRAND
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "interactive-text-default",
        children: g
      })]
    })
  })
}
let O = Chunk473749.memo(function(e) {
  let {
    member: t,
    onNavigate: n
  } = e, i = (0, s.e7)([_.Z], () => _.Z.getGuild(t.guildId), [t.guildId]), o = (0, T.B2)(t.userId, t.guildId, T.Qn), u = (0, T.B2)(t.userId, t.guildId, T.pd), d = Object.keys(o).length, E = Object.keys(u).length, O = l.useMemo(() => null != i ? A.Z.getGuildPermissionSpecMap(i) : null, [i]), p = l.useMemo(() => null != i ? A.Z.generateGuildPermissionSpec(i) : null, [i]), R = l.useMemo(() => {
    if (null == i || null == O) return null;
    if (0 === d) return (0, r.jsx)("div", {
      className: a()(h.permissionChiplet, h.noModPerms),
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-positive",
        children: m.intl.string(m.t.sXhykX)
      })
    });
    let e = [];
    return null == p || p.forEach(t => {
      t.permissions.forEach(t => {
        let n = t.flag,
          l = T.pd.find(e => I.Plq[e] === n);
        if (null == l) return;
        let a = o[l];
        null != a && e.push((0, r.jsx)(N, {
          permission: l,
          roleIds: a,
          guild: i,
          specMap: O
        }, l))
      })
    }), e
  }, [i, d, o, p, O]);
  return null == i ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: h.headerContainer,
      children: [(0, r.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: m.intl.string(m.t.ZCq2nC)
      }), (0, r.jsxs)(c.P3F, {
        className: h.viewAllPermissions,
        onClick: () => n(g.k.PERMISSIONS),
        children: [(0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "interactive-text-default",
          children: m.intl.format(m.t["0x6aTm"], {
            count: E
          })
        }), (0, r.jsx)(c.Fbu, {
          size: "custom",
          width: 16,
          height: 16
        })]
      })]
    }), (0, r.jsx)(f.WM, {
      children: (0, r.jsx)(f._2, {
        description: (0, r.jsx)("div", {
          className: h.permissionsContainer,
          children: R
        })
      })
    })]
  })
})