/** Chunk was on 2262 **/
/** chunk id: 546200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EmojiStudioModal: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk375727 = require("./375727.jsx"),
  Chunk666416 = require("./666416.js");

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let o = e => {
  let {
    transitionState: t,
    guildId: n
  } = e, o = "userImage" in e ? e.userImage : true, u = "emoji" in e ? e.emoji : true, c = s({
    guildId: n
  }, null != u ? {
    emoji: u
  } : null != o ? {
    userImage: o
  } : {});
  return (0, r.jsx)(i.Y0X, {
    "data-migration-pending": true,
    transitionState: t,
    size: i.CgR.DYNAMIC,
    fullscreenOnMobile: false,
    className: a.modalRoot,
    parentComponent: "Modal",
    children: (0, r.jsx)(i.hzk, {
      "data-migration-pending": true,
      scrollbarType: "none",
      className: a.modalContent,
      children: (0, r.jsx)(l.I, s({}, c))
    })
  })
}