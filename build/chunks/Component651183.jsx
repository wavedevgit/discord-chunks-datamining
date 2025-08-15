/** Chunk was on 24255 **/
/** chunk id: 651183, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk458725 = require("./458725.js"),
  Chunk386146 = require("./386146.js"),
  Chunk475674 = require("./475674.js"),
  Chunk42326 = require("./42326.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    participant: t,
    className: n
  } = e, s = (0, a.Z)(t), {
    avErrorUIEnabled: c
  } = (0, i.JN)({
    location: "StreamWarning"
  });
  if (null == s) return null;
  let d = function(e) {
    switch (e) {
      case l.u.STREAM_SEND_LOW_FPS:
      case l.u.STREAM_SEND_HIGH_PACKET_LOSS:
        return u.intl.string(u.t["1f1LHh"]);
      case l.u.STREAM_BAD_NETWORK_QUALITY:
        return u.intl.string(u.t.Ic588P);
      case l.u.STREAM_SOUNDSHARE_FAILED:
        return u.intl.string(u.t["9lcycn"]);
      case l.u.STREAM_VIEW_HIGH_PACKET_LOSS:
      case l.u.STREAM_VIEW_LOW_FPS:
        return u.intl.string(u.t.BcOif3);
      default:
        return
    }
  }(s);
  return null != d ? (0, r.jsx)(o.Z, {
    className: n,
    errorMessage: d,
    avError: c ? s : null
  }) : null
}