/** Chunk was on 92795 **/
/** chunk id: 904483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
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

function d(e, t) {
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

function p(e) {
  let t = (0, l.e7)([c.Z], () => c.Z.can(o.Plq.MANAGE_CHANNELS, e));
  return __OVERLAY__ ? null : e.id === a._ ? (0, r.jsx)(i.sNh, {
    id: "create-category",
    label: u.intl.string(u.t["ISN+ND"]),
    action: () => (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("1812").then(n.bind(n, 477782));
      return t => (0, r.jsx)(e, s({}, t))
    })
  }) : t ? [(0, r.jsx)(i.sNh, {
    id: "create-channel",
    label: u.intl.string(u.t["fUYU+v"]),
    action: () => (0, i.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("7590"), n.e("45094"), n.e("76480")]).then(n.bind(n, 218613));
      return n => (0, r.jsx)(t, d(s({}, n), {
        channelType: o.d4z.GUILD_TEXT,
        guildId: e.id
      }))
    })
  }, "create-channel"), (0, r.jsx)(i.sNh, {
    id: "create-category",
    label: u.intl.string(u.t["ISN+ND"]),
    action: () => (0, i.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("7590"), n.e("45094"), n.e("76480")]).then(n.bind(n, 218613));
      return n => (0, r.jsx)(t, d(s({}, n), {
        channelType: o.d4z.GUILD_CATEGORY,
        guildId: e.id
      }))
    })
  }, "create-category")] : null
}