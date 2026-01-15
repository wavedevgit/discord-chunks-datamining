/** Chunk was on web.js **/
/** chunk id: 197386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk475179 = require("./475179.js"),
  Chunk812206 = require("./812206.js"),
  Chunk413523 = require("./413523.js"),
  Chunk776862 = require("./776862.js"),
  Chunk703656 = require("./703656.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk531826 = require("./531826.js"),
  Chunk16609 = require("./16609.js"),
  Chunk917107 = require("./917107.js"),
  Chunk918559 = require("./918559.js"),
  Chunk981631 = require("./981631.js");

function h(e, t) {
  let n = c.ZP.getSelfEmbeddedActivityForLocation(t);
  if (null == n) return;
  let h = i.Z.getApplication(n.applicationId),
    m = (0, d.p)(n.location),
    g = (0, u.ZP)({
      application: h,
      channelId: m
    });
  if (null != g) return void(0, o.Z)(g);
  null != m && ((0, s.uL)(_.Z5c.CHANNEL(e, m)), (0, f.Z)(m) ? (r.Z.selectParticipant(m, (0, a.gN)({
    applicationId: n.applicationId,
    instanceId: null == n ? true : n.compositeInstanceId
  })), r.Z.updateLayout(m, _.AEg.NO_CHAT)) : (0, l.tg)(p.Ez.PANEL))
}