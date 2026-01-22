/** Chunk was on 8798 **/
/** chunk id: 751394, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  q: () => b
}), require("./896048.js"), require("./228524.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk217238 = require("./217238.js"),
  Chunk641411 = require("./641411.js"),
  Chunk594792 = require("./594792.js"),
  Chunk576705 = require("./576705.js"),
  Chunk985018 = require("./985018.jsx");
let u = {
    "server-subscriptions-onboarding": Chunk594792.A,
    "server-subscriptions-finish-setting-up": Chunk641411.A,
    "server-subscriptions-create-tier-from-template": Chunk217238.A
  },
  c = {
    title: () => o.intl.string(o.t.V42OaH),
    description: () => o.intl.string(o.t["7dJ16X"]),
    selectGuildCta: () => o.intl.string(o.t.LhlgY9),
    createGuildDescription: () => o.intl.string(o.t.anOisx),
    createGuildCta: () => o.intl.string(o.t.B44MTm),
    canCreateGuild: true,
    useIsGuildSupported: () => (0, l.bG)([d.A], () => e => d.A.canAccessGuildSettings(e), [], l.My)
  };

function b(e) {
  var t;
  let [i] = n.useState(null == e ? true : u[e]), l = c.useIsGuildSupported(), r = null == i || null == (t = i.useIsGuildSupported) ? true : t.call(i), a = function(e) {
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