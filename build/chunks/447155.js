/** Chunk was on 1113 **/
/** chunk id: 447155, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p,
  v: () => h
}), require("./321073.js");
var r, Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk833349 = require("./833349.js"),
  Chunk47167 = require("./47167.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  h = ((r = {}).UPLOAD_A_FILE = "UPLOAD_A_FILE", r.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE", r.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME", r.INVITE_TO_LISTEN = "INVITE_TO_LISTEN", r.INVITE_TO_WATCH = "INVITE_TO_WATCH", r.CREATE_THREAD = "CREATE_THREAD", r.SLASH_COMMAND = "SLASH_COMMAND", r.CLIPS = "CLIPS", r.POLL = "POLL", r.ACTIVITY = "ACTIVITY", r.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE", r.SUMMARIZE_THREAD = "SUMMARIZE_THREAD", r);

function p(e) {
  let {
    canAttachFiles: t,
    canStartThreads: n,
    useSlate: r,
    canUseApplicationCommands: h,
    hasClips: p,
    channel: g,
    activities: f,
    newClipsCount: m,
    canPostPolls: b,
    canLaunchActivities: A,
    appContext: y,
    canSendScheduledMessages: O,
    canSummarizeThreads: _
  } = e, x = [];
  return t && (x.push({
    type: "UPLOAD_A_FILE",
    icon: i.H8$,
    display: d.intl.string(d.t["d3+iYs"])
  }), x.push({
    type: "UPLOAD_TEXT_AS_FILE",
    icon: i.H8$,
    display: d.intl.string(d.t["G9s+EM"])
  })), p && t && y !== u.BRT.POPOUT && x.push({
    type: "CLIPS",
    icon: i.xgA,
    display: d.intl.string(d.t.o034cv),
    badgeVal: m,
    badgeColor: l.A.colors.BACKGROUND_BRAND.css
  }), n && x.push({
    type: "CREATE_THREAD",
    icon: i.G_k,
    display: d.intl.string(d.t.rBIGBL)
  }), b && x.push({
    type: "POLL",
    icon: i.YRe,
    display: d.intl.string(d.t.Flr51u)
  }), r && h && x.push({
    type: "SLASH_COMMAND",
    icon: i.k9F,
    display: d.intl.string(d.t.Bbvp6G)
  }), A && x.push({
    type: "ACTIVITY",
    icon: i.bxf,
    display: d.intl.string(d.t["16Lfrb"])
  }), f.forEach(e => {
    !(0, s.A)(e, u.jUm.EMBEDDED) && (e.type === u.$pd.PLAYING && (0, s.A)(e, u.jUm.JOIN) && x.push({
      type: "INVITE_TO_GAME",
      icon: i.LVO,
      display: d.intl.formatToPlainString(d.t["KHLo+F"], {
        channel: (0, a.m1)(g, c.default, o.A, true),
        game: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === u.$pd.LISTENING && (0, s.A)(e, u.jUm.SYNC) && x.push({
      type: "INVITE_TO_LISTEN",
      icon: i.J2m,
      display: d.intl.formatToPlainString(d.t.I479px, {
        channel: (0, a.m1)(g, c.default, o.A, true),
        name: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === u.$pd.WATCHING && (0, s.A)(e, u.jUm.SYNC) && x.push({
      type: "INVITE_TO_WATCH",
      icon: i.bMW,
      display: d.intl.formatToPlainString(d.t["EvCP/g"], {
        channel: (0, a.m1)(g, c.default, o.A, true),
        name: null != e ? e.name : ""
      }),
      activity: e
    }))
  }), O && x.push({
    type: "SCHEDULED_MESSAGE",
    icon: i.O4,
    display: d.intl.string(d.t["3+ii4F"])
  }), g.isThread() && _ && x.push({
    type: "SUMMARIZE_THREAD",
    icon: i.Dud,
    display: d.intl.string(d.t.EXfguE)
  }), x
}