/** Chunk was on 62856 **/
/** chunk id: 233608, original params: t,i,E (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk230711 = require("./230711.js"),
  Chunk200876 = require("./200876.js"),
  Chunk228392 = require("./228392.js"),
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
  Chunk388032 = require("./388032.js");

function a(t) {
  let i = (0, o.A)(t),
    E = g.Z.getGuild(t),
    S = null != E && (0, l.l)(E),
    r = (0, P.uH)({
      location: "getPermissionOptions"
    }),
    e = A.D.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled;
  return {
    PRIORITY_SPEAKER_DESCRIPTION: O.intl.format(O.t.j66HgY, {
      keybind: O.intl.string(O.t.DkSwJy),
      onClick: () => {
        n.Z.open(I.oAB.KEYBINDS)
      }
    }),
    SOUNDBOARD_DESCRIPTION: O.intl.format(O.t.fVE8y8, {
      helpCenterArticle: M.Z.getArticleURL(I.BhN.SOUNDBOARD)
    }),
    showStageChannelPermissions: i,
    showExperimental: true,
    showMembershipManualApprovalPermissions: true,
    showCreatorMonetizationAnalyticsPermission: S,
    inSoundmojiExperiment: r,
    inPinPermissionExperiment: e
  }
}
let p = {
  generateChannelPermissionSpec: function(t, i, E, n) {
    var l, o, g, M;
    let p = (0, R.IG)(i, E, n),
      D = a(t),
      c = N.tM.getCurrentConfig({
        guildId: t,
        location: "3ad37d_1"
      }).enabled && T.Um.has(i.type),
      C = (0, _.tu)(t),
      u = (0, r.ze)(t),
      f = i.isMediaChannel(),
      U = (0, P.uH)({
        location: "generateChannelPermissionSpec"
      }),
      d = A.D.getCurrentConfig({
        guildId: t,
        location: "generateChannelPermissionSpec"
      }).enabled;
    switch (i.type) {
      case I.d4z.GUILD_CATEGORY:
        return [s.zO(p, O.intl.string(O.t.AkPxc3)), s.Ny(p, O.intl.string(O.t.Ny49TE)), s.vq(p, O.intl.string(O.t.cKobOz), {
          showPrivateThreads: true,
          showCreateThreads: true,
          inSoundmojiExperiment: U,
          inPinPermissionExperiment: d
        }), s.WV(p, O.intl.string(O.t["46Ra1d"])), s.xU(p, O.intl.string(O.t["rrh/W1"])), ...(l = D.showStageChannelPermissions, o = () => s.kv(p, O.intl.string(O.t.yniaur)), l ? [o()] : []), s.uu(p, O.intl.string(O.t.b8lplZ))];
      case I.d4z.GUILD_VOICE:
        return [s.zO(p, O.intl.string(O.t.ouHggI), {
          showManageWebhooks: true
        }), s.Ny(p, O.intl.string(O.t.Ny49TE)), s.WV(p, O.intl.string(O.t["46Ra1d"])), s.aW(p, O.intl.string(O.t.iqlsnJ), {
          sectionDescription: u ? O.intl.format(O.t["4Z9FbW"], {
            setUpAutomod: () => {
              e.Z.open(t, I.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: U
        }), s.uu(p, O.intl.string(O.t.b8lplZ)), s.xU(p, O.intl.string(O.t["rrh/W1"]))];
      case I.d4z.GUILD_STAGE_VOICE:
        return [s.zO(p, O.intl.string(O.t.ouHggI), {
          showManageWebhooks: false
        }), s.Ny(p, O.intl.string(O.t.Ny49TE)), s.FX(p, O.intl.string(O.t["46Ra1d"]), C), s.kv(p, O.intl.string(O.t.yniaur)), s.uu(p, O.intl.string(O.t.b8lplZ)), s.aW(p, O.intl.string(O.t.iqlsnJ), {
          sectionDescription: u ? O.intl.format(O.t["4Z9FbW"], {
            setUpAutomod: () => {
              e.Z.open(t, I.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: U
        }), s.xU(p, O.intl.string(O.t["rrh/W1"]), {
          showActivities: false
        })];
      case I.d4z.GUILD_FORUM:
      case I.d4z.GUILD_MEDIA:
        let L = f ? O.intl.string(O.t.aSjPg4) : O.intl.string(O.t.TS7CnZ),
          G = f ? O.t.YjJTtL : O.t["1MTnqa"];
        return [s.zO(p, O.intl.string(O.t.ouHggI)), s.Ny(p, O.intl.string(O.t.Ny49TE)), s.vq(p, L, {
          showPrivateThreads: false,
          showCreateThreads: false,
          sectionDescription: u ? O.intl.format(G, {
            setUpAutomod: () => {
              f || (0, S.MO)(), e.Z.open(t, I.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: U,
          inPinPermissionExperiment: d
        }), s.xU(p, O.intl.string(O.t["rrh/W1"])), ...(g = () => s.WV(p, O.intl.string(O.t["46Ra1d"])), c ? [g()] : [])];
      default:
        return [s.zO(p, O.intl.string(O.t.ouHggI)), s.Ny(p, O.intl.string(O.t.Ny49TE)), s.vq(p, O.intl.string(O.t.cKobOz), {
          showPrivateThreads: i.type !== I.d4z.GUILD_ANNOUNCEMENT,
          showCreateThreads: true,
          inSoundmojiExperiment: U,
          inPinPermissionExperiment: d
        }), s.xU(p, O.intl.string(O.t["rrh/W1"])), ...(M = () => s.WV(p, O.intl.string(O.t["46Ra1d"])), c ? [M()] : [])]
    }
  },
  generateGuildPermissionSpec: function(t) {
    var i;
    let E = new Set;
    return t.features.has(I.oNc.COMMUNITY) || E.add(I.Plq.VIEW_GUILD_ANALYTICS.toString()), i = s.s4(a(t.id)), 0 === E.size ? i : i.map(t => {
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
    return s.WW(a(t.id))
  }
}