/** Chunk was on web.js **/
/** chunk id: 197386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
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

function m(e, t) {
  let n = c.ZP.getSelfEmbeddedActivityForLocation(t);
  if (null == n) return;
  let m = i.Z.getApplication(n.applicationId),
    h = (0, d.p)(n.location),
    g = (0, u.ZP)({
      application: m,
      channelId: h
    });
  if (null != g) return void(0, o.Z)(g);
  null != h && ((0, s.uL)(_.Z5c.CHANNEL(e, h)), (0, f.Z)(h) ? (r.Z.selectParticipant(h, (0, a.gN)({
    applicationId: n.applicationId,
    instanceId: null == n ? true : n.compositeInstanceId
  })), r.Z.updateLayout(h, _.AEg.NO_CHAT)) : (0, l.tg)(p.Ez.PANEL))
}