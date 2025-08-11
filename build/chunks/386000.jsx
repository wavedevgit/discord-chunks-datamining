/** Chunk was on web.js **/
/** chunk id: 386000, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk906732 = require("./906732.js"),
  Chunk628581 = require("./628581.js"),
  Chunk522651 = require("./522651.js"),
  Chunk8404 = require("./8404.js"),
  Chunk871499 = require("./871499.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function p(e) {
  var {
    selfMute: t,
    serverMute: n,
    suppress: u,
    centerButton: _ = false,
    awaitingRemote: p,
    onMouseEnter: h,
    onMouseLeave: m,
    onClick: g
  } = e, E = f(e, ["selfMute", "serverMute", "suppress", "centerButton", "awaitingRemote", "onMouseEnter", "onMouseLeave", "onClick"]);
  let {
    parentAnalyticsLocation: b
  } = (0, o.ZP)(), y = t || n || u, O = _ ? c.d : c.Z, v = (0, a.Z)(t, n, u, p), {
    events: I,
    play: T,
    Component: S
  } = (0, l.b)(y);
  return i.useEffect(() => () => T(), [T, y]), <O{...d({
    iconComponent: S,
    isTrayButton: true,
    caretColor: y ? "red" : "primaryDark",
    color: y ? "red" : true,
    label: v,
    onMouseEnter: e => {
      null == h || h(e), I.onMouseEnter()
    },
    onMouseLeave: e => {
      null == m || m(e), I.onMouseLeave()
    },
    onClick: e => {
      null == g || g(e), (0, s.v)(b, s.d.MIC, t)
    }
  }, E)} />
}