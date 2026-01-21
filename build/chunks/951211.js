/** Chunk was on 82124 **/
/** chunk id: 951211, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h,
  r: () => f
}), require("./539854.js");
var r, Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk620662 = require("./620662.js"),
  Chunk933557 = require("./933557.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk713913 = require("./713913.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  f = ((r = {}).UPLOAD_A_FILE = "UPLOAD_A_FILE", r.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE", r.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME", r.INVITE_TO_LISTEN = "INVITE_TO_LISTEN", r.INVITE_TO_WATCH = "INVITE_TO_WATCH", r.CREATE_THREAD = "CREATE_THREAD", r.SLASH_COMMAND = "SLASH_COMMAND", r.CLIPS = "CLIPS", r.POLL = "POLL", r.ACTIVITY = "ACTIVITY", r.APP_LAUNCHER = "APP_LAUNCHER", r.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE", r.SUMMARIZE_THREAD = "SUMMARIZE_THREAD", r);

function h(e) {
  let {
    canAttachFiles: t,
    canStartThreads: n,
    useSlate: r,
    canUseApplicationCommands: f,
    hasClips: h,
    channel: g,
    activities: m,
    newClipsCount: b,
    canPostPolls: y,
    canLaunchActivities: v,
    appContext: O,
    canSendScheduledMessages: j,
    canSummarizeThreads: x,
    showAppLauncher: C
  } = e, E = [];
  t && (E.push({
    type: "UPLOAD_A_FILE",
    icon: l.xD0,
    display: p.intl.string(p.t["d3+iYs"])
  }), E.push({
    type: "UPLOAD_TEXT_AS_FILE",
    icon: l.xD0,
    display: p.intl.string(p.t["G9s+EM"])
  })), h && t && O !== d.IlC.POPOUT && E.push({
    type: "CLIPS",
    icon: l.AlX,
    display: p.intl.string(p.t.o034cv),
    badgeVal: b,
    badgeColor: i.Z.colors.BACKGROUND_BRAND.css
  }), n && E.push({
    type: "CREATE_THREAD",
    icon: l.YPH,
    display: p.intl.string(p.t.rBIGBL)
  }), y && E.push({
    type: "POLL",
    icon: l.QDj,
    display: p.intl.string(p.t.Flr51u)
  });
  let {
    renameAppsToAppCommandsInOverflow: S,
    moveAppsEntrypointToOverflow: _
  } = u.n.getConfig({
    location: "getChannelAttachOptions"
  });
  return _ ? C && E.push({
    type: "APP_LAUNCHER",
    icon: l.jje,
    display: p.intl.string(p.t.nqswKn)
  }) : r && f && E.push({
    type: "SLASH_COMMAND",
    icon: l.jje,
    display: p.intl.string(S ? p.t["5Y0Fam"] : p.t.Bbvp6G)
  }), v && E.push({
    type: "ACTIVITY",
    icon: l.nG3,
    display: p.intl.string(p.t["16Lfrb"])
  }), m.forEach(e => {
    !(0, a.Z)(e, d.xjy.EMBEDDED) && (e.type === d.IIU.PLAYING && (0, a.Z)(e, d.xjy.JOIN) && E.push({
      type: "INVITE_TO_GAME",
      icon: l.xoD,
      display: p.intl.formatToPlainString(p.t["KHLo+F"], {
        channel: (0, o.F6)(g, c.default, s.Z, true),
        game: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === d.IIU.LISTENING && (0, a.Z)(e, d.xjy.SYNC) && E.push({
      type: "INVITE_TO_LISTEN",
      icon: l.iOO,
      display: p.intl.formatToPlainString(p.t.I479px, {
        channel: (0, o.F6)(g, c.default, s.Z, true),
        name: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === d.IIU.WATCHING && (0, a.Z)(e, d.xjy.SYNC) && E.push({
      type: "INVITE_TO_WATCH",
      icon: l.tEF,
      display: p.intl.formatToPlainString(p.t["EvCP/g"], {
        channel: (0, o.F6)(g, c.default, s.Z, true),
        name: null != e ? e.name : ""
      }),
      activity: e
    }))
  }), j && E.push({
    type: "SCHEDULED_MESSAGE",
    icon: l.T39,
    display: p.intl.string(p.t["3+ii4F"])
  }), g.isThread() && x && E.push({
    type: "SUMMARIZE_THREAD",
    icon: l.$2U,
    display: p.intl.string(p.t.EXfguE)
  }), E
}