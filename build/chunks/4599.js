/** Chunk was on 88235 **/
n.d(t, {
  Z: () => P
}), n(388685), n(953529);
var r = n(200651),
  l = n(192379),
  i = n(442837),
  o = n(481060),
  s = n(100527),
  a = n(906732),
  c = n(138201),
  d = n(699516),
  u = n(5192),
  f = n(785717),
  p = n(221292),
  h = n(687158),
  j = n(316027),
  g = n(502762),
  m = n(848780),
  v = n(907179),
  b = n(228168),
  O = n(981631),
  x = n(388032),
  Z = n(829441),
  y = n(161068);

function I(e) {
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
}

function P(e) {
  let {
    user: t,
    guildId: n,
    channelId: P,
    messageId: E,
    roleId: T,
    transitionState: N,
    openedAt: S,
    onHide: A,
    showGuildProfile: C = !0,
    sourceAnalyticsLocations: _ = []
  } = e, w = n === O.ME ? void 0 : n, R = (0, i.e7)([d.Z], () => d.Z.isBlocked(t.id)), {
    analyticsLocations: M
  } = (0, a.ZP)([..._, R ? s.Z.BLOCKED_PROFILE_MODAL : s.Z.IGNORED_PROFILE_MODAL]), L = (0, f.ZB)({
    layout: "MODAL",
    userId: t.id,
    guildId: w,
    channelId: P,
    messageId: E,
    roleId: T,
    showGuildProfile: C
  }), D = [{
    icon: o.owK,
    description: x.intl.string(x.t.kcuWvb)
  }, {
    icon: o.owK,
    description: x.intl.string(R ? x.t.QxrDY2 : x.t.W6fjkZ)
  }], U = (0, h.ZP)(t.id, C ? w : void 0), G = l.createRef();
  return (0, r.jsx)(a.Gt, {
    value: M,
    children: (0, r.jsx)(f.Mt, {
      value: L,
      openedAt: S,
      fetchStartedAt: null == U ? void 0 : U.fetchStartedAt,
      fetchEndedAt: null == U ? void 0 : U.fetchEndedAt,
      isLoaded: null == U ? void 0 : U.isLoaded,
      children: (0, r.jsx)(o.Y0X, {
        transitionState: N,
        className: Z.root,
        hideShadow: !0,
        "aria-label": x.intl.string(x.t["3N/J2t"]),
        children: (0, r.jsx)(g.Z, {
          user: t,
          displayProfile: U,
          themeType: b.lY.MODAL,
          ref: G,
          children: (0, r.jsxs)("div", {
            className: Z.container,
            children: [(0, r.jsx)("img", {
              alt: "",
              src: y,
              className: Z.preview,
              "aria-hidden": !0
            }), (0, r.jsxs)("div", {
              className: Z.body,
              children: [(0, r.jsx)(j.Z, {
                user: t,
                guildId: w
              }), (0, r.jsxs)("div", {
                className: Z.headerContainer,
                children: [(0, r.jsx)(o.X6q, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  children: x.intl.string(x.t.b33pLC)
                }), (0, r.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  children: x.intl.format(R ? x.t["8F+WNz"] : x.t["/cZp5u"], {
                    username: u.ZP.getName(w, P, t)
                  })
                })]
              }), (0, r.jsx)("div", {
                className: Z.safetyTable,
                children: D.map((e, t) => {
                  let {
                    icon: n,
                    description: l
                  } = e;
                  return (0, r.jsx)(c.ZP, {
                    icon: n,
                    title: l,
                    titleVariant: "text-md/normal"
                  }, t)
                })
              }), (0, r.jsxs)(o.Kqy, {
                align: "center",
                children: [(0, r.jsx)(v.Z, {
                  size: o.PhG.MEDIUM,
                  isBlocked: R,
                  onClick: () => {
                    A(), (0, p.pQ)(I({
                      action: R ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                      analyticsLocations: M
                    }, L))
                  }
                }), (0, r.jsx)(m.Z, {
                  userId: t.id,
                  onClick: () => {
                    A(), (0, p.pQ)(I({
                      action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                      analyticsLocations: M
                    }, L))
                  }
                })]
              })]
            })]
          })
        })
      })
    })
  })
}