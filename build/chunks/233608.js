/** Chunk was on 62856 **/
/** chunk id: 233608, original params: t,i,E (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk87432 = require("./87432.js"),
  Chunk200876 = require("./200876.js"),
  Chunk228392 = require("./228392.js"),
  Chunk627050 = require("./627050.js"),
  Chunk676317 = require("./676317.js"),
  Chunk434404 = require("./434404.js"),
  Chunk190263 = require("./190263.js"),
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
  let i = (0, N.A)(t),
    S = I.Z.getGuild(t),
    e = null != S && (0, l.l)(S),
    s = (0, o.uH)({
      location: "getPermissionOptions"
    }),
    P = A.D.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled,
    _ = r.N.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled,
    g = n.Z.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled;
  return {
    PRIORITY_SPEAKER_DESCRIPTION: p.intl.format(p.t.j66HgY, {
      keybind: p.intl.string(p.t.DkSwJy),
      onClick: () => {
        {
          let {
            openUserSettings: t
          } = E(518596);
          t(T.n.KEYBINDS_PANEL, {
            section: R.oAB.KEYBINDS
          })
        }
      }
    }),
    SOUNDBOARD_DESCRIPTION: p.intl.format(p.t.fVE8y8, {
      helpCenterArticle: O.Z.getArticleURL(R.BhN.SOUNDBOARD)
    }),
    showStageChannelPermissions: i,
    showExperimental: true,
    showMembershipManualApprovalPermissions: true,
    showCreatorMonetizationAnalyticsPermission: e,
    inSoundmojiExperiment: s,
    inPinPermissionExperiment: P,
    inGameMentionsExperiment: _,
    inBypassSlowmodePermissionExperiment: g
  }
}
let c = {
  generateChannelPermissionSpec: function(t, i, E, n) {
    var l, r, A, o;
    let N = (0, a.IG)(i, E, n),
      T = D(t),
      I = g.tM.getCurrentConfig({
        guildId: t,
        location: "3ad37d_1"
      }).enabled && M.Um.has(i.type),
      O = (0, _.tu)(t),
      c = (0, e.ze)(t),
      C = i.isMediaChannel(),
      {
        inSoundmojiExperiment: u,
        inPinPermissionExperiment: f,
        inBypassSlowmodePermissionExperiment: d
      } = T;
    switch (i.type) {
      case R.d4z.GUILD_CATEGORY:
        return [P.zO(N, p.intl.string(p.t.AkPxc3)), P.Ny(N, p.intl.string(p.t.Ny49TE)), P.vq(N, p.intl.string(p.t.cKobOz), {
          showPrivateThreads: true,
          showCreateThreads: true,
          inSoundmojiExperiment: u,
          inPinPermissionExperiment: f,
          inBypassSlowmodePermissionExperiment: d
        }), P.WV(N, p.intl.string(p.t["46Ra1d"])), P.xU(N, p.intl.string(p.t["rrh/W1"])), ...(l = T.showStageChannelPermissions, r = () => P.kv(N, p.intl.string(p.t.yniaur)), l ? [r()] : []), P.uu(N, p.intl.string(p.t.b8lplZ))];
      case R.d4z.GUILD_VOICE:
        return [P.zO(N, p.intl.string(p.t.ouHggI), {
          showManageWebhooks: true
        }), P.Ny(N, p.intl.string(p.t.Ny49TE)), P.WV(N, p.intl.string(p.t["46Ra1d"])), P.aW(N, p.intl.string(p.t.iqlsnJ), {
          sectionDescription: c ? p.intl.format(p.t["4Z9FbW"], {
            setUpAutomod: () => {
              s.Z.open(t, R.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: u
        }), P.uu(N, p.intl.string(p.t.b8lplZ)), P.xU(N, p.intl.string(p.t["rrh/W1"]))];
      case R.d4z.GUILD_STAGE_VOICE:
        return [P.zO(N, p.intl.string(p.t.ouHggI), {
          showManageWebhooks: false
        }), P.Ny(N, p.intl.string(p.t.Ny49TE)), P.FX(N, p.intl.string(p.t["46Ra1d"]), O), P.kv(N, p.intl.string(p.t.yniaur)), P.uu(N, p.intl.string(p.t.b8lplZ)), P.aW(N, p.intl.string(p.t.iqlsnJ), {
          sectionDescription: c ? p.intl.format(p.t["4Z9FbW"], {
            setUpAutomod: () => {
              s.Z.open(t, R.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: u
        }), P.xU(N, p.intl.string(p.t["rrh/W1"]), {
          showActivities: false
        })];
      case R.d4z.GUILD_FORUM:
      case R.d4z.GUILD_MEDIA:
        let U = C ? p.intl.string(p.t.aSjPg4) : p.intl.string(p.t.TS7CnZ),
          L = C ? p.t.YjJTtL : p.t["1MTnqa"];
        return [P.zO(N, p.intl.string(p.t.ouHggI)), P.Ny(N, p.intl.string(p.t.Ny49TE)), P.vq(N, U, {
          showPrivateThreads: false,
          showCreateThreads: false,
          sectionDescription: c ? p.intl.format(L, {
            setUpAutomod: () => {
              C || (0, S.MO)(), s.Z.open(t, R.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: u,
          inPinPermissionExperiment: f,
          inBypassSlowmodePermissionExperiment: d
        }), P.xU(N, p.intl.string(p.t["rrh/W1"])), ...(A = () => P.WV(N, p.intl.string(p.t["46Ra1d"])), I ? [A()] : [])];
      default:
        return [P.zO(N, p.intl.string(p.t.ouHggI)), P.Ny(N, p.intl.string(p.t.Ny49TE)), P.vq(N, p.intl.string(p.t.cKobOz), {
          showPrivateThreads: i.type !== R.d4z.GUILD_ANNOUNCEMENT,
          showCreateThreads: true,
          inSoundmojiExperiment: u,
          inPinPermissionExperiment: f,
          inBypassSlowmodePermissionExperiment: d
        }), P.xU(N, p.intl.string(p.t["rrh/W1"])), ...(o = () => P.WV(N, p.intl.string(p.t["46Ra1d"])), I ? [o()] : [])]
    }
  },
  generateGuildPermissionSpec: function(t) {
    var i;
    let E = new Set;
    return t.features.has(R.oNc.COMMUNITY) || E.add(R.Plq.VIEW_GUILD_ANALYTICS.toString()), i = P.s4(D(t.id)), 0 === E.size ? i : i.map(t => {
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
    return P.WW(D(t.id))
  }
}