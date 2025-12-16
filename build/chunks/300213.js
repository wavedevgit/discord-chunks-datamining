/** Chunk was on 1272 **/
/** chunk id: 300213, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => c
}), require("./473749.js");
var Chunk442837 = require("./442837.js");
require("./565799.js"), require("./431328.js"), require("./501655.js");
var Chunk427679 = require("./427679.js"),
  Chunk517334 = require("./517334.js");
require("./199902.js");
var Chunk592125 = require("./592125.js");
require("./496675.js"), require("./938475.js");
var Chunk151864 = require("./151864.js");
require("./497656.js");
var Chunk554747 = require("./554747.js");

function c(e) {
  var t;
  let n = (0, l.ZP)(e),
    c = a.Z.getChannel(null == (t = n[0]) ? true : t.id),
    u = (0, r.e7)([i.Z], () => i.Z.getStageInstanceByChannel(null == c ? true : c.id), [c]),
    d = (0, s.k5)(e),
    {
      isStageNoticeHidden: p,
      isEventNoticeHidden: f
    } = (0, r.cj)([o.Z], () => ({
      isStageNoticeHidden: o.Z.isLiveChannelNoticeHidden({
        stageId: null == u ? true : u.id
      }),
      isEventNoticeHidden: o.Z.isLiveChannelNoticeHidden({
        eventId: null == d ? true : d.id
      })
    }), [u, d]);
  if (null != d)
    if (null != u) return !p;
    else return !f;
  return null != u && !p
}
require("./765305.js"), require("./231338.js")