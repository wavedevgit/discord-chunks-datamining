/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => y
}), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(224706),
  o = n(100527),
  A = n(906732),
  c = n(314852),
  d = n(65361),
  u = n(910200),
  g = n(496675),
  f = n(434404),
  m = n(999382),
  p = n(12078),
  h = n(934638),
  C = n(566036),
  b = n(979664),
  v = n(343397),
  x = n(509798),
  N = n(75733),
  j = n(474024),
  E = n(981631),
  I = n(388032),
  O = n(340616);
let y = function() {
  let {
    analyticsLocations: e
  } = (0, A.ZP)(o.Z.GUILD_SETTINGS_PROFILE_PAGE), t = (0, s.e7)([m.Z], () => m.Z.getGuild(), []), n = null == t ? void 0 : t.id, {
    fetchGuildProfile: y,
    fetchStatus: w
  } = (0, d.u)(null == t ? void 0 : t.id), P = (0, s.e7)([m.Z], () => m.Z.getGuildProfile(), []), B = (0, s.e7)([g.Z], () => g.Z.can(E.Plq.MANAGE_GUILD, t)), D = i.useCallback(e => {
    null != n && (f.Z.updateGuild({
      icon: e
    }), f.Z.updateGuildProfile(n, {
      icon: e
    }))
  }, [n]), T = i.useCallback(e => {
    null != n && f.Z.updateGuildProfile(n, {
      customBanner: e
    })
  }, [n]);
  i.useEffect(() => {
    null != n && y()
  }, [n, y]);
  let S = i.useCallback(() => {
    y(!0)
  }, [y]);
  return (i.useEffect(() => {
    l.Z.getDetectableGames()
  }, []), w === c.a.FETCHED && null == P) ? (0, r.jsx)(x.g, {
    forceFetchGuildProfile: S
  }) : w === c.a.NOT_FETCHED || w === c.a.FETCHING ? (0, r.jsx)("main", {
    className: O.spinner,
    children: (0, r.jsx)(a.$jN, {})
  }) : null == t || null == P ? null : (0, r.jsx)(A.Gt, {
    value: e,
    children: (0, r.jsxs)("main", {
      className: O.content,
      children: [(0, r.jsxs)("div", {
        className: O.leftColumn,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(a.X6q, {
            variant: "heading-lg/semibold",
            color: "header-primary",
            children: I.NW.string(I.t.txdaxc)
          }), (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "header-secondary",
            className: O.description,
            children: I.NW.string(I.t["5PGZWV"])
          })]
        }), (0, r.jsx)(v.Z, {
          profile: P,
          canManageGuild: B
        }), (0, r.jsx)("div", {
          className: O.divider
        }), (0, r.jsx)(b.Z, {
          profile: P,
          canManageGuild: B,
          onIconChange: D
        }), (0, r.jsx)("div", {
          className: O.divider
        }), (0, r.jsx)(p.Z, {
          profile: P,
          onCustomBannerChange: T,
          canManageGuild: B
        }), (0, r.jsx)("div", {
          className: O.divider
        }), (0, r.jsx)(N.Z, {
          profile: P,
          canManageGuild: B
        }), (0, r.jsx)("div", {
          className: O.divider
        }), (0, r.jsx)(h.Z, {
          profile: P,
          canManageGuild: B
        }), (0, r.jsx)("div", {
          className: O.divider
        }), (0, r.jsx)(C.Z, {
          profile: P,
          canManageGuild: B
        }), (0, r.jsx)("div", {
          className: O.divider
        }), (0, r.jsx)(j.Z, {
          profile: P,
          canManageGuild: B
        })]
      }), (0, r.jsx)("div", {
        className: O.rightColumn,
        children: (0, r.jsx)(a.Ttm, {
          className: O.profilePreviewContainer,
          children: (0, r.jsx)(u.ZP, {
            className: O.profilePreview,
            profile: P,
            disableCTA: !0,
            onIconChange: B ? D : void 0
          })
        })
      })]
    })
  })
}