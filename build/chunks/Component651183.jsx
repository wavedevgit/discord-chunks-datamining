/** Chunk was on 48615 **/
/** chunk id: 651183, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk458725 = require("./458725.js"),
  Chunk475674 = require("./475674.js"),
  Chunk42326 = require("./42326.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    participant: t,
    className: n
  } = e, c = (0, l.Z)(t);
  if (null == c) return null;
  let s = function(e) {
    switch (e) {
      case i.u.STREAM_SEND_LOW_FPS:
      case i.u.STREAM_SEND_HIGH_PACKET_LOSS:
        return o.intl.string(o.t["1f1LHp"]);
      case i.u.STREAM_BAD_NETWORK_QUALITY:
        return o.intl.string(o.t.Ic588B);
      case i.u.STREAM_SOUNDSHARE_FAILED:
        return o.intl.string(o.t["9lcych"]);
      case i.u.STREAM_VIEW_HIGH_PACKET_LOSS:
      case i.u.STREAM_VIEW_LOW_FPS:
        return o.intl.string(o.t.BcOifw);
      default:
        return
    }
  }(c);
  return null != s ? (0, r.jsx)(a.Z, {
    className: n,
    errorMessage: s,
    avError: c
  }) : null
}