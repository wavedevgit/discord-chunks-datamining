/** Chunk was on 71567 **/
"use strict";
n.d(t, {
  Z: () => E
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(224706),
  o = n(100527),
  c = n(906732),
  d = n(314852),
  u = n(65361),
  m = n(910200),
  p = n(496675),
  g = n(434404),
  h = n(999382),
  f = n(12078),
  b = n(934638),
  x = n(566036),
  j = n(979664),
  N = n(343397),
  v = n(509798),
  _ = n(75733),
  O = n(474024),
  y = n(981631),
  C = n(388032),
  I = n(850606);
let E = function() {
  let {
    analyticsLocations: e
  } = (0, c.ZP)(o.Z.GUILD_SETTINGS_PROFILE_PAGE), t = (0, s.e7)([h.Z], () => h.Z.getGuild(), []), n = null == t ? void 0 : t.id, {
    fetchGuildProfile: E,
    fetchStatus: S
  } = (0, u.u)(null == t ? void 0 : t.id), T = (0, s.e7)([h.Z], () => h.Z.getGuildProfile(), []), P = (0, s.e7)([p.Z], () => p.Z.can(y.Plq.MANAGE_GUILD, t)), w = i.useCallback(e => {
    null != n && (g.Z.updateGuild({
      icon: e
    }), g.Z.updateGuildProfile(n, {
      icon: e
    }))
  }, [n]), R = i.useCallback(e => {
    null != n && g.Z.updateGuildProfile(n, {
      customBanner: e
    })
  }, [n]);
  i.useEffect(() => {
    null != n && E()
  }, [n, E]);
  let D = i.useCallback(() => {
    E(!0)
  }, [E]);
  return (i.useEffect(() => {
    l.Z.getDetectableGames()
  }, []), S === d.a.FETCHED && null == T) ? (0, r.jsx)(v.g, {
    forceFetchGuildProfile: D
  }) : S === d.a.NOT_FETCHED || S === d.a.FETCHING ? (0, r.jsx)("main", {
    className: I.spinner,
    children: (0, r.jsx)(a.$jN, {})
  }) : null == t || null == T ? null : (0, r.jsx)(c.Gt, {
    value: e,
    children: (0, r.jsxs)("main", {
      className: I.content,
      children: [(0, r.jsxs)("div", {
        className: I.leftColumn,
        children: [(0, r.jsx)(a.X6q, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: C.NW.string(C.t.txdaxc)
        }), (0, r.jsx)(N.Z, {
          profile: T,
          canManageGuild: P
        }), (0, r.jsx)("div", {
          className: I.divider
        }), (0, r.jsx)(j.Z, {
          profile: T,
          canManageGuild: P,
          onIconChange: w
        }), (0, r.jsx)("div", {
          className: I.divider
        }), (0, r.jsx)(f.Z, {
          profile: T,
          onCustomBannerChange: R
        }), (0, r.jsx)("div", {
          className: I.divider
        }), (0, r.jsx)(_.Z, {
          profile: T
        }), (0, r.jsx)("div", {
          className: I.divider
        }), (0, r.jsx)(b.Z, {
          profile: T,
          canManageGuild: P
        }), (0, r.jsx)("div", {
          className: I.divider
        }), (0, r.jsx)(x.Z, {
          profile: T
        })]
      }), (0, r.jsxs)("div", {
        className: I.rightColumn,
        children: [(0, r.jsx)(m.Z, {
          className: I.profilePreview,
          profile: T,
          disableCTA: !0,
          onIconChange: P ? w : void 0
        }), (0, r.jsx)(O.Z, {
          profile: T
        })]
      })]
    })
  })
}