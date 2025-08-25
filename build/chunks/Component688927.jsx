/** Chunk was on web.js **/
/** chunk id: 688927, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk670638 = require("./670638.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk319889 = require("./319889.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    quest: t,
    onCtxMenuOpen: n,
    onCtxMenuClose: i,
    onCtxMenuSelect: f
  } = e, p = (0, s.B6)(t.config.expiresAt);
  return (0, r.jsxs)("div", {
    className: d.questAcceptedHeader,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-xxs/medium",
      className: o()(d.flex, d.headerText),
      children: u.intl.format(u.t["pX+fmp"], {
        expirationDate: p
      })
    }), (0, r.jsx)(c.r, {
      onOpen: n,
      onClose: i,
      onSelect: f,
      questContent: l.jn.QUEST_BAR_V2,
      quest: t,
      shouldShowDisclosure: false,
      showShareLink: true,
      sourceQuestContent: l.jn.QUEST_BAR_V2,
      children: e => (0, r.jsx)(a.P3F, h(_({}, e), {
        className: d.submenuWrapper,
        "aria-label": u.intl.string(u.t.DEoVWV),
        children: (0, r.jsx)(a.xhG, {
          size: "md",
          color: "currentColor",
          className: o()(d.submenuIcon, d.interactiveNormal)
        })
      }))
    })]
  })
}