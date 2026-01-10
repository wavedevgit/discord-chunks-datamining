/** Chunk was on 81985 **/
/** chunk id: 839637, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h(e, t) {
  var n;
  let h = (0, i.e7)([l.Z], () => {
      var t;
      return null == (t = l.Z.getGuild(e)) ? true : t.features
    }),
    g = (0, i.e7)([a.Z], () => a.Z.getStateForGuild(e)),
    m = null == g ? true : g.allPowerups[r.A$],
    b = (0, c.ZP)(e, m),
    y = (0, o.q8)(e, t),
    v = null == m ? true : m.storeRemovalDate,
    O = null != (n = null == h ? true : h.has(d.GuildFeatures.PARTNERED)) && n,
    j = y && null != v && !O && b.type === u.A3.POWERUP_ACTIVATED,
    x = j ? {
      title: f.intl.formatToPlainString(p.default.mgoPkU, {
        perkName: null == m ? true : m.title
      }),
      description: f.intl.formatToPlainString(p.default.UT9pkI, {
        dateString: (0, s.Z)(v)
      })
    } : null;
  return {
    shouldShow: j,
    notificationConfig: x
  }
}