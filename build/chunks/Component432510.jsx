/** Chunk was on 27978 **/
/** chunk id: 432510, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  l: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk82554 = require("./82554.js"),
  Chunk726521 = require("./726521.js"),
  Chunk185625 = require("./185625.js"),
  Chunk388032 = require("./388032.jsx");

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
    let g = async () => {
      await (0, o.yL)(e, h)
    }, m = async t => await (0, o.RV)(e, h, t), p = n => {
      let r = null == n ? true : n.token;
      e === l.BM.MESSAGE ? (0, a.eE)(r, t) : e === l.BM.USER ? (0, a.JM)(r, t) : e === l.BM.GUILD ? (0, a.FO)(r, t) : e === l.BM.MEDIA_TAKEDOWN && (0, a.XY)(r, t)
    };
    g(), (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("56499").then(n.bind(n, 433570));
      return t => (0, r.jsx)(e, d(u({}, t), {
        onFormSubmit: m,
        onResend: g,
        onSuccess: p,
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
    (0, s.pTH)(), (0, s.ZDy)(async () => {
      let {
        default: t
      } = await n.e("20670").then(n.bind(n, 993018));
      return n => (0, r.jsx)(t, d(u({}, n), {
        onSuccess: h,
        headerText: c.intl.string(c.t.ZLRYGU),
        confirmButtonText: c.intl.string(c.t.PDTjLN),
        helperText: e === l.BM.MEDIA_TAKEDOWN ? c.intl.string(c.t.jt3z8f) : true
      }))
    }, {
      onCloseCallback: t
    })
  }
}