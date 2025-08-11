/** Chunk was on web.js **/
/** chunk id: 665302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk671533 = require("./671533.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk261496 = require("./261496.js");

function c(e) {
  let {
    buttonText: t,
    onGoBack: n,
    onDismiss: c,
    showCloseButton: u
  } = e;
  return (0, r.jsxs)(o.qXd, {
    className: l.backNotice,
    children: [u && (0, r.jsx)(o.RyX, {
      onClick: c,
      noticeType: s.kVF.BACK_TO_PREVIOUS_SCREEN
    }), (0, r.jsxs)(i.zx, {
      className: l.backButton,
      innerClassName: l.backButtonInner,
      look: i.zx.Looks.OUTLINED,
      color: i.zx.Colors.WHITE,
      size: i.zx.Sizes.NONE,
      onClick: n,
      children: [(0, r.jsx)(a.Z, {
        width: 16,
        height: 16,
        direction: a.Z.Directions.LEFT,
        className: l.__invalid_backArrow
      }), t]
    })]
  })
}