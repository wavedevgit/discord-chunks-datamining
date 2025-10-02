/** Chunk was on web.js **/
/** chunk id: 447525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk660199 = require("./660199.js"),
  Chunk172964 = require("./172964.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  return "type" in e && "timestamp" === e.type ? (0, r.jsx)(_, d(c({}, t), {
    timestamp: e.parsed
  })) : null
}

function _(e) {
  var t;
  let {
    timestamp: n,
    replace: l
  } = e, c = e => {
    let {
      timestamp: t,
      format: r
    } = e, i = null != t ? Math.floor(t.getTime() / 1e3) : n.timestamp, a = null != r ? r : n.format;
    l((0, o.He)(i, a))
  };
  return (0, r.jsxs)("div", {
    className: s.container,
    children: [(0, r.jsx)(a.Wrb, {
      value: n.parsed,
      onSelect: e => {
        c({
          timestamp: e.toDate()
        })
      }
    }), (0, r.jsx)(a.MGJ, {
      value: n.parsed,
      onChange: e => {
        c({
          timestamp: e.toDate()
        })
      }
    }), (0, r.jsx)(i.Gu, {
      options: Object.entries(o.Qh).map(e => {
        let [t, r] = e;
        return {
          name: r(n.parsed),
          value: t
        }
      }),
      value: null != (t = n.format) ? t : o.K_,
      size: i.l7.SMALL,
      onChange: e => {
        let {
          value: t
        } = e;
        c({
          format: t
        })
      }
    })]
  })
}