/** Chunk was on 22988 **/
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
  Chunk602268 = require("./602268.js");

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
  }, [n]), b = (0, s.Z)();
  return <div className={t}>{<l.vwX className={g.sectionTitle}>{m.intl.string(u.default.pb7lpK)}</l.vwX>}{<d.g badgeCollection={b} handleBoostUpsellClick={f} onBadgeClicked={h} selectedBadge={p} />}</div>
}