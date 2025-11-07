/** Chunk was on 86642 **/
/** chunk id: 651183, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk458725 = require("./458725.js"),
  Chunk475674 = require("./475674.js"),
  Chunk42326 = require("./42326.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    participant: t,
    className: n
  } = e, s = (0, l.Z)(t);
  if (null == s) return null;
  let c = function(e) {
    switch (e) {
      case r.u.STREAM_SEND_LOW_FPS:
      case r.u.STREAM_SEND_HIGH_PACKET_LOSS:
        return o.intl.string(o.t["1f1LHp"]);
      case r.u.STREAM_BAD_NETWORK_QUALITY:
        return o.intl.string(o.t.Ic588B);
      case r.u.STREAM_SOUNDSHARE_FAILED:
        return o.intl.string(o.t["9lcych"]);
      case r.u.STREAM_VIEW_HIGH_PACKET_LOSS:
      case r.u.STREAM_VIEW_LOW_FPS:
        return o.intl.string(o.t.BcOifw);
      default:
        return
    }
  }(s);
  return null != c ? (0, i.jsx)(a.Z, {
    className: n,
    errorMessage: c,
    avError: s
  }) : null
}