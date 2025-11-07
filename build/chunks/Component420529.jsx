/** Chunk was on 86642 **/
/** chunk id: 420529, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk397639 = require("./397639.js"),
  Chunk19780 = require("./19780.js"),
  Chunk979651 = require("./979651.js"),
  Chunk951206 = require("./951206.js"),
  Chunk446226 = require("./446226.js"),
  Chunk937393 = require("./937393.js"),
  Chunk721351 = require("./721351.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let t = (0, r.e7)([s.Z], () => s.Z.getChannelId() === e.id),
    y = (0, d.Z)(),
    C = (null == y ? true : y.channelId) === e.id,
    _ = (0, o.V)(e) && !e.isPrivate(),
    v = (0, o.Z)(e),
    x = !(0, r.e7)([c.Z], () => c.Z.isInChannel(e.id)) && v || _,
    O = (0, p.Z)();
  return C || 0 !== O.length ? C ? (0, i.jsx)(l.sNh, {
    label: m.intl.string(m.t.PlwgdU),
    id: "handoff",
    action: () => {
      (0, u.F)(y)
    },
    icon: (0, f.Z)(true),
    disabled: x
  }) : O.map(r => {
    var o, s;
    return (0, i.jsx)(l.sNh, {
      id: "transfer-".concat(r.type, "-").concat(r.id),
      label: (o = r.type, s = t, o === h.ABu.XBOX ? s ? m.intl.string(m.t["qVE/VF"]) : m.intl.string(m.t.E8euSk) : o === h.ABu.PLAYSTATION ? s ? m.intl.string(m.t.vzfxmY) : m.intl.string(m.t.QxEYDj) : o === h.ABu.PLAYSTATION_STAGING ? s ? m.intl.string(m.t.BDiXtV) : m.intl.string(m.t["bhdB9+"]) : true),
      action: () => (t => {
        if (!t.twoWayLink || t.revoked) return void(0, a.Z)({
          platformType: t.type,
          location: "Console Transfer Item"
        });
        t.type === h.ABu.XBOX ? (0, l.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("2892"), n.e("45929")]).then(n.bind(n, 200623));
          return n => (0, i.jsx)(t, b(g({}, n), {
            channel: e
          }))
        }) : (t.type === h.ABu.PLAYSTATION || t.type === h.ABu.PLAYSTATION_STAGING) && (0, l.ZDy)(async () => {
          let {
            default: r
          } = await n.e("638").then(n.bind(n, 543974));
          return n => (0, i.jsx)(r, b(g({}, n), {
            platform: t.type,
            channel: e
          }))
        })
      })(r),
      icon: (0, f.Z)(r.type),
      disabled: x
    }, r.id)
  }) : null
}