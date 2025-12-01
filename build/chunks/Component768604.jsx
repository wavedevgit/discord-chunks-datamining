/** Chunk was on web.js **/
/** chunk id: 768604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => y
}), require("./290780.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk524437 = require("./524437.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk247206 = require("./247206.js"),
  Chunk925513 = require("./925513.js"),
  Chunk294602 = require("./294602.js"),
  Chunk666515 = require("./666515.js"),
  Chunk915009 = require("./915009.js"),
  Chunk880257 = require("./880257.js"),
  Chunk400313 = require("./400313.jsx"),
  Chunk947707 = require("./947707.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk744038 = require("./744038.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y() {
  var e;
  let t = null == (e = (0, Chunk880257.Z)()) || module,
    n = (0, Chunk915009.LN)(),
    E = (0, Chunk666515.r)(),
    {
      goreContentGuilds: y,
      goreContentFriendDm: O,
      goreContentNonFriendDm: v
    } = (0, Chunk294602.K)(),
    S = e => {
      let t = Object.values(e);
      if ((0, s.Ks)() && t.includes(i.Q4.SHOW)) return void a.Z.showAgeVerificationGetStartedModal({
        entryPoint: o.cU.SENSITIVE_MEDIA_FILTER_SETTINGS
      });
      (0, l.Jr)(e)
    },
    I = [{
      value: Chunk524437.Q4.BLUR,
      label: Chunk388032.intl.string(Chunk388032.t.S49Uad)
    }, {
      value: Chunk524437.Q4.BLOCK,
      label: Chunk388032.intl.string(Chunk388032.t["D/157Y"])
    }],
    T = [{
      value: Chunk524437.Q4.BLUR,
      label: Chunk388032.intl.string(Chunk388032.t.S49Uad)
    }],
    A = {
      value: Chunk524437.Q4.SHOW,
      label: Chunk388032.intl.string(Chunk388032.t["5k5OFp"])
    };
  exports && (I.unshift(A), T.unshift(A));
  let C = {
    isDisabled: E,
    tooltipText: require ? Chunk388032.intl.string(Chunk744038.default["6Af/cw"]) : true
  };
  return (0, Chunk54381.jsxs)(Chunk400313.n, {
    setting: Chunk726985.s6.GORE_MEDIA_REDACTION,
    description: Chunk388032.intl.string(Chunk388032.t.XgH9eh),
    children: [(0, Chunk54381.jsx)(Chunk947707.Z, b({
      title: Chunk388032.intl.string(Chunk388032.t["+uI23H"]),
      value: O,
      onChange: e => S({
        goreContentFriendDm: e
      }),
      options: I
    }, C)), (0, Chunk54381.jsx)(Chunk947707.Z, b({
      title: Chunk388032.intl.string(Chunk388032.t["Yh+HX1"]),
      value: v,
      onChange: e => S({
        goreContentNonFriendDm: e
      }),
      options: I
    }, C)), (0, Chunk54381.jsx)(Chunk947707.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["FP+a42"]),
      value: y,
      onChange: e => S({
        goreContentGuilds: e
      }),
      isDisabled: !exports || E,
      options: T,
      tooltipText: require ? Chunk388032.intl.string(Chunk744038.default["6Af/cw"]) : true
    })]
  })
}