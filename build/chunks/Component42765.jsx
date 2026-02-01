/** Chunk was on 9207 **/
/** chunk id: 42765, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => h
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

function b(e) {
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

function h() {
  var e;
  let t = null == (e = (0, _.A)()) || e,
    n = (0, u.uM)(),
    h = (0, d.G)(),
    {
      goreContentGuilds: E,
      goreContentFriendDm: O,
      goreContentNonFriendDm: x
    } = (0, c.g)(),
    C = e => {
      let t = Object.values(e);
      (0, a.hK)() && t.includes(i.TO.SHOW) ? l.A.showAgeVerificationGetStartedModal({
        entryPoint: s.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
      }) : (0, o.qY)(e)
    },
    S = [{
      value: i.TO.BLUR,
      label: A.intl.string(A.t.S49Uad)
    }, {
      value: i.TO.BLOCK,
      label: A.intl.string(A.t["D/157Y"])
    }],
    T = [{
      value: i.TO.BLUR,
      label: A.intl.string(A.t.S49Uad)
    }],
    I = {
      value: i.TO.SHOW,
      label: A.intl.string(A.t["5k5OFp"])
    };
  t && (S.unshift(I), T.unshift(I));
  let N = {
    isDisabled: h,
    tooltipText: n ? A.intl.string(f.default["6Af/cw"]) : true
  };
  return (0, r.jsxs)(p.E, {
    setting: g.H.GORE_MEDIA_REDACTION,
    description: A.intl.string(A.t.XgH9eh),
    children: [(0, r.jsx)(m.A, b({
      title: A.intl.string(A.t["+uI23H"]),
      value: O,
      onChange: e => C({
        goreContentFriendDm: e
      }),
      options: S
    }, N)), (0, r.jsx)(m.A, b({
      title: A.intl.string(A.t["Yh+HX1"]),
      value: x,
      onChange: e => C({
        goreContentNonFriendDm: e
      }),
      options: S
    }, N)), (0, r.jsx)(m.A, {
      title: A.intl.string(A.t["FP+a42"]),
      value: E,
      onChange: e => C({
        goreContentGuilds: e
      }),
      isDisabled: !t || h,
      options: T,
      tooltipText: n ? A.intl.string(f.default["6Af/cw"]) : true
    })]
  })
}