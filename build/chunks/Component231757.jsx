/** Chunk was on web.js **/
/** chunk id: 231757, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk726542 = require("./726542.js"),
  Chunk842146 = require("./842146.jsx"),
  Chunk293177 = require("./293177.jsx"),
  Chunk349407 = require("./349407.jsx"),
  Chunk49012 = require("./49012.js"),
  Chunk202120 = require("./202120.js"),
  Chunk981631 = require("./981631.js");

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
  var t;
  let {
    platformType: f,
    location: _,
    overrideUrl: m,
    successRedirect: h
  } = e;
  return (f === d.ABu.LEAGUE_OF_LEGENDS && (f = d.ABu.RIOT_GAMES), f === d.ABu.CRUNCHYROLL) ? void a.K([null != _ ? _ : "unknown"]) : f === d.ABu.XBOX ? void l.K([null != _ ? _ : "unknown"]) : f === d.ABu.PLAYSTATION || f === d.ABu.PLAYSTATION_STAGING ? void s.K([null != _ ? _ : "unknown"], f) : f === d.ABu.DOMAIN ? void(0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("64941").then(n.bind(n, 907053));
    return t => (0, r.jsx)(e, p({
      analyticsLocation: [null != _ ? _ : "unknown"]
    }, t))
  }) : (null == (t = o.Z.get(f)) ? true : t.isFederated) === true ? void(0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("54934").then(n.bind(n, 701460));
    return t => (0, r.jsx)(e, p({
      platformType: f,
      location: _,
      successRedirect: h
    }, t))
  }) : null != m ? void(0, c.q)({
    shouldConfirm: true,
    href: m,
    onConfirm: () => {
      (0, u.H)(f, {
        location: _,
        successRedirect: h
      }, m)
    }
  }) : void(0, u.H)(f, {
    location: _,
    successRedirect: h
  })
}