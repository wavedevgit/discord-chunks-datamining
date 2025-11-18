/** Chunk was on web.js **/
/** chunk id: 328656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => p
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk562558 = require("./562558.js"),
  Chunk681102 = require("./681102.jsx"),
  Chunk463194 = require("./463194.jsx"),
  Chunk943626 = require("./943626.js");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}

function p(e) {
  let {
    profile: t,
    className: n
  } = e, {
    gamesToDisplay: a,
    lastGameToDisplay: f,
    remainingGames: p
  } = (0, l.Z)(t), h = i.useMemo(() => t.traits.map((e, t) => _({
    key: "trait-".concat(t)
  }, e)).filter(e => e.label.length > 0), [t]), m = t.description.length > 0;
  return m || a.length > 0 || h.length > 0 ? (0, r.jsxs)("div", {
    className: o()(d.body, n),
    children: [m ? (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "text-secondary",
      children: t.description
    }) : null, (0, r.jsx)(c.Z, {
      gamesToDisplay: a,
      lastGameToDisplay: f,
      remainingGames: p,
      activity: t.gameActivity
    }), (0, r.jsx)(u.F, {
      items: h
    })]
  }) : (0, r.jsx)("div", {
    className: d.emptyBody
  })
}