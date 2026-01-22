/** Chunk was on 21738 **/
/** chunk id: 82005, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => c
}), require("./64700.js");
var Chunk311907 = require("./311907.js");
require("./63995.js"), require("./113783.js"), require("./69407.js");
var Chunk446600 = require("./446600.js"),
  Chunk624265 = require("./624265.js");
require("./616356.js");
var Chunk734057 = require("./734057.js");
require("./576705.js"), require("./607567.js");
var Chunk473019 = require("./473019.js");
require("./539446.js");
var Chunk508654 = require("./508654.js");

function c(e) {
  var t;
  let n = (0, l.Ay)(e),
    c = a.A.getChannel(null == (t = n[0]) ? true : t.id),
    u = (0, r.bG)([i.A], () => i.A.getStageInstanceByChannel(null == c ? true : c.id), [c]),
    d = (0, o.BP)(e),
    {
      isStageNoticeHidden: p,
      isEventNoticeHidden: f
    } = (0, r.cf)([s.A], () => ({
      isStageNoticeHidden: s.A.isLiveChannelNoticeHidden({
        stageId: null == u ? true : u.id
      }),
      isEventNoticeHidden: s.A.isLiveChannelNoticeHidden({
        eventId: null == d ? true : d.id
      })
    }), [u, d]);
  if (null != d)
    if (null != u) return !p;
    else return !f;
  return null != u && !p
}
require("./988794.js"), require("./818348.js")