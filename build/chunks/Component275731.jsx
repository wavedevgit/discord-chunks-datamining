/** Chunk was on 17869 **/
/** chunk id: 275731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk709710 = require("./709710.js"),
  Chunk821715 = require("./821715.js"),
  Chunk93067 = require("./93067.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    participant: t,
    className: n
  } = e, o = (0, i.A)(t);
  if (null == o) return null;
  let c = function(e) {
    switch (e) {
      case r.iy.STREAM_SEND_LOW_FPS:
      case r.iy.STREAM_SEND_HIGH_PACKET_LOSS:
        return s.intl.string(s.t["1f1LHp"]);
      case r.iy.STREAM_BAD_NETWORK_QUALITY:
        return s.intl.string(s.t.Ic588B);
      case r.iy.STREAM_SOUNDSHARE_FAILED:
        return s.intl.string(s.t["9lcych"]);
      case r.iy.STREAM_VIEW_HIGH_PACKET_LOSS:
      case r.iy.STREAM_VIEW_LOW_FPS:
        return s.intl.string(s.t.BcOifw);
      default:
        return
    }
  }(o);
  return null != c ? (0, l.jsx)(a.A, {
    className: n,
    errorMessage: c,
    avError: o
  }) : null
}