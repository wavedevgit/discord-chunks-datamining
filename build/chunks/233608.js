/** Chunk was on 62856 **/
/** chunk id: 233608, original params: t,i,E (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk409513 = require("./409513.js"),
  Chunk200876 = require("./200876.js"),
  Chunk228392 = require("./228392.js"),
  Chunk627050 = require("./627050.js"),
  Chunk676317 = require("./676317.js"),
  Chunk434404 = require("./434404.js"),
  Chunk208884 = require("./208884.js"),
  Chunk722932 = require("./722932.js"),
  Chunk368442 = require("./368442.js"),
  Chunk60222 = require("./60222.js"),
  Chunk665906 = require("./665906.js"),
  Chunk313789 = require("./313789.js"),
  Chunk131704 = require("./131704.js"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk71080 = require("./71080.js"),
  Chunk388032 = require("./388032.jsx");

function D(t) {
  let i = (0, _.A)(t),
    S = M.Z.getGuild(t),
    e = null != S && (0, l.l)(S),
    A = (0, P.uH)({
      location: "getPermissionOptions"
    }),
    s = r.N.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled,
    o = n.Z.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled;
  return {
    PRIORITY_SPEAKER_DESCRIPTION: R.intl.format(R.t.j66HgY, {
      keybind: R.intl.string(R.t.DkSwJ2),
      onClick: () => {
        {
          let {
            openUserSettings: t
          } = E(518596);
          t(g.n.KEYBINDS_PANEL, {
            section: O.oAB.KEYBINDS
          })
        }
      }
    }),
    SOUNDBOARD_DESCRIPTION: R.intl.format(R.t.fVE8y8, {
      helpCenterArticle: I.Z.getArticleURL(O.BhN.SOUNDBOARD)
    }),
    showStageChannelPermissions: i,
    showExperimental: true,
    showMembershipManualApprovalPermissions: true,
    showCreatorMonetizationAnalyticsPermission: e,
    inSoundmojiExperiment: A,
    inGameMentionsExperiment: s,
    inBypassSlowmodePermissionExperiment: o
  }
}
let p = {
  generateChannelPermissionSpec: function(t, i, E, n) {
    var l, r, P, _;
    let g = (0, a.IG)(i, E, n),
      M = D(t),
      I = N.tM.getCurrentConfig({
        guildId: t,
        location: "3ad37d_1"
      }).enabled && T.Um.has(i.type),
      p = (0, o.tu)(t),
      c = (0, e.ze)(t),
      u = i.isMediaChannel(),
      {
        inSoundmojiExperiment: C,
        inBypassSlowmodePermissionExperiment: f
      } = M;
    switch (i.type) {
      case O.d4z.GUILD_CATEGORY:
        return [s.zO(g, R.intl.string(R.t["AkPxc+"])), s.Ny(g, R.intl.string(R.t.Ny49TN)), s.vq(g, R.intl.string(R.t.cKobO5), {
          showPrivateThreads: true,
          showCreateThreads: true,
          inSoundmojiExperiment: C,
          inBypassSlowmodePermissionExperiment: f
        }), s.WV(g, R.intl.string(R.t["46Ra1b"])), s.xU(g, R.intl.string(R.t["rrh/W6"])), ...(l = M.showStageChannelPermissions, r = () => s.kv(g, R.intl.string(R.t.yniauk)), l ? [r()] : []), s.uu(g, R.intl.string(R.t.b8lplT))];
      case O.d4z.GUILD_VOICE:
        return [s.zO(g, R.intl.string(R.t.ouHggI), {
          showManageWebhooks: true
        }), s.Ny(g, R.intl.string(R.t.Ny49TN)), s.WV(g, R.intl.string(R.t["46Ra1b"])), s.aW(g, R.intl.string(R.t.iqlsnD), {
          sectionDescription: c ? R.intl.format(R.t["4Z9Fbb"], {
            setUpAutomod: () => {
              A.Z.open(t, O.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: C
        }), s.uu(g, R.intl.string(R.t.b8lplT)), s.xU(g, R.intl.string(R.t["rrh/W6"]))];
      case O.d4z.GUILD_STAGE_VOICE:
        return [s.zO(g, R.intl.string(R.t.ouHggI), {
          showManageWebhooks: false
        }), s.Ny(g, R.intl.string(R.t.Ny49TN)), s.FX(g, R.intl.string(R.t["46Ra1b"]), p), s.kv(g, R.intl.string(R.t.yniauk)), s.uu(g, R.intl.string(R.t.b8lplT)), s.aW(g, R.intl.string(R.t.iqlsnD), {
          sectionDescription: c ? R.intl.format(R.t["4Z9Fbb"], {
            setUpAutomod: () => {
              A.Z.open(t, O.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: C
        }), s.xU(g, R.intl.string(R.t["rrh/W6"]), {
          showActivities: false
        })];
      case O.d4z.GUILD_FORUM:
      case O.d4z.GUILD_MEDIA:
        let d = u ? R.intl.string(R.t.aSjPgw) : R.intl.string(R.t.TS7Cnb),
          G = u ? R.t.YjJTtH : R.t["1MTnqY"];
        return [s.zO(g, R.intl.string(R.t.ouHggI)), s.Ny(g, R.intl.string(R.t.Ny49TN)), s.vq(g, d, {
          showPrivateThreads: false,
          showCreateThreads: false,
          sectionDescription: c ? R.intl.format(G, {
            setUpAutomod: () => {
              u || (0, S.MO)(), A.Z.open(t, O.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: C,
          inBypassSlowmodePermissionExperiment: f
        }), s.xU(g, R.intl.string(R.t["rrh/W6"])), ...(P = () => s.WV(g, R.intl.string(R.t["46Ra1b"])), I ? [P()] : [])];
      default:
        return [s.zO(g, R.intl.string(R.t.ouHggI)), s.Ny(g, R.intl.string(R.t.Ny49TN)), s.vq(g, R.intl.string(R.t.cKobO5), {
          showPrivateThreads: i.type !== O.d4z.GUILD_ANNOUNCEMENT,
          showCreateThreads: true,
          inSoundmojiExperiment: C,
          inBypassSlowmodePermissionExperiment: f
        }), s.xU(g, R.intl.string(R.t["rrh/W6"])), ...(_ = () => s.WV(g, R.intl.string(R.t["46Ra1b"])), I ? [_()] : [])]
    }
  },
  generateGuildPermissionSpec: function(t) {
    var i;
    let E = new Set;
    return t.features.has(O.GuildFeatures.COMMUNITY) || E.add(O.Plq.VIEW_GUILD_ANALYTICS.toString()), i = s.s4(D(t.id)), 0 === E.size ? i : i.map(t => {
      var i, n;
      return i = function(t) {
        for (var i = 1; i < arguments.length; i++) {
          var E = null != arguments[i] ? arguments[i] : {},
            n = Object.keys(E);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(E).filter(function(t) {
            return Object.getOwnPropertyDescriptor(E, t).enumerable
          }))), n.forEach(function(i) {
            var n;
            n = E[i], i in t ? Object.defineProperty(t, i, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[i] = n
          })
        }
        return t
      }({}, t), n = n = {
        permissions: t.permissions.filter(t => !E.has(t.flag.toString()))
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n)) : (function(t, i) {
        var E = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          E.push.apply(E, n)
        }
        return E
      })(Object(n)).forEach(function(t) {
        Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(n, t))
      }), i
    })
  },
  getGuildPermissionSpecMap: function(t) {
    return s.WW(D(t.id))
  }
}