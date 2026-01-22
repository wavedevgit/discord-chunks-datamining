/** Chunk was on web.js **/
/** chunk id: 235430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk105330 = require("./105330.js"),
  Chunk961350 = require("./961350.js"),
  Chunk559908 = require("./559908.js"),
  Chunk620141 = require("./620141.js"),
  Chunk224964 = require("./224964.js"),
  Chunk31408 = require("./31408.js"),
  Chunk851110 = require("./851110.js");

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
  } = e, p = i.useRef(c), _ = (0, s.l)({
    editorHeight: r
  }), g = (0, u.A)(), E = (0, a.bG)([l.Ay, o.default], () => l.Ay.isComboing(o.default.getId(), d)), b = null != (t = null == _ ? true : _.left) ? t : 0, y = (null != (n = null == _ ? true : _.top) ? n : 0) - h, O = 0 === c.length, A = i.useMemo(() => Math.random() < m, [O]);
  return i.useEffect(() => {
    0 !== c.length && c !== p.current && E && (g.fire(b, y, A ? {
      sprite: f.dR
    } : null), p.current = c)
  }, [c, E, b, y, A, g]), null
}

function E(e) {
  return (0, r.jsx)(c.A, {
    confettiLocation: d.k.CHAT_INPUT,
    children: (0, r.jsx)(g, _({}, e))
  })
}