/** Chunk was on 67079 **/
/** chunk id: 546200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EmojiStudioModal: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk375727 = require("./375727.jsx"),
  Chunk867248 = require("./867248.js");
let s = e => {
  let {
    transitionState: t,
    userImage: n,
    guildId: s
  } = e;
  return (0, r.jsx)(l.Y0X, {
    transitionState: t,
    size: l.CgR.DYNAMIC,
    fullscreenOnMobile: false,
    className: i.modalRoot,
    parentComponent: "Modal",
    children: (0, r.jsx)(l.hzk, {
      scrollbarType: "none",
      className: i.modalContent,
      children: (0, r.jsx)(a.I, {
        userImage: n,
        guildId: s
      })
    })
  })
}