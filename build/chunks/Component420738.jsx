/** Chunk was on web.js **/
/** chunk id: 420738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk544231 = require("./544231.js"),
  Chunk665909 = require("./665909.js"),
  Chunk617641 = require("./617641.js");

function l(e) {
  let {
    channelId: t,
    warningId: l,
    senderId: c,
    warningType: u
  } = e;
  if (!(0, s.wv)({
      location: "takeover-modal"
    })) return;
  let d = () => {
    (0, a.xi)(t, [l]), (0, o._$)({
      channelId: t,
      senderId: c,
      warningId: l,
      warningType: u,
      cta: o.Wm.USER_TAKEOVER_MODAL_DISMISS,
      isNudgeWarning: false
    })
  };
  (0, i.mMO)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("43549"), n.e("45033"), n.e("18108")]).then(n.bind(n, 237170));
    return n => (0, r.jsx)(e, {
      channelId: t,
      warningId: l,
      senderId: c,
      warningType: u,
      modalProps: n
    })
  }, {
    backdropStyle: i.F2Z.BLUR,
    onCloseCallback: d
  })
}