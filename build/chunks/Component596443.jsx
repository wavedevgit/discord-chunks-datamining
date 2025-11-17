/** Chunk was on 66201 **/
/** chunk id: 596443, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk87819 = require("./87819.js"),
  Chunk625109 = require("./625109.js");

function L(e) {
  var t, n, i, a;
  let {
    permission: o,
    roleIds: m,
    guild: N,
    specMap: O,
    categoryTitle: f,
    userId: R
  } = e, D = (0, u.Wu)([g.Z], () => g.Z.getManyRoles(N.id, m)), L = p.Plq[o], M = null != (i = null == (t = O[L.toString()]) ? true : t.title) ? i : (0, T.wt)(L), x = null != (a = null == (n = O[L.toString()]) ? true : n.description) ? a : "", b = S._o.has(L), v = S.Qn.includes(o), P = m.length, j = (0, u.e7)([h.Z], () => h.Z.can(p.Plq.MANAGE_ROLES, N), [N]), y = l.useCallback(async e => {
    j && (await A.Z.open(N.id, p.pNK.ROLES), await A.Z.selectRole(e))
  }, [j, N.id]);
  return (0, r.jsxs)("div", {
    className: s()(U.permissionItemContainer, {
      [U.elevatedPermission]: b
    }),
    children: [(0, r.jsxs)("div", {
      className: U.permissionItemHeader,
      children: [(0, r.jsxs)("div", {
        className: U.permissionTitle,
        children: [(0, r.jsx)(E.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: M
        }), null != f && (0, r.jsxs)("div", {
          className: U.permissionItemSubheader,
          children: [(0, r.jsx)(E.Text, {
            variant: "text-xs/normal",
            color: "header-muted",
            children: f
          }), b && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(d.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: E.TVs.colors.INTERACTIVE_MUTED.css
            }), (0, r.jsx)(c.u, {
              text: C.intl.string(C.t.GZvXuP),
              children: (0, r.jsxs)(E.P3F, {
                className: U.elevatedPermissionContainer,
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
          }), !b && v && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(d.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: E.TVs.colors.INTERACTIVE_MUTED.css
            }), (0, r.jsx)("div", {
              className: U.elevatedPermissionContainer,
              children: (0, r.jsx)(E.Text, {
                variant: "text-xs/normal",
                color: "header-muted",
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
    }), null != x && (0, r.jsx)("div", {
      className: U.permissionItemDescription,
      children: (0, r.jsx)(E.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: x
      })
    }), (0, r.jsx)("div", {
      className: U.permissionItemRoleContainer,
      children: D.map(e => (0, S.Ov)(e.id, R) ? (0, r.jsx)("div", {
        className: U.roleTooltipItem,
        children: (0, r.jsx)("div", {
          className: U.roleChiplet,
          children: (0, r.jsx)(E.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: C.intl.string(C.t.pclUFJ)
          })
        })
      }, e.id) : (0, r.jsx)(E.P3F, {
        className: s()(U.roleTooltipItem, {
          [U.editable]: j && !(0, I.fI)(e)
        }),
        onClick: () => y(e.id),
        children: (0, r.jsx)(_.Z, {
          role: e,
          guildId: N.id,
          className: U.roleChiplet
        })
      }, e.id))
    })]
  })
}

function M(e, t) {
  return t.toLowerCase().includes(e.toLowerCase())
}

function x(e) {
  let {
    userId: t,
    guildId: n,
    location: i,
    className: a,
    onNavigate: c
  } = e, d = (0, u.e7)([O.default], () => O.default.getUser(t), [t]), _ = (0, u.e7)([N.Z], () => N.Z.getGuild(n), [n]), A = (0, u.e7)([m.ZP], () => m.ZP.getMember(n, t), [n, t]), I = (0, S.B2)(t, n, S.pd), g = Object.keys(I).length, h = l.useMemo(() => null != _ ? f.Z.getGuildPermissionSpecMap(_) : null, [_]), x = l.useMemo(() => null != _ ? f.Z.generateGuildPermissionSpec(_) : null, [_]), [b, v] = l.useState(""), [P, j] = l.useState(""), y = l.useMemo(() => o()(j, 300), []), G = l.useCallback(e => {
    v(e), y(e)
  }, [y]), k = l.useCallback(() => {
    v(""), j("")
  }, []), F = l.useMemo(() => {
    if (null == _ || null == h || null == A) return null;
    if (0 === g) return (0, r.jsx)(E.Text, {
      variant: "text-sm/normal",
      children: C.intl.string(C.t.DEBGqA)
    });
    let e = [];
    return null == x || x.forEach(n => {
      n.permissions.forEach(l => {
        let i = l.flag,
          s = S.pd.find(e => p.Plq[e] === i);
        if (null == s) return;
        let a = I[s];
        if (null != a) {
          if (P.length > 0) {
            var o, u, c, E, d;
            let e = null != (E = null == (o = h[i.toString()]) ? true : o.title) ? E : (0, T.wt)(i),
              t = null != (d = null == (c = h[i.toString()]) || null == (u = c.description) ? true : u.toString()) ? d : "",
              r = n.title,
              l = S._o.has(i),
              a = S.Qn.includes(s),
              _ = l ? C.intl.string(C.t.k7Kqj7) : a ? C.intl.string(C.t.IfqUEM) : null,
              A = M(P, e),
              I = M(P, t),
              m = M(P, r),
              g = null != _ && M(P, _);
            if (!A && !I && !m && !g) return
          }
          e.push((0, r.jsx)(L, {
            permission: s,
            roleIds: a,
            guild: _,
            specMap: h,
            categoryTitle: n.title,
            userId: t
          }, s))
        }
      })
    }), e
  }, [_, h, A, g, x, I, P, t]);
  return null == d || null == A ? null : (0, r.jsxs)("div", {
    className: s()(D.container, a),
    children: [(0, r.jsx)(R.Z, {
      guildId: n,
      userId: t,
      onNavigate: c
    }), (0, r.jsx)(E.Ttm, {
      className: U.permissionsGroupContainer,
      children: (0, r.jsx)(E.C3N, {
        label: C.intl.string(C.t.BBWnpr),
        children: (0, r.jsxs)("div", {
          className: U.permissionsItemContainer,
          children: [(0, r.jsx)(E.E1j, {
            size: "sm",
            query: b,
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