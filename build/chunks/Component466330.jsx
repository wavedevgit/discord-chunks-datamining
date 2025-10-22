/** Chunk was on 99905 **/
/** chunk id: 466330, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function E(n) {
  let {
    source: e,
    guild: t,
    channel: r,
    stageInstance: i
  } = n, b = (0, l.e7)([a.ZP], () => null != t ? a.ZP.getDefaultChannel(t.id, true, s.Plq.CREATE_INSTANT_INVITE) : null), d = (0, l.e7)([u.Z], () => (0, o.b)(u.Z, t, r, i)), E = (0, c._k)({
    location: "invite_people_menu_item"
  }), f = E.isInCallEntrypointEnabled || E.isVoiceChannelEntrypointEnabled || d && null != r ? r : b, O = p(e, t, f), j = y(e, f);
  return d ? O : j
}

function f(n, e) {
  let t = (0, c.LK)({
    location: "invite_menu_item"
  });
  if (t.isGuildEntrypointEnabled && null != e && [s.t4x.GUILD_HEADER, s.t4x.GUILD_CONTEXT_MENU].includes(e)) return b.intl.string(b.t.Sd8Ixw);
  if (null == n) return t.isGuildEntrypointEnabled ? b.intl.string(b.t.Sd8Ixw) : b.intl.string(b.t.BN75l9);
  let r = n.type === s.d4z.GUILD_VOICE;
  return t.isVoiceChannelEntrypointEnabled && r ? b.intl.string(b.t["EE+P0H"]) : t.isTextChannelEntrypointEnabled ? b.intl.string(b.t["0jeAXt"]) : b.intl.string(b.t.BN75l9)
}
let p = (n, e, l) => {
    if (null == e) return null;
    let c = f(l, n);
    return (0, r.jsx)(i.sNh, {
      id: "invite-people",
      label: c,
      color: "brand",
      icon: n === s.t4x.GUILD_HEADER ? i.ejJ : true,
      action: () => (0, i.ZDy)(async () => {
        let {
          default: i
        } = await Promise.all([t.e("7654"), t.e("28297")]).then(t.bind(t, 560114));
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
  y = (n, e) => {
    let l = f(e, n);
    return (0, r.jsx)(i.sNh, {
      id: "invite-people",
      label: l,
      color: "brand",
      icon: n === s.t4x.GUILD_HEADER ? i.ejJ : true,
      action: () => (0, i.ZDy)(async () => {
        let {
          default: n
        } = await t.e("18332").then(t.bind(t, 633057));
        return e => (0, r.jsx)(n, d({}, e))
      })
    })
  }