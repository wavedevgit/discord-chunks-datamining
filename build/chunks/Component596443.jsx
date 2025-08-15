/** Chunk was on 78079 **/
/** chunk id: 596443, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk954955 = require("./954955.js"),
  s = require.n(Chunk954955),
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

function Q(A) {
  var e, t, l, a;
  let {
    permission: s,
    roleIds: d,
    guild: C,
    specMap: w,
    categoryTitle: D,
    userId: M
  } = A, b = (0, o.Wu)([E.Z], () => E.Z.getManyRoles(C.id, d)), Q = I.Plq[s], P = null != (l = null == (e = w[Q.toString()]) ? true : e.title) ? l : (0, u.wt)(Q), j = null != (a = null == (t = w[Q.toString()]) ? true : t.description) ? a : "", V = p._o.has(Q), m = p.Qn.includes(s), T = d.length, y = (0, o.e7)([B.Z], () => B.Z.can(I.Plq.MANAGE_ROLES, C), [C]), L = r.useCallback(async A => {
    y && (await v.Z.open(C.id, I.pNK.ROLES), await v.Z.selectRole(A))
  }, [y, C.id]);
  return (0, n.jsxs)("div", {
    className: i()(O.permissionItemContainer, {
      [O.elevatedPermission]: V
    }),
    children: [(0, n.jsxs)("div", {
      className: O.permissionItemHeader,
      children: [(0, n.jsxs)("div", {
        className: O.permissionTitle,
        children: [(0, n.jsx)(g.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: P
        }), null != D && (0, n.jsxs)("div", {
          className: O.permissionItemSubheader,
          children: [(0, n.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "header-muted",
            children: D
          }), V && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(c.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: g.TVs.colors.INTERACTIVE_MUTED.css
            }), (0, n.jsx)(g.ua7, {
              text: H.intl.string(H.t.GZvXuL),
              children: A => {
                var e, t;
                return (0, n.jsxs)(g.P3F, (e = function(A) {
                  for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                      n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
                      return Object.getOwnPropertyDescriptor(t, A).enumerable
                    }))), n.forEach(function(e) {
                      var n;
                      n = t[e], e in A ? Object.defineProperty(A, e, {
                        value: n,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      }) : A[e] = n
                    })
                  }
                  return A
                }({
                  className: O.elevatedPermissionContainer
                }, A), t = t = {
                  children: [(0, n.jsx)(g.tQf, {
                    size: "custom",
                    width: 12,
                    height: 12,
                    color: g.TVs.colors.TEXT_BRAND
                  }), (0, n.jsx)(g.Text, {
                    variant: "text-xs/normal",
                    color: "text-brand",
                    children: H.intl.string(H.t.k7Kqj4)
                  })]
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(A);
                    t.push.apply(t, n)
                  }
                  return t
                })(Object(t)).forEach(function(A) {
                  Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A))
                }), e))
              }
            })]
          }), !V && m && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(c.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: g.TVs.colors.INTERACTIVE_MUTED.css
            }), (0, n.jsx)("div", {
              className: O.elevatedPermissionContainer,
              children: (0, n.jsx)(g.Text, {
                variant: "text-xs/normal",
                color: "header-muted",
                children: H.intl.string(H.t.IfqUEB)
              })
            })]
          })]
        })]
      }), (0, n.jsx)(g.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: H.intl.format(H.t.KmJI4O, {
          roleCount: T
        })
      })]
    }), null != j && (0, n.jsx)("div", {
      className: O.permissionItemDescription,
      children: (0, n.jsx)(g.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: j
      })
    }), (0, n.jsx)("div", {
      className: O.permissionItemRoleContainer,
      children: b.map(A => (0, p.Ov)(A.id, M) ? (0, n.jsx)("div", {
        className: O.roleTooltipItem,
        children: (0, n.jsx)("div", {
          className: O.roleChiplet,
          children: (0, n.jsx)(g.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: H.intl.string(H.t.pclUFB)
          })
        })
      }, A.id) : (0, n.jsx)(g.P3F, {
        className: i()(O.roleTooltipItem, {
          [O.editable]: y && !(0, h.fI)(A)
        }),
        onClick: () => L(A.id),
        children: (0, n.jsx)(f.Z, {
          role: A,
          guildId: C.id,
          className: O.roleChiplet
        })
      }, A.id))
    })]
  })
}

function P(A, e) {
  return e.toLowerCase().includes(A.toLowerCase())
}

function j(A) {
  let {
    userId: e,
    guildId: t,
    location: l,
    className: a,
    onNavigate: c
  } = A, f = (0, o.e7)([w.default], () => w.default.getUser(e), [e]), v = (0, o.e7)([C.Z], () => C.Z.getGuild(t), [t]), h = (0, o.e7)([d.ZP], () => d.ZP.getMember(t, e), [t, e]), E = (0, p.B2)(e, t, p.pd), B = Object.keys(E).length, j = r.useMemo(() => null != v ? D.Z.getGuildPermissionSpecMap(v) : null, [v]), V = r.useMemo(() => null != v ? D.Z.generateGuildPermissionSpec(v) : null, [v]), [m, T] = r.useState(""), [y, L] = r.useState(""), x = r.useMemo(() => s()(L, 300), []), N = r.useCallback(A => {
    T(A), x(A)
  }, [x]), Z = r.useCallback(() => {
    T(""), L("")
  }, []), S = r.useMemo(() => {
    if (null == v || null == j || null == h) return null;
    if (0 === B) return (0, n.jsx)(g.Text, {
      variant: "text-sm/normal",
      children: H.intl.string(H.t.DEBGqK)
    });
    let A = [];
    return null == V || V.forEach(t => {
      t.permissions.forEach(r => {
        let l = r.flag,
          i = p.pd.find(A => I.Plq[A] === l);
        if (null == i) return;
        let a = E[i];
        if (null != a) {
          if (y.length > 0) {
            var s, o, g, c, f;
            let A = null != (c = null == (s = j[l.toString()]) ? true : s.title) ? c : (0, u.wt)(l),
              e = null != (f = null == (g = j[l.toString()]) || null == (o = g.description) ? true : o.toString()) ? f : "",
              n = t.title,
              r = p._o.has(l),
              a = p.Qn.includes(i),
              v = r ? H.intl.string(H.t.k7Kqj4) : a ? H.intl.string(H.t.IfqUEB) : null,
              h = P(y, A),
              d = P(y, e),
              E = P(y, n),
              C = null != v && P(y, v);
            if (!h && !d && !E && !C) return
          }
          A.push((0, n.jsx)(Q, {
            permission: i,
            roleIds: a,
            guild: v,
            specMap: j,
            categoryTitle: t.title,
            userId: e
          }, i))
        }
      })
    }), A
  }, [v, j, h, B, V, E, y, e]);
  return null == f || null == h ? null : (0, n.jsxs)("div", {
    className: i()(b.container, a),
    children: [(0, n.jsx)(M.Z, {
      guildId: t,
      userId: e,
      onNavigate: c
    }), (0, n.jsx)(g.Ttm, {
      className: O.permissionsGroupContainer,
      children: (0, n.jsx)(g.xJW, {
        title: H.intl.string(H.t.BBWnpq),
        children: (0, n.jsxs)("div", {
          className: O.permissionsItemContainer,
          children: [(0, n.jsx)(g.E1j, {
            size: "sm",
            className: O.searchBar,
            query: m,
            placeholder: H.intl.string(H.t["yD9+dH"]),
            onChange: N,
            onClear: Z,
            autoComplete: "off",
            inputProps: {
              autoCapitalize: "none",
              autoCorrect: "off",
              spellCheck: "false"
            }
          }), S]
        })
      })
    })]
  })
}