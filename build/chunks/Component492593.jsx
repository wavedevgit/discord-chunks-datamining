/** Chunk was on 31978 **/
/** chunk id: 492593, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk573385 = require("./573385.js"),
  Chunk481060 = require("./481060.js"),
  Chunk181430 = require("./181430.js"),
  Chunk606318 = require("./606318.js"),
  Chunk402235 = require("./402235.js"),
  Chunk485386 = require("./485386.js"),
  Chunk724913 = require("./724913.js");

function f(e) {
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

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = function(e) {
  var {
    className: t,
    compact: n = false,
    contentOnly: o = false,
    zalgo: h = true,
    preview: O = false,
    disableInteraction: y = false,
    childrenRepliedMessage: v,
    childrenExecutedCommand: j,
    childrenHeader: P,
    childrenSystemMessage: x,
    childrenButtons: w,
    childrenMessageContent: C,
    childrenAccessories: N,
    messageRef: S,
    focusProps: E = {
      offset: {
        left: 4,
        right: 4
      }
    },
    hasThread: Z,
    isSystemMessage: R,
    hasReply: T,
    author: I,
    onMouseEnter: k,
    onMouseLeave: M
  } = e, D = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["className", "compact", "contentOnly", "zalgo", "preview", "disableInteraction", "childrenRepliedMessage", "childrenExecutedCommand", "childrenHeader", "childrenSystemMessage", "childrenButtons", "childrenMessageContent", "childrenAccessories", "messageRef", "focusProps", "hasThread", "isSystemMessage", "hasReply", "author", "onMouseEnter", "onMouseLeave"]);
  let _ = (0, a.e7)([m.Z], () => (null == I ? true : I.guildId) == null || (null == I ? true : I.colorRoleId) == null ? null : m.Z.getRole(I.guildId, I.colorRoleId)),
    A = (0, p.yH)(null == I ? true : I.guildId, _) && (0, d.S2)(I),
    [L, G] = l.useState(false),
    U = l.useCallback(e => {
      G(true), null == k || k(e)
    }, [k]),
    B = l.useCallback(e => {
      G(false), null == M || M(e)
    }, [M]),
    F = (0, u.Y)({
      location: "BaseMessage"
    }),
    H = (0, r.jsx)(s.d.Provider, {
      value: {
        animate: L,
        setAnimate: G
      },
      children: (0, r.jsx)(c.tEY, b(f({}, E), {
        children: (0, r.jsxs)("div", b(f({
          className: i()(t, {
            [g.gradient]: A,
            [g.withDisplayNameStyles]: F && (null == I ? true : I.displayNameStyles) != null && (null == I ? true : I.guildId) == null,
            [g.wrapper]: true,
            [g.contentOnly]: o,
            [g.compact]: n,
            [g.preview]: O,
            [g.cozy]: !n,
            [g.zalgo]: h,
            [g.hasThread]: Z,
            [g.isSystemMessage]: R,
            [g.hasReply]: T
          }),
          ref: S
        }, D), {
          role: "article",
          onMouseEnter: U,
          onMouseLeave: B,
          children: [v, j, (0, r.jsxs)("div", {
            className: g.contents,
            children: [x, P, null == x && C]
          }), N, null != w ? (0, r.jsx)("div", {
            className: g.buttonContainer,
            children: w
          }) : null]
        }))
      }))
    });
  return y ? (0, r.jsx)(c.Rny, {
    children: H
  }) : H
}