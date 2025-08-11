/** Chunk was on web.js **/
/** chunk id: 651183, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk458725 = require("./458725.js"),
  Chunk386146 = require("./386146.js"),
  Chunk475674 = require("./475674.js"),
  Chunk42326 = require("./42326.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  switch (e) {
    case i.u.STREAM_SEND_LOW_FPS:
    case i.u.STREAM_SEND_HIGH_PACKET_LOSS:
      return l.intl.string(l.t["1f1LHh"]);
    case i.u.STREAM_BAD_NETWORK_QUALITY:
      return l.intl.string(l.t.Ic588P);
    case i.u.STREAM_SOUNDSHARE_FAILED:
      return l.intl.string(l.t["9lcycn"]);
    case i.u.STREAM_VIEW_HIGH_PACKET_LOSS:
    case i.u.STREAM_VIEW_LOW_FPS:
      return l.intl.string(l.t.BcOif3);
    default:
      return
  }
}

function u(e) {
  let {
    participant: t,
    className: n
  } = e, i = (0, a.Z)(t), {
    avErrorUIEnabled: l
  } = (0, o.JN)({
    location: "StreamWarning"
  });
  if (null == i) return null;
  let u = c(i);
  return null != u ? (0, r.jsx)(s.Z, {
    className: n,
    errorMessage: u,
    avError: l ? i : null
  }) : null
}