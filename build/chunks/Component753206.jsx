/** Chunk was on web.js **/
/** chunk id: 753206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk628238 = require("./628238.js"),
  Chunk750030 = require("./750030.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk25015 = require("./25015.jsx"),
  Chunk963550 = require("./963550.jsx"),
  Chunk845080 = require("./845080.jsx"),
  Chunk548498 = require("./548498.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  var t;
  let {
    message: n,
    channel: a,
    compact: _,
    className: h,
    isGroupStart: E,
    hideSimpleEmbedContent: b = true,
    disableInteraction: y,
    previewGuildId: O,
    preview: v,
    author: S
  } = e, I = null != O ? O : (0, l.k)(n), T = (0, s.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), {
    content: C
  } = (0, u.Z)(n, {
    hideSimpleEmbedContent: b,
    allowList: T,
    allowHeading: T,
    allowLinks: true,
    previewLinkTarget: true
  }), A = i.useMemo(() => (0, f.Z)(g(m({}, e), {
    channel: a,
    guildId: I
  })), [e, a, I]);
  return (0, r.jsx)(c.Z, {
    compact: _,
    className: o()(h, {
      [p.message]: true,
      [p.cozyMessage]: !_,
      [p.groupStart]: E
    }),
    childrenHeader: A,
    childrenMessageContent: (0, d.Z)(e, C),
    disableInteraction: y,
    author: S,
    preview: v
  })
}
let b = Chunk473749.memo(E)