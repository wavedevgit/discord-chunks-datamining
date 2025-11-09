/** Chunk was on 29679 **/
/** chunk id: 15030, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk295699 = require("./295699.js");

function j() {
  let e, t = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    {
      application: n,
      loading: j
    } = (0, Chunk725803.Z)(null == exports ? true : exports.id, Chunk674563.wW.GUILD_ROLE_SUBSCRIPTIONS),
    _ = Chunk647438.useRef(null),
    v = (0, Chunk614342.Z)(null != exports ? exports : true);
  Chunk647438.useEffect(() => {
    null != exports && (0, Chunk303737.sO)(exports) && (0, Chunk266454.Q3)(Chunk704215.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE)
  }, [exports]);
  let O = (null == exports ? true : exports.features.has(Chunk981631.GuildFeatures.CREATOR_MONETIZABLE)) === false && (null == exports ? true : exports.features.has(Chunk981631.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) === false;
  return e = null == exports || j ? (0, Chunk951288.jsx)(Chunk481060.$jN, {}) : null != v ? (0, Chunk951288.jsx)(Chunk500395.Z, {
    guild: exports,
    config: v
  }) : O ? (0, Chunk951288.jsx)(Chunk975464.Z, {
    guild: exports
  }) : (0, Chunk951288.jsx)(Chunk618748.Z, {
    guild: exports,
    application: require
  }), (0, Chunk951288.jsx)("div", {
    className: Chunk295699.settingsColumn,
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk295699.settingsContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.w0Z, {
        className: Chunk295699.settingsScroller,
        children: (0, Chunk951288.jsx)("main", {
          ref: _,
          className: Chunk295699.settingsContent,
          children: (0, Chunk951288.jsx)(Chunk481060.JcV, {
            containerRef: _,
            children: module
          })
        })
      })
    })
  })
}