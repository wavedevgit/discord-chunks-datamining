/** Chunk was on web.js **/
/** chunk id: 323038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./642613.js");
var Chunk442837 = require("./442837.js"),
  Chunk752048 = require("./752048.js"),
  Chunk480294 = require("./480294.js"),
  Chunk594174 = require("./594174.js"),
  Chunk938475 = require("./938475.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let t = (0, r.Wu)([s.ZP], () => s.ZP.getVoiceStatesForChannelAlt(e.id, e.guild_id).map(e => {
      let {
        user: t
      } = e;
      return t.id
    }), [e.id, e.guild_id]),
    n = (0, r.e7)([i.Z], () => i.Z.getUserAffinitiesMap()),
    c = (0, r.e7)([a.Z], () => a.Z.hasConsented(l.pjP.PERSONALIZATION));
  return (0, r.Wu)([o.default], () => (c ? t.sort((e, t) => {
    var r, i, a, o;
    return (null != (a = null == (r = n.get(t)) ? true : r.vcProbability) ? a : 0) - (null != (o = null == (i = n.get(e)) ? true : i.vcProbability) ? o : 0)
  }) : t).map(e => o.default.getUser(e)).filter(e => null != e), [c, n, t])
}