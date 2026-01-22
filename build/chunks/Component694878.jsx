/** Chunk was on 47841 **/
/** chunk id: 694878, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk525104 = require("./525104.js"),
  Chunk828162 = require("./828162.js"),
  Chunk997509 = require("./997509.js"),
  Chunk610042 = require("./610042.jsx"),
  Chunk583970 = require("./583970.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  let {
    className: t,
    guildId: n,
    selectedBadge: g
  } = e, b = i.useCallback(e => {
    o.A.updateGuildProfile(n, {
      badge: e
    })
  }, [n]), m = i.useCallback(() => {
    (0, c.A)(n, s.A.GUILD_POWERUPS_GUILD_SETTINGS_TAGS, "guildTagsBadgePacks"), o.A.close()
  }, [n]), p = (0, a.A)(), x = i.useId();
  return (0, r.jsx)("div", {
    className: t,
    children: (0, r.jsx)(l.D0$, {
      label: f.intl.string(u.default.pb7lpK),
      id: x,
      children: (0, r.jsx)(d.y, {
        badgeCollection: p,
        handleBoostUpsellClick: m,
        onBadgeClicked: b,
        selectedBadge: g,
        headingId: x
      })
    })
  })
}