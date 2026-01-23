/** Chunk was on web.js **/
/** chunk id: 42765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => b
}), require("./667532.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk873298 = require("./873298.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk390248 = require("./390248.js"),
  Chunk444802 = require("./444802.js"),
  Chunk278616 = require("./278616.js"),
  Chunk771888 = require("./771888.js"),
  Chunk171316 = require("./171316.js"),
  Chunk945276 = require("./945276.js"),
  Chunk86689 = require("./86689.jsx"),
  Chunk639383 = require("./639383.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk842130 = require("./842130.js");

function E(e, t, n) {
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
      E(e, t, n[t])
    })
  }
  return e
}

function b() {
  var e;
  let t = null == (e = (0, f.A)()) || e,
    n = (0, d.uM)(),
    E = (0, u.G)(),
    {
      goreContentGuilds: b,
      goreContentFriendDm: O,
      goreContentNonFriendDm: v
    } = (0, c.g)(),
    A = e => {
      let t = Object.values(e);
      (0, o.hK)() && t.includes(i.TO.SHOW) ? a.A.showAgeVerificationGetStartedModal({
        entryPoint: s.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
      }) : (0, l.qY)(e)
    },
    I = [{
      value: i.TO.BLUR,
      label: m.intl.string(m.t.S49Uad)
    }, {
      value: i.TO.BLOCK,
      label: m.intl.string(m.t["D/157Y"])
    }],
    S = [{
      value: i.TO.BLUR,
      label: m.intl.string(m.t.S49Uad)
    }],
    T = {
      value: i.TO.SHOW,
      label: m.intl.string(m.t["5k5OFp"])
    };
  t && (I.unshift(T), S.unshift(T));
  let C = {
    isDisabled: E,
    tooltipText: n ? m.intl.string(g.default["6Af/cw"]) : true
  };
  return (0, r.jsxs)(p.E, {
    setting: h.H.GORE_MEDIA_REDACTION,
    description: m.intl.string(m.t.XgH9eh),
    children: [(0, r.jsx)(_.A, y({
      title: m.intl.string(m.t["+uI23H"]),
      value: O,
      onChange: e => A({
        goreContentFriendDm: e
      }),
      options: I
    }, C)), (0, r.jsx)(_.A, y({
      title: m.intl.string(m.t["Yh+HX1"]),
      value: v,
      onChange: e => A({
        goreContentNonFriendDm: e
      }),
      options: I
    }, C)), (0, r.jsx)(_.A, {
      title: m.intl.string(m.t["FP+a42"]),
      value: b,
      onChange: e => A({
        goreContentGuilds: e
      }),
      isDisabled: !t || E,
      options: S,
      tooltipText: n ? m.intl.string(g.default["6Af/cw"]) : true
    })]
  })
}