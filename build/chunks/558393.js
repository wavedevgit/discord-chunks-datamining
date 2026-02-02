/** Chunk was on 59541 **/
/** chunk id: 558393, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  A: () => M
}), require("./896048.js");
var Chunk936555 = require("./936555.js"),
  Chunk853742 = require("./853742.js"),
  Chunk352505 = require("./352505.js"),
  Chunk979816 = require("./979816.js"),
  Chunk997509 = require("./997509.js"),
  Chunk225419 = require("./225419.js"),
  Chunk864145 = require("./864145.js"),
  Chunk96566 = require("./96566.js"),
  Chunk284738 = require("./284738.js"),
  Chunk406704 = require("./406704.js"),
  Chunk780964 = require("./780964.js"),
  Chunk95701 = require("./95701.js"),
  Chunk71393 = require("./71393.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk737045 = require("./737045.js"),
  Chunk985018 = require("./985018.jsx");

function d(t) {
  let i = (0, A.Y)(t),
    r = B.A.getGuild(t),
    s = null != r && (0, e.w)(r),
    l = (0, o.K5)({
      location: "getPermissionOptions"
    }),
    S = E.M.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled;
  return {
    PRIORITY_SPEAKER_DESCRIPTION: p.intl.format(p.t.j66HgY, {
      keybind: p.intl.string(p.t.DkSwJ2),
      onClick: () => {
        {
          let {
            openUserSettings: t
          } = n(840065);
          t(_.X.KEYBINDS_PANEL, {
            section: T.nc_.KEYBINDS
          })
        }
      }
    }),
    SOUNDBOARD_DESCRIPTION: p.intl.format(p.t.fVE8y8, {
      helpCenterArticle: x.A.getArticleURL(T.MVz.SOUNDBOARD)
    }),
    showStageChannelPermissions: i,
    showExperimental: true,
    showMembershipManualApprovalPermissions: true,
    showCreatorMonetizationAnalyticsPermission: s,
    inSoundmojiExperiment: l,
    inGameMentionsExperiment: S
  }
}
let M = {
  generateChannelPermissionSpec: function(t, i, n, e) {
    var E, o, A, _;
    let B = (0, c.mW)(i, n, e),
      x = d(t),
      M = g.io.getCurrentConfig({
        guildId: t,
        location: "3ad37d_1"
      }).enabled && N.p6.has(i.type),
      D = (0, a.Bw)(t),
      u = (0, s.i_)(t),
      O = i.isMediaChannel(),
      {
        inSoundmojiExperiment: I
      } = x;
    switch (i.type) {
      case T.rbe.GUILD_CATEGORY:
        return [S.mL(B, p.intl.string(p.t["AkPxc+"])), S.m6(B, p.intl.string(p.t.Ny49TN)), S.BK(B, p.intl.string(p.t.cKobO5), {
          showPrivateThreads: true,
          showCreateThreads: true,
          inSoundmojiExperiment: I
        }), S.iG(B, p.intl.string(p.t["46Ra1b"])), S.Si(B, p.intl.string(p.t["rrh/W6"])), ...(E = x.showStageChannelPermissions, o = () => S.qI(B, p.intl.string(p.t.yniauk)), E ? [o()] : []), S.xd(B, p.intl.string(p.t.b8lplT))];
      case T.rbe.GUILD_VOICE:
        return [S.mL(B, p.intl.string(p.t.ouHggI), {
          showManageWebhooks: true
        }), S.m6(B, p.intl.string(p.t.Ny49TN)), S.iG(B, p.intl.string(p.t["46Ra1b"])), S.k6(B, p.intl.string(p.t.iqlsnD), {
          sectionDescription: u ? p.intl.format(p.t["4Z9Fbb"], {
            setUpAutomod: () => {
              l.A.open(t, T.BEX.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: I
        }), S.xd(B, p.intl.string(p.t.b8lplT)), S.Si(B, p.intl.string(p.t["rrh/W6"]))];
      case T.rbe.GUILD_STAGE_VOICE:
        return [S.mL(B, p.intl.string(p.t.ouHggI), {
          showManageWebhooks: false
        }), S.m6(B, p.intl.string(p.t.Ny49TN)), S.od(B, p.intl.string(p.t["46Ra1b"]), D), S.qI(B, p.intl.string(p.t.yniauk)), S.xd(B, p.intl.string(p.t.b8lplT)), S.k6(B, p.intl.string(p.t.iqlsnD), {
          sectionDescription: u ? p.intl.format(p.t["4Z9Fbb"], {
            setUpAutomod: () => {
              l.A.open(t, T.BEX.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: I
        }), S.Si(B, p.intl.string(p.t["rrh/W6"]), {
          showActivities: false
        })];
      case T.rbe.GUILD_FORUM:
      case T.rbe.GUILD_MEDIA:
        let R = O ? p.intl.string(p.t.aSjPgw) : p.intl.string(p.t.TS7Cnb),
          h = O ? p.t.YjJTtH : p.t["1MTnqY"];
        return [S.mL(B, p.intl.string(p.t.ouHggI)), S.m6(B, p.intl.string(p.t.Ny49TN)), S.BK(B, R, {
          showPrivateThreads: false,
          showCreateThreads: false,
          sectionDescription: u ? p.intl.format(h, {
            setUpAutomod: () => {
              O || (0, r.El)(), l.A.open(t, T.BEX.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: I
        }), S.Si(B, p.intl.string(p.t["rrh/W6"])), ...(A = () => S.iG(B, p.intl.string(p.t["46Ra1b"])), M ? [A()] : [])];
      default:
        return [S.mL(B, p.intl.string(p.t.ouHggI)), S.m6(B, p.intl.string(p.t.Ny49TN)), S.BK(B, p.intl.string(p.t.cKobO5), {
          showPrivateThreads: i.type !== T.rbe.GUILD_ANNOUNCEMENT,
          showCreateThreads: true,
          inSoundmojiExperiment: I
        }), S.Si(B, p.intl.string(p.t["rrh/W6"])), ...(_ = () => S.iG(B, p.intl.string(p.t["46Ra1b"])), M ? [_()] : [])]
    }
  },
  generateGuildPermissionSpec: function(t) {
    var i;
    let n = new Set;
    return t.features.has(T.GuildFeatures.COMMUNITY) || n.add(T.xBc.VIEW_GUILD_ANALYTICS.toString()), i = S.LZ(d(t.id)), 0 === n.size ? i : i.map(t => {
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
    return S.eD(d(t.id))
  }
}