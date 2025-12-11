/** Chunk was on web.js **/
/** chunk id: 612226, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q2: () => Z,
  Rv: () => Y,
  U6: () => B,
  UD: () => F,
  ZP: () => W,
  oT: () => H
}), require("./415506.js"), require("./539854.js");
var Chunk2818 = require("./2818.js"),
  Chunk186070 = require("./186070.js"),
  Chunk185514 = require("./185514.js"),
  Chunk395878 = require("./395878.js"),
  Chunk321697 = require("./321697.js"),
  Chunk775774 = require("./775774.js"),
  Chunk570408 = require("./570408.js"),
  Chunk438846 = require("./438846.js"),
  Chunk360038 = require("./360038.js"),
  Chunk175724 = require("./175724.js"),
  Chunk705371 = require("./705371.js"),
  Chunk138976 = require("./138976.js"),
  Chunk296805 = require("./296805.js"),
  Chunk561716 = require("./561716.js"),
  Chunk239748 = require("./239748.js"),
  Chunk337482 = require("./337482.js"),
  Chunk679080 = require("./679080.js"),
  Chunk777019 = require("./777019.js"),
  Chunk523147 = require("./523147.js"),
  Chunk400332 = require("./400332.js"),
  Chunk510761 = require("./510761.js"),
  Chunk189509 = require("./189509.js"),
  Chunk886077 = require("./886077.js"),
  Chunk280492 = require("./280492.js"),
  Chunk746887 = require("./746887.js"),
  Chunk861007 = require("./861007.js"),
  Chunk89028 = require("./89028.js"),
  Chunk300644 = require("./300644.js"),
  Chunk721383 = require("./721383.js"),
  Chunk207234 = require("./207234.js"),
  Chunk997292 = require("./997292.js"),
  Chunk743810 = require("./743810.js"),
  Chunk620212 = require("./620212.js"),
  Chunk188051 = require("./188051.js"),
  Chunk547420 = require("./547420.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Z = function(e) {
    return e.NAVIGATION = "NAVIGATION", e.CHAT = "CHAT", e.VOICE_AND_VIDEO = "VOICE_AND_VIDEO", e.MISCELLANEOUS = "MISCELLANEOUS", e.MESSAGE = "MESSAGE", e.DND = "DND", e
  }({});

function F(e) {
  switch (e) {
    case "NAVIGATION":
      return G.intl.string(G.t["yGE+jg"]);
    case "VOICE_AND_VIDEO":
      return G.intl.string(G.t.bI8F5u);
    case "CHAT":
      return G.intl.string(G.t.hDhbb3);
    case "MISCELLANEOUS":
      return G.intl.string(G.t.cBdwqs);
    case "MESSAGE":
      return G.intl.string(G.t["5fpmX9"]);
    case "DND":
      return G.intl.string(G.t["69j6+4"])
  }
}

function B(e) {
  switch (e) {
    case "MESSAGE":
      return G.intl.string(G.t.iepGDn);
    case "DND":
      return G.intl.string(G.t.LBsB0a);
    default:
      return
  }
}

function V() {
  for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
  return exports.map(e => {
    let t = H[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let H = {
  [Chunk981631.EkH.SERVER_NEXT]: Chunk510761.nq,
  [Chunk981631.EkH.SERVER_PREV]: Chunk510761.X3,
  [Chunk981631.EkH.CHANNEL_NEXT]: Chunk185514.tQ,
  [Chunk981631.EkH.CHANNEL_PREV]: Chunk185514.x5,
  [Chunk981631.EkH.NAVIGATE_BACK]: Chunk185514.Nx,
  [Chunk981631.EkH.NAVIGATE_FORWARD]: Chunk185514.On,
  [Chunk981631.EkH.UNREAD_NEXT]: Chunk743810.pd,
  [Chunk981631.EkH.UNREAD_PREV]: Chunk743810.wk,
  [Chunk981631.EkH.MENTION_CHANNEL_NEXT]: Chunk743810.Nv,
  [Chunk981631.EkH.MENTION_CHANNEL_PREV]: Chunk743810.uX,
  [Chunk981631.EkH.TOGGLE_PREVIOUS_GUILD]: Chunk185514.$c,
  [Chunk981631.EkH.JUMP_TO_GUILD]: Chunk360038.u,
  [Chunk981631.EkH.SUBMIT]: Chunk189509.z,
  [Chunk981631.EkH.TEXTAREA_FOCUS]: Chunk886077.U,
  [Chunk981631.EkH.MARK_CHANNEL_READ]: Chunk175724.f,
  [Chunk981631.EkH.MARK_SERVER_READ]: Chunk705371.l,
  [Chunk981631.EkH.TOGGLE_CHANNEL_PINS]: Chunk861007.u,
  [Chunk981631.EkH.TOGGLE_FOR_LATER]: Chunk89028.f,
  [Chunk981631.EkH.TOGGLE_INBOX]: Chunk207234.a,
  [Chunk981631.EkH.MARK_TOP_INBOX_CHANNEL_READ]: Chunk207234.M,
  [Chunk981631.EkH.TOGGLE_USERS]: Chunk997292.r,
  [Chunk981631.EkH.TOGGLE_HELP]: Chunk300644.O,
  [Chunk981631.EkH.VIBE_WITH_WUMPUS]: Chunk188051.w,
  [Chunk981631.EkH.TOGGLE_MUTE]: Chunk280492.iN,
  [Chunk981631.EkH.TOGGLE_DEAFEN]: Chunk280492.oV,
  [Chunk981631.EkH.TOGGLE_CATEGORY_COLLAPSED]: Chunk746887.u,
  [Chunk981631.EkH.SEARCH_SOUNDBOARD]: Chunk523147.Z,
  [Chunk981631.EkH.SCROLL_UP]: Chunk337482.B2,
  [Chunk981631.EkH.SCROLL_DOWN]: Chunk337482.gN,
  [Chunk981631.EkH.QUICKSWITCHER_SHOW]: Chunk561716.$,
  [Chunk981631.EkH.CREATE_DM_GROUP]: Chunk395878.K,
  [Chunk981631.EkH.SEARCH_EMOJIS]: Chunk679080.S,
  [Chunk981631.EkH.SEARCH_GIFS]: Chunk777019.O,
  [Chunk981631.EkH.SEARCH_STICKERS]: Chunk400332.U,
  [Chunk981631.EkH.TOGGLE_HOTKEYS]: Chunk721383._,
  [Chunk981631.EkH.JUMP_TO_FIRST_UNREAD]: Chunk138976.O,
  [Chunk981631.EkH.CREATE_GUILD]: Chunk321697.r,
  [Chunk981631.EkH.UPLOAD_FILE]: Chunk620212.U,
  [Chunk981631.EkH.RETURN_TO_AUDIO_CHANNEL]: Chunk239748.F,
  [Chunk981631.EkH.CALL_ACCEPT]: Chunk186070.IL,
  [Chunk981631.EkH.CALL_START]: Chunk186070.FI,
  [Chunk981631.EkH.FOCUS_SEARCH]: Chunk570408.I,
  [Chunk981631.EkH.JUMP_TO_CURRENT_CALL]: Chunk438846.K,
  [Chunk981631.EkH.ZOOM_IN]: Chunk547420.UF,
  [Chunk981631.EkH.ZOOM_OUT]: Chunk547420.RC,
  [Chunk981631.EkH.ZOOM_RESET]: Chunk547420.MY,
  [Chunk981631.EkH.OPEN_APP_DIRECTORY]: Chunk296805.T,
  [Chunk981631.EkH.BROWSER_DEVTOOLS]: Chunk775774.p
};

function Y() {
  let e = [{
      description: Chunk388032.intl.string(Chunk388032.t.bx4Uyz),
      binds: V(Chunk981631.EkH.SERVER_PREV, Chunk981631.EkH.SERVER_NEXT),
      group: "NAVIGATION"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t["+Wem6h"]),
      binds: V(Chunk981631.EkH.CHANNEL_PREV, Chunk981631.EkH.CHANNEL_NEXT),
      group: "NAVIGATION"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t["+2fcdz"]),
      binds: V(Chunk981631.EkH.NAVIGATE_BACK, Chunk981631.EkH.NAVIGATE_FORWARD),
      group: "NAVIGATION"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.eVmj1H),
      binds: V(Chunk981631.EkH.UNREAD_PREV, Chunk981631.EkH.UNREAD_NEXT),
      group: "NAVIGATION"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.EcqS7Y),
      binds: V(Chunk981631.EkH.MENTION_CHANNEL_PREV, Chunk981631.EkH.MENTION_CHANNEL_NEXT),
      group: "NAVIGATION"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t["4I3pwW"]),
      binds: V(Chunk981631.EkH.JUMP_TO_CURRENT_CALL),
      group: "NAVIGATION"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.Bqss72),
      binds: V(Chunk981631.EkH.TOGGLE_PREVIOUS_GUILD),
      group: "NAVIGATION"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.yYsRlD),
      binds: V(Chunk981631.EkH.QUICKSWITCHER_SHOW),
      group: "NAVIGATION"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.O7ouXO),
      binds: V(Chunk981631.EkH.CREATE_GUILD),
      group: "NAVIGATION",
      groupEnd: true
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.Lns0Fc),
      binds: ["mod+d"],
      group: "DND"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.dmMqay),
      binds: ["up", "down"],
      group: "DND"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t["cs/HVH"]),
      binds: ["spacebar", "enter"],
      group: "DND"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t["1ioMJQ"]),
      binds: ["esc"],
      group: "DND",
      groupEnd: true
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.UaXAPx),
      binds: V(Chunk981631.EkH.MARK_SERVER_READ),
      group: "CHAT"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t["5X9vFj"]),
      binds: V(Chunk981631.EkH.MARK_CHANNEL_READ),
      group: "CHAT"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.wxQFsl),
      binds: V(Chunk981631.EkH.CREATE_DM_GROUP),
      group: "CHAT"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t["C+XV7f"]),
      binds: V(Chunk981631.EkH.TOGGLE_CHANNEL_PINS),
      group: "CHAT"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t["Q+YV/T"]),
      binds: V(Chunk981631.EkH.TOGGLE_INBOX),
      group: "CHAT"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t["YEjV+W"]),
      binds: V(Chunk981631.EkH.MARK_TOP_INBOX_CHANNEL_READ),
      group: "CHAT"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.AcBI9S),
      binds: V(Chunk981631.EkH.TOGGLE_USERS),
      group: "CHAT"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.JoxNnl),
      binds: V(Chunk981631.EkH.SEARCH_EMOJIS),
      group: "CHAT"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t["3PHxo8"]),
      binds: V(Chunk981631.EkH.SEARCH_GIFS),
      group: "CHAT"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.YFl7eb),
      binds: V(Chunk981631.EkH.SEARCH_STICKERS),
      group: "CHAT"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.L3RYYJ),
      binds: V(Chunk981631.EkH.SCROLL_UP, Chunk981631.EkH.SCROLL_DOWN),
      group: "CHAT"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t["3HAurM"]),
      binds: V(Chunk981631.EkH.JUMP_TO_FIRST_UNREAD),
      group: "CHAT"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.rrYBEu),
      binds: V(Chunk981631.EkH.TEXTAREA_FOCUS),
      group: "CHAT"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.sUJlPL),
      binds: V(Chunk981631.EkH.UPLOAD_FILE),
      group: "CHAT",
      groupEnd: true
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.tL6eVW),
      binds: V(Chunk981631.EkH.TOGGLE_MUTE),
      group: "VOICE_AND_VIDEO"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t["QXe/7T"]),
      binds: V(Chunk981631.EkH.TOGGLE_DEAFEN),
      group: "VOICE_AND_VIDEO"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.d6UIii),
      binds: V(Chunk981631.EkH.CALL_ACCEPT),
      group: "VOICE_AND_VIDEO"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.IcEW06),
      binds: V(Chunk981631.EkH.MARK_CHANNEL_READ),
      group: "VOICE_AND_VIDEO"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.WN2dsS),
      binds: V(Chunk981631.EkH.CALL_START),
      group: "VOICE_AND_VIDEO",
      groupEnd: true
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.rUK0kk),
      binds: V(Chunk981631.EkH.SEARCH_SOUNDBOARD),
      group: "VOICE_AND_VIDEO"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.vkGkSn),
      binds: V(Chunk981631.EkH.TOGGLE_HELP),
      group: "MISCELLANEOUS"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.FJvZ87),
      binds: V(Chunk981631.EkH.FOCUS_SEARCH),
      group: "MISCELLANEOUS"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.HnNtEI),
      binds: ["h+h+right+n+k"],
      group: "MISCELLANEOUS",
      groupEnd: true
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.fsBWmS),
      binds: ["e"],
      group: "MESSAGE"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.xwMqD7),
      binds: ["backspace"],
      group: "MESSAGE"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.CvQ18w),
      binds: ["p"],
      group: "MESSAGE"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.lfIHs4),
      binds: ["plus"],
      group: "MESSAGE"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t["5IEsGx"]),
      binds: ["r"],
      group: "MESSAGE"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.zSyDdA),
      binds: ["f"],
      group: "MESSAGE"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.JrGD7E),
      binds: ["mod+c"],
      group: "MESSAGE"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.RpE9k7),
      binds: ["alt+enter"],
      group: "MESSAGE"
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.rrYBEu),
      binds: ["escape"],
      group: "MESSAGE",
      groupEnd: true
    }, {
      description: Chunk388032.intl.string(Chunk388032.t.z9c6mt),
      binds: V(Chunk981631.EkH.VIBE_WITH_WUMPUS),
      group: "MISCELLANEOUS"
    }],
    {
      enabled: t,
      inInbox: n
    } = Chunk2818.Z.getCurrentConfig({
      location: "keybinds"
    }, {
      autoTrackExposure: false
    });
  return exports && !require && module.push({
    description: Chunk388032.intl.string(Chunk388032.t.IWNSoH),
    binds: V(Chunk981631.EkH.TOGGLE_FOR_LATER),
    group: "CHAT"
  }), module
}
let W = H