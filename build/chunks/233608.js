/** Chunk was on 96795 **/
/** chunk id: 233608, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function M(t) {
  let i = (0, P.A)(t),
    r = c.Z.getGuild(t),
    s = null != r && (0, l.l)(r),
    o = (0, a.uH)({
      location: "getPermissionOptions"
    }),
    S = E.N.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled,
    A = e.Z.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled;
  return {
    PRIORITY_SPEAKER_DESCRIPTION: u.intl.format(u.t.j66HgY, {
      keybind: u.intl.string(u.t.DkSwJ2),
      onClick: () => {
        {
          let {
            openUserSettings: t
          } = n(518596);
          t(_.n.KEYBINDS_PANEL, {
            section: p.oAB.KEYBINDS
          })
        }
      }
    }),
    SOUNDBOARD_DESCRIPTION: u.intl.format(u.t.fVE8y8, {
      helpCenterArticle: d.Z.getArticleURL(p.BhN.SOUNDBOARD)
    }),
    showStageChannelPermissions: i,
    showExperimental: true,
    showMembershipManualApprovalPermissions: true,
    showCreatorMonetizationAnalyticsPermission: s,
    inSoundmojiExperiment: o,
    inGameMentionsExperiment: S,
    inBypassSlowmodePermissionExperiment: A
  }
}
let O = {
  generateChannelPermissionSpec: function(t, i, n, e) {
    var l, E, a, P;
    let _ = (0, T.IG)(i, n, e),
      c = M(t),
      d = g.tM.getCurrentConfig({
        guildId: t,
        location: "3ad37d_1"
      }).enabled && N.Um.has(i.type),
      O = (0, A.tu)(t),
      D = (0, s.ze)(t),
      I = i.isMediaChannel(),
      {
        inSoundmojiExperiment: f,
        inBypassSlowmodePermissionExperiment: R
      } = c;
    switch (i.type) {
      case p.d4z.GUILD_CATEGORY:
        return [S.zO(_, u.intl.string(u.t["AkPxc+"])), S.Ny(_, u.intl.string(u.t.Ny49TN)), S.vq(_, u.intl.string(u.t.cKobO5), {
          showPrivateThreads: true,
          showCreateThreads: true,
          inSoundmojiExperiment: f,
          inBypassSlowmodePermissionExperiment: R
        }), S.WV(_, u.intl.string(u.t["46Ra1b"])), S.xU(_, u.intl.string(u.t["rrh/W6"])), ...(l = c.showStageChannelPermissions, E = () => S.kv(_, u.intl.string(u.t.yniauk)), l ? [E()] : []), S.uu(_, u.intl.string(u.t.b8lplT))];
      case p.d4z.GUILD_VOICE:
        return [S.zO(_, u.intl.string(u.t.ouHggI), {
          showManageWebhooks: true
        }), S.Ny(_, u.intl.string(u.t.Ny49TN)), S.WV(_, u.intl.string(u.t["46Ra1b"])), S.aW(_, u.intl.string(u.t.iqlsnD), {
          sectionDescription: D ? u.intl.format(u.t["4Z9Fbb"], {
            setUpAutomod: () => {
              o.Z.open(t, p.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: f
        }), S.uu(_, u.intl.string(u.t.b8lplT)), S.xU(_, u.intl.string(u.t["rrh/W6"]))];
      case p.d4z.GUILD_STAGE_VOICE:
        return [S.zO(_, u.intl.string(u.t.ouHggI), {
          showManageWebhooks: false
        }), S.Ny(_, u.intl.string(u.t.Ny49TN)), S.FX(_, u.intl.string(u.t["46Ra1b"]), O), S.kv(_, u.intl.string(u.t.yniauk)), S.uu(_, u.intl.string(u.t.b8lplT)), S.aW(_, u.intl.string(u.t.iqlsnD), {
          sectionDescription: D ? u.intl.format(u.t["4Z9Fbb"], {
            setUpAutomod: () => {
              o.Z.open(t, p.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: f
        }), S.xU(_, u.intl.string(u.t["rrh/W6"]), {
          showActivities: false
        })];
      case p.d4z.GUILD_FORUM:
      case p.d4z.GUILD_MEDIA:
        let h = I ? u.intl.string(u.t.aSjPgw) : u.intl.string(u.t.TS7Cnb),
          C = I ? u.t.YjJTtH : u.t["1MTnqY"];
        return [S.zO(_, u.intl.string(u.t.ouHggI)), S.Ny(_, u.intl.string(u.t.Ny49TN)), S.vq(_, h, {
          showPrivateThreads: false,
          showCreateThreads: false,
          sectionDescription: D ? u.intl.format(C, {
            setUpAutomod: () => {
              I || (0, r.MO)(), o.Z.open(t, p.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: f,
          inBypassSlowmodePermissionExperiment: R
        }), S.xU(_, u.intl.string(u.t["rrh/W6"])), ...(a = () => S.WV(_, u.intl.string(u.t["46Ra1b"])), d ? [a()] : [])];
      default:
        return [S.zO(_, u.intl.string(u.t.ouHggI)), S.Ny(_, u.intl.string(u.t.Ny49TN)), S.vq(_, u.intl.string(u.t.cKobO5), {
          showPrivateThreads: i.type !== p.d4z.GUILD_ANNOUNCEMENT,
          showCreateThreads: true,
          inSoundmojiExperiment: f,
          inBypassSlowmodePermissionExperiment: R
        }), S.xU(_, u.intl.string(u.t["rrh/W6"])), ...(P = () => S.WV(_, u.intl.string(u.t["46Ra1b"])), d ? [P()] : [])]
    }
  },
  generateGuildPermissionSpec: function(t) {
    var i;
    let n = new Set;
    return t.features.has(p.GuildFeatures.COMMUNITY) || n.add(p.Plq.VIEW_GUILD_ANALYTICS.toString()), i = S.s4(M(t.id)), 0 === n.size ? i : i.map(t => {
      var i, e;
      return i = function(t) {
        for (var i = 1; i < arguments.length; i++) {
          var n = null != arguments[i] ? arguments[i] : {},
            e = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), e.forEach(function(i) {
            var e;
            e = n[i], i in t ? Object.defineProperty(t, i, {
              value: e,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[i] = e
          })
        }
        return t
      }({}, t), e = e = {
        permissions: t.permissions.filter(t => !n.has(t.flag.toString()))
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : (function(t, i) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(t);
          n.push.apply(n, e)
        }
        return n
      })(Object(e)).forEach(function(t) {
        Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t))
      }), i
    })
  },
  getGuildPermissionSpecMap: function(t) {
    return S.WW(M(t.id))
  }
}