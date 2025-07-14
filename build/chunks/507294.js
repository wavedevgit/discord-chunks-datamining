/** Chunk was on 40897 **/
t.d(r, {
  default: () => E,
  g: () => D
}), t(388685), t(472816), t(794429), t(953529);
var n = t(255367),
  i = t(73800),
  l = t(120356),
  o = t.n(l),
  a = t(435935),
  s = t(442837),
  c = t(780384),
  d = t(481060),
  u = t(239091),
  f = t(749210),
  p = t(410030),
  v = t(726542),
  m = t(884338),
  b = t(367907),
  h = t(313201),
  j = t(598077),
  g = t(314897),
  x = t(271383),
  y = t(485386),
  O = t(626135),
  R = t(63063),
  N = t(134433),
  _ = t(225104),
  P = t(981631),
  k = t(388032),
  w = t(739587),
  C = t(472840);

function Z(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(r) {
      var n;
      n = t[r], r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = n
    })
  }
  return e
}

function D(e, r) {
  (0, d.ZDy)(async () => {
    let {
      default: i
    } = await Promise.all([t.e("82412"), t.e("80993")]).then(t.bind(t, 107807));
    return t => (0, n.jsx)(i, Z({
      role: e,
      guildId: r
    }, t))
  })
}
let E = function(e) {
  let {
    guildId: r,
    transitionState: l,
    onClose: E
  } = e, S = (0, s.e7)([y.Z], () => y.Z.getRoles(r)), I = (0, s.e7)([g.default], () => g.default.getId()), A = (0, s.e7)([x.ZP], () => x.ZP.getMember(r, I)), [T, z] = i.useState([]), G = (0, p.ZP)(), H = (0, h.Dt)();
  if (i.useEffect(() => {
      0 !== T.length && O.default.track(P.rMx.PASSPORT_ENTRY_VIEWED, Z({
        role_ids: T.map(e => {
          let {
            role_id: r
          } = e;
          return r
        })
      }, (0, b.hH)(r)))
    }, [r, T]), i.useEffect(() => {
      f.Z.getGuildRoleConnectionsConfigurations(r).then(e => z(e))
    }, [r]), null == A) return null;
  let U = Object.values(S).filter(e => {
    var r;
    return (null == (r = e.tags) ? void 0 : r.guild_connections) === null
  });
  return (0, n.jsxs)(d.Y0X, {
    transitionState: l,
    "aria-labelledby": H,
    className: w.modal,
    parentComponent: "GuildRoleConnectionsModal",
    children: [(0, n.jsxs)(d.xBx, {
      separator: !1,
      justify: a.k.Justify.BETWEEN,
      children: [(0, n.jsxs)("div", {
        className: w.header,
        children: [(0, n.jsx)(N.Z, {
          className: w.headerIcon,
          size: 24
        }), (0, n.jsx)(d.X6q, {
          variant: "text-lg/semibold",
          children: k.intl.string(k.t.ghtnsr)
        })]
      }), (0, n.jsx)(d.olH, {
        onClick: E
      })]
    }), (0, n.jsxs)(d.hzk, {
      className: w.container,
      children: [(0, n.jsx)(d.X6q, {
        variant: "heading-md/medium",
        children: k.intl.format(k.t["Y+TsER"], {
          helpdeskArticleUrl: R.Z.getArticleURL(P.BhN.CONNECTION_DETAILS)
        })
      }), (0, n.jsx)("div", {
        className: w.verifiedRoles,
        children: U.map(e => {
          let l = A.roles.includes(e.id),
            a = function(e) {
              let t = T.find(r => {
                let {
                  role_id: t
                } = r;
                return t === e
              });
              if (null == t) return [];
              let i = {};
              for (let e of t.rules.flat()) {
                let a;
                if (null != e.application_id) {
                  var l;
                  let i = null == (l = t.applications) ? void 0 : l[e.application_id];
                  a = (null == i ? void 0 : i.bot) != null ? (0, n.jsx)("img", {
                    src: new j.Z(i.bot).getAvatarURL(r, 24),
                    alt: "",
                    className: o()(w.botAvatar, C.avatar)
                  }) : null
                } else {
                  let r = v.Z.get(e.connection_type);
                  a = (0, n.jsx)("img", {
                    src: (0, c.ap)(G) ? r.icon.lightSVG : r.icon.darkSVG,
                    alt: "",
                    className: C.avatar
                  })
                }
                null != a && (i["".concat(e.connection_type, ":").concat(e.application_id)] = a)
              }
              return Object.values(i)
            }(e.id);
          return (0, n.jsxs)(d.P3F, {
            className: o()(w.verifiedRole, l ? w.verifiedRoleHasRole : null),
            onClick: l ? void 0 : () => D(e, r),
            onContextMenu: l ? i => {
              var l;
              return l = e.id, void(0, u.jW)(i, async () => {
                let {
                  default: e
                } = await t.e("60079").then(t.bind(t, 850902));
                return t => {
                  var i, o;
                  return (0, n.jsx)(e, (i = Z({}, t), o = o = {
                    roleId: l,
                    onLeaveRole: () => f.Z.unassignGuildRoleConnection(r, l)
                  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n)
                    }
                    return t
                  })(Object(o)).forEach(function(e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
                  }), i))
                }
              })
            } : void 0,
            children: [l ? (0, n.jsx)("div", {
              className: w.roleCheckmark,
              children: (0, n.jsx)(d.kmB, {
                size: "xs",
                color: "currentColor"
              })
            }) : null, (0, n.jsx)(_.Z, {
              guildId: r,
              role: e,
              size: 24
            }), (0, n.jsxs)("div", {
              className: w.verifiedRoleNameDescriptionContainer,
              children: [(0, n.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                className: w.verifiedRoleName,
                children: e.name
              }), void 0 !== e.description ? (0, n.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                className: w.verifiedRoleDescription,
                children: e.description
              }) : null]
            }), (0, n.jsx)(m.ZP, {
              showUserPopout: !1,
              guildId: r,
              users: a.map(() => null),
              renderUser: (e, r, t) => (0, n.jsx)(i.Fragment, {
                children: a[t]
              }, t),
              max: 3
            })]
          }, e.id)
        })
      })]
    })]
  })
}