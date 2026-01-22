/** Chunk was on web.js **/
/** chunk id: 51183, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk565645 = require("./565645.jsx"),
  Chunk7584 = require("./7584.js"),
  Chunk253932 = require("./253932.js"),
  Chunk300703 = require("./300703.js");
require("./851883.js");
var Chunk123511 = require("./123511.js");

function p(e, t, n) {
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
      p(e, t, n[t])
    })
  }
  return e
}

function h(e) {
  let {
    emoji: t,
    className: n,
    animate: a = true,
    hideTooltip: p = false,
    tooltipDelay: h = 150
  } = e, m = u.Sf.useSetting(), g = i.useRef(null), E = null != t.id ? ":".concat(t.name, ":") : c.Ay.translateSurrogatesToInlineEmoji(t.name);
  if (null == t.id && d.V.has(t.name)) return (0, r.jsx)("span", {
    className: s()(f.Zg, n),
    children: t.name
  });
  let b = {
    className: s()(f.Zg, n),
    emojiId: t.id,
    emojiName: t.name,
    autoplay: true,
    animated: !!(t.animated && m && a),
    registerInnerRef: e => {
      g.current = e
    }
  };
  return p ? (0, r.jsx)(l.A, _({}, b)) : (0, r.jsx)(o.m, {
    targetElementRef: g,
    text: E,
    delay: h,
    children: (0, r.jsx)(l.A, _({}, b))
  })
}