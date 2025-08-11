/** Chunk was on web.js **/
/** chunk id: 232495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => f
}), require("./704826.js"), require("./35282.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk388032 = require("./388032.js"),
  Chunk502764 = require("./502764.js");
let u = () => <Chunk255367.Fragment>{Chunk388032.intl.format(Chunk388032.t.ymkBtr, {
      shareIcon: Chunk388032.intl.string(Chunk388032.t.VINpSE),
      shareIconHook: () => (0, Chunk255367.jsx)(Chunk481060.ejJ, {
        className: Chunk502764.icon
      }, "icon")
    })}</Chunk255367.Fragment>,
  d = () => {
    let e = (0, Chunk442837.e7)([Chunk430824.Z, Chunk914010.Z], () => Chunk430824.Z.getGuild(Chunk914010.Z.getGuildId()), []),
      t = null == module ? true : module.name;
    return <Chunk255367.Fragment>{Chunk388032.intl.format(Chunk388032.t.oQuG3N, {
        serverName: exports
      })}</Chunk255367.Fragment>
  },
  f = e => {
    var t, n;
    let i = null != (t = ({
      VOICE_CONVERSATIONS: {
        title: <div className={c.voiceChannelsTitle}>{l.intl.string(l.t.w5HAlp)}</div>,
        body: l.intl.string(l.t.Ww4hho)
      },
      WRITING_MESSAGES: {
        title: <div className={c.writingMessagesTitle}>{l.intl.string(l.t.nkP0l5)}</div>,
        body: <d />
      },
      ORGANIZE_BY_TOPIC: {
        title: <div className={c.channelsTitle}>{l.intl.string(l.t["j/5+IS"])}</div>,
        body: l.intl.string(l.t.mufH2N)
      },
      WHOS_ONLINE: {
        title: l.intl.string(l.t.l2nSoK),
        body: l.intl.format(l.t.y6tbBA, {})
      },
      INSTANT_INVITE: {
        title: l.intl.string(l.t.XcehY2),
        body: <u />
      },
      SERVER_SETTINGS: {
        title: l.intl.string(l.t.wc8wi4),
        body: l.intl.format(l.t.mIfDhY, {})
      },
      DIRECT_MESSAGES: {
        title: l.intl.string(l.t["V07x5+"]),
        body: l.intl.format(l.t.GEBBe3, {})
      },
      CREATE_MORE_SERVERS: {
        title: l.intl.string(l.t["50FORk"]),
        body: l.intl.format(l.t.zVL4qa, {})
      },
      CREATE_FIRST_SERVER: {
        title: l.intl.string(l.t.CtOX9f),
        body: l.intl.format(l.t.TflqTU, {})
      },
      FRIENDS_LIST: {
        title: l.intl.string(l.t.Fnk9Ly),
        body: l.intl.format(l.t.NTq0AQ, {})
      }
    })[e.replace(/-/g, "_").toUpperCase()]) ? t : {};
    return {
      title: i.title,
      body: i.body,
      isLongText: null != (n = i.isLongText) && n
    }
  }