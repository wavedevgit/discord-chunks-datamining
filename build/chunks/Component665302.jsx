/** Chunk was on web.js **/
/** chunk id: 665302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk577712 = require("./577712.js");

function l(e) {
  let {
    buttonText: t,
    onGoBack: n,
    onDismiss: l,
    showCloseButton: c
  } = e;
  return (0, r.jsxs)(a.qXd, {
    className: s.backNotice,
    children: [c && (0, r.jsx)(a.RyX, {
      onClick: l,
      className: s.closeButton,
      noticeType: o.kVF.BACK_TO_PREVIOUS_SCREEN
    }), (0, r.jsx)(i.zxk, {
      text: t,
      variant: "overlay-secondary",
      size: "sm",
      icon: a.whL,
      onClick: n
    })]
  })
}