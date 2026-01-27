/** Chunk was on web.js **/
/** chunk id: 20851, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk384231 = require("./384231.js"),
  Chunk903369 = require("./903369.js"),
  Chunk491182 = require("./491182.jsx"),
  Chunk538355 = require("./538355.jsx"),
  Chunk715628 = require("./715628.jsx"),
  Chunk752636 = require("./752636.jsx"),
  Chunk119907 = require("./119907.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
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

function m(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  var t;
  let {
    message: n,
    channel: a,
    compact: _,
    className: m,
    isGroupStart: E,
    hideSimpleEmbedContent: y = true,
    disableInteraction: b,
    previewGuildId: O,
    preview: v,
    author: A
  } = e, I = null != O ? O : (0, l.U)(n), S = (0, s.S)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), {
    content: T
  } = (0, u.A)(n, {
    hideSimpleEmbedContent: y,
    allowList: S,
    allowHeading: S,
    allowLinks: true,
    previewLinkTarget: true
  }), C = i.useMemo(() => (0, f.A)(g(h({}, e), {
    channel: a,
    guildId: I
  })), [e, a, I]);
  return (0, r.jsx)(c.A, {
    compact: _,
    className: o()(m, {
      [p.iU]: true,
      [p.HJ]: !_,
      [p._A]: E
    }),
    childrenHeader: C,
    childrenMessageContent: (0, d.A)(e, T),
    disableInteraction: b,
    author: A,
    preview: v
  })
}
let y = Chunk64700.memo(E)