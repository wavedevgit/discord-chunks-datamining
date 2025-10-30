/** Chunk was on 19899 **/
/** chunk id: 420529, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
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

function v(e) {
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

function p(e, t) {
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

function Z(e) {
  let t = (0, l.e7)([o.Z], () => o.Z.getChannelId() === e.id),
    Z = (0, d.Z)(),
    _ = (null == Z ? true : Z.channelId) === e.id,
    N = (0, u.V)(e) && !e.isPrivate(),
    b = (0, u.Z)(e),
    h = !(0, l.e7)([c.Z], () => c.Z.isInChannel(e.id)) && b || N,
    y = (0, f.Z)();
  return _ || 0 !== y.length ? _ ? (0, i.jsx)(r.sNh, {
    label: O.intl.string(O.t.PlwgdU),
    id: "handoff",
    action: () => {
      (0, s.F)(Z)
    },
    icon: (0, E.Z)(true),
    disabled: h
  }) : y.map(l => {
    var u, o;
    return (0, i.jsx)(r.sNh, {
      id: "transfer-".concat(l.type, "-").concat(l.id),
      label: (u = l.type, o = t, u === g.ABu.XBOX ? o ? O.intl.string(O.t["qVE/VF"]) : O.intl.string(O.t.E8euSk) : u === g.ABu.PLAYSTATION ? o ? O.intl.string(O.t.vzfxmY) : O.intl.string(O.t.QxEYDj) : u === g.ABu.PLAYSTATION_STAGING ? o ? O.intl.string(O.t.BDiXtV) : O.intl.string(O.t["bhdB9+"]) : true),
      action: () => (t => {
        if (!t.twoWayLink || t.revoked) return void(0, a.Z)({
          platformType: t.type,
          location: "Console Transfer Item"
        });
        t.type === g.ABu.XBOX ? (0, r.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("85555"), n.e("45929")]).then(n.bind(n, 200623));
          return n => (0, i.jsx)(t, p(v({}, n), {
            channel: e
          }))
        }) : (t.type === g.ABu.PLAYSTATION || t.type === g.ABu.PLAYSTATION_STAGING) && (0, r.ZDy)(async () => {
          let {
            default: l
          } = await n.e("638").then(n.bind(n, 543974));
          return n => (0, i.jsx)(l, p(v({}, n), {
            platform: t.type,
            channel: e
          }))
        })
      })(l),
      icon: (0, E.Z)(l.type),
      disabled: h
    }, l.id)
  }) : null
}