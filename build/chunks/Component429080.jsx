/** Chunk was on web.js **/
/** chunk id: 429080, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
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
  Chunk818923 = require("./818923.js"),
  Chunk746882 = require("./746882.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = function(e) {
  let {
    quest: t
  } = e, [n, a] = i.useState(false), m = i.useRef(null), E = (0, s.e7)([u.default], () => u.default.getCurrentUser()), y = d.ZP.useName(E), O = (0, c.Z)(null == E ? true : E.id), v = i.useCallback(e => (0, r.jsx)(f.Z, b(g({
    name: y,
    quest: t,
    memberListItemRef: m,
    applicationStream: O
  }, e), {
    closePopout: () => {
      a(false)
    }
  })), [t, O, y]);
  return (0, r.jsx)("div", {
    className: p.previewBackground,
    children: (0, r.jsxs)("div", {
      className: p.previewCard,
      children: [(0, r.jsx)(l.X6q, {
        className: h.heading,
        variant: "heading-md/semibold",
        children: "Members List Popout"
      }), (0, r.jsx)("div", {
        className: h.previewDescription,
        children: "This shows how the quest appears when your user has an active quest in the members list. Click your member item below to show the quest popout. Note: In production, the quest popout doesn't show for your own user."
      }), (0, r.jsx)("div", {
        className: h.memberListContainer,
        children: (0, r.jsx)(l.yRy, {
          targetElementRef: m,
          renderPopout: v,
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
            ref: m,
            className: o()(h.minimalMemberItem, {
              [h.selected]: n
            }),
            children: (0, r.jsx)(l.P3F, {
              onClick: () => a(!n),
              tabIndex: 0,
              children: (0, r.jsxs)("div", {
                className: h.memberItemContent,
                children: [(0, r.jsx)(l.qEK, {
                  size: l.EFr.SIZE_32,
                  src: null == E ? true : E.getAvatarURL(true, 32),
                  status: _.Skl.ONLINE,
                  "aria-label": null == E ? true : E.username
                }), (0, r.jsxs)("div", {
                  className: h.memberInfo,
                  children: [(0, r.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: y
                  }), (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: "Online"
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