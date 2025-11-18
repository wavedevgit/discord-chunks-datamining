/** Chunk was on web.js **/
/** chunk id: 584973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk633302 = require("./633302.js"),
  Chunk695346 = require("./695346.js"),
  Chunk563114 = require("./563114.js"),
  Chunk556638 = require("./556638.js"),
  Chunk666998 = require("./666998.js");

function p(e, t, n) {
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
      p(e, t, n[t])
    })
  }
  return e
}

function m(e) {
  let {
    emoji: t,
    className: n,
    animate: a = true,
    hideTooltip: p = false,
    tooltipDelay: m = f.X
  } = e, g = u.Yk.useSetting(), E = i.useRef(null), b = null != t.id ? ":".concat(t.name, ":") : c.ZP.translateSurrogatesToInlineEmoji(t.name);
  if (null == t.id && d.T.has(t.name)) return (0, r.jsx)("span", {
    className: o()(_.emoji, n),
    children: t.name
  });
  let y = {
    className: o()(_.emoji, n),
    emojiId: t.id,
    emojiName: t.name,
    autoplay: true,
    animated: !!(t.animated && g && a),
    registerInnerRef: e => {
      E.current = e
    }
  };
  return p ? (0, r.jsx)(l.Z, h({}, y)) : (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    targetElementRef: E,
    text: b,
    delay: m,
    children: e => (0, r.jsx)(l.Z, h({}, e, y))
  })
}