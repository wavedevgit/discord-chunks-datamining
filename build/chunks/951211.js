/** Chunk was on 86642 **/
/** chunk id: 951211, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  r: () => p
}), require("./539854.js");
var i, Chunk481060 = require("./481060.js"),
  Chunk620662 = require("./620662.js"),
  Chunk933557 = require("./933557.js"),
  Chunk377171 = require("./377171.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  p = ((i = {}).UPLOAD_A_FILE = "UPLOAD_A_FILE", i.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE", i.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME", i.INVITE_TO_LISTEN = "INVITE_TO_LISTEN", i.INVITE_TO_WATCH = "INVITE_TO_WATCH", i.CREATE_THREAD = "CREATE_THREAD", i.SLASH_COMMAND = "SLASH_COMMAND", i.CLIPS = "CLIPS", i.POLL = "POLL", i.ACTIVITY = "ACTIVITY", i.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE", i.SUMMARIZE_THREAD = "SUMMARIZE_THREAD", i);

function f(e) {
  let {
    canAttachFiles: t,
    canStartThreads: n,
    useSlate: i,
    canUseApplicationCommands: p,
    hasClips: f,
    channel: h,
    activities: m,
    newClipsCount: g,
    canPostPolls: b,
    canLaunchActivities: y,
    appContext: C,
    canSendScheduledMessages: _,
    canSummarizeThreads: v
  } = e, x = [];
  return t && (x.push({
    type: "UPLOAD_A_FILE",
    icon: r.xD0,
    display: d.intl.string(d.t["d3+iYs"])
  }), x.push({
    type: "UPLOAD_TEXT_AS_FILE",
    icon: r.xD0,
    display: d.intl.string(d.t["G9s+EM"])
  })), f && t && C !== u.IlC.POPOUT && x.push({
    type: "CLIPS",
    icon: r.AlX,
    display: d.intl.string(d.t.o034cv),
    badgeVal: g,
    badgeColor: o.Z.BG_BRAND
  }), n && x.push({
    type: "CREATE_THREAD",
    icon: r.YPH,
    display: d.intl.string(d.t.rBIGBL)
  }), b && x.push({
    type: "POLL",
    icon: r.QDj,
    display: d.intl.string(d.t.Flr51u)
  }), i && p && x.push({
    type: "SLASH_COMMAND",
    icon: r.jje,
    display: d.intl.string(d.t.Bbvp6G)
  }), y && x.push({
    type: "ACTIVITY",
    icon: r.nG3,
    display: d.intl.string(d.t["16Lfrb"])
  }), m.forEach(e => {
    !(0, l.Z)(e, u.xjy.EMBEDDED) && (e.type === u.IIU.PLAYING && (0, l.Z)(e, u.xjy.JOIN) && x.push({
      type: "INVITE_TO_GAME",
      icon: r.xoD,
      display: d.intl.formatToPlainString(d.t["KHLo+F"], {
        channel: (0, a.F6)(h, c.default, s.Z, true),
        game: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === u.IIU.LISTENING && (0, l.Z)(e, u.xjy.SYNC) && x.push({
      type: "INVITE_TO_LISTEN",
      icon: r.iOO,
      display: d.intl.formatToPlainString(d.t.I479px, {
        channel: (0, a.F6)(h, c.default, s.Z, true),
        name: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === u.IIU.WATCHING && (0, l.Z)(e, u.xjy.SYNC) && x.push({
      type: "INVITE_TO_WATCH",
      icon: r.tEF,
      display: d.intl.formatToPlainString(d.t["EvCP/g"], {
        channel: (0, a.F6)(h, c.default, s.Z, true),
        name: null != e ? e.name : ""
      }),
      activity: e
    }))
  }), _ && x.push({
    type: "SCHEDULED_MESSAGE",
    icon: r.T39,
    display: d.intl.string(d.t["3+ii4F"])
  }), h.isThread() && v && x.push({
    type: "SUMMARIZE_THREAD",
    icon: r.$2U,
    display: d.intl.string(d.t.EXfguE)
  }), x
}