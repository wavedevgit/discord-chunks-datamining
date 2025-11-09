/** Chunk was on 50642 **/
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
  Chunk996372 = require("./996372.js");
let u = () => (0, Chunk951288.jsx)(Chunk951288.Fragment, {
    children: Chunk388032.intl.format(Chunk388032.t.ymkBti, {
      shareIcon: Chunk388032.intl.string(Chunk388032.t.VINpSK),
      shareIconHook: () => (0, Chunk951288.jsx)(Chunk481060.ejJ, {
        className: Chunk996372.icon
      }, "icon")
    })
  }),
  d = () => {
    let e = (0, Chunk442837.e7)([Chunk430824.Z, Chunk914010.Z], () => Chunk430824.Z.getGuild(Chunk914010.Z.getGuildId()), []),
      t = null == module ? true : module.name;
    return (0, Chunk951288.jsx)(Chunk951288.Fragment, {
      children: Chunk388032.intl.format(Chunk388032.t.oQuG3K, {
        serverName: exports
      })
    })
  },
  p = e => {
    var t, n;
    let r = null != (t = ({
      VOICE_CONVERSATIONS: {
        title: (0, i.jsx)("div", {
          className: c.voiceChannelsTitle,
          children: s.intl.string(s.t.w5HAll)
        }),
        body: s.intl.string(s.t.Ww4hhq)
      },
      WRITING_MESSAGES: {
        title: (0, i.jsx)("div", {
          className: c.writingMessagesTitle,
          children: s.intl.string(s.t.nkP0ly)
        }),
        body: (0, i.jsx)(d, {})
      },
      ORGANIZE_BY_TOPIC: {
        title: (0, i.jsx)("div", {
          className: c.channelsTitle,
          children: s.intl.string(s.t["j/5+IX"])
        }),
        body: s.intl.string(s.t.mufH2P)
      },
      WHOS_ONLINE: {
        title: s.intl.string(s.t.l2nSoI),
        body: s.intl.format(s.t.y6tbBB, {})
      },
      INSTANT_INVITE: {
        title: s.intl.string(s.t.XcehY3),
        body: (0, i.jsx)(u, {})
      },
      SERVER_SETTINGS: {
        title: s.intl.string(s.t.wc8wi5),
        body: s.intl.format(s.t.mIfDhc, {})
      },
      DIRECT_MESSAGES: {
        title: s.intl.string(s.t.V07x5y),
        body: s.intl.format(s.t.GEBBey, {})
      },
      CREATE_MORE_SERVERS: {
        title: s.intl.string(s.t["50FORo"]),
        body: s.intl.format(s.t.zVL4qa, {})
      },
      CREATE_FIRST_SERVER: {
        title: s.intl.string(s.t.CtOX9T),
        body: s.intl.format(s.t.TflqTe, {})
      },
      FRIENDS_LIST: {
        title: s.intl.string(s.t.Fnk9L4),
        body: s.intl.format(s.t.NTq0AZ, {})
      }
    })[e.replace(/-/g, "_").toUpperCase()]) ? t : {};
    return {
      title: r.title,
      body: r.body,
      isLongText: null != (n = r.isLongText) && n
    }
  }