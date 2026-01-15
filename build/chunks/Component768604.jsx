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
  Chunk517319 = require("./517319.js");

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
  let t = null == (e = (0, f.Z)()) || e,
    n = (0, d.LN)(),
    E = (0, u.r)(),
    {
      goreContentGuilds: y,
      goreContentFriendDm: O,
      goreContentNonFriendDm: v
    } = (0, c.K)(),
    S = e => {
      let t = Object.values(e);
      if ((0, s.Ks)() && t.includes(i.Q4.SHOW)) return void a.Z.showAgeVerificationGetStartedModal({
        entryPoint: o.cU.SENSITIVE_MEDIA_FILTER_SETTINGS
      });
      (0, l.Jr)(e)
    },
    I = [{
      value: i.Q4.BLUR,
      label: m.intl.string(m.t.S49Uad)
    }, {
      value: i.Q4.BLOCK,
      label: m.intl.string(m.t["D/157Y"])
    }],
    T = [{
      value: i.Q4.BLUR,
      label: m.intl.string(m.t.S49Uad)
    }],
    C = {
      value: i.Q4.SHOW,
      label: m.intl.string(m.t["5k5OFp"])
    };
  t && (I.unshift(C), T.unshift(C));
  let A = {
    isDisabled: E,
    tooltipText: n ? m.intl.string(g.default["6Af/cw"]) : true
  };
  return (0, r.jsxs)(p.n, {
    setting: h.s6.GORE_MEDIA_REDACTION,
    description: m.intl.string(m.t.XgH9eh),
    children: [(0, r.jsx)(_.Z, b({
      title: m.intl.string(m.t["+uI23H"]),
      value: O,
      onChange: e => S({
        goreContentFriendDm: e
      }),
      options: I
    }, A)), (0, r.jsx)(_.Z, b({
      title: m.intl.string(m.t["Yh+HX1"]),
      value: v,
      onChange: e => S({
        goreContentNonFriendDm: e
      }),
      options: I
    }, A)), (0, r.jsx)(_.Z, {
      title: m.intl.string(m.t["FP+a42"]),
      value: y,
      onChange: e => S({
        goreContentGuilds: e
      }),
      isDisabled: !t || E,
      options: T,
      tooltipText: n ? m.intl.string(g.default["6Af/cw"]) : true
    })]
  })
}