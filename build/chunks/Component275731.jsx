/** Chunk was on 31748 **/
/** chunk id: 275731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk709710 = require("./709710.js"),
  Chunk821715 = require("./821715.js"),
  Chunk93067 = require("./93067.jsx"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let {
    participant: t,
    className: n
  } = e, s = (0, i.A)(t);
  if (null == s) return null;
  let c = function(e) {
    switch (e) {
      case l.iy.STREAM_SEND_LOW_FPS:
      case l.iy.STREAM_SEND_HIGH_PACKET_LOSS:
        return o.intl.string(o.t["1f1LHp"]);
      case l.iy.STREAM_BAD_NETWORK_QUALITY:
        return o.intl.string(o.t.Ic588B);
      case l.iy.STREAM_SOUNDSHARE_FAILED:
        return o.intl.string(o.t["9lcych"]);
      case l.iy.STREAM_VIEW_HIGH_PACKET_LOSS:
      case l.iy.STREAM_VIEW_LOW_FPS:
        return o.intl.string(o.t.BcOifw);
      default:
        return
    }
  }(s);
  return null != c ? (0, r.jsx)(a.A, {
    className: n,
    errorMessage: c,
    avError: s
  }) : null
}