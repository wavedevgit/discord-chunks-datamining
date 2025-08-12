/** Chunk was on 26628 **/
/** chunk id: 18857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk73800 = require("./73800.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk26323 = require("./26323.jsx"),
  Chunk30513 = require("./30513.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n) {
  let {
    analyticsLocations: u
  } = (0, l.ZP)(t);
  return r.useCallback(() => {
    (0, i.yw)(a.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: {
        section: n
      },
      guild_id: e.id,
      location_stack: u
    }), (0, o.Z)({
      analyticsLocations: u,
      analyticsSourceLocation: {
        page: a.ZY5.GUILD_CHANNEL,
        section: n,
        object: a.qAy.TOOLTIP
      },
      guild: e,
      perks: (0, s.VF)(),
      perkIntro: c.intl.string(c.t.ZhvSn5)
    })
  }, [u, n, e])
}