/** Chunk was on 39048 **/
/** chunk id: 694878, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
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

function m(e) {
  let {
    className: t,
    guildId: n,
    selectedBadge: m
  } = e, p = i.useCallback(e => {
    c.A.updateGuildProfile(n, {
      badge: e
    })
  }, [n]), f = i.useCallback(() => {
    (0, o.A)(n, s.A.GUILD_POWERUPS_GUILD_SETTINGS_TAGS, "guildTagsBadgePacks"), c.A.close()
  }, [n]), h = (0, a.A)(), b = i.useId();
  return (0, r.jsx)("div", {
    className: t,
    children: (0, r.jsx)(l.D0$, {
      label: g.intl.string(u.default.pb7lpK),
      id: b,
      children: (0, r.jsx)(d.y, {
        badgeCollection: h,
        handleBoostUpsellClick: f,
        onBadgeClicked: p,
        selectedBadge: m,
        headingId: b
      })
    })
  })
}