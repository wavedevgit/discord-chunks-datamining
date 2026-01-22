/** Chunk was on 43600 **/
/** chunk id: 368739, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D4: () => o,
  LD: () => d,
  pS: () => c
});
var Chunk417597 = require("./417597.js"),
  Chunk600975 = require("./600975.js"),
  Chunk71393 = require("./71393.js"),
  Chunk735547 = require("./735547.js"),
  Chunk652215 = require("./652215.js");
let o = Chunk735547.Ay.INVITE_OPTIONS_7_DAYS.value,
  u = (0, Chunk600975.C)({
    kind: "guild",
    id: "2025-08_default_invite_expiration_guild",
    label: "Default Invite Expiration Guild",
    defaultConfig: {
      defaultMaxAge: 604800
    },
    treatments: [{
      id: 1,
      label: "14 days",
      config: {
        defaultMaxAge: 1209600
      }
    }, {
      id: 2,
      label: "30 days",
      config: {
        defaultMaxAge: 2592e3
      }
    }, {
      id: 3,
      label: "60 days",
      config: {
        defaultMaxAge: 5184e3
      }
    }]
  });

function d(e) {
  let {
    guildId: t,
    location: n
  } = e, i = u.useExperiment({
    guildId: null != t ? t : a.dJq,
    location: n
  }), d = (0, l.bG)([s.A], () => s.A.getGuild(t));
  return null == t ? null : function(e) {
    var t;
    let {
      guild: n,
      experimentConfig: l
    } = e;
    if (null == n ? true : n.features.has(a.GuildFeatures.HUB)) return r.Ay.INVITE_OPTIONS_FOREVER.value;
    let {
      defaultMaxAge: i
    } = null != l ? l : u.getCurrentConfig({
      guildId: null != (t = null == n ? true : n.id) ? t : a.dJq,
      location: "getDefaultInviteExpiration"
    });
    return null != i ? i : o
  }({
    guild: d,
    experimentConfig: i
  })
}

function c(e) {
  let {
    guildId: t,
    location: n
  } = e, l = u.useExperiment({
    guildId: null != t ? t : a.dJq,
    location: n
  });
  return r.Ay.getMaxAgeOptions({
    includeExperimentalValues: [null == l ? true : l.defaultMaxAge]
  })
}