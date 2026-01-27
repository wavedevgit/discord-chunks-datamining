/** Chunk was on 60667 **/
/** chunk id: 915967, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => Z,
  Bx: () => K,
  Gm: () => F,
  Q_: () => B,
  zF: () => Y,
  zR: () => z
}), require("./65821.js"), require("./321073.js");
var r, Chunk966597 = require("./966597.js"),
  Chunk774603 = require("./774603.js"),
  Chunk430086 = require("./430086.js"),
  Chunk394318 = require("./394318.js"),
  Chunk303757 = require("./303757.js"),
  Chunk830004 = require("./830004.js"),
  Chunk434728 = require("./434728.js"),
  Chunk308494 = require("./308494.js"),
  Chunk64460 = require("./64460.js"),
  Chunk92960 = require("./92960.js"),
  Chunk739008 = require("./739008.js"),
  Chunk314519 = require("./314519.js"),
  Chunk198168 = require("./198168.js"),
  Chunk799592 = require("./799592.js"),
  Chunk675704 = require("./675704.js"),
  Chunk806964 = require("./806964.js"),
  Chunk552049 = require("./552049.js"),
  Chunk877991 = require("./877991.js"),
  Chunk332779 = require("./332779.js"),
  Chunk187521 = require("./187521.js"),
  Chunk568765 = require("./568765.js"),
  Chunk904828 = require("./904828.js"),
  Chunk251494 = require("./251494.js"),
  Chunk82038 = require("./82038.js"),
  Chunk14214 = require("./14214.js"),
  Chunk151199 = require("./151199.js"),
  Chunk144353 = require("./144353.js"),
  Chunk535527 = require("./535527.js"),
  Chunk46647 = require("./46647.js"),
  Chunk512513 = require("./512513.js"),
  Chunk910492 = require("./910492.js"),
  Chunk416092 = require("./416092.js"),
  Chunk801796 = require("./801796.js"),
  Chunk344731 = require("./344731.js"),
  Chunk58841 = require("./58841.js"),
  Chunk406975 = require("./406975.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  B = ((r = {}).NAVIGATION = "NAVIGATION", r.CHAT = "CHAT", r.VOICE_AND_VIDEO = "VOICE_AND_VIDEO", r.MISCELLANEOUS = "MISCELLANEOUS", r.MESSAGE = "MESSAGE", r.DND = "DND", r);

function F(e) {
  switch (e) {
    case "NAVIGATION":
      return H.intl.string(H.t["yGE+jg"]);
    case "VOICE_AND_VIDEO":
      return H.intl.string(H.t.bI8F5u);
    case "CHAT":
      return H.intl.string(H.t.hDhbb3);
    case "MISCELLANEOUS":
      return H.intl.string(H.t.cBdwqs);
    case "MESSAGE":
      return H.intl.string(H.t["5fpmX9"]);
    case "DND":
      return H.intl.string(H.t["69j6+4"])
  }
}

function Y(e) {
  switch (e) {
    case "MESSAGE":
      return H.intl.string(H.t.iepGDn);
    case "DND":
      return H.intl.string(H.t.LBsB0a);
    default:
      return
  }
}

function W() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = z[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let z = {
  [Chunk652215.IWg.SERVER_NEXT]: Chunk904828.yx,
  [Chunk652215.IWg.SERVER_PREV]: Chunk904828.yv,
  [Chunk652215.IWg.CHANNEL_NEXT]: Chunk430086.kF,
  [Chunk652215.IWg.CHANNEL_PREV]: Chunk430086.Oc,
  [Chunk652215.IWg.NAVIGATE_BACK]: Chunk430086.GY,
  [Chunk652215.IWg.NAVIGATE_FORWARD]: Chunk430086.M$,
  [Chunk652215.IWg.UNREAD_NEXT]: Chunk801796.mH,
  [Chunk652215.IWg.UNREAD_PREV]: Chunk801796.US,
  [Chunk652215.IWg.MENTION_CHANNEL_NEXT]: Chunk801796.BD,
  [Chunk652215.IWg.MENTION_CHANNEL_PREV]: Chunk801796.X8,
  [Chunk652215.IWg.TOGGLE_PREVIOUS_GUILD]: Chunk430086.Fv,
  [Chunk652215.IWg.JUMP_TO_GUILD]: Chunk64460.J,
  [Chunk652215.IWg.SUBMIT]: Chunk251494.X,
  [Chunk652215.IWg.TEXTAREA_FOCUS]: Chunk82038.c,
  [Chunk652215.IWg.MARK_CHANNEL_READ]: Chunk92960.D,
  [Chunk652215.IWg.MARK_SERVER_READ]: Chunk739008.P,
  [Chunk652215.IWg.TOGGLE_CHANNEL_PINS]: Chunk144353.O,
  [Chunk652215.IWg.TOGGLE_FOR_LATER]: Chunk535527.K,
  [Chunk652215.IWg.TOGGLE_INBOX]: Chunk910492.q,
  [Chunk652215.IWg.MARK_TOP_INBOX_CHANNEL_READ]: Chunk910492.O,
  [Chunk652215.IWg.TOGGLE_USERS]: Chunk416092.U,
  [Chunk652215.IWg.TOGGLE_HELP]: Chunk46647.x,
  [Chunk652215.IWg.VIBE_WITH_WUMPUS]: Chunk58841.y,
  [Chunk652215.IWg.TOGGLE_MUTE]: Chunk14214.VT,
  [Chunk652215.IWg.TOGGLE_DEAFEN]: Chunk14214.rR,
  [Chunk652215.IWg.TOGGLE_CATEGORY_COLLAPSED]: Chunk151199.y,
  [Chunk652215.IWg.SEARCH_SOUNDBOARD]: Chunk187521.A,
  [Chunk652215.IWg.SCROLL_UP]: Chunk552049.U5,
  [Chunk652215.IWg.SCROLL_DOWN]: Chunk552049.fz,
  [Chunk652215.IWg.QUICKSWITCHER_SHOW]: Chunk675704.R,
  [Chunk652215.IWg.CREATE_DM_GROUP]: Chunk394318.X,
  [Chunk652215.IWg.SEARCH_EMOJIS]: Chunk877991.L,
  [Chunk652215.IWg.SEARCH_GIFS]: Chunk332779.T,
  [Chunk652215.IWg.SEARCH_STICKERS]: Chunk568765.w,
  [Chunk652215.IWg.TOGGLE_HOTKEYS]: Chunk512513.z,
  [Chunk652215.IWg.JUMP_TO_FIRST_UNREAD]: Chunk314519.s,
  [Chunk652215.IWg.CREATE_GUILD]: Chunk303757.$,
  [Chunk652215.IWg.UPLOAD_FILE]: Chunk344731.T,
  [Chunk652215.IWg.RETURN_TO_AUDIO_CHANNEL]: Chunk806964.u,
  [Chunk652215.IWg.CALL_ACCEPT]: Chunk774603.Yo,
  [Chunk652215.IWg.CALL_START]: Chunk774603.OX,
  [Chunk652215.IWg.FOCUS_SEARCH]: Chunk434728.O,
  [Chunk652215.IWg.JUMP_TO_CURRENT_CALL]: Chunk308494.s,
  [Chunk652215.IWg.ZOOM_IN]: Chunk406975.Ur,
  [Chunk652215.IWg.ZOOM_OUT]: Chunk406975.hU,
  [Chunk652215.IWg.ZOOM_RESET]: Chunk406975.O$,
  [Chunk652215.IWg.OPEN_APP_DIRECTORY]: Chunk198168.N,
  [Chunk652215.IWg.BROWSER_DEVTOOLS]: Chunk830004.i,
  [Chunk652215.IWg.OPEN_CONTEXT_MENU]: Chunk799592.b
};

function K() {
  let e = [{
      description: H.intl.string(H.t.bx4Uyz),
      binds: W(V.IWg.SERVER_PREV, V.IWg.SERVER_NEXT),
      group: "NAVIGATION"
    }, {
      description: H.intl.string(H.t["+Wem6h"]),
      binds: W(V.IWg.CHANNEL_PREV, V.IWg.CHANNEL_NEXT),
      group: "NAVIGATION"
    }, {
      description: H.intl.string(H.t["+2fcdz"]),
      binds: W(V.IWg.NAVIGATE_BACK, V.IWg.NAVIGATE_FORWARD),
      group: "NAVIGATION"
    }, {
      description: H.intl.string(H.t.eVmj1H),
      binds: W(V.IWg.UNREAD_PREV, V.IWg.UNREAD_NEXT),
      group: "NAVIGATION"
    }, {
      description: H.intl.string(H.t.EcqS7Y),
      binds: W(V.IWg.MENTION_CHANNEL_PREV, V.IWg.MENTION_CHANNEL_NEXT),
      group: "NAVIGATION"
    }, {
      description: H.intl.string(H.t["4I3pwW"]),
      binds: W(V.IWg.JUMP_TO_CURRENT_CALL),
      group: "NAVIGATION"
    }, {
      description: H.intl.string(H.t.Bqss72),
      binds: W(V.IWg.TOGGLE_PREVIOUS_GUILD),
      group: "NAVIGATION"
    }, {
      description: H.intl.string(H.t.yYsRlD),
      binds: W(V.IWg.QUICKSWITCHER_SHOW),
      group: "NAVIGATION"
    }, {
      description: H.intl.string(H.t.O7ouXO),
      binds: W(V.IWg.CREATE_GUILD),
      group: "NAVIGATION",
      groupEnd: true
    }, {
      description: H.intl.string(H.t.Lns0Fc),
      binds: ["mod+d"],
      group: "DND"
    }, {
      description: H.intl.string(H.t.dmMqay),
      binds: ["up", "down"],
      group: "DND"
    }, {
      description: H.intl.string(H.t["cs/HVH"]),
      binds: ["spacebar", "enter"],
      group: "DND"
    }, {
      description: H.intl.string(H.t["1ioMJQ"]),
      binds: ["esc"],
      group: "DND",
      groupEnd: true
    }, {
      description: H.intl.string(H.t.UaXAPx),
      binds: W(V.IWg.MARK_SERVER_READ),
      group: "CHAT"
    }, {
      description: H.intl.string(H.t["5X9vFj"]),
      binds: W(V.IWg.MARK_CHANNEL_READ),
      group: "CHAT"
    }, {
      description: H.intl.string(H.t.wxQFsl),
      binds: W(V.IWg.CREATE_DM_GROUP),
      group: "CHAT"
    }, {
      description: H.intl.string(H.t["C+XV7f"]),
      binds: W(V.IWg.TOGGLE_CHANNEL_PINS),
      group: "CHAT"
    }, {
      description: H.intl.string(H.t["Q+YV/T"]),
      binds: W(V.IWg.TOGGLE_INBOX),
      group: "CHAT"
    }, {
      description: H.intl.string(H.t["YEjV+W"]),
      binds: W(V.IWg.MARK_TOP_INBOX_CHANNEL_READ),
      group: "CHAT"
    }, {
      description: H.intl.string(H.t.AcBI9S),
      binds: W(V.IWg.TOGGLE_USERS),
      group: "CHAT"
    }, {
      description: H.intl.string(H.t.JoxNnl),
      binds: W(V.IWg.SEARCH_EMOJIS),
      group: "CHAT"
    }, {
      description: H.intl.string(H.t["3PHxo8"]),
      binds: W(V.IWg.SEARCH_GIFS),
      group: "CHAT"
    }, {
      description: H.intl.string(H.t.YFl7eb),
      binds: W(V.IWg.SEARCH_STICKERS),
      group: "CHAT"
    }, {
      description: H.intl.string(H.t.L3RYYJ),
      binds: W(V.IWg.SCROLL_UP, V.IWg.SCROLL_DOWN),
      group: "CHAT"
    }, {
      description: H.intl.string(H.t["3HAurM"]),
      binds: W(V.IWg.JUMP_TO_FIRST_UNREAD),
      group: "CHAT"
    }, {
      description: H.intl.string(H.t.rrYBEu),
      binds: W(V.IWg.TEXTAREA_FOCUS),
      group: "CHAT"
    }, {
      description: H.intl.string(H.t.sUJlPL),
      binds: W(V.IWg.UPLOAD_FILE),
      group: "CHAT",
      groupEnd: true
    }, {
      description: H.intl.string(H.t.tL6eVW),
      binds: W(V.IWg.TOGGLE_MUTE),
      group: "VOICE_AND_VIDEO"
    }, {
      description: H.intl.string(H.t["QXe/7T"]),
      binds: W(V.IWg.TOGGLE_DEAFEN),
      group: "VOICE_AND_VIDEO"
    }, {
      description: H.intl.string(H.t.d6UIii),
      binds: W(V.IWg.CALL_ACCEPT),
      group: "VOICE_AND_VIDEO"
    }, {
      description: H.intl.string(H.t.IcEW06),
      binds: W(V.IWg.MARK_CHANNEL_READ),
      group: "VOICE_AND_VIDEO"
    }, {
      description: H.intl.string(H.t.WN2dsS),
      binds: W(V.IWg.CALL_START),
      group: "VOICE_AND_VIDEO",
      groupEnd: true
    }, {
      description: H.intl.string(H.t.rUK0kk),
      binds: W(V.IWg.SEARCH_SOUNDBOARD),
      group: "VOICE_AND_VIDEO"
    }, {
      description: H.intl.string(H.t.vkGkSn),
      binds: W(V.IWg.TOGGLE_HELP),
      group: "MISCELLANEOUS"
    }, {
      description: H.intl.string(H.t.FJvZ87),
      binds: W(V.IWg.FOCUS_SEARCH),
      group: "MISCELLANEOUS"
    }, {
      description: H.intl.string(H.t["FiWl/T"]),
      binds: W(V.IWg.OPEN_CONTEXT_MENU),
      group: "MISCELLANEOUS"
    }, {
      description: H.intl.string(H.t.HnNtEI),
      binds: ["h+h+right+n+k"],
      group: "MISCELLANEOUS",
      groupEnd: true
    }, {
      description: H.intl.string(H.t.fsBWmS),
      binds: ["e"],
      group: "MESSAGE"
    }, {
      description: H.intl.string(H.t.xwMqD7),
      binds: ["backspace"],
      group: "MESSAGE"
    }, {
      description: H.intl.string(H.t.CvQ18w),
      binds: ["p"],
      group: "MESSAGE"
    }, {
      description: H.intl.string(H.t.lfIHs4),
      binds: ["plus"],
      group: "MESSAGE"
    }, {
      description: H.intl.string(H.t["5IEsGx"]),
      binds: ["r"],
      group: "MESSAGE"
    }, {
      description: H.intl.string(H.t.zSyDdA),
      binds: ["f"],
      group: "MESSAGE"
    }, {
      description: H.intl.string(H.t.yGLjXF),
      binds: ["s"],
      group: "MESSAGE"
    }, {
      description: H.intl.string(H.t.JrGD7E),
      binds: ["mod+c"],
      group: "MESSAGE"
    }, {
      description: H.intl.string(H.t.RpE9k7),
      binds: ["alt+enter"],
      group: "MESSAGE"
    }, {
      description: H.intl.string(H.t.rrYBEu),
      binds: ["escape"],
      group: "MESSAGE",
      groupEnd: true
    }, {
      description: H.intl.string(H.t.z9c6mt),
      binds: W(V.IWg.VIBE_WITH_WUMPUS),
      group: "MISCELLANEOUS"
    }],
    {
      enabled: t,
      inInbox: n
    } = i.A.getCurrentConfig({
      location: "keybinds"
    }, {
      autoTrackExposure: false
    });
  return t && !n && e.push({
    description: H.intl.string(H.t.IWNSoH),
    binds: W(V.IWg.TOGGLE_FOR_LATER),
    group: "CHAT"
  }), e
}
let Z = 21552 == require.j ? z : null