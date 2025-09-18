/** Chunk was on 10576 **/
/** chunk id: 596443, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk87819 = require("./87819.js"),
  Chunk625109 = require("./625109.js");

function D(e) {
  var t, n, i, s;
  let {
    permission: o,
    roleIds: m,
    guild: g,
    specMap: N,
    categoryTitle: O,
    userId: f
  } = e, C = (0, u.Wu)([I.Z], () => I.Z.getManyRoles(g.id, m)), D = S.Plq[o], U = null != (i = null == (t = N[D.toString()]) ? true : t.title) ? i : (0, A.wt)(D), M = null != (s = null == (n = N[D.toString()]) ? true : n.description) ? s : "", b = p._o.has(D), v = p.Qn.includes(o), x = m.length, P = (0, u.e7)([h.Z], () => h.Z.can(S.Plq.MANAGE_ROLES, g), [g]), j = l.useCallback(async e => {
    P && (await _.Z.open(g.id, S.pNK.ROLES), await _.Z.selectRole(e))
  }, [P, g.id]);
  return (0, r.jsxs)("div", {
    className: a()(L.permissionItemContainer, {
      [L.elevatedPermission]: b
    }),
    children: [(0, r.jsxs)("div", {
      className: L.permissionItemHeader,
      children: [(0, r.jsxs)("div", {
        className: L.permissionTitle,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: U
        }), null != O && (0, r.jsxs)("div", {
          className: L.permissionItemSubheader,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-muted",
            children: O
          }), b && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(E.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: c.TVs.colors.INTERACTIVE_MUTED.css
            }), (0, r.jsx)(c.ua7, {
              text: R.intl.string(R.t.GZvXuL),
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
                  className: L.elevatedPermissionContainer
                }, e), n = n = {
                  children: [(0, r.jsx)(c.tQf, {
                    size: "custom",
                    width: 12,
                    height: 12,
                    color: c.TVs.colors.TEXT_BRAND
                  }), (0, r.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "text-brand",
                    children: R.intl.string(R.t.k7Kqj4)
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
          }), !b && v && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(E.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: c.TVs.colors.INTERACTIVE_MUTED.css
            }), (0, r.jsx)("div", {
              className: L.elevatedPermissionContainer,
              children: (0, r.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "header-muted",
                children: R.intl.string(R.t.IfqUEB)
              })
            })]
          })]
        })]
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: R.intl.format(R.t.KmJI4O, {
          roleCount: x
        })
      })]
    }), null != M && (0, r.jsx)("div", {
      className: L.permissionItemDescription,
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: M
      })
    }), (0, r.jsx)("div", {
      className: L.permissionItemRoleContainer,
      children: C.map(e => (0, p.Ov)(e.id, f) ? (0, r.jsx)("div", {
        className: L.roleTooltipItem,
        children: (0, r.jsx)("div", {
          className: L.roleChiplet,
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: R.intl.string(R.t.pclUFB)
          })
        })
      }, e.id) : (0, r.jsx)(c.P3F, {
        className: a()(L.roleTooltipItem, {
          [L.editable]: P && !(0, T.fI)(e)
        }),
        onClick: () => j(e.id),
        children: (0, r.jsx)(d.Z, {
          role: e,
          guildId: g.id,
          className: L.roleChiplet
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
    onNavigate: E
  } = e, d = (0, u.e7)([N.default], () => N.default.getUser(t), [t]), _ = (0, u.e7)([g.Z], () => g.Z.getGuild(n), [n]), T = (0, u.e7)([m.ZP], () => m.ZP.getMember(n, t), [n, t]), I = (0, p.B2)(t, n, p.pd), h = Object.keys(I).length, M = l.useMemo(() => null != _ ? O.Z.getGuildPermissionSpecMap(_) : null, [_]), b = l.useMemo(() => null != _ ? O.Z.generateGuildPermissionSpec(_) : null, [_]), [v, x] = l.useState(""), [P, j] = l.useState(""), y = l.useMemo(() => o()(j, 300), []), G = l.useCallback(e => {
    x(e), y(e)
  }, [y]), w = l.useCallback(() => {
    x(""), j("")
  }, []), k = l.useMemo(() => {
    if (null == _ || null == M || null == T) return null;
    if (0 === h) return (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: R.intl.string(R.t.DEBGqK)
    });
    let e = [];
    return null == b || b.forEach(n => {
      n.permissions.forEach(l => {
        let i = l.flag,
          a = p.pd.find(e => S.Plq[e] === i);
        if (null == a) return;
        let s = I[a];
        if (null != s) {
          if (P.length > 0) {
            var o, u, c, E, d;
            let e = null != (E = null == (o = M[i.toString()]) ? true : o.title) ? E : (0, A.wt)(i),
              t = null != (d = null == (c = M[i.toString()]) || null == (u = c.description) ? true : u.toString()) ? d : "",
              r = n.title,
              l = p._o.has(i),
              s = p.Qn.includes(a),
              _ = l ? R.intl.string(R.t.k7Kqj4) : s ? R.intl.string(R.t.IfqUEB) : null,
              T = U(P, e),
              m = U(P, t),
              I = U(P, r),
              g = null != _ && U(P, _);
            if (!T && !m && !I && !g) return
          }
          e.push((0, r.jsx)(D, {
            permission: a,
            roleIds: s,
            guild: _,
            specMap: M,
            categoryTitle: n.title,
            userId: t
          }, a))
        }
      })
    }), e
  }, [_, M, T, h, b, I, P, t]);
  return null == d || null == T ? null : (0, r.jsxs)("div", {
    className: a()(C.container, s),
    children: [(0, r.jsx)(f.Z, {
      guildId: n,
      userId: t,
      onNavigate: E
    }), (0, r.jsx)(c.Ttm, {
      className: L.permissionsGroupContainer,
      children: (0, r.jsx)(c.xJW, {
        title: R.intl.string(R.t.BBWnpq),
        children: (0, r.jsxs)("div", {
          className: L.permissionsItemContainer,
          children: [(0, r.jsx)(c.E1j, {
            size: "sm",
            query: v,
            placeholder: R.intl.string(R.t["yD9+dH"]),
            onChange: G,
            onClear: w,
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