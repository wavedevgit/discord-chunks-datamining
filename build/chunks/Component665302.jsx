/** Chunk was on 31253 **/
/** chunk id: 665302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk671533 = require("./671533.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk496526 = require("./496526.js");

function s(e) {
  let {
    buttonText: t,
    onGoBack: n,
    onDismiss: s,
    showCloseButton: u
  } = e;
  return (0, r.jsxs)(l.qXd, {
    className: c.backNotice,
    children: [u && (0, r.jsx)(l.RyX, {
      onClick: s,
      noticeType: a.kVF.BACK_TO_PREVIOUS_SCREEN
    }), (0, r.jsxs)(i.zx, {
      className: c.backButton,
      innerClassName: c.backButtonInner,
      look: i.zx.Looks.OUTLINED,
      color: i.zx.Colors.WHITE,
      size: i.zx.Sizes.NONE,
      onClick: n,
      children: [(0, r.jsx)(o.Z, {
        width: 16,
        height: 16,
        direction: o.Z.Directions.LEFT,
        className: c.__invalid_backArrow
      }), t]
    })]
  })
}