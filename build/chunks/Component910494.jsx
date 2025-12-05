/** Chunk was on 384 **/
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
  Chunk713328 = require("./713328.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    className: t,
    guildId: n,
    selectedBadge: m
  } = e, p = i.useCallback(e => {
    c.Z.updateGuildProfile(n, {
      badge: e
    })
  }, [n]), f = i.useCallback(() => {
    (0, o.Z)(n, a.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS, "guildTagsBadgePacks"), c.Z.close()
  }, [n]), h = (0, s.Z)(), b = i.useId();
  return (0, r.jsx)("div", {
    className: t,
    children: (0, r.jsx)(l.gNt, {
      label: g.intl.string(u.default.pb7lpK),
      id: b,
      children: (0, r.jsx)(d.g, {
        badgeCollection: h,
        handleBoostUpsellClick: f,
        onBadgeClicked: p,
        selectedBadge: m,
        headingId: b
      })
    })
  })
}