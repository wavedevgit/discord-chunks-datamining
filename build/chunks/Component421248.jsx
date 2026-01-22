/** Chunk was on web.js **/
/** chunk id: 421248, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./667532.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk873298 = require("./873298.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk390248 = require("./390248.js"),
  Chunk632119 = require("./632119.js"),
  Chunk278616 = require("./278616.js"),
  Chunk771888 = require("./771888.js"),
  Chunk171316 = require("./171316.js"),
  Chunk945276 = require("./945276.js"),
  Chunk86689 = require("./86689.jsx"),
  Chunk639383 = require("./639383.jsx"),
  Chunk355097 = require("./355097.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk842130 = require("./842130.js");

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
  let t = null == (e = (0, f.A)()) || e,
    n = (0, d.uM)(),
    b = (0, u.G)(),
    {
      explicitContentGuilds: O,
      explicitContentFriendDm: A,
      explicitContentNonFriendDm: v
    } = (0, c.R)(),
    S = e => {
      let t = Object.values(e);
      (0, o.hK)() && t.includes(i.TO.SHOW) ? a.A.showAgeVerificationGetStartedModal({
        entryPoint: s.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
      }) : (0, l.Jz)(e)
    },
    I = [{
      value: i.TO.BLUR,
      label: g.intl.string(g.t.S49Uad)
    }, {
      value: i.TO.BLOCK,
      label: g.intl.string(g.t["D/157Y"])
    }],
    T = [{
      value: i.TO.BLUR,
      label: g.intl.string(g.t.S49Uad)
    }],
    C = {
      value: i.TO.SHOW,
      label: g.intl.string(g.t["5k5OFp"])
    };
  t && (I.unshift(C), T.unshift(C));
  let N = {
    isDisabled: b,
    tooltipText: n ? g.intl.string(E.default["6Af/cw"]) : true
  };
  return (0, r.jsxs)(p.E, {
    setting: m.H.PRIVACY_SENSITIVE_MEDIA_V2,
    scrollPosition: h.d1.EXPLICIT_MEDIA_REDACTION_V2,
    description: g.intl.string(g.t.Wnojv1),
    children: [(0, r.jsx)(_.A, y({
      title: g.intl.string(g.t["+uI23H"]),
      value: A,
      onChange: e => S({
        explicitContentFriendDm: e
      }),
      options: I
    }, N)), (0, r.jsx)(_.A, y({
      title: g.intl.string(g.t["Yh+HX1"]),
      value: v,
      onChange: e => S({
        explicitContentNonFriendDm: e
      }),
      options: I
    }, N)), (0, r.jsx)(_.A, {
      title: g.intl.string(g.t["FP+a42"]),
      value: O,
      onChange: e => S({
        explicitContentGuilds: e
      }),
      isDisabled: !t || b,
      tooltipText: n ? g.intl.string(E.default["6Af/cw"]) : true,
      options: T
    })]
  })
}