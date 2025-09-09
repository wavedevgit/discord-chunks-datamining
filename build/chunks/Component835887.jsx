/** Chunk was on 8106 **/
/** chunk id: 835887, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk101017 = require("./101017.js"),
  Chunk441536 = require("./441536.js"),
  Chunk434404 = require("./434404.js"),
  Chunk755641 = require("./755641.jsx"),
  Chunk899926 = require("./899926.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk616397 = require("./616397.js");

function p(e) {
  let {
    className: t,
    guildId: n,
    selectedBadge: p
  } = e, f = i.useCallback(e => {
    c.Z.updateGuildProfile(n, {
      badge: e
    })
  }, [n]), h = i.useCallback(() => {
    (0, o.Z)(n, a.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS, "guildTagsBadgePacks"), c.Z.close()
  }, [n]), b = (0, s.Z)(), x = i.useId();
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsx)(l.vwX, {
      id: x,
      className: g.sectionTitle,
      children: m.intl.string(u.default.pb7lpK)
    }), (0, r.jsx)(d.g, {
      badgeCollection: b,
      handleBoostUpsellClick: h,
      onBadgeClicked: f,
      selectedBadge: p,
      headingId: x
    })]
  })
}