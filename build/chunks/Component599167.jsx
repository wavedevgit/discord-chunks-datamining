/** Chunk was on 47841 **/
/** chunk id: 599167, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk262828 = require("./262828.js"),
  Chunk826673 = require("./826673.js"),
  Chunk555337 = require("./555337.js"),
  Chunk959757 = require("./959757.js"),
  Chunk739455 = require("./739455.js"),
  Chunk380682 = require("./380682.jsx"),
  Chunk994870 = require("./994870.jsx"),
  Chunk400281 = require("./400281.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk705751 = require("./705751.js"),
  Chunk280215 = require("./280215.js");

function j() {
  let e, t = (0, l.bG)([d.A], () => d.A.getGuild()),
    {
      application: n,
      loading: j
    } = (0, o.A)(null == t ? true : t.id, h.S7.GUILD_ROLE_SUBSCRIPTIONS),
    _ = i.useRef(null),
    O = (0, u.A)(null != t ? t : true);
  i.useEffect(() => {
    null != t && (0, g.aV)(t) && (0, c.Dr)(s.M.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE)
  }, [t]);
  let v = (null == t ? true : t.features.has(b.GuildFeatures.CREATOR_MONETIZABLE)) === false && (null == t ? true : t.features.has(b.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) === false;
  return e = null == t || j ? (0, r.jsx)(a.y$y, {}) : null != O ? (0, r.jsx)(p.A, {
    guild: t,
    config: O
  }) : v ? (0, r.jsx)(f.A, {
    guild: t
  }) : (0, r.jsx)(m.A, {
    guild: t,
    application: n
  }), (0, r.jsx)("div", {
    className: x.ed,
    children: (0, r.jsx)("div", {
      className: x.V1,
      children: (0, r.jsx)(a.ArX, {
        className: x.iL,
        children: (0, r.jsx)("main", {
          ref: _,
          className: x.z1,
          children: (0, r.jsx)(a.xpW, {
            containerRef: _,
            children: e
          })
        })
      })
    })
  })
}