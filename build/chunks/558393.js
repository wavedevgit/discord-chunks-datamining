/** Chunk was on 59541 **/
/** chunk id: 558393, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk386849 = require("./386849.js"),
  Chunk936555 = require("./936555.js"),
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

function M(t) {
  let i = (0, g.Y)(t),
    E = x.A.getGuild(t),
    l = null != E && (0, r.w)(E),
    S = (0, a.K5)({
      location: "getPermissionOptions"
    }),
    o = s.M.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled,
    A = e.A.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled;
  return {
    PRIORITY_SPEAKER_DESCRIPTION: c.intl.format(c.t.j66HgY, {
      keybind: c.intl.string(c.t.DkSwJ2),
      onClick: () => {
        {
          let {
            openUserSettings: t
          } = n(840065);
          t(B.X.KEYBINDS_PANEL, {
            section: d.nc_.KEYBINDS
          })
        }
      }
    }),
    SOUNDBOARD_DESCRIPTION: c.intl.format(c.t.fVE8y8, {
      helpCenterArticle: T.A.getArticleURL(d.MVz.SOUNDBOARD)
    }),
    showStageChannelPermissions: i,
    showExperimental: true,
    showMembershipManualApprovalPermissions: true,
    showCreatorMonetizationAnalyticsPermission: l,
    inSoundmojiExperiment: S,
    inGameMentionsExperiment: o,
    inBypassSlowmodePermissionExperiment: A
  }
}
let u = {
  generateChannelPermissionSpec: function(t, i, n, e) {
    var r, s, a, g;
    let B = (0, p.mW)(i, n, e),
      x = M(t),
      T = _.io.getCurrentConfig({
        guildId: t,
        location: "3ad37d_1"
      }).enabled && N.p6.has(i.type),
      u = (0, A.Bw)(t),
      D = (0, l.i_)(t),
      O = i.isMediaChannel(),
      {
        inSoundmojiExperiment: I,
        inBypassSlowmodePermissionExperiment: R
      } = x;
    switch (i.type) {
      case d.rbe.GUILD_CATEGORY:
        return [o.mL(B, c.intl.string(c.t["AkPxc+"])), o.m6(B, c.intl.string(c.t.Ny49TN)), o.BK(B, c.intl.string(c.t.cKobO5), {
          showPrivateThreads: true,
          showCreateThreads: true,
          inSoundmojiExperiment: I,
          inBypassSlowmodePermissionExperiment: R
        }), o.iG(B, c.intl.string(c.t["46Ra1b"])), o.Si(B, c.intl.string(c.t["rrh/W6"])), ...(r = x.showStageChannelPermissions, s = () => o.qI(B, c.intl.string(c.t.yniauk)), r ? [s()] : []), o.xd(B, c.intl.string(c.t.b8lplT))];
      case d.rbe.GUILD_VOICE:
        return [o.mL(B, c.intl.string(c.t.ouHggI), {
          showManageWebhooks: true
        }), o.m6(B, c.intl.string(c.t.Ny49TN)), o.iG(B, c.intl.string(c.t["46Ra1b"])), o.k6(B, c.intl.string(c.t.iqlsnD), {
          sectionDescription: D ? c.intl.format(c.t["4Z9Fbb"], {
            setUpAutomod: () => {
              S.A.open(t, d.BEX.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: I
        }), o.xd(B, c.intl.string(c.t.b8lplT)), o.Si(B, c.intl.string(c.t["rrh/W6"]))];
      case d.rbe.GUILD_STAGE_VOICE:
        return [o.mL(B, c.intl.string(c.t.ouHggI), {
          showManageWebhooks: false
        }), o.m6(B, c.intl.string(c.t.Ny49TN)), o.od(B, c.intl.string(c.t["46Ra1b"]), u), o.qI(B, c.intl.string(c.t.yniauk)), o.xd(B, c.intl.string(c.t.b8lplT)), o.k6(B, c.intl.string(c.t.iqlsnD), {
          sectionDescription: D ? c.intl.format(c.t["4Z9Fbb"], {
            setUpAutomod: () => {
              S.A.open(t, d.BEX.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: I
        }), o.Si(B, c.intl.string(c.t["rrh/W6"]), {
          showActivities: false
        })];
      case d.rbe.GUILD_FORUM:
      case d.rbe.GUILD_MEDIA:
        let f = O ? c.intl.string(c.t.aSjPgw) : c.intl.string(c.t.TS7Cnb),
          h = O ? c.t.YjJTtH : c.t["1MTnqY"];
        return [o.mL(B, c.intl.string(c.t.ouHggI)), o.m6(B, c.intl.string(c.t.Ny49TN)), o.BK(B, f, {
          showPrivateThreads: false,
          showCreateThreads: false,
          sectionDescription: D ? c.intl.format(h, {
            setUpAutomod: () => {
              O || (0, E.El)(), S.A.open(t, d.BEX.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: I,
          inBypassSlowmodePermissionExperiment: R
        }), o.Si(B, c.intl.string(c.t["rrh/W6"])), ...(a = () => o.iG(B, c.intl.string(c.t["46Ra1b"])), T ? [a()] : [])];
      default:
        return [o.mL(B, c.intl.string(c.t.ouHggI)), o.m6(B, c.intl.string(c.t.Ny49TN)), o.BK(B, c.intl.string(c.t.cKobO5), {
          showPrivateThreads: i.type !== d.rbe.GUILD_ANNOUNCEMENT,
          showCreateThreads: true,
          inSoundmojiExperiment: I,
          inBypassSlowmodePermissionExperiment: R
        }), o.Si(B, c.intl.string(c.t["rrh/W6"])), ...(g = () => o.iG(B, c.intl.string(c.t["46Ra1b"])), T ? [g()] : [])]
    }
  },
  generateGuildPermissionSpec: function(t) {
    var i;
    let n = new Set;
    return t.features.has(d.GuildFeatures.COMMUNITY) || n.add(d.xBc.VIEW_GUILD_ANALYTICS.toString()), i = o.LZ(M(t.id)), 0 === n.size ? i : i.map(t => {
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
    return o.eD(M(t.id))
  }
}