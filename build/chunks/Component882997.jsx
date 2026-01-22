/** Chunk was on web.js **/
/** chunk id: 882997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk573648 = require("./573648.js"),
  Chunk709146 = require("./709146.jsx"),
  Chunk578138 = require("./578138.jsx"),
  Chunk848398 = require("./848398.jsx"),
  Chunk307600 = require("./307600.js"),
  Chunk738104 = require("./738104.js"),
  Chunk652215 = require("./652215.js");

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
    overrideUrl: h,
    successRedirect: m
  } = e;
  (f === d.fg2.LEAGUE_OF_LEGENDS && (f = d.fg2.RIOT_GAMES), f === d.fg2.CRUNCHYROLL) ? s.t([null != _ ? _ : "unknown"]): f === d.fg2.XBOX ? l.t([null != _ ? _ : "unknown"]) : f === d.fg2.PLAYSTATION || f === d.fg2.PLAYSTATION_STAGING ? o.t([null != _ ? _ : "unknown"], f) : f === d.fg2.DOMAIN ? (0, i.mMO)(async () => {
    let {
      default: e
    } = await n.e("78250").then(n.bind(n, 983665));
    return t => (0, r.jsx)(e, p({
      analyticsLocation: [null != _ ? _ : "unknown"]
    }, t))
  }) : (null == (t = a.A.get(f)) ? true : t.isFederated) === true ? (0, i.mMO)(async () => {
    let {
      default: e
    } = await n.e("81288").then(n.bind(n, 623067));
    return t => (0, r.jsx)(e, p({
      platformType: f,
      location: _,
      successRedirect: m
    }, t))
  }) : null != h ? (0, c.h)({
    shouldConfirm: true,
    href: h,
    onConfirm: () => {
      (0, u.d)(f, {
        location: _,
        successRedirect: m
      }, h)
    }
  }) : (0, u.d)(f, {
    location: _,
    successRedirect: m
  })
}