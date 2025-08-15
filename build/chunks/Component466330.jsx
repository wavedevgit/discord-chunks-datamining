/** Chunk was on 99905 **/
/** chunk id: 466330, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk340541 = require("./340541.js"),
  Chunk159300 = require("./159300.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = t[e], e in n ? Object.defineProperty(n, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : n[e] = r
    })
  }
  return n
}

function f(n) {
  let {
    source: e,
    guild: t,
    channel: r,
    stageInstance: i
  } = n, b = (0, l.e7)([a.ZP], () => null != t ? a.ZP.getDefaultChannel(t.id, true, s.Plq.CREATE_INSTANT_INVITE) : null), d = (0, l.e7)([u.Z], () => (0, o.b)(u.Z, t, r, i)), f = (0, c.jW)({
    location: "invite_people_menu_item"
  }).entrypoints || d && null != r ? r : b, p = E(e, t, f), j = O(e, f);
  return d ? p : j
}

function p(n, e) {
  return (0, c.jW)({
    location: "invite_menu_item"
  }).entrypoints ? null != e && [s.t4x.GUILD_HEADER, s.t4x.GUILD_CONTEXT_MENU].includes(e) || null == n ? b.intl.string(b.t.Sd8Ix8) : n.type === s.d4z.GUILD_VOICE ? b.intl.string(b.t["EE+P0N"]) : b.intl.string(b.t["0jeAXl"]) : b.intl.string(b.t.BN75l5)
}
let E = (n, e, l) => {
    if (null == e) return null;
    let c = p(l, n);
    return (0, r.jsx)(i.sNh, {
      id: "invite-people",
      label: c,
      color: "brand",
      icon: n === s.t4x.GUILD_HEADER ? i.ejJ : true,
      action: () => (0, i.ZDy)(async () => {
        let {
          default: i
        } = await Promise.all([t.e("7654"), t.e("62292")]).then(t.bind(t, 560114));
        return t => {
          var c, o;
          return (0, r.jsx)(i, (c = d({}, t), o = o = {
            guild: e,
            channel: l,
            source: n
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(o)) : (function(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(n);
              t.push.apply(t, r)
            }
            return t
          })(Object(o)).forEach(function(n) {
            Object.defineProperty(c, n, Object.getOwnPropertyDescriptor(o, n))
          }), c))
        }
      })
    })
  },
  O = (n, e) => {
    let l = p(e, n);
    return (0, r.jsx)(i.sNh, {
      id: "invite-people",
      label: l,
      color: "brand",
      icon: n === s.t4x.GUILD_HEADER ? i.ejJ : true,
      action: () => (0, i.ZDy)(async () => {
        let {
          default: n
        } = await t.e("88358").then(t.bind(t, 598402));
        return e => (0, r.jsx)(n, d({}, e))
      })
    })
  }