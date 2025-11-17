/** Chunk was on 56648 **/
/** chunk id: 420529, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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

function p(e) {
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

function v(e, t) {
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
  let t = (0, r.e7)([o.Z], () => o.Z.getChannelId() === e.id),
    Z = (0, d.Z)(),
    h = (null == Z ? true : Z.channelId) === e.id,
    b = (0, a.V)(e) && !e.isPrivate(),
    _ = (0, a.Z)(e),
    y = !(0, r.e7)([c.Z], () => c.Z.isInChannel(e.id)) && _ || b,
    N = (0, f.Z)();
  return h || 0 !== N.length ? h ? (0, i.jsx)(l.sNh, {
    label: O.intl.string(O.t.PlwgdU),
    id: "handoff",
    action: () => {
      (0, s.F)(Z)
    },
    icon: (0, E.Z)(true),
    disabled: y
  }) : N.map(r => {
    var a, o;
    return (0, i.jsx)(l.sNh, {
      id: "transfer-".concat(r.type, "-").concat(r.id),
      label: (a = r.type, o = t, a === g.ABu.XBOX ? o ? O.intl.string(O.t["qVE/VF"]) : O.intl.string(O.t.E8euSk) : a === g.ABu.PLAYSTATION ? o ? O.intl.string(O.t.vzfxmY) : O.intl.string(O.t.QxEYDj) : a === g.ABu.PLAYSTATION_STAGING ? o ? O.intl.string(O.t.BDiXtV) : O.intl.string(O.t["bhdB9+"]) : true),
      action: () => (t => {
        if (!t.twoWayLink || t.revoked) return void(0, u.Z)({
          platformType: t.type,
          location: "Console Transfer Item"
        });
        t.type === g.ABu.XBOX ? (0, l.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("66585"), n.e("45929")]).then(n.bind(n, 200623));
          return n => (0, i.jsx)(t, v(p({}, n), {
            channel: e
          }))
        }) : (t.type === g.ABu.PLAYSTATION || t.type === g.ABu.PLAYSTATION_STAGING) && (0, l.ZDy)(async () => {
          let {
            default: r
          } = await n.e("638").then(n.bind(n, 543974));
          return n => (0, i.jsx)(r, v(p({}, n), {
            platform: t.type,
            channel: e
          }))
        })
      })(r),
      icon: (0, E.Z)(r.type),
      disabled: y
    }, r.id)
  }) : null
}