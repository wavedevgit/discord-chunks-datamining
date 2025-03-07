/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Y: () => R,
  Z: () => C
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(442837),
  l = n(481060),
  c = n(100527),
  u = n(906732),
  d = n(271383),
  f = n(699516),
  _ = n(5192),
  p = n(785717),
  h = n(221292),
  m = n(687158),
  g = n(471879),
  E = n(502762),
  v = n(848780),
  b = n(907179),
  y = n(475413),
  O = n(228168),
  I = n(388032),
  S = n(248957),
  T = n(609440);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function C(e) {
  let {
    user: t,
    guildId: n,
    setPopoutRef: o,
    channelId: a,
    messageId: f,
    roleId: _,
    onViewBlockedProfileClick: v,
    newAnalyticsLocations: b = []
  } = e, {
    analyticsLocations: N
  } = (0, u.ZP)([...b, c.Z.BLOCKED_PROFILE_POPOUT]), C = (0, p.ZB)({
    layout: "BLOCKED_PROFILE_POPOUT",
    userId: t.id,
    guildId: n,
    channelId: a,
    messageId: f,
    roleId: _
  }), R = i.useRef(null), P = (0, m.ZP)(t.id, n), w = (0, s.e7)([d.ZP], () => null != n ? d.ZP.getMember(n, t.id) : null);
  return i.useEffect(() => {
    null == o || o(null == R ? void 0 : R.current)
  }, [R, o]), (0, r.jsx)(u.Gt, {
    value: N,
    children: (0, r.jsx)(p.Mt, {
      value: C,
      shouldTrackViewOnMount: null == w || null != w.fullProfileLoadedTimestamp,
      children: (0, r.jsx)(l.VqE, {
        ref: R,
        "aria-label": t.username,
        children: (0, r.jsx)(E.Z, {
          user: t,
          displayProfile: P,
          profileType: O.y0.BITE_SIZE,
          children: (0, r.jsxs)("div", {
            className: S.container,
            children: [(0, r.jsx)("img", {
              alt: "",
              src: T,
              className: S.previewForCollected,
              "aria-hidden": !0
            }), (0, r.jsxs)("div", {
              className: S.body,
              children: [(0, r.jsx)(g.Z, {
                user: t,
                guildId: n
              }), (0, r.jsx)(l.X6q, {
                variant: "heading-lg/bold",
                className: S.header,
                children: I.NW.string(I.t.VNJ7UF)
              }), (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                children: I.NW.format(I.t.LXbngo, {
                  username: t.username
                })
              }), (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                children: I.NW.string(I.t["20WzZ2"])
              }), (0, r.jsx)(y.tG, {
                className: S.centeredButton,
                action: "VIEW_BLOCKED_PROFILE",
                text: I.NW.string(I.t.iXAna2),
                autoFocus: !0,
                fullWidth: !1,
                onClick: () => {
                  null == v || v(), (0, h.pQ)(A({
                    action: "VIEW_BLOCKED_PROFILE",
                    analyticsLocations: N
                  }, C))
                }
              })]
            })]
          })
        })
      })
    })
  })
}

function R(e) {
  let {
    user: t,
    guildId: n,
    setPopoutRef: o,
    channelId: y,
    messageId: N,
    roleId: C,
    onViewBlockedProfileClick: R,
    newAnalyticsLocations: P = []
  } = e, w = (0, s.e7)([f.Z], () => f.Z.isBlocked(t.id)), {
    analyticsLocations: D
  } = (0, u.ZP)([...P, w ? c.Z.BLOCKED_PROFILE_POPOUT : c.Z.IGNORED_PROFILE_POPOUT]), L = (0, p.ZB)({
    layout: w ? "BLOCKED_PROFILE_POPOUT" : "IGNORED_PROFILE_POPOUT",
    userId: t.id,
    guildId: n,
    channelId: y,
    messageId: N,
    roleId: C
  }), x = i.useRef(null), M = (0, m.ZP)(t.id, n), k = (0, s.e7)([d.ZP], () => null != n ? d.ZP.getMember(n, t.id) : null);
  i.useEffect(() => {
    null == o || o(null == x ? void 0 : x.current)
  }, [x, o]);
  let j = w ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE";
  return (0, r.jsx)(u.Gt, {
    value: D,
    children: (0, r.jsx)(p.Mt, {
      value: L,
      shouldTrackViewOnMount: null == k || null != k.fullProfileLoadedTimestamp,
      children: (0, r.jsx)(l.VqE, {
        ref: x,
        "aria-label": t.username,
        children: (0, r.jsx)(E.Z, {
          user: t,
          displayProfile: M,
          profileType: O.y0.BITE_SIZE,
          children: (0, r.jsxs)("div", {
            className: S.container,
            children: [(0, r.jsx)("img", {
              alt: "",
              src: T,
              className: S.previewForCollected,
              "aria-hidden": !0
            }), (0, r.jsxs)("div", {
              className: a()(S.body, S.bodySpacing),
              children: [(0, r.jsxs)("div", {
                className: S.headerContainer,
                children: [(0, r.jsx)(g.i, {
                  user: t,
                  guildId: n
                }), (0, r.jsx)(l.X6q, {
                  variant: "heading-lg/bold",
                  children: I.NW.string(I.t.b33pLC)
                }), (0, r.jsx)(l.Text, {
                  variant: "text-sm/medium",
                  children: I.NW.format(w ? I.t["8F+WNz"] : I.t["/cZp5u"], {
                    username: _.ZP.getName(n, y, t)
                  })
                })]
              }), (0, r.jsxs)(l.Kqy, {
                align: "center",
                children: [(0, r.jsx)(b.Z, {
                  isBlocked: w,
                  onClick: () => {
                    null == R || R(), (0, h.pQ)(A({
                      action: j,
                      analyticsLocations: D
                    }, L))
                  }
                }), (0, r.jsx)(v.Z, {
                  userId: t.id,
                  onClick: () => {
                    null == R || R(), (0, h.pQ)(A({
                      action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                      analyticsLocations: D
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