/** Chunk was on 40897 **/
t.d(r, {
  default: () => D,
  g: () => Z
}), t(388685), t(472816), t(794429), t(953529);
var n = t(255367),
  l = t(73800),
  i = t(120356),
  o = t.n(i),
  a = t(442837),
  s = t(780384),
  c = t(481060),
  d = t(239091),
  u = t(749210),
  f = t(410030),
  p = t(726542),
  m = t(884338),
  v = t(367907),
  b = t(313201),
  h = t(598077),
  j = t(314897),
  g = t(271383),
  x = t(430824),
  y = t(626135),
  O = t(63063),
  R = t(134433),
  N = t(225104),
  _ = t(981631),
  P = t(388032),
  C = t(739587),
  k = t(472840);

function w(e) {
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

function Z(e, r) {
  (0, c.ZDy)(async () => {
    let {
      default: l
    } = await Promise.all([t.e("82412"), t.e("80993")]).then(t.bind(t, 107807));
    return t => (0, n.jsx)(l, w({
      role: e,
      guildId: r
    }, t))
  })
}
let D = function(e) {
  let {
    guildId: r,
    transitionState: i,
    onClose: D
  } = e, S = (0, a.e7)([x.Z], () => x.Z.getRoles(r)), I = (0, a.e7)([j.default], () => j.default.getId()), E = (0, a.e7)([g.ZP], () => g.ZP.getMember(r, I)), [A, T] = l.useState([]), B = (0, f.ZP)(), z = (0, b.Dt)();
  if (l.useEffect(() => {
      0 !== A.length && y.default.track(_.rMx.PASSPORT_ENTRY_VIEWED, w({
        role_ids: A.map(e => {
          let {
            role_id: r
          } = e;
          return r
        })
      }, (0, v.hH)(r)))
    }, [r, A]), l.useEffect(() => {
      u.Z.getGuildRoleConnectionsConfigurations(r).then(e => T(e))
    }, [r]), null == E) return null;
  let G = Object.values(S).filter(e => {
    var r;
    return (null == (r = e.tags) ? void 0 : r.guild_connections) === null
  });
  return (0, n.jsxs)(c.Y0X, {
    transitionState: i,
    "aria-labelledby": z,
    className: C.modal,
    parentComponent: "GuildRoleConnectionsModal",
    children: [(0, n.jsxs)(c.xBx, {
      separator: !1,
      children: [(0, n.jsx)(R.Z, {
        className: C.headerIcon,
        size: 24
      }), (0, n.jsx)(c.X6q, {
        variant: "text-md/medium",
        color: "header-primary",
        children: P.intl.string(P.t.ghtnsr)
      }), (0, n.jsx)(c.olH, {
        className: C.modalCloseButton,
        onClick: D
      })]
    }), (0, n.jsxs)(c.hzk, {
      className: C.container,
      children: [(0, n.jsx)(c.X6q, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: P.intl.format(P.t["Y+TsER"], {
          helpdeskArticleUrl: O.Z.getArticleURL(_.BhN.CONNECTION_DETAILS)
        })
      }), (0, n.jsx)("div", {
        className: C.verifiedRoles,
        children: G.map(e => {
          let i = E.roles.includes(e.id),
            a = function(e) {
              let t = A.find(r => {
                let {
                  role_id: t
                } = r;
                return t === e
              });
              if (null == t) return [];
              let l = {};
              for (let e of t.rules.flat()) {
                let a;
                if (null != e.application_id) {
                  var i;
                  let l = null == (i = t.applications) ? void 0 : i[e.application_id];
                  a = (null == l ? void 0 : l.bot) != null ? (0, n.jsx)("img", {
                    src: new h.Z(l.bot).getAvatarURL(r, 24),
                    alt: "",
                    className: o()(C.botAvatar, k.avatar)
                  }) : null
                } else {
                  let r = p.Z.get(e.connection_type);
                  a = (0, n.jsx)("img", {
                    src: (0, s.ap)(B) ? r.icon.lightSVG : r.icon.darkSVG,
                    alt: "",
                    className: k.avatar
                  })
                }
                null != a && (l["".concat(e.connection_type, ":").concat(e.application_id)] = a)
              }
              return Object.values(l)
            }(e.id);
          return (0, n.jsxs)(c.P3F, {
            className: o()(C.verifiedRole, i ? C.verifiedRoleHasRole : null),
            onClick: i ? void 0 : () => Z(e, r),
            onContextMenu: i ? l => {
              var i;
              return i = e.id, void(0, d.jW)(l, async () => {
                let {
                  default: e
                } = await t.e("60079").then(t.bind(t, 850902));
                return t => {
                  var l, o;
                  return (0, n.jsx)(e, (l = w({}, t), o = o = {
                    roleId: i,
                    onLeaveRole: () => u.Z.unassignGuildRoleConnection(r, i)
                  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n)
                    }
                    return t
                  })(Object(o)).forEach(function(e) {
                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
                  }), l))
                }
              })
            } : void 0,
            children: [i ? (0, n.jsx)("div", {
              className: C.roleCheckmark,
              children: (0, n.jsx)(c.kmB, {
                size: "xs",
                color: "currentColor"
              })
            }) : null, (0, n.jsx)(N.Z, {
              guildId: r,
              role: e,
              size: 24
            }), (0, n.jsxs)("div", {
              className: C.verifiedRoleNameDescriptionContainer,
              children: [(0, n.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                className: C.verifiedRoleName,
                children: e.name
              }), void 0 !== e.description ? (0, n.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                className: C.verifiedRoleDescription,
                children: e.description
              }) : null]
            }), (0, n.jsx)(m.Z, {
              showUserPopout: !1,
              guildId: r,
              users: a.map(() => null),
              renderUser: (e, r, t) => (0, n.jsx)(l.Fragment, {
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