/** Chunk was on 31930 **/
/** chunk id: 753206, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk628238 = require("./628238.js"),
  Chunk750030 = require("./750030.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk25015 = require("./25015.jsx"),
  Chunk963550 = require("./963550.jsx"),
  Chunk845080 = require("./845080.jsx"),
  Chunk360514 = require("./360514.js");
let g = Chunk647438.memo(function(e) {
  var t;
  let {
    message: n,
    channel: s,
    compact: g,
    className: f,
    isGroupStart: m,
    hideSimpleEmbedContent: b = true,
    disableInteraction: v,
    previewGuildId: C,
    preview: _,
    author: y
  } = e, O = null != C ? C : (0, a.k)(n), S = (0, o.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), {
    content: E
  } = (0, u.Z)(n, {
    hideSimpleEmbedContent: b,
    allowList: S,
    allowHeading: S,
    allowLinks: true,
    previewLinkTarget: true
  }), w = r.useMemo(() => {
    var t, n;
    return (0, h.Z)((t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, e), n = n = {
      channel: s,
      guildId: O
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }, [e, s, O]);
  return (0, i.jsx)(c.Z, {
    compact: g,
    className: l()(f, {
      [p.message]: true,
      [p.cozyMessage]: !g,
      [p.groupStart]: m
    }),
    childrenHeader: w,
    childrenMessageContent: (0, d.Z)(e, E),
    disableInteraction: v,
    author: y,
    preview: _
  })
})