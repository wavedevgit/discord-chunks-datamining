/** Chunk was on 76443 **/
/** chunk id: 849846, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EmojiStudioModal: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk534225 = require("./534225.jsx"),
  Chunk473280 = require("./473280.js");

function s(e) {
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
let u = e => {
  let {
    transitionState: t,
    guildId: n
  } = e, u = "userImage" in e ? e.userImage : true, o = "emoji" in e ? e.emoji : true, c = s({
    guildId: n
  }, null != o ? {
    emoji: o
  } : null != u ? {
    userImage: u
  } : {});
  return (0, l.jsx)(r.EOs, {
    "data-migration-pending": true,
    transitionState: t,
    size: r.rIJ.DYNAMIC,
    fullscreenOnMobile: false,
    className: a.CR,
    parentComponent: "Modal",
    children: (0, l.jsx)(r.$mQ, {
      "data-migration-pending": true,
      scrollbarType: "none",
      className: a.jE,
      children: (0, l.jsx)(i.l, s({}, c))
    })
  })
}