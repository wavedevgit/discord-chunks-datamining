/** Chunk was on 15105 **/
/** chunk id: 420529, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => U
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

function T(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(e);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = e[n], n in t ? Object.defineProperty(t, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[n] = i
    })
  }
  return t
}

function g(t, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e.push.apply(e, i)
    }
    return e
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t
}

function U(t) {
  let n = (0, d.e7)([_.Z], () => _.Z.getChannelId() === t.id),
    U = (0, u.Z)(),
    L = (null == U ? true : U.channelId) === t.id,
    y = (0, a.V)(t) && !t.isPrivate(),
    D = (0, a.Z)(t),
    m = !(0, d.e7)([s.Z], () => s.Z.isInChannel(t.id)) && D || y,
    O = (0, I.Z)();
  return L || 0 !== O.length ? L ? (0, i.jsx)(l.sNh, {
    label: E.intl.string(E.t.PlwgdX),
    id: "handoff",
    action: () => {
      (0, p.F)(U)
    },
    icon: (0, o.Z)(true),
    disabled: m
  }) : O.map(d => {
    var a, _;
    return (0, i.jsx)(l.sNh, {
      id: "transfer-".concat(d.type, "-").concat(d.id),
      label: (a = d.type, _ = n, a === c.ABu.XBOX ? _ ? E.intl.string(E.t["qVE/VF"]) : E.intl.string(E.t.E8euSk) : a === c.ABu.PLAYSTATION ? _ ? E.intl.string(E.t.vzfxmZ) : E.intl.string(E.t.QxEYDg) : a === c.ABu.PLAYSTATION_STAGING ? _ ? E.intl.string(E.t.BDiXtb) : E.intl.string(E.t["bhdB9/"]) : true),
      action: () => (n => {
        if (!n.twoWayLink || n.revoked) return void(0, r.Z)({
          platformType: n.type,
          location: "Console Transfer Item"
        });
        n.type === c.ABu.XBOX ? (0, l.ZDy)(async () => {
          let {
            default: n
          } = await Promise.all([e.e("20193"), e.e("522")]).then(e.bind(e, 200623));
          return e => (0, i.jsx)(n, g(T({}, e), {
            channel: t
          }))
        }) : (n.type === c.ABu.PLAYSTATION || n.type === c.ABu.PLAYSTATION_STAGING) && (0, l.ZDy)(async () => {
          let {
            default: d
          } = await e.e("638").then(e.bind(e, 543974));
          return e => (0, i.jsx)(d, g(T({}, e), {
            platform: n.type,
            channel: t
          }))
        })
      })(d),
      icon: (0, o.Z)(d.type),
      disabled: m
    }, d.id)
  }) : null
}