/** Chunk was on web.js **/
/** chunk id: 821035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => O
}), require("./290780.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk524437 = require("./524437.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk247206 = require("./247206.js"),
  Chunk656577 = require("./656577.js"),
  Chunk294602 = require("./294602.js"),
  Chunk666515 = require("./666515.js"),
  Chunk915009 = require("./915009.js"),
  Chunk880257 = require("./880257.js"),
  Chunk400313 = require("./400313.jsx"),
  Chunk947707 = require("./947707.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk517319 = require("./517319.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O() {
  var e;
  let t = null == (e = (0, f.Z)()) || e,
    n = (0, d.LN)(),
    b = (0, u.r)(),
    {
      explicitContentGuilds: O,
      explicitContentFriendDm: v,
      explicitContentNonFriendDm: S
    } = (0, c.B)(),
    I = e => {
      let t = Object.values(e);
      if ((0, s.Ks)() && t.includes(i.Q4.SHOW)) return void a.Z.showAgeVerificationGetStartedModal({
        entryPoint: o.cU.SENSITIVE_MEDIA_FILTER_SETTINGS
      });
      (0, l.zj)(e)
    },
    T = [{
      value: i.Q4.BLUR,
      label: g.intl.string(g.t.S49Uad)
    }, {
      value: i.Q4.BLOCK,
      label: g.intl.string(g.t["D/157Y"])
    }],
    C = [{
      value: i.Q4.BLUR,
      label: g.intl.string(g.t.S49Uad)
    }],
    A = {
      value: i.Q4.SHOW,
      label: g.intl.string(g.t["5k5OFp"])
    };
  t && (T.unshift(A), C.unshift(A));
  let N = {
    isDisabled: b,
    tooltipText: n ? g.intl.string(E.default["6Af/cw"]) : true
  };
  return (0, r.jsxs)(p.n, {
    setting: m.s6.PRIVACY_SENSITIVE_MEDIA_V2,
    scrollPosition: h.FY.EXPLICIT_MEDIA_REDACTION_V2,
    description: g.intl.string(g.t.Wnojv1),
    children: [(0, r.jsx)(_.Z, y({
      title: g.intl.string(g.t["+uI23H"]),
      value: v,
      onChange: e => I({
        explicitContentFriendDm: e
      }),
      options: T
    }, N)), (0, r.jsx)(_.Z, y({
      title: g.intl.string(g.t["Yh+HX1"]),
      value: S,
      onChange: e => I({
        explicitContentNonFriendDm: e
      }),
      options: T
    }, N)), (0, r.jsx)(_.Z, {
      title: g.intl.string(g.t["FP+a42"]),
      value: O,
      onChange: e => I({
        explicitContentGuilds: e
      }),
      isDisabled: !t || b,
      tooltipText: n ? g.intl.string(E.default["6Af/cw"]) : true,
      options: C
    })]
  })
}