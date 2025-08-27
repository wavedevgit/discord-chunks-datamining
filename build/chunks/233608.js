/** Chunk was on 64679 **/
/** chunk id: 233608, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
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
    n = a.Z.getGuild(t),
    r = null != n && (0, l.l)(n),
    S = (0, P.uH)({
      location: "getPermissionOptions"
    }),
    s = o.D.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled,
    A = e.N.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled;
  return {
    PRIORITY_SPEAKER_DESCRIPTION: O.intl.format(O.t.j66HgY, {
      keybind: O.intl.string(O.t.DkSwJy),
      onClick: () => {
        E.Z.open(I.oAB.KEYBINDS)
      }
    }),
    SOUNDBOARD_DESCRIPTION: O.intl.format(O.t.fVE8y8, {
      helpCenterArticle: M.Z.getArticleURL(I.BhN.SOUNDBOARD)
    }),
    showStageChannelPermissions: i,
    showExperimental: true,
    showMembershipManualApprovalPermissions: true,
    showCreatorMonetizationAnalyticsPermission: r,
    inSoundmojiExperiment: S,
    inPinPermissionExperiment: s,
    inGameMentionsExperiment: A
  }
}
let c = {
  generateChannelPermissionSpec: function(t, i, n, E) {
    var l, e, N, a;
    let M = (0, R.IG)(i, n, E),
      c = p(t),
      D = g.tM.getCurrentConfig({
        guildId: t,
        location: "3ad37d_1"
      }).enabled && T.Um.has(i.type),
      u = (0, _.tu)(t),
      C = (0, S.ze)(t),
      d = i.isMediaChannel(),
      f = (0, P.uH)({
        location: "generateChannelPermissionSpec"
      }),
      U = o.D.getCurrentConfig({
        guildId: t,
        location: "generateChannelPermissionSpec"
      }).enabled;
    switch (i.type) {
      case I.d4z.GUILD_CATEGORY:
        return [A.zO(M, O.intl.string(O.t.AkPxc3)), A.Ny(M, O.intl.string(O.t.Ny49TE)), A.vq(M, O.intl.string(O.t.cKobOz), {
          showPrivateThreads: true,
          showCreateThreads: true,
          inSoundmojiExperiment: f,
          inPinPermissionExperiment: U
        }), A.WV(M, O.intl.string(O.t["46Ra1d"])), A.xU(M, O.intl.string(O.t["rrh/W1"])), ...(l = c.showStageChannelPermissions, e = () => A.kv(M, O.intl.string(O.t.yniaur)), l ? [e()] : []), A.uu(M, O.intl.string(O.t.b8lplZ))];
      case I.d4z.GUILD_VOICE:
        return [A.zO(M, O.intl.string(O.t.ouHggI), {
          showManageWebhooks: true
        }), A.Ny(M, O.intl.string(O.t.Ny49TE)), A.WV(M, O.intl.string(O.t["46Ra1d"])), A.aW(M, O.intl.string(O.t.iqlsnJ), {
          sectionDescription: C ? O.intl.format(O.t["4Z9FbW"], {
            setUpAutomod: () => {
              s.Z.open(t, I.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: f
        }), A.uu(M, O.intl.string(O.t.b8lplZ)), A.xU(M, O.intl.string(O.t["rrh/W1"]))];
      case I.d4z.GUILD_STAGE_VOICE:
        return [A.zO(M, O.intl.string(O.t.ouHggI), {
          showManageWebhooks: false
        }), A.Ny(M, O.intl.string(O.t.Ny49TE)), A.FX(M, O.intl.string(O.t["46Ra1d"]), u), A.kv(M, O.intl.string(O.t.yniaur)), A.uu(M, O.intl.string(O.t.b8lplZ)), A.aW(M, O.intl.string(O.t.iqlsnJ), {
          sectionDescription: C ? O.intl.format(O.t["4Z9FbW"], {
            setUpAutomod: () => {
              s.Z.open(t, I.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: f
        }), A.xU(M, O.intl.string(O.t["rrh/W1"]), {
          showActivities: false
        })];
      case I.d4z.GUILD_FORUM:
      case I.d4z.GUILD_MEDIA:
        let L = d ? O.intl.string(O.t.aSjPg4) : O.intl.string(O.t.TS7CnZ),
          G = d ? O.t.YjJTtL : O.t["1MTnqa"];
        return [A.zO(M, O.intl.string(O.t.ouHggI)), A.Ny(M, O.intl.string(O.t.Ny49TE)), A.vq(M, L, {
          showPrivateThreads: false,
          showCreateThreads: false,
          sectionDescription: C ? O.intl.format(G, {
            setUpAutomod: () => {
              d || (0, r.MO)(), s.Z.open(t, I.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: f,
          inPinPermissionExperiment: U
        }), A.xU(M, O.intl.string(O.t["rrh/W1"])), ...(N = () => A.WV(M, O.intl.string(O.t["46Ra1d"])), D ? [N()] : [])];
      default:
        return [A.zO(M, O.intl.string(O.t.ouHggI)), A.Ny(M, O.intl.string(O.t.Ny49TE)), A.vq(M, O.intl.string(O.t.cKobOz), {
          showPrivateThreads: i.type !== I.d4z.GUILD_ANNOUNCEMENT,
          showCreateThreads: true,
          inSoundmojiExperiment: f,
          inPinPermissionExperiment: U
        }), A.xU(M, O.intl.string(O.t["rrh/W1"])), ...(a = () => A.WV(M, O.intl.string(O.t["46Ra1d"])), D ? [a()] : [])]
    }
  },
  generateGuildPermissionSpec: function(t) {
    var i;
    let n = new Set;
    return t.features.has(I.oNc.COMMUNITY) || n.add(I.Plq.VIEW_GUILD_ANALYTICS.toString()), i = A.s4(p(t.id)), 0 === n.size ? i : i.map(t => {
      var i, E;
      return i = function(t) {
        for (var i = 1; i < arguments.length; i++) {
          var n = null != arguments[i] ? arguments[i] : {},
            E = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (E = E.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), E.forEach(function(i) {
            var E;
            E = n[i], i in t ? Object.defineProperty(t, i, {
              value: E,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[i] = E
          })
        }
        return t
      }({}, t), E = E = {
        permissions: t.permissions.filter(t => !n.has(t.flag.toString()))
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(E)) : (function(t, i) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var E = Object.getOwnPropertySymbols(t);
          n.push.apply(n, E)
        }
        return n
      })(Object(E)).forEach(function(t) {
        Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(E, t))
      }), i
    })
  },
  getGuildPermissionSpecMap: function(t) {
    return A.WW(p(t.id))
  }
}