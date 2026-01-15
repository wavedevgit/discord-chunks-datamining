/** Chunk was on web.js **/
/** chunk id: 780291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk606992 = require("./606992.js"),
  Chunk314897 = require("./314897.js"),
  Chunk843693 = require("./843693.js"),
  Chunk576125 = require("./576125.js"),
  Chunk112843 = require("./112843.js"),
  Chunk524484 = require("./524484.js"),
  Chunk675654 = require("./675654.js");

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
let h = 16,
  m = .05;

function g(e) {
  var t, n;
  let {
    editorHeight: r,
    textValue: c,
    channelId: d
  } = e, p = i.useRef(c), _ = (0, o.Z)({
    editorHeight: r
  }), g = (0, u.Z)(), E = (0, a.e7)([l.ZP, s.default], () => l.ZP.isComboing(s.default.getId(), d)), b = null != (t = null == _ ? true : _.left) ? t : 0, y = (null != (n = null == _ ? true : _.top) ? n : 0) - h, O = 0 === c.length, v = i.useMemo(() => Math.random() < m, [O]);
  return i.useEffect(() => {
    0 !== c.length && c !== p.current && E && (g.fire(b, y, v ? {
      sprite: f.vv
    } : null), p.current = c)
  }, [c, E, b, y, v, g]), null
}

function E(e) {
  return (0, r.jsx)(c.Z, {
    confettiLocation: d.Hn.CHAT_INPUT,
    children: (0, r.jsx)(g, _({}, e))
  })
}