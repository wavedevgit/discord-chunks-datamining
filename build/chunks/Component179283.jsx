/** Chunk was on web.js **/
/** chunk id: 179283, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => _
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk115703 = require("./115703.js"),
  Chunk438842 = require("./438842.jsx"),
  Chunk879472 = require("./879472.jsx"),
  Chunk838934 = require("./838934.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
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

function _(e) {
  let {
    profile: t,
    className: n
  } = e, {
    gamesToDisplay: a,
    lastGameToDisplay: f,
    remainingGames: _
  } = (0, l.A)(t), h = i.useMemo(() => t.traits.map((e, t) => p({
    key: "trait-".concat(t)
  }, e)).filter(e => e.label.length > 0), [t]), m = t.description.length > 0;
  return m || a.length > 0 || h.length > 0 ? (0, r.jsxs)("div", {
    className: s()(d.rf, n),
    children: [m ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: t.description
    }) : null, (0, r.jsx)(c.A, {
      gamesToDisplay: a,
      lastGameToDisplay: f,
      remainingGames: _,
      activity: t.gameActivity
    }), (0, r.jsx)(u.w, {
      items: h
    })]
  }) : (0, r.jsx)("div", {
    className: d.C3
  })
}