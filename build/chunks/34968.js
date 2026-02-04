/** Chunk was on 44669 **/
/** chunk id: 34968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CJ: () => x,
  dY: () => v,
  y8: () => E
}), require("./65821.js");
var Chunk774603 = require("./774603.js"),
  Chunk430086 = require("./430086.js"),
  Chunk64460 = require("./64460.js"),
  Chunk92960 = require("./92960.js"),
  Chunk739008 = require("./739008.js"),
  Chunk314519 = require("./314519.js"),
  Chunk967497 = require("./967497.js"),
  Chunk806964 = require("./806964.js"),
  Chunk552049 = require("./552049.js"),
  Chunk877991 = require("./877991.js"),
  Chunk904828 = require("./904828.js"),
  Chunk251494 = require("./251494.js"),
  Chunk82038 = require("./82038.js"),
  Chunk14214 = require("./14214.js"),
  Chunk151199 = require("./151199.js"),
  Chunk512513 = require("./512513.js"),
  Chunk801796 = require("./801796.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function _() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = x[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let x = {
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
    [Chunk652215.IWg.TOGGLE_MUTE]: Chunk14214.VT,
    [Chunk652215.IWg.TOGGLE_DEAFEN]: Chunk14214.rR,
    [Chunk652215.IWg.TOGGLE_CATEGORY_COLLAPSED]: Chunk151199.y,
    [Chunk652215.IWg.SCROLL_UP]: Chunk552049.U5,
    [Chunk652215.IWg.SCROLL_DOWN]: Chunk552049.fz,
    [Chunk652215.IWg.SEARCH_EMOJIS]: Chunk877991.L,
    [Chunk652215.IWg.TOGGLE_HOTKEYS]: Chunk512513.z,
    [Chunk652215.IWg.JUMP_TO_FIRST_UNREAD]: Chunk314519.s,
    [Chunk652215.IWg.RETURN_TO_AUDIO_CHANNEL]: Chunk806964.u,
    [Chunk652215.IWg.CALL_ACCEPT]: Chunk774603.Yo,
    [Chunk652215.IWg.CALL_START]: Chunk774603.OX,
    [Chunk652215.IWg.QUICKSWITCHER_SHOW]: Chunk967497.R
  },
  v = {
    [Chunk652215.IWg.QUICKSWITCHER_SHOW]: Chunk967497.R
  };

function E() {
  return [{
    description: j.intl.string(j.t.bx4Uyz),
    binds: _(O.IWg.SERVER_PREV, O.IWg.SERVER_NEXT)
  }, {
    description: j.intl.string(j.t["+Wem6h"]),
    binds: _(O.IWg.CHANNEL_PREV, O.IWg.CHANNEL_NEXT)
  }, {
    description: j.intl.string(j.t["+2fcdz"]),
    binds: _(O.IWg.NAVIGATE_BACK, O.IWg.NAVIGATE_FORWARD)
  }, {
    description: j.intl.string(j.t.eVmj1H),
    binds: _(O.IWg.UNREAD_PREV, O.IWg.UNREAD_NEXT)
  }, {
    description: j.intl.string(j.t.EcqS7Y),
    binds: _(O.IWg.MENTION_CHANNEL_PREV, O.IWg.MENTION_CHANNEL_NEXT),
    groupEnd: true
  }, {
    description: j.intl.string(j.t.Bqss72),
    binds: _(O.IWg.TOGGLE_PREVIOUS_GUILD)
  }, {
    description: j.intl.string(j.t.UaXAPx),
    binds: _(O.IWg.MARK_SERVER_READ)
  }, {
    description: j.intl.string(j.t["5X9vFj"]),
    binds: _(O.IWg.MARK_CHANNEL_READ)
  }, {
    description: j.intl.string(j.t.JoxNnl),
    binds: _(O.IWg.SEARCH_EMOJIS),
    groupEnd: true
  }, {
    description: j.intl.string(j.t.tL6eVW),
    binds: _(O.IWg.TOGGLE_MUTE)
  }, {
    description: j.intl.string(j.t["QXe/7T"]),
    binds: _(O.IWg.TOGGLE_DEAFEN)
  }, {
    description: j.intl.string(j.t.d6UIii),
    binds: _(O.IWg.CALL_ACCEPT)
  }, {
    description: j.intl.string(j.t.IcEW06),
    binds: _(O.IWg.MARK_CHANNEL_READ)
  }, {
    description: j.intl.string(j.t.WN2dsS),
    binds: _(O.IWg.CALL_START),
    groupEnd: true
  }, {
    description: j.intl.string(j.t.L3RYYJ),
    binds: _(O.IWg.SCROLL_UP, O.IWg.SCROLL_DOWN)
  }, {
    description: j.intl.string(j.t["3HAurM"]),
    binds: _(O.IWg.JUMP_TO_FIRST_UNREAD)
  }, {
    description: j.intl.string(j.t.rrYBEu),
    binds: _(O.IWg.TEXTAREA_FOCUS)
  }, {
    description: j.intl.string(j.t.yYsRlD),
    binds: _(O.IWg.QUICKSWITCHER_SHOW)
  }]
}