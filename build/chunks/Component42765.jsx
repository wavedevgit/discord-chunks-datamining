/** Chunk was on 5606 **/
/** chunk id: 42765, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => A
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

function A() {
  var e;
  let t = null == (e = (0, p.A)()) || e,
    n = (0, u.uM)(),
    A = (0, d.G)(),
    {
      goreContentGuilds: E,
      goreContentFriendDm: x,
      goreContentNonFriendDm: O
    } = (0, c.g)(),
    C = e => {
      let t = Object.values(e);
      (0, a.hK)() && t.includes(i.TO.SHOW) ? l.A.showAgeVerificationGetStartedModal({
        entryPoint: s.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
      }) : (0, o.qY)(e)
    },
    y = [{
      value: i.TO.BLUR,
      label: f.intl.string(f.t.S49Uad)
    }, {
      value: i.TO.BLOCK,
      label: f.intl.string(f.t["D/157Y"])
    }],
    j = [{
      value: i.TO.BLUR,
      label: f.intl.string(f.t.S49Uad)
    }],
    T = {
      value: i.TO.SHOW,
      label: f.intl.string(f.t["5k5OFp"])
    };
  t && (y.unshift(T), j.unshift(T));
  let v = {
    isDisabled: A,
    tooltipText: n ? f.intl.string(b.default["6Af/cw"]) : true
  };
  return (0, r.jsxs)(_.E, {
    setting: g.H.GORE_MEDIA_REDACTION,
    description: f.intl.string(f.t.XgH9eh),
    children: [(0, r.jsx)(m.A, h({
      title: f.intl.string(f.t["+uI23H"]),
      value: x,
      onChange: e => C({
        goreContentFriendDm: e
      }),
      options: y
    }, v)), (0, r.jsx)(m.A, h({
      title: f.intl.string(f.t["Yh+HX1"]),
      value: O,
      onChange: e => C({
        goreContentNonFriendDm: e
      }),
      options: y
    }, v)), (0, r.jsx)(m.A, {
      title: f.intl.string(f.t["FP+a42"]),
      value: E,
      onChange: e => C({
        goreContentGuilds: e
      }),
      isDisabled: !t || A,
      options: j,
      tooltipText: n ? f.intl.string(b.default["6Af/cw"]) : true
    })]
  })
}