/** Chunk was on 9207 **/
/** chunk id: 421248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
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

function h(e) {
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

function E() {
  var e;
  let t = null == (e = (0, _.A)()) || e,
    n = (0, u.uM)(),
    E = (0, d.G)(),
    {
      explicitContentGuilds: O,
      explicitContentFriendDm: x,
      explicitContentNonFriendDm: C
    } = (0, c.R)(),
    S = e => {
      let t = Object.values(e);
      (0, a.hK)() && t.includes(i.TO.SHOW) ? l.A.showAgeVerificationGetStartedModal({
        entryPoint: s.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
      }) : (0, o.Jz)(e)
    },
    T = [{
      value: i.TO.BLUR,
      label: f.intl.string(f.t.S49Uad)
    }, {
      value: i.TO.BLOCK,
      label: f.intl.string(f.t["D/157Y"])
    }],
    I = [{
      value: i.TO.BLUR,
      label: f.intl.string(f.t.S49Uad)
    }],
    N = {
      value: i.TO.SHOW,
      label: f.intl.string(f.t["5k5OFp"])
    };
  t && (T.unshift(N), I.unshift(N));
  let j = {
    isDisabled: E,
    tooltipText: n ? f.intl.string(b.default["6Af/cw"]) : true
  };
  return (0, r.jsxs)(p.E, {
    setting: A.H.PRIVACY_SENSITIVE_MEDIA_V2,
    scrollPosition: g.d1.EXPLICIT_MEDIA_REDACTION_V2,
    description: f.intl.string(f.t.Wnojv1),
    children: [(0, r.jsx)(m.A, h({
      title: f.intl.string(f.t["+uI23H"]),
      value: x,
      onChange: e => S({
        explicitContentFriendDm: e
      }),
      options: T
    }, j)), (0, r.jsx)(m.A, h({
      title: f.intl.string(f.t["Yh+HX1"]),
      value: C,
      onChange: e => S({
        explicitContentNonFriendDm: e
      }),
      options: T
    }, j)), (0, r.jsx)(m.A, {
      title: f.intl.string(f.t["FP+a42"]),
      value: O,
      onChange: e => S({
        explicitContentGuilds: e
      }),
      isDisabled: !t || E,
      tooltipText: n ? f.intl.string(b.default["6Af/cw"]) : true,
      options: I
    })]
  })
}