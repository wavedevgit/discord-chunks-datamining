/** Chunk was on 86142 **/
/** chunk id: 843376, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  i: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk17372 = require("./17372.js"),
  Chunk928658 = require("./928658.js"),
  Chunk369053 = require("./369053.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  let h = h => {
    let f = async () => {
      await (0, o.TP)(e, h)
    }, p = async t => await (0, o.G_)(e, h, t), g = n => {
      let r = null == n ? true : n.token;
      e === l.tY.MESSAGE ? (0, a.bM)(r, t) : e === l.tY.USER ? (0, a.nQ)(r, t) : e === l.tY.GUILD ? (0, a.V3)(r, t) : e === l.tY.MEDIA_TAKEDOWN && (0, a._Y)(r, t)
    };
    f(), (0, s.mMO)(async () => {
      let {
        default: e
      } = await n.e("19840").then(n.bind(n, 79779));
      return t => (0, r.jsx)(e, d(u({}, t), {
        onFormSubmit: p,
        onResend: f,
        onSuccess: g,
        headerText: c.intl.string(c.t.H3Q7U8),
        confirmButtonText: c.intl.string(c.t["13ofGu"]),
        impression: {
          impressionName: i.ImpressionNames.URF_CONFIRM_EMAIL_CODE
        }
      }))
    }, {
      onCloseCallback: t
    })
  };
  return () => {
    (0, s.s7G)(), (0, s.mMO)(async () => {
      let {
        default: t
      } = await n.e("29232").then(n.bind(n, 180275));
      return n => (0, r.jsx)(t, d(u({}, n), {
        onSuccess: h,
        headerText: c.intl.string(c.t.ZLRYGU),
        confirmButtonText: c.intl.string(c.t.PDTjLN),
        helperText: e === l.tY.MEDIA_TAKEDOWN ? c.intl.string(c.t.jt3z8f) : true
      }))
    }, {
      onCloseCallback: t
    })
  }
}