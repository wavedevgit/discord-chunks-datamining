/** Chunk was on 70119 **/
/** chunk id: 753206, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk628238 = require("./628238.js"),
  Chunk750030 = require("./750030.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk25015 = require("./25015.jsx"),
  Chunk963550 = require("./963550.jsx"),
  Chunk845080 = require("./845080.jsx"),
  Chunk433869 = require("./433869.js");
let p = Chunk73800.memo(function(e) {
  var t;
  let {
    message: n,
    channel: a,
    compact: p,
    className: v,
    isGroupStart: h,
    hideSimpleEmbedContent: b = true,
    disableInteraction: P,
    previewGuildId: g,
    preview: x,
    author: j
  } = e, O = null != g ? g : (0, s.k)(n), _ = (0, o.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), {
    content: w
  } = (0, u.Z)(n, {
    hideSimpleEmbedContent: b,
    allowList: _,
    allowHeading: _,
    allowLinks: true,
    previewLinkTarget: true
  }), C = i.useMemo(() => {
    var t, n;
    return (0, m.Z)((t = function(e) {
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
      channel: a,
      guildId: O
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
  }, [e, a, O]);
  return (0, r.jsx)(c.Z, {
    compact: p,
    className: l()(v, {
      [f.message]: true,
      [f.cozyMessage]: !p,
      [f.groupStart]: h
    }),
    childrenHeader: C,
    childrenMessageContent: (0, d.Z)(e, w),
    disableInteraction: P,
    author: j,
    preview: x
  })
})