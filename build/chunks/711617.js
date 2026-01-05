/** Chunk was on web.js **/
/** chunk id: 711617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk475179 = require("./475179.js"),
  Chunk925549 = require("./925549.js"),
  Chunk37234 = require("./37234.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      selectParticipantId: n
    } = t;
  return r.useCallback(() => {
    var t;
    (0, o.Ou)();
    let r = null != (t = e.getGuildId()) ? t : l.ME;
    (0, s.XU)(r, e.id), a.Z.channelListScrollTo(r, e.id), null != n && i.Z.selectParticipant(e.id, n)
  }, [e, n])
}