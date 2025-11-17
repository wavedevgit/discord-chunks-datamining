/** Chunk was on web.js **/
/** chunk id: 492593, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk573385 = require("./573385.js"),
  Chunk481060 = require("./481060.js"),
  Chunk181430 = require("./181430.js"),
  Chunk606318 = require("./606318.js"),
  Chunk402235 = require("./402235.js"),
  Chunk485386 = require("./485386.js"),
  Chunk724913 = require("./724913.js");

function h(e, t, n) {
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
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = function(e) {
  var {
    className: t,
    compact: n = false,
    contentOnly: a = false,
    zalgo: h = true,
    preview: g = false,
    disableInteraction: y = false,
    childrenRepliedMessage: O,
    childrenExecutedCommand: v,
    childrenHeader: I,
    childrenSystemMessage: T,
    childrenButtons: S,
    childrenMessageContent: A,
    childrenAccessories: C,
    messageRef: N,
    focusProps: R = {
      offset: {
        left: 4,
        right: 4
      }
    },
    hasThread: P,
    isSystemMessage: D,
    hasReply: w,
    author: x,
    onMouseEnter: L,
    onMouseLeave: M
  } = e, k = b(e, ["className", "compact", "contentOnly", "zalgo", "preview", "disableInteraction", "childrenRepliedMessage", "childrenExecutedCommand", "childrenHeader", "childrenSystemMessage", "childrenButtons", "childrenMessageContent", "childrenAccessories", "messageRef", "focusProps", "hasThread", "isSystemMessage", "hasReply", "author", "onMouseEnter", "onMouseLeave"]);
  let j = (0, s.e7)([_.Z], () => (null == x ? true : x.guildId) == null || (null == x ? true : x.colorRoleId) == null ? null : _.Z.getRole(x.guildId, x.colorRoleId)),
    U = (0, f.yH)(null == x ? true : x.guildId, j) && (0, d.S2)(x),
    [G, B] = i.useState(false),
    Z = i.useCallback(e => {
      B(true), null == L || L(e)
    }, [L]),
    F = i.useCallback(e => {
      B(false), null == M || M(e)
    }, [M]),
    V = (0, u.Y)({
      location: "BaseMessage"
    }),
    H = (0, r.jsx)(l.d.Provider, {
      value: {
        animate: G,
        setAnimate: B
      },
      children: (0, r.jsx)(c.tEY, E(m({}, R), {
        children: (0, r.jsxs)("div", E(m({
          className: o()(t, {
            [p.gradient]: U,
            [p.withDisplayNameStyles]: V && (null == x ? true : x.displayNameStyles) != null && (null == x ? true : x.guildId) == null,
            [p.wrapper]: true,
            [p.contentOnly]: a,
            [p.compact]: n,
            [p.preview]: g,
            [p.cozy]: !n,
            [p.zalgo]: h,
            [p.hasThread]: P,
            [p.isSystemMessage]: D,
            [p.hasReply]: w
          }),
          ref: N
        }, k), {
          role: "article",
          onMouseEnter: Z,
          onMouseLeave: F,
          children: [O, v, (0, r.jsxs)("div", {
            className: p.contents,
            children: [T, I, null == T && A]
          }), C, null != S ? (0, r.jsx)("div", {
            className: p.buttonContainer,
            children: S
          }) : null]
        }))
      }))
    });
  return y ? (0, r.jsx)(c.Rny, {
    children: H
  }) : H
}