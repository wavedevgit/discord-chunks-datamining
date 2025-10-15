/** Chunk was on web.js **/
/** chunk id: 821035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => y
}), require("./290780.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk524437 = require("./524437.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk247206 = require("./247206.js"),
  Chunk656577 = require("./656577.js"),
  Chunk294602 = require("./294602.js"),
  Chunk915009 = require("./915009.js"),
  Chunk880257 = require("./880257.js"),
  Chunk400313 = require("./400313.jsx"),
  Chunk947707 = require("./947707.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk660886 = require("./660886.js");

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
    {
      explicitContentGuilds: E,
      explicitContentFriendDm: y,
      explicitContentNonFriendDm: O
    } = (0, Chunk294602.B)(),
    v = e => {
      let t = Object.values(e);
      if ((0, s.Ks)() && t.includes(i.Q4.SHOW)) return void a.Z.showAgeVerificationGetStartedModal({
        entryPoint: o.cU.SENSITIVE_MEDIA_FILTER_SETTINGS
      });
      (0, l.zj)(e)
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
    S = {
      value: Chunk524437.Q4.SHOW,
      label: Chunk388032.intl.string(Chunk388032.t["5k5OFp"])
    };
  exports && (I.unshift(S), T.unshift(S));
  let A = {
    isDisabled: require,
    tooltipText: require ? Chunk388032.intl.string(Chunk660886.default["6Af/cw"]) : true
  };
  return (0, Chunk951288.jsxs)(Chunk400313.n, {
    setting: Chunk726985.s6.PRIVACY_SENSITIVE_MEDIA_V2,
    scrollPosition: Chunk526761.FY.EXPLICIT_MEDIA_REDACTION_V2,
    description: Chunk388032.intl.string(Chunk388032.t.Wnojv1),
    children: [(0, Chunk951288.jsx)(Chunk947707.Z, b({
      title: Chunk388032.intl.string(Chunk388032.t["+uI23H"]),
      value: y,
      onChange: e => v({
        explicitContentFriendDm: e
      }),
      options: I
    }, A)), (0, Chunk951288.jsx)(Chunk947707.Z, b({
      title: Chunk388032.intl.string(Chunk388032.t["Yh+HX1"]),
      value: O,
      onChange: e => v({
        explicitContentNonFriendDm: e
      }),
      options: I
    }, A)), (0, Chunk951288.jsx)(Chunk947707.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["FP+a42"]),
      value: E,
      onChange: e => v({
        explicitContentGuilds: e
      }),
      isDisabled: !exports || require,
      tooltipText: require ? Chunk388032.intl.string(Chunk660886.default["6Af/cw"]) : true,
      options: T
    })]
  })
}