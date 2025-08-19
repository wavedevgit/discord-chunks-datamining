/** Chunk was on 49882 **/
/** chunk id: 18857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk26323 = require("./26323.jsx"),
  Chunk30513 = require("./30513.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t) {
  let {
    analyticsLocations: n
  } = (0, l.ZP)(t);
  return r.useCallback(() => {
    (0, i.yw)(s.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: {
        source: t
      },
      guild_id: e.id,
      location_stack: n
    }), (0, o.Z)({
      analyticsLocations: n,
      analyticsSourceLocation: {
        page: s.ZY5.GUILD_CHANNEL,
        source: t,
        object: s.qAy.TOOLTIP
      },
      guild: e,
      perks: (0, a.VF)(),
      perkIntro: c.intl.string(c.t.ZhvSn5)
    })
  }, [n, t, e])
}