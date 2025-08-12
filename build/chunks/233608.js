/** Chunk was on 62856 **/
/** chunk id: 233608, original params: t,i,E (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk230711 = require("./230711.js"),
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
  Chunk131704 = require("./131704.js"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk71080 = require("./71080.js"),
  Chunk388032 = require("./388032.jsx");

function p(t) {
  let i = (0, N.A)(t),
    E = M.Z.getGuild(t),
    S = null != E && (0, l.l)(E),
    e = (0, o.uH)({
      location: "getPermissionOptions"
    }),
    s = A.D.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled,
    P = r.N.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled;
  return {
    PRIORITY_SPEAKER_DESCRIPTION: a.intl.format(a.t.j66HgY, {
      keybind: a.intl.string(a.t.DkSwJy),
      onClick: () => {
        n.Z.open(R.oAB.KEYBINDS)
      }
    }),
    SOUNDBOARD_DESCRIPTION: a.intl.format(a.t.fVE8y8, {
      helpCenterArticle: I.Z.getArticleURL(R.BhN.SOUNDBOARD)
    }),
    showStageChannelPermissions: i,
    showExperimental: true,
    showMembershipManualApprovalPermissions: true,
    showCreatorMonetizationAnalyticsPermission: S,
    inSoundmojiExperiment: e,
    inPinPermissionExperiment: s,
    inGameMentionsExperiment: P
  }
}
let D = {
  generateChannelPermissionSpec: function(t, i, E, n) {
    var l, r, N, M;
    let I = (0, O.IG)(i, E, n),
      D = p(t),
      c = g.tM.getCurrentConfig({
        guildId: t,
        location: "3ad37d_1"
      }).enabled && T.Um.has(i.type),
      C = (0, _.tu)(t),
      u = (0, e.ze)(t),
      f = i.isMediaChannel(),
      U = (0, o.uH)({
        location: "generateChannelPermissionSpec"
      }),
      d = A.D.getCurrentConfig({
        guildId: t,
        location: "generateChannelPermissionSpec"
      }).enabled;
    switch (i.type) {
      case R.d4z.GUILD_CATEGORY:
        return [P.zO(I, a.intl.string(a.t.AkPxc3)), P.Ny(I, a.intl.string(a.t.Ny49TE)), P.vq(I, a.intl.string(a.t.cKobOz), {
          showPrivateThreads: true,
          showCreateThreads: true,
          inSoundmojiExperiment: U,
          inPinPermissionExperiment: d
        }), P.WV(I, a.intl.string(a.t["46Ra1d"])), P.xU(I, a.intl.string(a.t["rrh/W1"])), ...(l = D.showStageChannelPermissions, r = () => P.kv(I, a.intl.string(a.t.yniaur)), l ? [r()] : []), P.uu(I, a.intl.string(a.t.b8lplZ))];
      case R.d4z.GUILD_VOICE:
        return [P.zO(I, a.intl.string(a.t.ouHggI), {
          showManageWebhooks: true
        }), P.Ny(I, a.intl.string(a.t.Ny49TE)), P.WV(I, a.intl.string(a.t["46Ra1d"])), P.aW(I, a.intl.string(a.t.iqlsnJ), {
          sectionDescription: u ? a.intl.format(a.t["4Z9FbW"], {
            setUpAutomod: () => {
              s.Z.open(t, R.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: U
        }), P.uu(I, a.intl.string(a.t.b8lplZ)), P.xU(I, a.intl.string(a.t["rrh/W1"]))];
      case R.d4z.GUILD_STAGE_VOICE:
        return [P.zO(I, a.intl.string(a.t.ouHggI), {
          showManageWebhooks: false
        }), P.Ny(I, a.intl.string(a.t.Ny49TE)), P.FX(I, a.intl.string(a.t["46Ra1d"]), C), P.kv(I, a.intl.string(a.t.yniaur)), P.uu(I, a.intl.string(a.t.b8lplZ)), P.aW(I, a.intl.string(a.t.iqlsnJ), {
          sectionDescription: u ? a.intl.format(a.t["4Z9FbW"], {
            setUpAutomod: () => {
              s.Z.open(t, R.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: U
        }), P.xU(I, a.intl.string(a.t["rrh/W1"]), {
          showActivities: false
        })];
      case R.d4z.GUILD_FORUM:
      case R.d4z.GUILD_MEDIA:
        let G = f ? a.intl.string(a.t.aSjPg4) : a.intl.string(a.t.TS7CnZ),
          L = f ? a.t.YjJTtL : a.t["1MTnqa"];
        return [P.zO(I, a.intl.string(a.t.ouHggI)), P.Ny(I, a.intl.string(a.t.Ny49TE)), P.vq(I, G, {
          showPrivateThreads: false,
          showCreateThreads: false,
          sectionDescription: u ? a.intl.format(L, {
            setUpAutomod: () => {
              f || (0, S.MO)(), s.Z.open(t, R.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: U,
          inPinPermissionExperiment: d
        }), P.xU(I, a.intl.string(a.t["rrh/W1"])), ...(N = () => P.WV(I, a.intl.string(a.t["46Ra1d"])), c ? [N()] : [])];
      default:
        return [P.zO(I, a.intl.string(a.t.ouHggI)), P.Ny(I, a.intl.string(a.t.Ny49TE)), P.vq(I, a.intl.string(a.t.cKobOz), {
          showPrivateThreads: i.type !== R.d4z.GUILD_ANNOUNCEMENT,
          showCreateThreads: true,
          inSoundmojiExperiment: U,
          inPinPermissionExperiment: d
        }), P.xU(I, a.intl.string(a.t["rrh/W1"])), ...(M = () => P.WV(I, a.intl.string(a.t["46Ra1d"])), c ? [M()] : [])]
    }
  },
  generateGuildPermissionSpec: function(t) {
    var i;
    let E = new Set;
    return t.features.has(R.oNc.COMMUNITY) || E.add(R.Plq.VIEW_GUILD_ANALYTICS.toString()), i = P.s4(p(t.id)), 0 === E.size ? i : i.map(t => {
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
    return P.WW(p(t.id))
  }
}