/** Chunk was on web.js **/
/** chunk id: 748975, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk367513 = require("./367513.js"),
  Chunk587895 = require("./587895.js"),
  Chunk568598 = require("./568598.js"),
  Chunk709055 = require("./709055.js"),
  Chunk976860 = require("./976860.js"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js"),
  Chunk851907 = require("./851907.js"),
  Chunk969151 = require("./969151.js"),
  Chunk108959 = require("./108959.js"),
  Chunk5867 = require("./5867.js"),
  Chunk652215 = require("./652215.js");

function h(e, t) {
  let n = c.Ay.getSelfEmbeddedActivityForLocation(t);
  if (null == n) return;
  let h = i.A.getApplication(n.applicationId),
    m = (0, d.H)(n.location),
    g = (0, u.Ay)({
      application: h,
      channelId: m
    });
  null != g ? (0, o.A)(g) : null != m && ((0, s.pX)(_.BVt.CHANNEL(e, m)), (0, f.A)(m) ? (r.A.selectParticipant(m, (0, a.Qt)({
    applicationId: n.applicationId,
    instanceId: null == n ? true : n.compositeInstanceId
  })), r.A.updateLayout(m, _.DUB.NO_CHAT)) : (0, l.gk)(p.Gd.PANEL))
}