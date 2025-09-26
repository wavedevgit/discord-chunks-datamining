/** Chunk was on web.js **/
/** chunk id: 429080, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk545957 = require("./545957.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk553393 = require("./553393.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818923 = require("./818923.js"),
  Chunk746882 = require("./746882.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = function(e) {
  let {
    quest: t
  } = e, [n, a] = i.useState(false), g = i.useRef(null), b = (0, s.e7)([u.default], () => u.default.getCurrentUser()), O = d.ZP.useName(b), v = (0, c.Z)(null == b ? true : b.id), I = i.useCallback(e => (0, r.jsx)(f.Z, y(E({
    name: O,
    quest: t,
    memberListItemRef: g,
    applicationStream: v
  }, e), {
    closePopout: () => {
      a(false)
    }
  })), [t, v, O]);
  return (0, r.jsx)("div", {
    className: h.previewBackground,
    children: (0, r.jsxs)("div", {
      className: h.previewCard,
      children: [(0, r.jsx)(l.X6q, {
        className: m.heading,
        variant: "heading-md/semibold",
        children: p.intl.string(p.t.U8vTzs)
      }), (0, r.jsx)("div", {
        className: m.previewDescription,
        children: p.intl.string(p.t["0TZ85+"])
      }), (0, r.jsx)("div", {
        className: m.memberListContainer,
        children: (0, r.jsx)(l.yRy, {
          targetElementRef: g,
          renderPopout: I,
          position: "bottom",
          shouldShow: n,
          onRequestClose: () => a(false),
          nudgeAlignIntoViewport: false,
          useRawTargetDimensions: true,
          animation: l.yRy.Animation.NONE,
          spacing: false,
          fixed: true,
          scrollBehavior: "close",
          children: () => (0, r.jsx)("div", {
            ref: g,
            className: o()(m.minimalMemberItem, {
              [m.selected]: n
            }),
            children: (0, r.jsx)(l.P3F, {
              onClick: () => a(!n),
              tabIndex: 0,
              children: (0, r.jsxs)("div", {
                className: m.memberItemContent,
                children: [(0, r.jsx)(l.qEK, {
                  size: l.EFr.SIZE_32,
                  src: null == b ? true : b.getAvatarURL(true, 32),
                  status: _.Skl.ONLINE,
                  "aria-label": null == b ? true : b.username
                }), (0, r.jsxs)("div", {
                  className: m.memberInfo,
                  children: [(0, r.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: O
                  }), (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: p.intl.string(p.t.b9w3bG)
                  })]
                })]
              })
            })
          })
        })
      })]
    })
  })
}