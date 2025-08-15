/** Chunk was on web.js **/
/** chunk id: 118910, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
    (0, a.T)(t, [l]), (0, o.qc)({
      channelId: t,
      senderId: c,
      warningId: l,
      warningType: u,
      cta: o.NM.USER_TAKEOVER_MODAL_DISMISS,
      isNudgeWarning: false
    })
  };
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49508"), n.e("37031"), n.e("59650")]).then(n.bind(n, 955708));
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