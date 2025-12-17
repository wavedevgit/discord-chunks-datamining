/** Chunk was on 2262 **/
/** chunk id: 546200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EmojiStudioModal: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk375727 = require("./375727.jsx"),
  Chunk506662 = require("./506662.js");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
let s = e => {
  let {
    transitionState: t,
    guildId: n
  } = e, s = "userImage" in e ? e.userImage : true, u = "emoji" in e ? e.emoji : true, c = o({
    guildId: n
  }, null != u ? {
    emoji: u
  } : null != s ? {
    userImage: s
  } : {});
  return (0, l.jsx)(r.Y0X, {
    "data-migration-pending": true,
    transitionState: t,
    size: r.CgR.DYNAMIC,
    fullscreenOnMobile: false,
    className: a.modalRoot,
    parentComponent: "Modal",
    children: (0, l.jsx)(r.hzk, {
      "data-migration-pending": true,
      scrollbarType: "none",
      className: a.modalContent,
      children: (0, l.jsx)(i.I, o({}, c))
    })
  })
}