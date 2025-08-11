/** Chunk was on 12097 **/
/** chunk id: 596443, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk954955 = require("./954955.js"),
  o = require.n(Chunk954955),
  Chunk399606 = require("./399606.js"),
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
  Chunk12740 = require("./12740.js"),
  Chunk444021 = require("./444021.js");

function D(e) {
  var t, n, s, a;
  let {
    permission: o,
    roleIds: m,
    guild: g,
    specMap: N,
    categoryTitle: h,
    userId: O
  } = e, C = (0, u.Wu)([I.Z], () => I.Z.getManyRoles(g.id, m)), D = R.Plq[o], b = null != (s = null == (t = N[D.toString()]) ? true : t.title) ? s : (0, A.wt)(D), L = null != (a = null == (n = N[D.toString()]) ? true : n.description) ? a : "", x = p._o.has(D), U = p.Qn.includes(o), M = m.length, P = (0, u.e7)([f.Z], () => f.Z.can(R.Plq.MANAGE_ROLES, g), [g]), j = l.useCallback(async e => {
    P && (await _.Z.open(g.id, R.pNK.ROLES), await _.Z.selectRole(e))
  }, [P, g.id]);
  return (0, r.jsxs)("div", {
    className: i()(v.permissionItemContainer, {
      [v.elevatedPermission]: x
    }),
    children: [(0, r.jsxs)("div", {
      className: v.permissionItemHeader,
      children: [(0, r.jsxs)("div", {
        className: v.permissionTitle,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: b
        }), null != h && (0, r.jsxs)("div", {
          className: v.permissionItemSubheader,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-muted",
            children: h
          }), x && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(E.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: c.TVs.colors.INTERACTIVE_MUTED.css
            }), (0, r.jsx)(c.ua7, {
              text: S.intl.string(S.t.GZvXuL),
              children: e => {
                var t, n;
                return (0, r.jsxs)(c.P3F, (t = function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                      var r;
                      r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      }) : e[t] = r
                    })
                  }
                  return e
                }({
                  className: v.elevatedPermissionContainer
                }, e), n = n = {
                  children: [(0, r.jsx)(c.tQf, {
                    size: "custom",
                    width: 12,
                    height: 12,
                    color: c.TVs.colors.TEXT_BRAND
                  }), (0, r.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "text-brand",
                    children: S.intl.string(S.t.k7Kqj4)
                  })]
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(n)).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t))
              }
            })]
          }), !x && U && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(E.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: c.TVs.colors.INTERACTIVE_MUTED.css
            }), (0, r.jsx)("div", {
              className: v.elevatedPermissionContainer,
              children: (0, r.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "header-muted",
                children: S.intl.string(S.t.IfqUEB)
              })
            })]
          })]
        })]
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: S.intl.format(S.t.KmJI4O, {
          roleCount: M
        })
      })]
    }), null != L && (0, r.jsx)("div", {
      className: v.permissionItemDescription,
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: L
      })
    }), (0, r.jsx)("div", {
      className: v.permissionItemRoleContainer,
      children: C.map(e => (0, p.Ov)(e.id, O) ? (0, r.jsx)("div", {
        className: v.roleTooltipItem,
        children: (0, r.jsx)("div", {
          className: v.roleChiplet,
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: S.intl.string(S.t.pclUFB)
          })
        })
      }, e.id) : (0, r.jsx)(c.P3F, {
        className: i()(v.roleTooltipItem, {
          [v.editable]: P && !(0, T.fI)(e)
        }),
        onClick: () => j(e.id),
        children: (0, r.jsx)(d.Z, {
          role: e,
          guildId: g.id,
          className: v.roleChiplet
        })
      }, e.id))
    })]
  })
}

function b(e, t) {
  return t.toLowerCase().includes(e.toLowerCase())
}

function L(e) {
  let {
    userId: t,
    guildId: n,
    location: s,
    className: a,
    onNavigate: E
  } = e, d = (0, u.e7)([N.default], () => N.default.getUser(t), [t]), _ = (0, u.e7)([g.Z], () => g.Z.getGuild(n), [n]), T = (0, u.e7)([m.ZP], () => m.ZP.getMember(n, t), [n, t]), I = (0, p.B2)(t, n, p.pd), f = Object.keys(I).length, L = l.useMemo(() => null != _ ? h.Z.getGuildPermissionSpecMap(_) : null, [_]), x = l.useMemo(() => null != _ ? h.Z.generateGuildPermissionSpec(_) : null, [_]), [U, M] = l.useState(""), [P, j] = l.useState(""), y = l.useMemo(() => o()(j, 300), []), w = l.useCallback(e => {
    M(e), y(e)
  }, [y]), G = l.useCallback(() => {
    M(""), j("")
  }, []), k = l.useMemo(() => {
    if (null == _ || null == L || null == T) return null;
    if (0 === f) return (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: S.intl.string(S.t.DEBGqK)
    });
    let e = [];
    return null == x || x.forEach(n => {
      n.permissions.forEach(l => {
        let s = l.flag,
          i = p.pd.find(e => R.Plq[e] === s);
        if (null == i) return;
        let a = I[i];
        if (null != a) {
          if (P.length > 0) {
            var o, u, c, E, d;
            let e = null != (E = null == (o = L[s.toString()]) ? true : o.title) ? E : (0, A.wt)(s),
              t = null != (d = null == (c = L[s.toString()]) || null == (u = c.description) ? true : u.toString()) ? d : "",
              r = n.title,
              l = p._o.has(s),
              a = p.Qn.includes(i),
              _ = l ? S.intl.string(S.t.k7Kqj4) : a ? S.intl.string(S.t.IfqUEB) : null,
              T = b(P, e),
              m = b(P, t),
              I = b(P, r),
              g = null != _ && b(P, _);
            if (!T && !m && !I && !g) return
          }
          e.push((0, r.jsx)(D, {
            permission: i,
            roleIds: a,
            guild: _,
            specMap: L,
            categoryTitle: n.title,
            userId: t
          }, i))
        }
      })
    }), e
  }, [_, L, T, f, x, I, P, t]);
  return null == d || null == T ? null : (0, r.jsxs)("div", {
    className: i()(C.container, a),
    children: [(0, r.jsx)(O.Z, {
      guildId: n,
      userId: t,
      onNavigate: E
    }), (0, r.jsx)(c.Ttm, {
      className: v.permissionsGroupContainer,
      children: (0, r.jsx)(c.xJW, {
        title: S.intl.string(S.t.BBWnpq),
        children: (0, r.jsxs)("div", {
          className: v.permissionsItemContainer,
          children: [(0, r.jsx)(c.E1j, {
            size: "sm",
            className: v.searchBar,
            query: U,
            placeholder: S.intl.string(S.t["yD9+dH"]),
            onChange: w,
            onClear: G,
            autoComplete: "off",
            inputProps: {
              autoCapitalize: "none",
              autoCorrect: "off",
              spellCheck: "false"
            }
          }), k]
        })
      })
    })]
  })
}