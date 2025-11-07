/** Chunk was on 13140 **/
/** chunk id: 951211, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  r: () => p
}), require("./539854.js");
var r, Chunk481060 = require("./481060.js"),
  Chunk620662 = require("./620662.js"),
  Chunk933557 = require("./933557.js"),
  Chunk377171 = require("./377171.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  p = ((r = {}).UPLOAD_A_FILE = "UPLOAD_A_FILE", r.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE", r.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME", r.INVITE_TO_LISTEN = "INVITE_TO_LISTEN", r.INVITE_TO_WATCH = "INVITE_TO_WATCH", r.CREATE_THREAD = "CREATE_THREAD", r.SLASH_COMMAND = "SLASH_COMMAND", r.CLIPS = "CLIPS", r.POLL = "POLL", r.ACTIVITY = "ACTIVITY", r.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE", r.SUMMARIZE_THREAD = "SUMMARIZE_THREAD", r);

function f(e) {
  let {
    canAttachFiles: t,
    canStartThreads: n,
    useSlate: r,
    canUseApplicationCommands: p,
    hasClips: f,
    channel: h,
    activities: m,
    newClipsCount: g,
    canPostPolls: b,
    canLaunchActivities: _,
    appContext: y,
    canSendScheduledMessages: C,
    canSummarizeThreads: v
  } = e, O = [];
  return t && (O.push({
    type: "UPLOAD_A_FILE",
    icon: i.xD0,
    display: d.intl.string(d.t["d3+iYs"])
  }), O.push({
    type: "UPLOAD_TEXT_AS_FILE",
    icon: i.xD0,
    display: d.intl.string(d.t["G9s+EM"])
  })), f && t && y !== u.IlC.POPOUT && O.push({
    type: "CLIPS",
    icon: i.AlX,
    display: d.intl.string(d.t.o034cv),
    badgeVal: g,
    badgeColor: o.Z.BG_BRAND
  }), n && O.push({
    type: "CREATE_THREAD",
    icon: i.YPH,
    display: d.intl.string(d.t.rBIGBL)
  }), b && O.push({
    type: "POLL",
    icon: i.QDj,
    display: d.intl.string(d.t.Flr51u)
  }), r && p && O.push({
    type: "SLASH_COMMAND",
    icon: i.jje,
    display: d.intl.string(d.t.Bbvp6G)
  }), _ && O.push({
    type: "ACTIVITY",
    icon: i.nG3,
    display: d.intl.string(d.t["16Lfrb"])
  }), m.forEach(e => {
    !(0, l.Z)(e, u.xjy.EMBEDDED) && (e.type === u.IIU.PLAYING && (0, l.Z)(e, u.xjy.JOIN) && O.push({
      type: "INVITE_TO_GAME",
      icon: i.xoD,
      display: d.intl.formatToPlainString(d.t["KHLo+F"], {
        channel: (0, a.F6)(h, c.default, s.Z, true),
        game: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === u.IIU.LISTENING && (0, l.Z)(e, u.xjy.SYNC) && O.push({
      type: "INVITE_TO_LISTEN",
      icon: i.iOO,
      display: d.intl.formatToPlainString(d.t.I479px, {
        channel: (0, a.F6)(h, c.default, s.Z, true),
        name: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === u.IIU.WATCHING && (0, l.Z)(e, u.xjy.SYNC) && O.push({
      type: "INVITE_TO_WATCH",
      icon: i.tEF,
      display: d.intl.formatToPlainString(d.t["EvCP/g"], {
        channel: (0, a.F6)(h, c.default, s.Z, true),
        name: null != e ? e.name : ""
      }),
      activity: e
    }))
  }), C && O.push({
    type: "SCHEDULED_MESSAGE",
    icon: i.T39,
    display: d.intl.string(d.t["3+ii4F"])
  }), h.isThread() && v && O.push({
    type: "SUMMARIZE_THREAD",
    icon: i.$2U,
    display: d.intl.string(d.t.EXfguE)
  }), O
}