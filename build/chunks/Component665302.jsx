/** Chunk was on web.js **/
/** chunk id: 665302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk496526 = require("./496526.js");

function l(e) {
  let {
    buttonText: t,
    onGoBack: n,
    onDismiss: l,
    showCloseButton: c
  } = e;
  return (0, r.jsxs)(o.qXd, {
    className: s.backNotice,
    children: [c && (0, r.jsx)(o.RyX, {
      onClick: l,
      className: s.closeButton,
      noticeType: a.kVF.BACK_TO_PREVIOUS_SCREEN
    }), (0, r.jsx)(i.zxk, {
      text: t,
      variant: "overlay-secondary",
      size: "sm",
      icon: o.whL,
      onClick: n
    })]
  })
}