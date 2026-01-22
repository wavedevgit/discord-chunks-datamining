/** Chunk was on web.js **/
/** chunk id: 915967, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => z,
  Bx: () => K,
  Gm: () => B,
  Q_: () => F,
  zF: () => H,
  zR: () => W
}), require("./65821.js"), require("./321073.js");
var Chunk966597 = require("./966597.js"),
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
  F = function(e) {
    return e.NAVIGATION = "NAVIGATION", e.CHAT = "CHAT", e.VOICE_AND_VIDEO = "VOICE_AND_VIDEO", e.MISCELLANEOUS = "MISCELLANEOUS", e.MESSAGE = "MESSAGE", e.DND = "DND", e
  }({});

function B(e) {
  switch (e) {
    case "NAVIGATION":
      return V.intl.string(V.t["yGE+jg"]);
    case "VOICE_AND_VIDEO":
      return V.intl.string(V.t.bI8F5u);
    case "CHAT":
      return V.intl.string(V.t.hDhbb3);
    case "MISCELLANEOUS":
      return V.intl.string(V.t.cBdwqs);
    case "MESSAGE":
      return V.intl.string(V.t["5fpmX9"]);
    case "DND":
      return V.intl.string(V.t["69j6+4"])
  }
}

function H(e) {
  switch (e) {
    case "MESSAGE":
      return V.intl.string(V.t.iepGDn);
    case "DND":
      return V.intl.string(V.t.LBsB0a);
    default:
      return
  }
}

function Y() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = W[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let W = {
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
      description: V.intl.string(V.t.bx4Uyz),
      binds: Y(G.IWg.SERVER_PREV, G.IWg.SERVER_NEXT),
      group: "NAVIGATION"
    }, {
      description: V.intl.string(V.t["+Wem6h"]),
      binds: Y(G.IWg.CHANNEL_PREV, G.IWg.CHANNEL_NEXT),
      group: "NAVIGATION"
    }, {
      description: V.intl.string(V.t["+2fcdz"]),
      binds: Y(G.IWg.NAVIGATE_BACK, G.IWg.NAVIGATE_FORWARD),
      group: "NAVIGATION"
    }, {
      description: V.intl.string(V.t.eVmj1H),
      binds: Y(G.IWg.UNREAD_PREV, G.IWg.UNREAD_NEXT),
      group: "NAVIGATION"
    }, {
      description: V.intl.string(V.t.EcqS7Y),
      binds: Y(G.IWg.MENTION_CHANNEL_PREV, G.IWg.MENTION_CHANNEL_NEXT),
      group: "NAVIGATION"
    }, {
      description: V.intl.string(V.t["4I3pwW"]),
      binds: Y(G.IWg.JUMP_TO_CURRENT_CALL),
      group: "NAVIGATION"
    }, {
      description: V.intl.string(V.t.Bqss72),
      binds: Y(G.IWg.TOGGLE_PREVIOUS_GUILD),
      group: "NAVIGATION"
    }, {
      description: V.intl.string(V.t.yYsRlD),
      binds: Y(G.IWg.QUICKSWITCHER_SHOW),
      group: "NAVIGATION"
    }, {
      description: V.intl.string(V.t.O7ouXO),
      binds: Y(G.IWg.CREATE_GUILD),
      group: "NAVIGATION",
      groupEnd: true
    }, {
      description: V.intl.string(V.t.Lns0Fc),
      binds: ["mod+d"],
      group: "DND"
    }, {
      description: V.intl.string(V.t.dmMqay),
      binds: ["up", "down"],
      group: "DND"
    }, {
      description: V.intl.string(V.t["cs/HVH"]),
      binds: ["spacebar", "enter"],
      group: "DND"
    }, {
      description: V.intl.string(V.t["1ioMJQ"]),
      binds: ["esc"],
      group: "DND",
      groupEnd: true
    }, {
      description: V.intl.string(V.t.UaXAPx),
      binds: Y(G.IWg.MARK_SERVER_READ),
      group: "CHAT"
    }, {
      description: V.intl.string(V.t["5X9vFj"]),
      binds: Y(G.IWg.MARK_CHANNEL_READ),
      group: "CHAT"
    }, {
      description: V.intl.string(V.t.wxQFsl),
      binds: Y(G.IWg.CREATE_DM_GROUP),
      group: "CHAT"
    }, {
      description: V.intl.string(V.t["C+XV7f"]),
      binds: Y(G.IWg.TOGGLE_CHANNEL_PINS),
      group: "CHAT"
    }, {
      description: V.intl.string(V.t["Q+YV/T"]),
      binds: Y(G.IWg.TOGGLE_INBOX),
      group: "CHAT"
    }, {
      description: V.intl.string(V.t["YEjV+W"]),
      binds: Y(G.IWg.MARK_TOP_INBOX_CHANNEL_READ),
      group: "CHAT"
    }, {
      description: V.intl.string(V.t.AcBI9S),
      binds: Y(G.IWg.TOGGLE_USERS),
      group: "CHAT"
    }, {
      description: V.intl.string(V.t.JoxNnl),
      binds: Y(G.IWg.SEARCH_EMOJIS),
      group: "CHAT"
    }, {
      description: V.intl.string(V.t["3PHxo8"]),
      binds: Y(G.IWg.SEARCH_GIFS),
      group: "CHAT"
    }, {
      description: V.intl.string(V.t.YFl7eb),
      binds: Y(G.IWg.SEARCH_STICKERS),
      group: "CHAT"
    }, {
      description: V.intl.string(V.t.L3RYYJ),
      binds: Y(G.IWg.SCROLL_UP, G.IWg.SCROLL_DOWN),
      group: "CHAT"
    }, {
      description: V.intl.string(V.t["3HAurM"]),
      binds: Y(G.IWg.JUMP_TO_FIRST_UNREAD),
      group: "CHAT"
    }, {
      description: V.intl.string(V.t.rrYBEu),
      binds: Y(G.IWg.TEXTAREA_FOCUS),
      group: "CHAT"
    }, {
      description: V.intl.string(V.t.sUJlPL),
      binds: Y(G.IWg.UPLOAD_FILE),
      group: "CHAT",
      groupEnd: true
    }, {
      description: V.intl.string(V.t.tL6eVW),
      binds: Y(G.IWg.TOGGLE_MUTE),
      group: "VOICE_AND_VIDEO"
    }, {
      description: V.intl.string(V.t["QXe/7T"]),
      binds: Y(G.IWg.TOGGLE_DEAFEN),
      group: "VOICE_AND_VIDEO"
    }, {
      description: V.intl.string(V.t.d6UIii),
      binds: Y(G.IWg.CALL_ACCEPT),
      group: "VOICE_AND_VIDEO"
    }, {
      description: V.intl.string(V.t.IcEW06),
      binds: Y(G.IWg.MARK_CHANNEL_READ),
      group: "VOICE_AND_VIDEO"
    }, {
      description: V.intl.string(V.t.WN2dsS),
      binds: Y(G.IWg.CALL_START),
      group: "VOICE_AND_VIDEO",
      groupEnd: true
    }, {
      description: V.intl.string(V.t.rUK0kk),
      binds: Y(G.IWg.SEARCH_SOUNDBOARD),
      group: "VOICE_AND_VIDEO"
    }, {
      description: V.intl.string(V.t.vkGkSn),
      binds: Y(G.IWg.TOGGLE_HELP),
      group: "MISCELLANEOUS"
    }, {
      description: V.intl.string(V.t.FJvZ87),
      binds: Y(G.IWg.FOCUS_SEARCH),
      group: "MISCELLANEOUS"
    }, {
      description: V.intl.string(V.t["FiWl/T"]),
      binds: Y(G.IWg.OPEN_CONTEXT_MENU),
      group: "MISCELLANEOUS"
    }, {
      description: V.intl.string(V.t.HnNtEI),
      binds: ["h+h+right+n+k"],
      group: "MISCELLANEOUS",
      groupEnd: true
    }, {
      description: V.intl.string(V.t.fsBWmS),
      binds: ["e"],
      group: "MESSAGE"
    }, {
      description: V.intl.string(V.t.xwMqD7),
      binds: ["backspace"],
      group: "MESSAGE"
    }, {
      description: V.intl.string(V.t.CvQ18w),
      binds: ["p"],
      group: "MESSAGE"
    }, {
      description: V.intl.string(V.t.lfIHs4),
      binds: ["plus"],
      group: "MESSAGE"
    }, {
      description: V.intl.string(V.t["5IEsGx"]),
      binds: ["r"],
      group: "MESSAGE"
    }, {
      description: V.intl.string(V.t.zSyDdA),
      binds: ["f"],
      group: "MESSAGE"
    }, {
      description: V.intl.string(V.t.yGLjXF),
      binds: ["s"],
      group: "MESSAGE"
    }, {
      description: V.intl.string(V.t.JrGD7E),
      binds: ["mod+c"],
      group: "MESSAGE"
    }, {
      description: V.intl.string(V.t.RpE9k7),
      binds: ["alt+enter"],
      group: "MESSAGE"
    }, {
      description: V.intl.string(V.t.rrYBEu),
      binds: ["escape"],
      group: "MESSAGE",
      groupEnd: true
    }, {
      description: V.intl.string(V.t.z9c6mt),
      binds: Y(G.IWg.VIBE_WITH_WUMPUS),
      group: "MISCELLANEOUS"
    }],
    {
      enabled: t,
      inInbox: n
    } = r.A.getCurrentConfig({
      location: "keybinds"
    }, {
      autoTrackExposure: false
    });
  return t && !n && e.push({
    description: V.intl.string(V.t.IWNSoH),
    binds: Y(G.IWg.TOGGLE_FOR_LATER),
    group: "CHAT"
  }), e
}
let z = W