/** Chunk was on 60458 **/
/** chunk id: 835887, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk101017 = require("./101017.js"),
  Chunk441536 = require("./441536.js"),
  Chunk434404 = require("./434404.js"),
  Chunk755641 = require("./755641.jsx"),
  Chunk195196 = require("./195196.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk8498 = require("./8498.js");

function p(e) {
  let {
    className: t,
    guildId: n,
    selectedBadge: p
  } = e, h = i.useCallback(e => {
    c.Z.updateGuildProfile(n, {
      badge: e
    })
  }, [n]), f = i.useCallback(() => {
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
      handleBoostUpsellClick: f,
      onBadgeClicked: h,
      selectedBadge: p,
      headingId: x
    })]
  })
}