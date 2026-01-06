/** Chunk was on 67000 **/
/** chunk id: 839637, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk905128 = require("./905128.js"),
  Chunk158638 = require("./158638.js"),
  Chunk834209 = require("./834209.js"),
  Chunk973772 = require("./973772.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t) {
  var n;
  let p = (0, i.e7)([l.Z], () => {
      var t;
      return null == (t = l.Z.getGuild(e)) ? true : t.features
    }),
    g = (0, i.e7)([a.Z], () => a.Z.getStateForGuild(e)),
    b = null == g ? true : g.allPowerups[r.A$],
    m = (0, c.ZP)(e, b),
    y = (0, o.q8)(e, t),
    O = null == b ? true : b.storeRemovalDate,
    v = null != (n = null == p ? true : p.has(d.GuildFeatures.PARTNERED)) && n,
    j = y && null != O && !v && m.type === u.A3.POWERUP_ACTIVATED,
    C = j ? {
      title: h.intl.formatToPlainString(f.default.mgoPkU, {
        perkName: null == b ? true : b.title
      }),
      description: h.intl.formatToPlainString(f.default.UT9pkI, {
        dateString: (0, s.Z)(O)
      })
    } : null;
  return {
    shouldShow: j,
    notificationConfig: C
  }
}