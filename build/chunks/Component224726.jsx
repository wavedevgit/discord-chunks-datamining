/** Chunk was on 64982 **/
/** chunk id: 224726, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk805220 = require("./805220.js");
let I = function() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.GUILD_SETTINGS_PROFILE_PAGE), t = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild(), []), n = null == exports ? true : exports.id, {
    fetchGuildProfile: I,
    fetchStatus: S
  } = (0, Chunk65361.u)(null == exports ? true : exports.id), T = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile(), []), P = (0, Chunk442837.e7)([Chunk496675.Z], () => Chunk496675.Z.can(Chunk981631.Plq.MANAGE_GUILD, exports)), w = Chunk647438.useCallback(e => {
    null != n && (p.Z.updateGuild({
      icon: e
    }), p.Z.updateGuildProfile(n, {
      icon: e
    }))
  }, [require]), Z = Chunk647438.useCallback(e => {
    null != n && p.Z.updateGuildProfile(n, {
      customBanner: e
    })
  }, [require]);
  Chunk647438.useEffect(() => {
    null != require && I()
  }, [require, I]);
  let R = Chunk647438.useCallback(() => {
    I(true)
  }, [I]);
  return (Chunk647438.useEffect(() => {
    Chunk224706.Z.getDetectableGames()
  }, []), S === Chunk314852.a.FETCHED && null == T) ? (0, Chunk951288.jsx)(Chunk509798.g, {
    forceFetchGuildProfile: R
  }) : S === Chunk314852.a.NOT_FETCHED || S === Chunk314852.a.FETCHING ? (0, Chunk951288.jsx)("main", {
    className: Chunk805220.spinner,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  }) : null == exports || null == T ? null : (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk951288.jsxs)("main", {
      className: Chunk805220.content,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk805220.leftColumn,
        children: [(0, Chunk951288.jsxs)("div", {
          children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
            variant: "heading-lg/semibold",
            color: "header-primary",
            children: Chunk388032.intl.string(Chunk388032.t.txdaxf)
          }), (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/medium",
            color: "header-secondary",
            className: Chunk805220.description,
            children: Chunk388032.intl.string(Chunk388032.t["5PGZWS"])
          })]
        }), (0, Chunk951288.jsx)(Chunk343397.Z, {
          profile: T,
          canManageGuild: P
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk805220.divider
        }), (0, Chunk951288.jsx)(Chunk979664.Z, {
          profile: T,
          canManageGuild: P,
          onIconChange: w
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk805220.divider
        }), (0, Chunk951288.jsx)(Chunk12078.Z, {
          profile: T,
          onCustomBannerChange: Z,
          canManageGuild: P
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk805220.divider
        }), (0, Chunk951288.jsx)(Chunk75733.Z, {
          profile: T,
          canManageGuild: P
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk805220.divider
        }), (0, Chunk951288.jsx)(Chunk934638.Z, {
          profile: T,
          canManageGuild: P
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk805220.divider
        }), (0, Chunk951288.jsx)(Chunk566036.Z, {
          profile: T,
          canManageGuild: P
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk805220.divider
        }), (0, Chunk951288.jsx)(Chunk474024.Z, {
          profile: T,
          canManageGuild: P
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk805220.rightColumn,
        children: (0, Chunk951288.jsx)(Chunk481060.Ttm, {
          className: Chunk805220.profilePreviewContainer,
          children: (0, Chunk951288.jsx)(Chunk798476.ZP, {
            className: Chunk805220.profilePreview,
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