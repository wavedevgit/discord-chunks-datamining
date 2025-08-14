/** Chunk was on 65819 **/
/** chunk id: 546200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EmojiStudioModal: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk375727 = require("./375727.jsx"),
  Chunk867248 = require("./867248.js");
let o = e => {
  let {
    transitionState: t,
    userImage: n,
    guildId: o
  } = e;
  return (0, l.jsx)(r.Y0X, {
    transitionState: t,
    size: r.CgR.DYNAMIC,
    fullscreenOnMobile: false,
    className: a.modalRoot,
    parentComponent: "Modal",
    children: (0, l.jsx)(r.hzk, {
      scrollbarType: "none",
      className: a.modalContent,
      children: (0, l.jsx)(i.I, {
        userImage: n,
        guildId: o
      })
    })
  })
}