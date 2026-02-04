/** Chunk was on 44669 **/
/** chunk id: 553103, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e, t) {
  var n;
  let g = (0, l.bG)([i.A], () => {
      var t;
      return null == (t = i.A.getGuild(e)) ? true : t.features
    }),
    f = (0, l.bG)([s.A], () => s.A.getStateForGuild(e)),
    m = null == f ? true : f.allPowerups[r.FB],
    b = (0, c.Ay)(e, m),
    A = (0, a.j$)(e, t),
    y = null == m ? true : m.storeRemovalDate,
    O = null != (n = null == g ? true : g.has(d.GuildFeatures.PARTNERED)) && n,
    j = A && null != y && !O && b.type === u.b_.POWERUP_ACTIVATED,
    _ = j ? {
      title: h.intl.formatToPlainString(p.default.mgoPkU, {
        perkName: null == m ? true : m.title
      }),
      description: h.intl.formatToPlainString(p.default.UT9pkI, {
        dateString: (0, o.A)(y)
      })
    } : null;
  return {
    shouldShow: j,
    notificationConfig: _
  }
}