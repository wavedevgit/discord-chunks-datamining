/** Chunk was on 9536 **/
/** chunk id: 15030, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk725803 = require("./725803.js"),
  Chunk266454 = require("./266454.js"),
  Chunk999382 = require("./999382.js"),
  Chunk614342 = require("./614342.js"),
  Chunk303737 = require("./303737.js"),
  Chunk618748 = require("./618748.jsx"),
  Chunk500395 = require("./500395.jsx"),
  Chunk975464 = require("./975464.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk970964 = require("./970964.js");

function j() {
  let e, t = (0, l.e7)([d.Z], () => d.Z.getGuild()),
    {
      application: n,
      loading: j
    } = (0, o.Z)(null == t ? true : t.id, h.wW.GUILD_ROLE_SUBSCRIPTIONS),
    v = i.useRef(null),
    O = (0, u.Z)(null != t ? t : true);
  i.useEffect(() => {
    null != t && (0, g.sO)(t) && (0, c.Q3)(a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE)
  }, [t]);
  let y = (null == t ? true : t.features.has(p.GuildFeatures.CREATOR_MONETIZABLE)) === false && (null == t ? true : t.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) === false;
  return e = null == t || j ? (0, r.jsx)(s.$jN, {}) : null != O ? (0, r.jsx)(m.Z, {
    guild: t,
    config: O
  }) : y ? (0, r.jsx)(b.Z, {
    guild: t
  }) : (0, r.jsx)(f.Z, {
    guild: t,
    application: n
  }), (0, r.jsx)("div", {
    className: x.settingsColumn,
    children: (0, r.jsx)("div", {
      className: x.settingsContainer,
      children: (0, r.jsx)(s.w0Z, {
        className: x.settingsScroller,
        children: (0, r.jsx)("main", {
          ref: v,
          className: x.settingsContent,
          children: (0, r.jsx)(s.JcV, {
            containerRef: v,
            children: e
          })
        })
      })
    })
  })
}