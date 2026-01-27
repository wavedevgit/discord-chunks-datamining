/** Chunk was on web.js **/
/** chunk id: 491182, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk473193 = require("./473193.js"),
  Chunk397927 = require("./397927.js"),
  Chunk824994 = require("./824994.js"),
  Chunk176201 = require("./176201.js"),
  Chunk676608 = require("./676608.js"),
  Chunk317525 = require("./317525.js"),
  Chunk679740 = require("./679740.js");

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

function y(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let O = function(e) {
  let {
    className: t,
    compact: n = false,
    contentOnly: a = false,
    zalgo: h = true,
    preview: g = false,
    disableInteraction: b = false,
    childrenRepliedMessage: O,
    childrenExecutedCommand: v,
    childrenHeader: A,
    childrenSystemMessage: I,
    childrenButtons: S,
    childrenMessageContent: T,
    childrenAccessories: C,
    messageRef: N,
    focusProps: w = {
      offset: {
        left: 4,
        right: 4
      }
    },
    hasThread: R,
    isSystemMessage: P,
    hasReply: D,
    author: L,
    onMouseEnter: x,
    onMouseLeave: M
  } = e, j = y(e, ["className", "compact", "contentOnly", "zalgo", "preview", "disableInteraction", "childrenRepliedMessage", "childrenExecutedCommand", "childrenHeader", "childrenSystemMessage", "childrenButtons", "childrenMessageContent", "childrenAccessories", "messageRef", "focusProps", "hasThread", "isSystemMessage", "hasReply", "author", "onMouseEnter", "onMouseLeave"]), k = (0, s.bG)([p.A], () => (null == L ? true : L.guildId) == null || (null == L ? true : L.colorRoleId) == null ? null : p.A.getRole(L.guildId, L.colorRoleId)), U = (0, f.jV)(null == L ? true : L.guildId, k) && (0, d.kz)(L), [G, F] = i.useState(false), V = i.useCallback(e => {
    F(true), null == x || x(e)
  }, [x]), B = i.useCallback(e => {
    F(false), null == M || M(e)
  }, [M]), H = (0, u.W)({
    location: "BaseMessage"
  }), Y = (0, r.jsx)(l.C.Provider, {
    value: {
      animate: G,
      setAnimate: F
    },
    children: (0, r.jsx)(c.vN3, E(m({}, w), {
      children: (0, r.jsxs)("div", E(m({
        className: o()(t, {
          [_.D7]: U,
          [_.e8]: H && (null == L ? true : L.displayNameStyles) != null && (null == L ? true : L.guildId) == null,
          [_.iE]: true,
          [_.kl]: a,
          [_.oE]: n,
          [_.VH]: g,
          [_.E]: !n,
          [_.GZ]: h,
          [_.pR]: R,
          [_.X4]: P,
          [_.h8]: D
        }),
        ref: N
      }, j), {
        role: "article",
        onMouseEnter: V,
        onMouseLeave: B,
        children: [O, v, (0, r.jsxs)("div", {
          className: _.PG,
          children: [I, A, null == I && T]
        }), C, null != S ? (0, r.jsx)("div", {
          className: _.UD,
          children: S
        }) : null]
      }))
    }))
  });
  return b ? (0, r.jsx)(c.M1G, {
    children: Y
  }) : Y
}