/** Chunk was on web.js **/
/** chunk id: 232495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => f
}), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk55361 = require("./55361.js");
let u = () => (0, r.jsx)(r.Fragment, {
    children: l.intl.format(l.t.ymkBti, {
      shareIcon: l.intl.string(l.t.VINpSK),
      shareIconHook: () => (0, r.jsx)(a.ejJ, {
        className: c.icon
      }, "icon")
    })
  }),
  d = () => {
    let e = (0, i.e7)([o.Z, s.Z], () => o.Z.getGuild(s.Z.getGuildId()), []),
      t = null == e ? true : e.name;
    return (0, r.jsx)(r.Fragment, {
      children: l.intl.format(l.t.oQuG3K, {
        serverName: t
      })
    })
  },
  f = e => {
    var t, n;
    let i = null != (t = ({
      VOICE_CONVERSATIONS: {
        title: (0, r.jsx)("div", {
          className: c.voiceChannelsTitle,
          children: l.intl.string(l.t.w5HAll)
        }),
        body: l.intl.string(l.t.Ww4hhq)
      },
      WRITING_MESSAGES: {
        title: (0, r.jsx)("div", {
          className: c.writingMessagesTitle,
          children: l.intl.string(l.t.nkP0ly)
        }),
        body: (0, r.jsx)(d, {})
      },
      ORGANIZE_BY_TOPIC: {
        title: (0, r.jsx)("div", {
          className: c.channelsTitle,
          children: l.intl.string(l.t["j/5+IX"])
        }),
        body: l.intl.string(l.t.mufH2P)
      },
      WHOS_ONLINE: {
        title: l.intl.string(l.t.l2nSoI),
        body: l.intl.format(l.t.y6tbBB, {})
      },
      INSTANT_INVITE: {
        title: l.intl.string(l.t.XcehY3),
        body: (0, r.jsx)(u, {})
      },
      SERVER_SETTINGS: {
        title: l.intl.string(l.t.wc8wi5),
        body: l.intl.format(l.t.mIfDhc, {})
      },
      DIRECT_MESSAGES: {
        title: l.intl.string(l.t.V07x5y),
        body: l.intl.format(l.t.GEBBey, {})
      },
      CREATE_MORE_SERVERS: {
        title: l.intl.string(l.t["50FORo"]),
        body: l.intl.format(l.t.zVL4qa, {})
      },
      CREATE_FIRST_SERVER: {
        title: l.intl.string(l.t.CtOX9T),
        body: l.intl.format(l.t.TflqTe, {})
      },
      FRIENDS_LIST: {
        title: l.intl.string(l.t.Fnk9L4),
        body: l.intl.format(l.t.NTq0AZ, {})
      }
    })[e.replace(/-/g, "_").toUpperCase()]) ? t : {};
    return {
      title: i.title,
      body: i.body,
      isLongText: null != (n = i.isLongText) && n
    }
  }