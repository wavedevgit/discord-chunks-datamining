/** Chunk was on 66201 **/
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

function U(e) {
  var t, n, i, s;
  let {
    permission: o,
    roleIds: m,
    guild: g,
    specMap: h,
    categoryTitle: O,
    userId: R
  } = e, b = (0, u.Wu)([f.Z], () => f.Z.getManyRoles(g.id, m)), U = p.Plq[o], L = null != (i = null == (t = h[U.toString()]) ? true : t.title) ? i : (0, T.wt)(U), M = null != (s = null == (n = h[U.toString()]) ? true : n.description) ? s : "", x = S._o.has(U), v = S.Qn.includes(o), P = m.length, j = (0, u.e7)([N.Z], () => N.Z.can(p.Plq.MANAGE_ROLES, g), [g]), y = l.useCallback(async e => {
    j && (await A.Z.open(g.id, p.pNK.ROLES), await A.Z.selectRole(e))
  }, [j, g.id]);
  return (0, r.jsxs)("div", {
    className: a()(D.permissionItemContainer, {
      [D.elevatedPermission]: x
    }),
    children: [(0, r.jsxs)("div", {
      className: D.permissionItemHeader,
      children: [(0, r.jsxs)("div", {
        className: D.permissionTitle,
        children: [(0, r.jsx)(E.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: L
        }), null != O && (0, r.jsxs)("div", {
          className: D.permissionItemSubheader,
          children: [(0, r.jsx)(E.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: O
          }), x && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(d.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: E.TVs.colors.INTERACTIVE_MUTED.css
            }), (0, r.jsx)(c.u, {
              text: C.intl.string(C.t.GZvXuP),
              children: (0, r.jsxs)(E.P3F, {
                className: D.elevatedPermissionContainer,
                children: [(0, r.jsx)(E.tQf, {
                  size: "custom",
                  width: 12,
                  height: 12,
                  color: E.TVs.colors.TEXT_BRAND
                }), (0, r.jsx)(E.Text, {
                  variant: "text-xs/normal",
                  color: "text-brand",
                  children: C.intl.string(C.t.k7Kqj7)
                })]
              })
            })]
          }), !x && v && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(d.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: E.TVs.colors.INTERACTIVE_MUTED.css
            }), (0, r.jsx)("div", {
              className: D.elevatedPermissionContainer,
              children: (0, r.jsx)(E.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: C.intl.string(C.t.IfqUEM)
              })
            })]
          })]
        })]
      }), (0, r.jsx)(E.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: C.intl.format(C.t.KmJI4A, {
          roleCount: P
        })
      })]
    }), null != M && (0, r.jsx)("div", {
      className: D.permissionItemDescription,
      children: (0, r.jsx)(E.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: M
      })
    }), (0, r.jsx)("div", {
      className: D.permissionItemRoleContainer,
      children: b.map(e => (0, S.Ov)(e.id, R) ? (0, r.jsx)("div", {
        className: D.roleTooltipItem,
        children: (0, r.jsx)("div", {
          className: D.roleChiplet,
          children: (0, r.jsx)(E.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: C.intl.string(C.t.pclUFJ)
          })
        })
      }, e.id) : (0, r.jsx)(E.P3F, {
        className: a()(D.roleTooltipItem, {
          [D.editable]: j && !(0, I.fI)(e)
        }),
        onClick: () => y(e.id),
        children: (0, r.jsx)(_.Z, {
          role: e,
          guildId: g.id,
          className: D.roleChiplet
        })
      }, e.id))
    })]
  })
}

function L(e, t) {
  return t.toLowerCase().includes(e.toLowerCase())
}

function M(e) {
  let {
    userId: t,
    guildId: n,
    location: i,
    className: s,
    onNavigate: c
  } = e, d = (0, u.e7)([h.default], () => h.default.getUser(t), [t]), _ = (0, u.e7)([g.Z], () => g.Z.getGuild(n), [n]), A = (0, u.e7)([m.ZP], () => m.ZP.getMember(n, t), [n, t]), I = (0, S.B2)(t, n, S.pd), f = Object.keys(I).length, N = l.useMemo(() => null != _ ? O.Z.getGuildPermissionSpecMap(_) : null, [_]), M = l.useMemo(() => null != _ ? O.Z.generateGuildPermissionSpec(_) : null, [_]), [x, v] = l.useState(""), [P, j] = l.useState(""), y = l.useMemo(() => o()(j, 300), []), G = l.useCallback(e => {
    v(e), y(e)
  }, [y]), k = l.useCallback(() => {
    v(""), j("")
  }, []), F = l.useMemo(() => {
    if (null == _ || null == N || null == A) return null;
    if (0 === f) return (0, r.jsx)(E.Text, {
      variant: "text-sm/normal",
      children: C.intl.string(C.t.DEBGqA)
    });
    let e = [];
    return null == M || M.forEach(n => {
      n.permissions.forEach(l => {
        let i = l.flag,
          a = S.pd.find(e => p.Plq[e] === i);
        if (null == a) return;
        let s = I[a];
        if (null != s) {
          if (P.length > 0) {
            var o, u, c, E, d;
            let e = null != (E = null == (o = N[i.toString()]) ? true : o.title) ? E : (0, T.wt)(i),
              t = null != (d = null == (c = N[i.toString()]) || null == (u = c.description) ? true : u.toString()) ? d : "",
              r = n.title,
              l = S._o.has(i),
              s = S.Qn.includes(a),
              _ = l ? C.intl.string(C.t.k7Kqj7) : s ? C.intl.string(C.t.IfqUEM) : null,
              A = L(P, e),
              I = L(P, t),
              m = L(P, r),
              f = null != _ && L(P, _);
            if (!A && !I && !m && !f) return
          }
          e.push((0, r.jsx)(U, {
            permission: a,
            roleIds: s,
            guild: _,
            specMap: N,
            categoryTitle: n.title,
            userId: t
          }, a))
        }
      })
    }), e
  }, [_, N, A, f, M, I, P, t]);
  return null == d || null == A ? null : (0, r.jsxs)("div", {
    className: a()(b.container, s),
    children: [(0, r.jsx)(R.Z, {
      guildId: n,
      userId: t,
      onNavigate: c
    }), (0, r.jsx)(E.Ttm, {
      className: D.permissionsGroupContainer,
      children: (0, r.jsx)(E.C3N, {
        label: C.intl.string(C.t.BBWnpr),
        children: (0, r.jsxs)("div", {
          className: D.permissionsItemContainer,
          children: [(0, r.jsx)(E.E1j, {
            size: "sm",
            query: x,
            placeholder: C.intl.string(C.t["yD9+dN"]),
            onChange: G,
            onClear: k,
            autoComplete: "off",
            inputProps: {
              autoCapitalize: "none",
              autoCorrect: "off",
              spellCheck: "false"
            }
          }), F]
        })
      })
    })]
  })
}