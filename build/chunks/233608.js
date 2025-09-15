/** Chunk was on 64679 **/
/** chunk id: 233608, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk200876 = require("./200876.js"),
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

function p(t) {
  let i = (0, _.A)(t),
    l = a.Z.getGuild(t),
    e = null != l && (0, E.l)(l),
    S = (0, A.uH)({
      location: "getPermissionOptions"
    }),
    o = s.D.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled,
    P = r.N.getCurrentConfig({
      guildId: t,
      location: "getPermissionOptions"
    }).enabled;
  return {
    PRIORITY_SPEAKER_DESCRIPTION: O.intl.format(O.t.j66HgY, {
      keybind: O.intl.string(O.t.DkSwJy),
      onClick: () => {
        {
          let {
            openUserSettings: t
          } = n(518596);
          t(g.n.KEYBINDS_PANEL, {
            section: M.oAB.KEYBINDS
          })
        }
      }
    }),
    SOUNDBOARD_DESCRIPTION: O.intl.format(O.t.fVE8y8, {
      helpCenterArticle: I.Z.getArticleURL(M.BhN.SOUNDBOARD)
    }),
    showStageChannelPermissions: i,
    showExperimental: true,
    showMembershipManualApprovalPermissions: true,
    showCreatorMonetizationAnalyticsPermission: e,
    inSoundmojiExperiment: S,
    inPinPermissionExperiment: o,
    inGameMentionsExperiment: P
  }
}
let c = {
  generateChannelPermissionSpec: function(t, i, n, E) {
    var r, _, g, a;
    let I = (0, R.IG)(i, n, E),
      c = p(t),
      D = N.tM.getCurrentConfig({
        guildId: t,
        location: "3ad37d_1"
      }).enabled && T.Um.has(i.type),
      u = (0, P.tu)(t),
      C = (0, e.ze)(t),
      d = i.isMediaChannel(),
      f = (0, A.uH)({
        location: "generateChannelPermissionSpec"
      }),
      U = s.D.getCurrentConfig({
        guildId: t,
        location: "generateChannelPermissionSpec"
      }).enabled;
    switch (i.type) {
      case M.d4z.GUILD_CATEGORY:
        return [o.zO(I, O.intl.string(O.t.AkPxc3)), o.Ny(I, O.intl.string(O.t.Ny49TE)), o.vq(I, O.intl.string(O.t.cKobOz), {
          showPrivateThreads: true,
          showCreateThreads: true,
          inSoundmojiExperiment: f,
          inPinPermissionExperiment: U
        }), o.WV(I, O.intl.string(O.t["46Ra1d"])), o.xU(I, O.intl.string(O.t["rrh/W1"])), ...(r = c.showStageChannelPermissions, _ = () => o.kv(I, O.intl.string(O.t.yniaur)), r ? [_()] : []), o.uu(I, O.intl.string(O.t.b8lplZ))];
      case M.d4z.GUILD_VOICE:
        return [o.zO(I, O.intl.string(O.t.ouHggI), {
          showManageWebhooks: true
        }), o.Ny(I, O.intl.string(O.t.Ny49TE)), o.WV(I, O.intl.string(O.t["46Ra1d"])), o.aW(I, O.intl.string(O.t.iqlsnJ), {
          sectionDescription: C ? O.intl.format(O.t["4Z9FbW"], {
            setUpAutomod: () => {
              S.Z.open(t, M.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: f
        }), o.uu(I, O.intl.string(O.t.b8lplZ)), o.xU(I, O.intl.string(O.t["rrh/W1"]))];
      case M.d4z.GUILD_STAGE_VOICE:
        return [o.zO(I, O.intl.string(O.t.ouHggI), {
          showManageWebhooks: false
        }), o.Ny(I, O.intl.string(O.t.Ny49TE)), o.FX(I, O.intl.string(O.t["46Ra1d"]), u), o.kv(I, O.intl.string(O.t.yniaur)), o.uu(I, O.intl.string(O.t.b8lplZ)), o.aW(I, O.intl.string(O.t.iqlsnJ), {
          sectionDescription: C ? O.intl.format(O.t["4Z9FbW"], {
            setUpAutomod: () => {
              S.Z.open(t, M.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: f
        }), o.xU(I, O.intl.string(O.t["rrh/W1"]), {
          showActivities: false
        })];
      case M.d4z.GUILD_FORUM:
      case M.d4z.GUILD_MEDIA:
        let L = d ? O.intl.string(O.t.aSjPg4) : O.intl.string(O.t.TS7CnZ),
          G = d ? O.t.YjJTtL : O.t["1MTnqa"];
        return [o.zO(I, O.intl.string(O.t.ouHggI)), o.Ny(I, O.intl.string(O.t.Ny49TE)), o.vq(I, L, {
          showPrivateThreads: false,
          showCreateThreads: false,
          sectionDescription: C ? O.intl.format(G, {
            setUpAutomod: () => {
              d || (0, l.MO)(), S.Z.open(t, M.pNK.GUILD_AUTOMOD)
            }
          }) : true,
          inSoundmojiExperiment: f,
          inPinPermissionExperiment: U
        }), o.xU(I, O.intl.string(O.t["rrh/W1"])), ...(g = () => o.WV(I, O.intl.string(O.t["46Ra1d"])), D ? [g()] : [])];
      default:
        return [o.zO(I, O.intl.string(O.t.ouHggI)), o.Ny(I, O.intl.string(O.t.Ny49TE)), o.vq(I, O.intl.string(O.t.cKobOz), {
          showPrivateThreads: i.type !== M.d4z.GUILD_ANNOUNCEMENT,
          showCreateThreads: true,
          inSoundmojiExperiment: f,
          inPinPermissionExperiment: U
        }), o.xU(I, O.intl.string(O.t["rrh/W1"])), ...(a = () => o.WV(I, O.intl.string(O.t["46Ra1d"])), D ? [a()] : [])]
    }
  },
  generateGuildPermissionSpec: function(t) {
    var i;
    let n = new Set;
    return t.features.has(M.oNc.COMMUNITY) || n.add(M.Plq.VIEW_GUILD_ANALYTICS.toString()), i = o.s4(p(t.id)), 0 === n.size ? i : i.map(t => {
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
    return o.WW(p(t.id))
  }
}