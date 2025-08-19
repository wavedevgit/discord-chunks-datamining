/** Chunk was on 17768 **/
/** chunk id: 753206, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
    channel: i,
    compact: g,
    className: f,
    isGroupStart: b,
    hideSimpleEmbedContent: _ = true,
    disableInteraction: v,
    previewGuildId: h,
    preview: P,
    author: x
  } = e, C = null != h ? h : (0, c.k)(n), O = (0, l.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), {
    content: y
  } = (0, u.Z)(n, {
    hideSimpleEmbedContent: _,
    allowList: O,
    allowHeading: O,
    allowLinks: true,
    previewLinkTarget: true
  }), j = a.useMemo(() => {
    var t, n;
    return (0, p.Z)((t = function(e) {
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
    }({}, e), n = n = {
      channel: i,
      guildId: C
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }, [e, i, C]);
  return (0, r.jsx)(s.Z, {
    compact: g,
    className: o()(f, {
      [m.message]: true,
      [m.cozyMessage]: !g,
      [m.groupStart]: b
    }),
    childrenHeader: j,
    childrenMessageContent: (0, d.Z)(e, y),
    disableInteraction: v,
    author: x,
    preview: P
  })
})