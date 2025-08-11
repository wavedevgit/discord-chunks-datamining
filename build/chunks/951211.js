/** Chunk was on web.js **/
/** chunk id: 951211, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f,
  r: () => d
}), require("./539854.js");
var Chunk481060 = require("./481060.js"),
  Chunk620662 = require("./620662.js"),
  Chunk933557 = require("./933557.js"),
  Chunk377171 = require("./377171.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  d = function(e) {
    return e.UPLOAD_A_FILE = "UPLOAD_A_FILE", e.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE", e.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME", e.INVITE_TO_LISTEN = "INVITE_TO_LISTEN", e.INVITE_TO_WATCH = "INVITE_TO_WATCH", e.CREATE_THREAD = "CREATE_THREAD", e.SLASH_COMMAND = "SLASH_COMMAND", e.CLIPS = "CLIPS", e.POLL = "POLL", e.ACTIVITY = "ACTIVITY", e.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE", e
  }({});

function f(e) {
  let {
    canAttachFiles: t,
    canStartThreads: n,
    useSlate: d,
    canUseApplicationCommands: f,
    hasClips: _,
    channel: p,
    activities: h,
    newClipsCount: m,
    canPostPolls: g,
    canLaunchActivities: E,
    appContext: b,
    canSendScheduledMessages: y
  } = e, O = [];
  return t && (O.push({
    type: "UPLOAD_A_FILE",
    icon: r.xD0,
    display: u.intl.string(u.t["d3+iYm"])
  }), O.push({
    type: "UPLOAD_TEXT_AS_FILE",
    icon: r.xD0,
    display: u.intl.string(u.t["G9s+EB"])
  })), _ && t && b !== c.IlC.POPOUT && O.push({
    type: "CLIPS",
    icon: r.AlX,
    display: u.intl.string(u.t.o034cn),
    badgeVal: m,
    badgeColor: a.Z.BG_BRAND
  }), n && O.push({
    type: "CREATE_THREAD",
    icon: r.YPH,
    display: u.intl.string(u.t.rBIGBA)
  }), g && O.push({
    type: "POLL",
    icon: r.QDj,
    display: u.intl.string(u.t.Flr51t)
  }), d && f && O.push({
    type: "SLASH_COMMAND",
    icon: r.jje,
    display: u.intl.string(u.t.Bbvp6O)
  }), E && O.push({
    type: "ACTIVITY",
    icon: r.nG3,
    display: u.intl.string(u.t["16Lfra"])
  }), h.forEach(e => {
    !(0, i.Z)(e, c.xjy.EMBEDDED) && (e.type === c.IIU.PLAYING && (0, i.Z)(e, c.xjy.JOIN) && O.push({
      type: "INVITE_TO_GAME",
      icon: r.xoD,
      display: u.intl.formatToPlainString(u.t["KHLo+P"], {
        channel: (0, o.F6)(p, l.default, s.Z, true),
        game: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === c.IIU.LISTENING && (0, i.Z)(e, c.xjy.SYNC) && O.push({
      type: "INVITE_TO_LISTEN",
      icon: r.iOO,
      display: u.intl.formatToPlainString(u.t.I479p6, {
        channel: (0, o.F6)(p, l.default, s.Z, true),
        name: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === c.IIU.WATCHING && (0, i.Z)(e, c.xjy.SYNC) && O.push({
      type: "INVITE_TO_WATCH",
      icon: r.tEF,
      display: u.intl.formatToPlainString(u.t["EvCP/v"], {
        channel: (0, o.F6)(p, l.default, s.Z, true),
        name: null != e ? e.name : ""
      }),
      activity: e
    }))
  }), y && O.push({
    type: "SCHEDULED_MESSAGE",
    icon: r.T39,
    display: u.intl.string(u.t["3+ii4O"])
  }), O
}