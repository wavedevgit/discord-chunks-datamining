/** Chunk was on 8102 **/
/** chunk id: 313741, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  K: () => p
}), require("./388685.js"), require("./953529.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk172337 = require("./172337.js"),
  Chunk101492 = require("./101492.js"),
  Chunk710091 = require("./710091.js"),
  Chunk496675 = require("./496675.js"),
  Chunk388032 = require("./388032.jsx");
let d = {
    "server-subscriptions-onboarding": Chunk710091.Z,
    "server-subscriptions-finish-setting-up": Chunk101492.Z,
    "server-subscriptions-create-tier-from-template": Chunk172337.Z
  },
  c = {
    title: () => u.intl.string(u.t.V42OaH),
    description: () => u.intl.string(u.t["7dJ16X"]),
    selectGuildCta: () => u.intl.string(u.t.LhlgY9),
    createGuildDescription: () => u.intl.string(u.t.anOisx),
    createGuildCta: () => u.intl.string(u.t.B44MTm),
    canCreateGuild: true,
    useIsGuildSupported: () => (0, l.e7)([s.Z], () => e => s.Z.canAccessGuildSettings(e), [], l.pF)
  };

function p(e) {
  var t;
  let [i] = n.useState(null == e ? true : d[e]), l = c.useIsGuildSupported(), r = null == i || null == (t = i.useIsGuildSupported) ? true : t.call(i), a = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(i);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
        return Object.getOwnPropertyDescriptor(i, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = i[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, c, null != i ? i : {});
  return {
    title: a.title(),
    description: a.description(),
    selectGuildCta: a.selectGuildCta(),
    createGuildDescription: a.createGuildDescription(),
    createGuildCta: a.createGuildCta(),
    canCreateGuild: a.canCreateGuild,
    isGuildSupported: (e, t) => l(e, t) && (null == r ? true : r(e, t)) !== false
  }
}