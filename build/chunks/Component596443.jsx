/** Chunk was on 69937 **/
/** chunk id: 596443, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk954955 = require("./954955.js"),
  o = require.n(Chunk954955),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk79712 = require("./79712.jsx"),
  Chunk285173 = require("./285173.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk422559 = require("./422559.js"),
  Chunk345162 = require("./345162.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk233608 = require("./233608.js"),
  Chunk370595 = require("./370595.jsx"),
  Chunk351127 = require("./351127.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk280533 = require("./280533.js"),
  Chunk103186 = require("./103186.js");

function L(e) {
  var t, n, i, s;
  let {
    permission: o,
    roleIds: g,
    guild: m,
    specMap: N,
    categoryTitle: O,
    userId: p
  } = e, b = (0, c.Wu)([I.Z], () => I.Z.getManyRoles(m.id, g)), L = S.Plq[o], U = null != (i = null == (t = N[L.toString()]) ? true : t.title) ? i : (0, f.wt)(L), M = null != (s = null == (n = N[L.toString()]) ? true : n.description) ? s : "", v = R._o.has(L), x = R.Qn.includes(o), P = g.length, j = (0, c.e7)([h.Z], () => h.Z.can(S.Plq.MANAGE_ROLES, m), [m]), y = l.useCallback(async e => {
    j && (await A.Z.open(m.id, S.pNK.ROLES), await A.Z.selectRole(e))
  }, [j, m.id]);
  return (0, r.jsxs)("div", {
    className: a()(D.permissionItemContainer, {
      [D.elevatedPermission]: v
    }),
    children: [(0, r.jsxs)("div", {
      className: D.permissionItemHeader,
      children: [(0, r.jsxs)("div", {
        className: D.permissionTitle,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: U
        }), null != O && (0, r.jsxs)("div", {
          className: D.permissionItemSubheader,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: O
          }), v && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(E.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: d.TVs.colors.INTERACTIVE_MUTED.css
            }), (0, r.jsx)(u.u, {
              text: C.intl.string(C.t.GZvXuP),
              children: (0, r.jsxs)(d.P3F, {
                className: D.elevatedPermissionContainer,
                children: [(0, r.jsx)(d.tQf, {
                  size: "custom",
                  width: 12,
                  height: 12,
                  color: d.TVs.colors.TEXT_BRAND
                }), (0, r.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  color: "text-brand",
                  children: C.intl.string(C.t.k7Kqj7)
                })]
              })
            })]
          }), !v && x && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(E.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: d.TVs.colors.INTERACTIVE_MUTED.css
            }), (0, r.jsx)("div", {
              className: D.elevatedPermissionContainer,
              children: (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: C.intl.string(C.t.IfqUEM)
              })
            })]
          })]
        })]
      }), (0, r.jsx)(d.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: C.intl.format(C.t.KmJI4A, {
          roleCount: P
        })
      })]
    }), null != M && (0, r.jsx)("div", {
      className: D.permissionItemDescription,
      children: (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: M
      })
    }), (0, r.jsx)("div", {
      className: D.permissionItemRoleContainer,
      children: b.map(e => (0, R.Ov)(e.id, p) ? (0, r.jsx)("div", {
        className: D.roleTooltipItem,
        children: (0, r.jsx)("div", {
          className: D.roleChiplet,
          children: (0, r.jsx)(d.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: C.intl.string(C.t.pclUFJ)
          })
        })
      }, e.id) : (0, r.jsx)(d.P3F, {
        className: a()(D.roleTooltipItem, {
          [D.editable]: j && !(0, T.fI)(e)
        }),
        onClick: () => y(e.id),
        children: (0, r.jsx)(_.Z, {
          role: e,
          guildId: m.id,
          className: D.roleChiplet
        })
      }, e.id))
    })]
  })
}

function U(e, t) {
  return t.toLowerCase().includes(e.toLowerCase())
}

function M(e) {
  let {
    userId: t,
    guildId: n,
    location: i,
    className: s,
    onNavigate: u
  } = e, E = (0, c.e7)([N.default], () => N.default.getUser(t), [t]), _ = (0, c.e7)([m.Z], () => m.Z.getGuild(n), [n]), A = (0, c.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]), T = (0, R.B2)(t, n, R.pd), I = Object.keys(T).length, h = l.useMemo(() => null != _ ? O.Z.getGuildPermissionSpecMap(_) : null, [_]), M = l.useMemo(() => null != _ ? O.Z.generateGuildPermissionSpec(_) : null, [_]), [v, x] = l.useState(""), [P, j] = l.useState(""), y = l.useMemo(() => o()(j, 300), []), G = l.useCallback(e => {
    x(e), y(e)
  }, [y]), k = l.useCallback(() => {
    x(""), j("")
  }, []), w = l.useMemo(() => {
    if (null == _ || null == h || null == A) return null;
    if (0 === I) return (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: C.intl.string(C.t.DEBGqA)
    });
    let e = [];
    return null == M || M.forEach(n => {
      n.permissions.forEach(l => {
        let i = l.flag,
          a = R.pd.find(e => S.Plq[e] === i);
        if (null == a) return;
        let s = T[a];
        if (null != s) {
          if (P.length > 0) {
            var o, c, u, d, E;
            let e = null != (d = null == (o = h[i.toString()]) ? true : o.title) ? d : (0, f.wt)(i),
              t = null != (E = null == (u = h[i.toString()]) || null == (c = u.description) ? true : c.toString()) ? E : "",
              r = n.title,
              l = R._o.has(i),
              s = R.Qn.includes(a),
              _ = l ? C.intl.string(C.t.k7Kqj7) : s ? C.intl.string(C.t.IfqUEM) : null,
              A = U(P, e),
              T = U(P, t),
              g = U(P, r),
              I = null != _ && U(P, _);
            if (!A && !T && !g && !I) return
          }
          e.push((0, r.jsx)(L, {
            permission: a,
            roleIds: s,
            guild: _,
            specMap: h,
            categoryTitle: n.title,
            userId: t
          }, a))
        }
      })
    }), e
  }, [_, h, A, I, M, T, P, t]);
  return null == E || null == A ? null : (0, r.jsxs)("div", {
    className: a()(b.container, s),
    children: [(0, r.jsx)(p.Z, {
      guildId: n,
      userId: t,
      onNavigate: u
    }), (0, r.jsx)(d.Ttm, {
      className: D.permissionsGroupContainer,
      children: (0, r.jsx)(d.C3N, {
        label: C.intl.string(C.t.BBWnpr),
        children: (0, r.jsxs)("div", {
          className: D.permissionsItemContainer,
          children: [(0, r.jsx)(d.E1j, {
            size: "sm",
            query: v,
            placeholder: C.intl.string(C.t["yD9+dN"]),
            onChange: G,
            onClear: k,
            autoComplete: "off",
            inputProps: {
              autoCapitalize: "none",
              autoCorrect: "off",
              spellCheck: "false"
            }
          }), w]
        })
      })
    })]
  })
}