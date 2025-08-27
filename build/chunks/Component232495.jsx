/** Chunk was on 68197 **/
/** chunk id: 232495, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => p
}), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk186903 = require("./186903.js");
let u = () => (0, Chunk951288.jsx)(Chunk951288.Fragment, {
    children: Chunk388032.intl.format(Chunk388032.t.ymkBtr, {
      shareIcon: Chunk388032.intl.string(Chunk388032.t.VINpSE),
      shareIconHook: () => (0, Chunk951288.jsx)(Chunk481060.ejJ, {
        className: Chunk186903.icon
      }, "icon")
    })
  }),
  d = () => {
    let e = (0, Chunk442837.e7)([Chunk430824.Z, Chunk914010.Z], () => Chunk430824.Z.getGuild(Chunk914010.Z.getGuildId()), []),
      t = null == module ? true : module.name;
    return (0, Chunk951288.jsx)(Chunk951288.Fragment, {
      children: Chunk388032.intl.format(Chunk388032.t.oQuG3N, {
        serverName: exports
      })
    })
  },
  p = e => {
    var t, n;
    let i = null != (t = ({
      VOICE_CONVERSATIONS: {
        title: (0, r.jsx)("div", {
          className: c.voiceChannelsTitle,
          children: s.intl.string(s.t.w5HAlp)
        }),
        body: s.intl.string(s.t.Ww4hho)
      },
      WRITING_MESSAGES: {
        title: (0, r.jsx)("div", {
          className: c.writingMessagesTitle,
          children: s.intl.string(s.t.nkP0l5)
        }),
        body: (0, r.jsx)(d, {})
      },
      ORGANIZE_BY_TOPIC: {
        title: (0, r.jsx)("div", {
          className: c.channelsTitle,
          children: s.intl.string(s.t["j/5+IS"])
        }),
        body: s.intl.string(s.t.mufH2N)
      },
      WHOS_ONLINE: {
        title: s.intl.string(s.t.l2nSoK),
        body: s.intl.format(s.t.y6tbBA, {})
      },
      INSTANT_INVITE: {
        title: s.intl.string(s.t.XcehY2),
        body: (0, r.jsx)(u, {})
      },
      SERVER_SETTINGS: {
        title: s.intl.string(s.t.wc8wi4),
        body: s.intl.format(s.t.mIfDhY, {})
      },
      DIRECT_MESSAGES: {
        title: s.intl.string(s.t["V07x5+"]),
        body: s.intl.format(s.t.GEBBe3, {})
      },
      CREATE_MORE_SERVERS: {
        title: s.intl.string(s.t["50FORk"]),
        body: s.intl.format(s.t.zVL4qa, {})
      },
      CREATE_FIRST_SERVER: {
        title: s.intl.string(s.t.CtOX9f),
        body: s.intl.format(s.t.TflqTU, {})
      },
      FRIENDS_LIST: {
        title: s.intl.string(s.t.Fnk9Ly),
        body: s.intl.format(s.t.NTq0AQ, {})
      }
    })[e.replace(/-/g, "_").toUpperCase()]) ? t : {};
    return {
      title: i.title,
      body: i.body,
      isLongText: null != (n = i.isLongText) && n
    }
  }