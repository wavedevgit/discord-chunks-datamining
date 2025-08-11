/** Chunk was on web.js **/
/** chunk id: 695492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk607187 = require("./607187.jsx"),
  Chunk112560 = require("./112560.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk91490 = require("./91490.js"),
  Chunk800350 = require("./800350.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    channel: t,
    guild: d,
    width: _,
    inPopout: h
  } = e;
  return (0, r.jsx)(o.Z, {
    className: c.root,
    children: (0, r.jsx)(a.Z, {
      artURL: u,
      size: (0, a.L)(_),
      header: l.intl.string(l.t.O4FiWl),
      onCTAClick: () => (0, i.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("7654"), n.e("49049"), n.e("29328")]).then(n.bind(n, 560114));
        return n => (0, r.jsx)(e, p(f({}, n), {
          guild: d,
          channel: t,
          source: s.t4x.CHANNEL_CALL
        }))
      }, {
        contextKey: h ? i.u1M : i.z1l
      }),
      callToAction: l.intl.string(l.t.VINpSE)
    })
  })
}