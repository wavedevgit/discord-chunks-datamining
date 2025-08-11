/** Chunk was on 12097 **/
/** chunk id: 791176, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk514983 = require("./514983.js");

function N(e) {
  var t, n;
  let {
    permission: l,
    roleIds: s,
    guild: d,
    specMap: _
  } = e, A = I.Plq[l], m = null != (n = null == (t = _[A.toString()]) ? true : t.title) ? n : (0, c.wt)(A), N = T._o.has(A), h = (0, a.Wu)([E.Z], () => E.Z.getManyRoles(d.id, s), [d.id, s]);
  return <o.ua7 aria-label={g.intl.string(g.t["0g8Xd3"])} tooltipClassName={f.roleTooltipContainer} tooltipContentClassName={f.roleTooltipContentContainer} allowOverflow={true} text={(0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: N ? g.intl.string(g.t["GEuu/P"]) : g.intl.string(g.t.wgGiCg)
      }), h.map(e => (0, r.jsx)("div", {
        className: f.roleTooltipItem,
        children: (0, r.jsx)(u.Z, {
          role: e,
          guildId: d.id
        })
      }, e.id))]
    })}>{e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, r.jsxs)(o.P3F, {
        className: i()(f.permissionChiplet, {
          [f.elevatedPermission]: N
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
    }}</o.ua7>
}
let h = Chunk73800.memo(function(e) {
  let {
    member: t,
    onNavigate: n
  } = e, s = (0, a.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]), u = (0, T.B2)(t.userId, t.guildId, T.Qn), c = (0, T.B2)(t.userId, t.guildId, T.pd), E = Object.keys(u).length, h = Object.keys(c).length, O = l.useMemo(() => null != s ? _.Z.getGuildPermissionSpecMap(s) : null, [s]), p = l.useMemo(() => null != s ? _.Z.generateGuildPermissionSpec(s) : null, [s]), R = l.useMemo(() => {
    if (null == s || null == O) return null;
    if (0 === E) return <div className={i()(f.permissionChiplet, f.noModPerms)}><o.Text variant={"text-sm/normal"} color={"text-feedback-positive"}>{g.intl.string(g.t.sXhykZ)}</o.Text></div>;
    let e = [];
    return null == p || p.forEach(t => {
      t.permissions.forEach(t => {
        let n = t.flag,
          l = T.pd.find(e => I.Plq[e] === n);
        if (null == l) return;
        let i = u[l];
        null != i && e.push(<N permission={l} roleIds={i} guild={s} specMap={O} />)
      })
    }), e
  }, [s, E, u, p, O]);
  return null == s ? null : <o.xJW title={(0, r.jsxs)("div", {
      className: f.headerContainer,
      children: [(0, r.jsx)(o.Text, {
        variant: "eyebrow",
        color: "header-secondary",
        children: g.intl.string(g.t.ZCq2nJ)
      }), (0, r.jsxs)(o.P3F, {
        className: f.viewAllPermissions,
        onClick: () => n(m.k.PERMISSIONS),
        children: [(0, r.jsx)(o.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: g.intl.format(g.t["0x6aTk"], {
            count: h
          })
        }), (0, r.jsx)(o.Fbu, {
          size: "custom",
          width: 16,
          height: 16
        })]
      })]
    })}><A.WM><A._2 description={(0, r.jsx)("div", {
          className: f.permissionsContainer,
          children: R
        })} /></A.WM></o.xJW>
})