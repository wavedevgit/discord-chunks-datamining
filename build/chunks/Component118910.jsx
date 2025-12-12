/** Chunk was on web.js **/
/** chunk id: 118910, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk378298 = require("./378298.js"),
  Chunk473092 = require("./473092.js"),
  Chunk237292 = require("./237292.js");

function l(e) {
  let {
    channelId: t,
    warningId: l,
    senderId: c,
    warningType: u
  } = e;
  if (!(0, s.mG)({
      location: "takeover-modal"
    })) return;
  let d = () => {
    (0, o.T)(t, [l]), (0, a.qc)({
      channelId: t,
      senderId: c,
      warningId: l,
      warningType: u,
      cta: a.NM.USER_TAKEOVER_MODAL_DISMISS,
      isNudgeWarning: false
    })
  };
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("37031"), n.e("5749")]).then(n.bind(n, 955708));
    return n => (0, r.jsx)(e, {
      channelId: t,
      warningId: l,
      senderId: c,
      warningType: u,
      modalProps: n
    })
  }, {
    backdropStyle: i.fCB.BLUR,
    onCloseCallback: d
  })
}