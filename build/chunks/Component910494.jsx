/** Chunk was on 9536 **/
/** chunk id: 910494, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk101017 = require("./101017.js"),
  Chunk441536 = require("./441536.js"),
  Chunk434404 = require("./434404.js"),
  Chunk353857 = require("./353857.jsx"),
  Chunk551199 = require("./551199.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    className: t,
    guildId: n,
    selectedBadge: m
  } = e, f = i.useCallback(e => {
    c.Z.updateGuildProfile(n, {
      badge: e
    })
  }, [n]), b = i.useCallback(() => {
    (0, o.Z)(n, a.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS, "guildTagsBadgePacks"), c.Z.close()
  }, [n]), p = (0, s.Z)(), h = i.useId();
  return (0, r.jsx)("div", {
    className: t,
    children: (0, r.jsx)(l.gNt, {
      label: g.intl.string(u.default.pb7lpK),
      id: h,
      children: (0, r.jsx)(d.g, {
        badgeCollection: p,
        handleBoostUpsellClick: b,
        onBadgeClicked: f,
        selectedBadge: m,
        headingId: h
      })
    })
  })
}