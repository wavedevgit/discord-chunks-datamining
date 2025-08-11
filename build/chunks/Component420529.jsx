/** Chunk was on web.js **/
/** chunk id: 420529, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = "Console Transfer Item";

function O(e, t) {
  return e === p.ABu.XBOX ? t ? h.intl.string(h.t["qVE/VF"]) : h.intl.string(h.t.E8euSk) : e === p.ABu.PLAYSTATION ? t ? h.intl.string(h.t.vzfxmZ) : h.intl.string(h.t.QxEYDg) : e === p.ABu.PLAYSTATION_STAGING ? t ? h.intl.string(h.t.BDiXtb) : h.intl.string(h.t["bhdB9/"]) : true
}

function v(e) {
  let t = (0, i.e7)([l.Z], () => l.Z.getChannelId() === e.id),
    m = (0, d.Z)(),
    E = (null == m ? true : m.channelId) === e.id,
    v = (0, s.V)(e) && !e.isPrivate(),
    I = (0, s.Z)(e),
    T = !(0, i.e7)([c.Z], () => c.Z.isInChannel(e.id)) && I || v,
    S = (0, f.Z)();
  if (!E && 0 === S.length) return null;
  let A = t => {
    if (!t.twoWayLink || t.revoked) return void(0, a.Z)({
      platformType: t.type,
      location: y
    });
    t.type === p.ABu.XBOX ? (0, o.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("68214"), n.e("522")]).then(n.bind(n, 200623));
      return n => (0, r.jsx)(t, b(g({}, n), {
        channel: e
      }))
    }) : (t.type === p.ABu.PLAYSTATION || t.type === p.ABu.PLAYSTATION_STAGING) && (0, o.ZDy)(async () => {
      let {
        default: i
      } = await n.e("638").then(n.bind(n, 543974));
      return n => (0, r.jsx)(i, b(g({}, n), {
        platform: t.type,
        channel: e
      }))
    })
  };
  return E ? (0, r.jsx)(o.sNh, {
    label: h.intl.string(h.t.PlwgdX),
    id: "handoff",
    action: () => {
      (0, u.F)(m)
    },
    icon: (0, _.Z)(true),
    disabled: T
  }) : S.map(e => (0, r.jsx)(o.sNh, {
    id: "transfer-".concat(e.type, "-").concat(e.id),
    label: O(e.type, t),
    action: () => A(e),
    icon: (0, _.Z)(e.type),
    disabled: T
  }, e.id))
}