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
  Chunk435757 = require("./435757.js");

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
  let t = null == (e = (0, Chunk880257.Z)()) || module,
    n = (0, Chunk915009.LN)(),
    b = (0, Chunk666515.r)(),
    {
      explicitContentGuilds: O,
      explicitContentFriendDm: v,
      explicitContentNonFriendDm: S
    } = (0, Chunk294602.B)(),
    I = e => {
      let t = Object.values(e);
      if ((0, s.Ks)() && t.includes(i.Q4.SHOW)) return void a.Z.showAgeVerificationGetStartedModal({
        entryPoint: o.cU.SENSITIVE_MEDIA_FILTER_SETTINGS
      });
      (0, l.zj)(e)
    },
    T = [{
      value: Chunk524437.Q4.BLUR,
      label: Chunk388032.intl.string(Chunk388032.t.S49Uad)
    }, {
      value: Chunk524437.Q4.BLOCK,
      label: Chunk388032.intl.string(Chunk388032.t["D/157Y"])
    }],
    C = [{
      value: Chunk524437.Q4.BLUR,
      label: Chunk388032.intl.string(Chunk388032.t.S49Uad)
    }],
    A = {
      value: Chunk524437.Q4.SHOW,
      label: Chunk388032.intl.string(Chunk388032.t["5k5OFp"])
    };
  exports && (T.unshift(A), C.unshift(A));
  let N = {
    isDisabled: b,
    tooltipText: require ? Chunk388032.intl.string(Chunk435757.default["6Af/cw"]) : true
  };
  return (0, Chunk54381.jsxs)(Chunk400313.n, {
    setting: Chunk726985.s6.PRIVACY_SENSITIVE_MEDIA_V2,
    scrollPosition: Chunk526761.FY.EXPLICIT_MEDIA_REDACTION_V2,
    description: Chunk388032.intl.string(Chunk388032.t.Wnojv1),
    children: [(0, Chunk54381.jsx)(Chunk947707.Z, y({
      title: Chunk388032.intl.string(Chunk388032.t["+uI23H"]),
      value: v,
      onChange: e => I({
        explicitContentFriendDm: e
      }),
      options: T
    }, N)), (0, Chunk54381.jsx)(Chunk947707.Z, y({
      title: Chunk388032.intl.string(Chunk388032.t["Yh+HX1"]),
      value: S,
      onChange: e => I({
        explicitContentNonFriendDm: e
      }),
      options: T
    }, N)), (0, Chunk54381.jsx)(Chunk947707.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["FP+a42"]),
      value: O,
      onChange: e => I({
        explicitContentGuilds: e
      }),
      isDisabled: !exports || b,
      tooltipText: require ? Chunk388032.intl.string(Chunk435757.default["6Af/cw"]) : true,
      options: C
    })]
  })
}