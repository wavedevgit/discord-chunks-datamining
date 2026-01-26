/** Chunk was on 97887 **/
/** chunk id: 690953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk882997 = require("./882997.jsx"),
  Chunk731474 = require("./731474.js"),
  Chunk383501 = require("./383501.js"),
  Chunk977997 = require("./977997.js"),
  Chunk458829 = require("./458829.js"),
  Chunk857253 = require("./857253.js"),
  Chunk694967 = require("./694967.js"),
  Chunk431516 = require("./431516.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
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

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let t = (0, l.bG)([o.A], () => o.A.getChannelId() === e.id),
    A = (0, d.A)(),
    y = (null == A ? true : A.channelId) === e.id,
    _ = (0, a.J)(e) && !e.isPrivate(),
    O = (0, a.A)(e),
    j = !(0, l.bG)([c.A], () => c.A.isInChannel(e.id)) && O || _,
    v = (0, p.A)();
  return y || 0 !== v.length ? y ? (0, r.jsx)(i.Drp, {
    label: g.intl.string(g.t.PlwgdU),
    id: "handoff",
    action: () => {
      (0, u.x)(A)
    },
    icon: (0, h.A)(true),
    disabled: j
  }) : v.map(l => {
    var a, o;
    return (0, r.jsx)(i.Drp, {
      id: "transfer-".concat(l.type, "-").concat(l.id),
      label: (a = l.type, o = t, a === f.fg2.XBOX ? o ? g.intl.string(g.t["qVE/VF"]) : g.intl.string(g.t.E8euSk) : a === f.fg2.PLAYSTATION ? o ? g.intl.string(g.t.vzfxmY) : g.intl.string(g.t.QxEYDj) : a === f.fg2.PLAYSTATION_STAGING ? o ? g.intl.string(g.t.BDiXtV) : g.intl.string(g.t["bhdB9+"]) : true),
      action: () => {
        !l.twoWayLink || l.revoked ? (0, s.A)({
          platformType: l.type,
          location: "Console Transfer Item"
        }) : l.type === f.fg2.XBOX ? (0, i.mMO)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("14882"), n.e("67670")]).then(n.bind(n, 188072));
          return n => (0, r.jsx)(t, b(m({}, n), {
            channel: e
          }))
        }) : (l.type === f.fg2.PLAYSTATION || l.type === f.fg2.PLAYSTATION_STAGING) && (0, i.mMO)(async () => {
          let {
            default: t
          } = await n.e("71282").then(n.bind(n, 315337));
          return n => (0, r.jsx)(t, b(m({}, n), {
            platform: l.type,
            channel: e
          }))
        })
      },
      icon: (0, h.A)(l.type),
      disabled: j
    }, l.id)
  }) : null
}