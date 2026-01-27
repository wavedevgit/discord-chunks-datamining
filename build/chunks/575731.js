/** Chunk was on web.js **/
/** chunk id: 575731, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./638769.js");
var Chunk311907 = require("./311907.js"),
  Chunk21119 = require("./21119.js"),
  Chunk153488 = require("./153488.js"),
  Chunk287809 = require("./287809.js"),
  Chunk607567 = require("./607567.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  let t = (0, r.yK)([s.Ay], () => s.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map(e => {
      let {
        user: t
      } = e;
      return t.id
    }), [e.id, e.guild_id]),
    n = (0, r.bG)([i.A], () => i.A.getUserAffinitiesMap()),
    c = (0, r.bG)([a.A], () => a.A.hasConsented(l.YAq.PERSONALIZATION));
  return (0, r.yK)([o.default], () => (c ? t.sort((e, t) => {
    var r, i, a, o;
    return (null != (r = null == (a = n.get(t)) ? true : a.vcProbability) ? r : 0) - (null != (i = null == (o = n.get(e)) ? true : o.vcProbability) ? i : 0)
  }) : t).map(e => o.default.getUser(e)).filter(e => null != e), [c, n, t])
}