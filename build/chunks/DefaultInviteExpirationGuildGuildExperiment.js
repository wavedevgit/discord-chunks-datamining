/** Chunk was on 7654 **/
/** chunk id: 301873, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  WV: () => c,
  xU: () => u,
  zv: () => o
});
var Chunk399606 = require("./399606.js"),
  Chunk818083 = require("./818083.js"),
  Chunk430824 = require("./430824.js"),
  Chunk971130 = require("./971130.js"),
  Chunk981631 = require("./981631.js");
let o = Chunk971130.ZP.INVITE_OPTIONS_7_DAYS.value,
  d = (0, Chunk818083.B)({
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

function u(e) {
  let {
    guildId: t,
    location: n
  } = e, l = d.useExperiment({
    guildId: null != t ? t : r.lds,
    location: n
  }), u = (0, i.e7)([s.Z], () => s.Z.getGuild(t));
  return null == t ? null : function(e) {
    var t;
    let {
      guild: n,
      experimentConfig: i
    } = e;
    if (null == n ? true : n.features.has(r.GuildFeatures.HUB)) return a.ZP.INVITE_OPTIONS_FOREVER.value;
    let {
      defaultMaxAge: l
    } = null != i ? i : d.getCurrentConfig({
      guildId: null != (t = null == n ? true : n.id) ? t : r.lds,
      location: "getDefaultInviteExpiration"
    });
    return null != l ? l : o
  }({
    guild: u,
    experimentConfig: l
  })
}

function c(e) {
  let {
    guildId: t,
    location: n
  } = e, i = d.useExperiment({
    guildId: null != t ? t : r.lds,
    location: n
  });
  return a.ZP.getMaxAgeOptions({
    includeExperimentalValues: [null == i ? true : i.defaultMaxAge]
  })
}