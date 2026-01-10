/** Chunk was on 9536 **/
/** chunk id: 224726, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk314852 = require("./314852.js"),
  Chunk65361 = require("./65361.js"),
  Chunk798476 = require("./798476.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk12078 = require("./12078.jsx"),
  Chunk934638 = require("./934638.jsx"),
  Chunk566036 = require("./566036.jsx"),
  Chunk979664 = require("./979664.jsx"),
  Chunk343397 = require("./343397.jsx"),
  Chunk509798 = require("./509798.jsx"),
  Chunk75733 = require("./75733.jsx"),
  Chunk474024 = require("./474024.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk617578 = require("./617578.js");
let S = function() {
  let {
    analyticsLocations: e
  } = (0, c.ZP)(o.Z.GUILD_SETTINGS_PROFILE_PAGE), t = (0, l.e7)([b.Z], () => b.Z.getGuild(), []), n = null == t ? true : t.id, {
    fetchGuildProfile: S,
    fetchStatus: _
  } = (0, u.u)(null == t ? true : t.id), T = (0, l.e7)([b.Z], () => b.Z.getGuildProfile(), []), P = (0, l.e7)([f.Z], () => f.Z.can(N.Plq.MANAGE_GUILD, t)), w = i.useCallback(e => {
    null != n && (m.Z.updateGuild({
      icon: e
    }), m.Z.updateGuildProfile(n, {
      icon: e
    }))
  }, [n]), Z = i.useCallback(e => {
    null != n && m.Z.updateGuildProfile(n, {
      customBanner: e
    })
  }, [n]);
  i.useEffect(() => {
    null != n && S()
  }, [n, S]);
  let R = i.useCallback(() => {
    S(true)
  }, [S]);
  return (i.useEffect(() => {
    s.Z.getDetectableGames()
  }, []), _ === d.a.FETCHED && null == T) ? (0, r.jsx)(O.g, {
    forceFetchGuildProfile: R
  }) : _ === d.a.NOT_FETCHED || _ === d.a.FETCHING ? (0, r.jsx)("main", {
    className: I.spinner,
    children: (0, r.jsx)(a.$jN, {})
  }) : null == t || null == T ? null : (0, r.jsx)(c.Gt, {
    value: e,
    children: (0, r.jsxs)("main", {
      className: I.content,
      children: [(0, r.jsxs)("div", {
        className: I.leftColumn,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(a.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: E.intl.string(E.t.txdaxf)
          }), (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            className: I.description,
            children: E.intl.string(E.t["5PGZWS"])
          })]
        }), (0, r.jsx)(v.Z, {
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
        }), (0, r.jsx)(p.Z, {
          profile: T,
          onCustomBannerChange: Z,
          canManageGuild: P
        }), (0, r.jsx)("div", {
          className: I.divider
        }), (0, r.jsx)(y.Z, {
          profile: T,
          canManageGuild: P
        }), (0, r.jsx)("div", {
          className: I.divider
        }), (0, r.jsx)(h.Z, {
          profile: T,
          canManageGuild: P
        }), (0, r.jsx)("div", {
          className: I.divider
        }), (0, r.jsx)(x.Z, {
          profile: T,
          canManageGuild: P
        }), (0, r.jsx)("div", {
          className: I.divider
        }), (0, r.jsx)(C.Z, {
          profile: T,
          canManageGuild: P
        })]
      }), (0, r.jsx)("div", {
        className: I.rightColumn,
        children: (0, r.jsx)(a.Ttm, {
          className: I.profilePreviewContainer,
          children: (0, r.jsx)(g.ZP, {
            className: I.profilePreview,
            profile: T,
            disableCTA: true,
            onIconChange: P ? w : true,
            disableGuildNameClick: true
          })
        })
      })]
    })
  })
}