/** Chunk was on 97492 **/
/** chunk id: 553103, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function h(e, t) {
  var n;
  let h = (0, l.bG)([i.A], () => {
      var t;
      return null == (t = i.A.getGuild(e)) ? true : t.features
    }),
    b = (0, l.bG)([a.A], () => a.A.getStateForGuild(e)),
    g = null == b ? true : b.allPowerups[r.FB],
    m = (0, c.Ay)(e, g),
    A = (0, s.j$)(e, t),
    y = null == g ? true : g.storeRemovalDate,
    O = null != (n = null == h ? true : h.has(d.GuildFeatures.PARTNERED)) && n,
    j = A && null != y && !O && m.type === u.b_.POWERUP_ACTIVATED,
    v = j ? {
      title: p.intl.formatToPlainString(f.default.mgoPkU, {
        perkName: null == g ? true : g.title
      }),
      description: p.intl.formatToPlainString(f.default.UT9pkI, {
        dateString: (0, o.A)(y)
      })
    } : null;
  return {
    shouldShow: j,
    notificationConfig: v
  }
}