/** Chunk was on web.js **/
/** chunk id: 879472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk713517 = require("./713517.js"),
  Chunk690521 = require("./690521.js"),
  Chunk328370 = require("./328370.js");

function _(e) {
  let {
    emoji: t,
    shouldAnimate: n
  } = e;
  if (null == t) return null;
  let i = f.Ay.isCustomEmoji(t) ? t.name : t.surrogates;
  return (0, r.jsx)(c.A, {
    className: p.Pw,
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
  } = e, a = i.useRef(null), c = (0, d.M)(a), f = !(0, s.bG)([u.A], () => u.A.useReducedMotion) && c;
  return null == t.label || t.label.length <= 0 ? null : (0, r.jsxs)("div", {
    ref: a,
    className: o()(p.Bj, {
      [p.mc]: n
    }),
    children: [(0, r.jsx)(_, {
      emoji: t.emoji,
      shouldAnimate: f
    }), (0, r.jsx)(l.Text, {
      tag: "span",
      className: n ? p.mc : true,
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
    className: o()(p.Bj, {
      [p.mc]: t.ellipsize
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
  }), [n]), c = i.useCallback(e => (0, r.jsx)(l.g2v, {
    items: e,
    renderItem: s
  }), [s]);
  return 0 === t.length ? null : (0, r.jsx)(l.ZVu, {
    className: p.kL,
    items: t,
    renderItem: a,
    renderOverflow: c,
    maxLines: 2,
    itemGapPx: 4
  })
}