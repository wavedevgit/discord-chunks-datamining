/** Chunk was on web.js **/
/** chunk id: 463194, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk104505 = require("./104505.js"),
  Chunk176354 = require("./176354.js"),
  Chunk382668 = require("./382668.js");

function p(e) {
  let {
    emoji: t,
    shouldAnimate: n
  } = e;
  if (null == t) return null;
  let i = f.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
  return (0, r.jsx)(c.Z, {
    className: _.traitEmoji,
    emojiId: t.id,
    emojiName: i,
    animated: t.animated,
    shouldAnimate: n
  })
}

function h(e) {
  let {
    trait: t,
    ellipsize: n
  } = e, a = i.useRef(null), c = (0, d.X)(a), f = !(0, s.e7)([u.Z], () => u.Z.useReducedMotion) && c;
  return null == t.label || t.label.length <= 0 ? null : (0, r.jsxs)("div", {
    ref: a,
    className: o()(_.trait, {
      [_.ellipsize]: n
    }),
    children: [(0, r.jsx)(p, {
      emoji: t.emoji,
      shouldAnimate: f
    }), (0, r.jsx)(l.Text, {
      tag: "span",
      className: n ? _.ellipsize : true,
      variant: "text-sm/normal",
      color: "text-default",
      children: t.label
    })]
  })
}

function m(e) {
  let {
    items: t
  } = e, n = i.useCallback((e, t) => "string" == typeof e ? (0, r.jsx)("div", {
    className: o()(_.trait, {
      [_.ellipsize]: t.ellipsize
    }),
    children: (0, r.jsx)(l.Text, {
      tag: "span",
      variant: "text-sm/normal",
      color: "text-default",
      children: e
    })
  }, "overflow") : (0, r.jsx)(h, {
    trait: e,
    ellipsize: t.ellipsize
  }, e.key), []), a = i.useCallback(e => n(e, {
    ellipsize: true
  }), [n]), s = i.useCallback(e => n(e, {
    ellipsize: false
  }), [n]), c = i.useCallback(e => (0, r.jsx)(l.te1, {
    items: e,
    renderItem: s
  }), [s]);
  return 0 === t.length ? null : (0, r.jsx)(l.Epb, {
    className: _.container,
    items: t,
    renderItem: a,
    renderOverflow: c,
    maxLines: 2,
    itemGapPx: 4
  })
}