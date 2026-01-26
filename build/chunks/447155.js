/** Chunk was on 97887 **/
/** chunk id: 447155, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f,
  v: () => h
}), require("./321073.js");
var r, Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk833349 = require("./833349.js"),
  Chunk47167 = require("./47167.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk184761 = require("./184761.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  h = ((r = {}).UPLOAD_A_FILE = "UPLOAD_A_FILE", r.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE", r.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME", r.INVITE_TO_LISTEN = "INVITE_TO_LISTEN", r.INVITE_TO_WATCH = "INVITE_TO_WATCH", r.CREATE_THREAD = "CREATE_THREAD", r.SLASH_COMMAND = "SLASH_COMMAND", r.CLIPS = "CLIPS", r.POLL = "POLL", r.ACTIVITY = "ACTIVITY", r.APP_LAUNCHER = "APP_LAUNCHER", r.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE", r.SUMMARIZE_THREAD = "SUMMARIZE_THREAD", r);

function f(e) {
  let {
    canAttachFiles: t,
    canStartThreads: n,
    useSlate: r,
    canUseApplicationCommands: h,
    hasClips: f,
    channel: g,
    activities: m,
    newClipsCount: b,
    canPostPolls: A,
    canLaunchActivities: y,
    appContext: _,
    canSendScheduledMessages: O,
    canSummarizeThreads: j,
    showAppLauncher: v
  } = e, x = [];
  t && (x.push({
    type: "UPLOAD_A_FILE",
    icon: i.H8$,
    display: p.intl.string(p.t["d3+iYs"])
  }), x.push({
    type: "UPLOAD_TEXT_AS_FILE",
    icon: i.H8$,
    display: p.intl.string(p.t["G9s+EM"])
  })), f && t && _ !== d.BRT.POPOUT && x.push({
    type: "CLIPS",
    icon: i.xgA,
    display: p.intl.string(p.t.o034cv),
    badgeVal: b,
    badgeColor: l.A.colors.BACKGROUND_BRAND.css
  }), n && x.push({
    type: "CREATE_THREAD",
    icon: i.G_k,
    display: p.intl.string(p.t.rBIGBL)
  }), A && x.push({
    type: "POLL",
    icon: i.YRe,
    display: p.intl.string(p.t.Flr51u)
  });
  let {
    renameAppsToAppCommandsInOverflow: E,
    moveAppsEntrypointToOverflow: C
  } = u.C.getConfig({
    location: "getChannelAttachOptions"
  });
  return C ? v && x.push({
    type: "APP_LAUNCHER",
    icon: i.k9F,
    display: p.intl.string(p.t.nqswKn)
  }) : r && h && x.push({
    type: "SLASH_COMMAND",
    icon: i.k9F,
    display: p.intl.string(E ? p.t["5Y0Fam"] : p.t.Bbvp6G)
  }), y && x.push({
    type: "ACTIVITY",
    icon: i.bxf,
    display: p.intl.string(p.t["16Lfrb"])
  }), m.forEach(e => {
    !(0, s.A)(e, d.jUm.EMBEDDED) && (e.type === d.$pd.PLAYING && (0, s.A)(e, d.jUm.JOIN) && x.push({
      type: "INVITE_TO_GAME",
      icon: i.LVO,
      display: p.intl.formatToPlainString(p.t["KHLo+F"], {
        channel: (0, a.m1)(g, c.default, o.A, true),
        game: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === d.$pd.LISTENING && (0, s.A)(e, d.jUm.SYNC) && x.push({
      type: "INVITE_TO_LISTEN",
      icon: i.J2m,
      display: p.intl.formatToPlainString(p.t.I479px, {
        channel: (0, a.m1)(g, c.default, o.A, true),
        name: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === d.$pd.WATCHING && (0, s.A)(e, d.jUm.SYNC) && x.push({
      type: "INVITE_TO_WATCH",
      icon: i.bMW,
      display: p.intl.formatToPlainString(p.t["EvCP/g"], {
        channel: (0, a.m1)(g, c.default, o.A, true),
        name: null != e ? e.name : ""
      }),
      activity: e
    }))
  }), O && x.push({
    type: "SCHEDULED_MESSAGE",
    icon: i.O4,
    display: p.intl.string(p.t["3+ii4F"])
  }), g.isThread() && j && x.push({
    type: "SUMMARIZE_THREAD",
    icon: i.Dud,
    display: p.intl.string(p.t.EXfguE)
  }), x
}