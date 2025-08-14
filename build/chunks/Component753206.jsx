/** Chunk was on 99956 **/
/** chunk id: 753206, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk628238 = require("./628238.js"),
  Chunk750030 = require("./750030.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk25015 = require("./25015.jsx"),
  Chunk963550 = require("./963550.jsx"),
  Chunk845080 = require("./845080.jsx"),
  Chunk360514 = require("./360514.js");
let p = Chunk73800.memo(function(e) {
  var t;
  let {
    message: n,
    channel: l,
    compact: p,
    className: v,
    isGroupStart: g,
    hideSimpleEmbedContent: b = true,
    disableInteraction: E,
    previewGuildId: O,
    preview: y,
    author: S
  } = e, j = null != O ? O : (0, a.k)(n), _ = (0, u.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), {
    content: h
  } = (0, c.Z)(n, {
    hideSimpleEmbedContent: b,
    allowList: _,
    allowHeading: _,
    allowLinks: true,
    previewLinkTarget: true
  }), P = i.useMemo(() => {
    var t, n;
    return (0, f.Z)((t = function(e) {
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
      channel: l,
      guildId: j
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
  }, [e, l, j]);
  return (0, r.jsx)(s.Z, {
    compact: p,
    className: o()(v, {
      [m.message]: true,
      [m.cozyMessage]: !p,
      [m.groupStart]: g
    }),
    childrenHeader: P,
    childrenMessageContent: (0, d.Z)(e, h),
    disableInteraction: E,
    author: S,
    preview: y
  })
})