/** Chunk was on 71611 **/
n.d(t, {
  Z: () => S
}), n(266796), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(954955),
  s = n.n(a),
  c = n(399606),
  u = n(481060),
  d = n(605436),
  p = n(79712),
  h = n(285173),
  f = n(434404),
  m = n(422559),
  g = n(271383),
  b = n(430824),
  _ = n(496675),
  C = n(594174),
  v = n(233608),
  y = n(370595),
  x = n(351127),
  j = n(981631),
  O = n(388032),
  E = n(211971),
  N = n(163253);

function I(e) {
  var t, n, l, a;
  let {
    permission: s,
    roleIds: g,
    guild: C,
    specMap: v,
    categoryTitle: y,
    userId: E
  } = e, I = (0, c.e7)([b.Z], () => b.Z.getRoles(C.id)), P = j.Plq[s], S = null !== (l = null === (t = v[P.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== l ? l : (0, m.wt)(P), Z = null !== (a = null === (n = v[P.toString()]) || void 0 === n ? void 0 : n.description) && void 0 !== a ? a : "", T = x._o.has(P), A = x.Qn.includes(s), w = g.length, R = (0, c.e7)([_.Z], () => _.Z.can(j.Plq.MANAGE_ROLES, C), [C]), M = i.useCallback(async e => {
    R && (await f.Z.open(C.id, j.pNK.ROLES), await f.Z.selectRole(e))
  }, [R, C.id]);
  return (0, r.jsxs)("div", {
    className: o()(N.permissionItemContainer, {
      [N.elevatedPermission]: T
    }),
    children: [(0, r.jsxs)("div", {
      className: N.permissionItemHeader,
      children: [(0, r.jsxs)("div", {
        className: N.permissionTitle,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: S
        }), null != y && (0, r.jsxs)("div", {
          className: N.permissionItemSubheader,
          children: [(0, r.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "header-muted",
            children: y
          }), T && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(p.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: u.TVs.colors.INTERACTIVE_MUTED.css
            }), (0, r.jsx)(u.ua7, {
              text: O.NW.string(O.t.GZvXuL),
              children: e => {
                var t, n;
                return (0, r.jsxs)(u.P3F, (t = function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                      var r;
                      r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      }) : e[t] = r
                    })
                  }
                  return e
                }({
                  className: N.elevatedPermissionContainer
                }, e), n = n = {
                  children: [(0, r.jsx)(u.tQf, {
                    size: "custom",
                    width: 12,
                    height: 12,
                    color: u.TVs.colors.TEXT_BRAND
                  }), (0, r.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "text-brand",
                    children: O.NW.string(O.t.k7Kqj4)
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
          }), !T && A && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(p.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: u.TVs.colors.INTERACTIVE_MUTED.css
            }), (0, r.jsx)("div", {
              className: N.elevatedPermissionContainer,
              children: (0, r.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "header-muted",
                children: O.NW.string(O.t.IfqUEB)
              })
            })]
          })]
        })]
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-normal",
        children: O.NW.format(O.t.KmJI4O, {
          roleCount: w
        })
      })]
    }), null != Z && (0, r.jsx)("div", {
      className: N.permissionItemDescription,
      children: (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: Z
      })
    }), (0, r.jsx)("div", {
      className: N.permissionItemRoleContainer,
      children: g.map(e => (0, x.Ov)(e, E) ? (0, r.jsx)("div", {
        className: N.roleTooltipItem,
        children: (0, r.jsx)("div", {
          className: N.roleChiplet,
          children: (0, r.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-normal",
            children: O.NW.string(O.t.pclUFB)
          })
        })
      }, e) : (0, r.jsx)(u.P3F, {
        className: o()(N.roleTooltipItem, {
          [N.editable]: R && !(0, d.pM)(C.id, e)
        }),
        onClick: () => M(e),
        children: (0, r.jsx)(h.Z, {
          role: I[e],
          guildId: C.id,
          className: N.roleChiplet
        })
      }, e))
    })]
  })
}

function P(e, t) {
  return t.toLowerCase().includes(e.toLowerCase())
}

function S(e) {
  let {
    userId: t,
    guildId: n,
    location: l,
    className: a,
    onNavigate: d
  } = e, p = (0, c.e7)([C.default], () => C.default.getUser(t), [t]), h = (0, c.e7)([b.Z], () => b.Z.getGuild(n), [n]), f = (0, c.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]), _ = (0, x.B2)(t, n, x.pd), S = Object.keys(_).length, Z = i.useMemo(() => null != h ? v.Z.getGuildPermissionSpecMap(h) : null, [h]), T = i.useMemo(() => null != h ? v.Z.generateGuildPermissionSpec(h) : null, [h]), [A, w] = i.useState(""), [R, M] = i.useState(""), k = i.useMemo(() => s()(M, 300), []), L = i.useCallback(e => {
    w(e), k(e)
  }, [k]), D = i.useCallback(() => {
    w(""), M("")
  }, []), W = i.useMemo(() => {
    if (null == h || null == Z || null == f) return null;
    if (0 === S) return (0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: O.NW.string(O.t.DEBGqK)
    });
    let e = [];
    return null == T || T.forEach(n => {
      n.permissions.forEach(i => {
        let l = i.flag,
          o = x.pd.find(e => j.Plq[e] === l);
        if (null == o) return;
        let a = _[o];
        if (null != a) {
          if (R.length > 0) {
            var s, c, u, d, p;
            let e = null !== (d = null === (s = Z[l.toString()]) || void 0 === s ? void 0 : s.title) && void 0 !== d ? d : (0, m.wt)(l),
              t = null !== (p = null === (u = Z[l.toString()]) || void 0 === u ? void 0 : null === (c = u.description) || void 0 === c ? void 0 : c.toString()) && void 0 !== p ? p : "",
              r = n.title,
              i = x._o.has(l),
              a = x.Qn.includes(o),
              h = i ? O.NW.string(O.t.k7Kqj4) : a ? O.NW.string(O.t.IfqUEB) : null,
              f = P(R, e),
              g = P(R, t),
              b = P(R, r),
              _ = null != h && P(R, h);
            if (!f && !g && !b && !_) return
          }
          e.push((0, r.jsx)(I, {
            permission: o,
            roleIds: a,
            guild: h,
            specMap: Z,
            categoryTitle: n.title,
            userId: t
          }, o))
        }
      })
    }), e
  }, [h, Z, f, S, T, _, R, t]);
  return null == p || null == f ? null : (0, r.jsxs)("div", {
    className: o()(E.container, a),
    children: [(0, r.jsx)(y.Z, {
      guildId: n,
      userId: t,
      onNavigate: d
    }), (0, r.jsx)(u.Ttm, {
      className: N.permissionsGroupContainer,
      children: (0, r.jsx)(u.xJW, {
        title: O.NW.string(O.t.BBWnpq),
        children: (0, r.jsxs)("div", {
          className: N.permissionsItemContainer,
          children: [(0, r.jsx)(u.E1j, {
            className: N.searchBar,
            query: A,
            placeholder: O.NW.string(O.t["yD9+dH"]),
            onChange: L,
            onClear: D,
            autoComplete: "off",
            inputProps: {
              autoCapitalize: "none",
              autoCorrect: "off",
              spellCheck: "false"
            }
          }), W]
        })
      })
    })]
  })
}