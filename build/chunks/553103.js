/** Chunk was on 97887 **/
/** chunk id: 553103, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk512750 = require("./512750.js"),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk645619 = require("./645619.js"),
  Chunk840120 = require("./840120.js"),
  Chunk162362 = require("./162362.js"),
  Chunk998418 = require("./998418.js"),
  Chunk568065 = require("./568065.js"),
  Chunk652215 = require("./652215.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx");

function f(e, t) {
  var n;
  let f = (0, l.bG)([i.A], () => {
      var t;
      return null == (t = i.A.getGuild(e)) ? true : t.features
    }),
    g = (0, l.bG)([s.A], () => s.A.getStateForGuild(e)),
    m = null == g ? true : g.allPowerups[r.FB],
    b = (0, c.Ay)(e, m),
    A = (0, a.j$)(e, t),
    y = null == m ? true : m.storeRemovalDate,
    _ = null != (n = null == f ? true : f.has(d.GuildFeatures.PARTNERED)) && n,
    O = A && null != y && !_ && b.type === u.b_.POWERUP_ACTIVATED,
    j = O ? {
      title: h.intl.formatToPlainString(p.default.mgoPkU, {
        perkName: null == m ? true : m.title
      }),
      description: h.intl.formatToPlainString(p.default.UT9pkI, {
        dateString: (0, o.A)(y)
      })
    } : null;
  return {
    shouldShow: O,
    notificationConfig: j
  }
}