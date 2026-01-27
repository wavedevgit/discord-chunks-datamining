/** Chunk was on web.js **/
/** chunk id: 408269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./747238.js"), require("./812715.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk379418 = require("./379418.js"),
  Chunk900090 = require("./900090.js"),
  Chunk194845 = require("./194845.js");

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
  return "type" in e ? "timestamp" !== e.type ? null : o.A.getCurrentConfig({
    location: "renderElement"
  }, {
    autoTrackExposure: false
  }).enabled ? (0, r.jsx)(p, d(c({}, t), {
    timestamp: e.parsed
  })) : null : null
}

function p(e) {
  var t;
  let {
    timestamp: n,
    replace: o
  } = e, l = e => {
    let {
      timestamp: t,
      format: r
    } = e, i = null != t ? Math.floor(t.getTime() / 1e3) : n.timestamp, s = null != r ? r : n.format;
    o((0, a.tf)(i, s))
  };
  return (0, r.jsxs)("div", {
    className: s.k,
    children: [(0, r.jsx)(i.J3s, {
      value: n.parsed,
      onSelect: e => {
        l({
          timestamp: e.toDate()
        })
      }
    }), (0, r.jsx)(i.czz, {
      value: n.parsed,
      onChange: e => {
        l({
          timestamp: e.toDate()
        })
      }
    }), (0, r.jsx)(i.z6M, {
      options: Object.entries(a.kx).map(e => {
        let [t, r] = e;
        return {
          name: r(n.parsed),
          value: t
        }
      }),
      value: null != (t = n.format) ? t : a.$z,
      onChange: e => {
        l({
          format: e
        })
      }
    })]
  })
}