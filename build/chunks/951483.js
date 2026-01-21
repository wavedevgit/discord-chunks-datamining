/** Chunk was on 82124 **/
/** chunk id: 951483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Sr: () => C,
  Xq: () => E,
  Zg: () => S
}), require("./415506.js");
var Chunk186070 = require("./186070.js"),
  Chunk185514 = require("./185514.js"),
  Chunk360038 = require("./360038.js"),
  Chunk175724 = require("./175724.js"),
  Chunk705371 = require("./705371.js"),
  Chunk138976 = require("./138976.js"),
  Chunk167042 = require("./167042.js"),
  Chunk239748 = require("./239748.js"),
  Chunk337482 = require("./337482.js"),
  Chunk679080 = require("./679080.js"),
  Chunk510761 = require("./510761.js"),
  Chunk189509 = require("./189509.js"),
  Chunk886077 = require("./886077.js"),
  Chunk280492 = require("./280492.js"),
  Chunk746887 = require("./746887.js"),
  Chunk721383 = require("./721383.js"),
  Chunk743810 = require("./743810.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function x() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = C[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let C = {
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
    [Chunk981631.EkH.TOGGLE_MUTE]: Chunk280492.iN,
    [Chunk981631.EkH.TOGGLE_DEAFEN]: Chunk280492.oV,
    [Chunk981631.EkH.TOGGLE_CATEGORY_COLLAPSED]: Chunk746887.u,
    [Chunk981631.EkH.SCROLL_UP]: Chunk337482.B2,
    [Chunk981631.EkH.SCROLL_DOWN]: Chunk337482.gN,
    [Chunk981631.EkH.SEARCH_EMOJIS]: Chunk679080.S,
    [Chunk981631.EkH.TOGGLE_HOTKEYS]: Chunk721383._,
    [Chunk981631.EkH.JUMP_TO_FIRST_UNREAD]: Chunk138976.O,
    [Chunk981631.EkH.RETURN_TO_AUDIO_CHANNEL]: Chunk239748.F,
    [Chunk981631.EkH.CALL_ACCEPT]: Chunk186070.IL,
    [Chunk981631.EkH.CALL_START]: Chunk186070.FI,
    [Chunk981631.EkH.QUICKSWITCHER_SHOW]: Chunk167042.$
  },
  E = {
    [Chunk981631.EkH.QUICKSWITCHER_SHOW]: Chunk167042.$
  };

function S() {
  return [{
    description: j.intl.string(j.t.bx4Uyz),
    binds: x(O.EkH.SERVER_PREV, O.EkH.SERVER_NEXT)
  }, {
    description: j.intl.string(j.t["+Wem6h"]),
    binds: x(O.EkH.CHANNEL_PREV, O.EkH.CHANNEL_NEXT)
  }, {
    description: j.intl.string(j.t["+2fcdz"]),
    binds: x(O.EkH.NAVIGATE_BACK, O.EkH.NAVIGATE_FORWARD)
  }, {
    description: j.intl.string(j.t.eVmj1H),
    binds: x(O.EkH.UNREAD_PREV, O.EkH.UNREAD_NEXT)
  }, {
    description: j.intl.string(j.t.EcqS7Y),
    binds: x(O.EkH.MENTION_CHANNEL_PREV, O.EkH.MENTION_CHANNEL_NEXT),
    groupEnd: true
  }, {
    description: j.intl.string(j.t.Bqss72),
    binds: x(O.EkH.TOGGLE_PREVIOUS_GUILD)
  }, {
    description: j.intl.string(j.t.UaXAPx),
    binds: x(O.EkH.MARK_SERVER_READ)
  }, {
    description: j.intl.string(j.t["5X9vFj"]),
    binds: x(O.EkH.MARK_CHANNEL_READ)
  }, {
    description: j.intl.string(j.t.JoxNnl),
    binds: x(O.EkH.SEARCH_EMOJIS),
    groupEnd: true
  }, {
    description: j.intl.string(j.t.tL6eVW),
    binds: x(O.EkH.TOGGLE_MUTE)
  }, {
    description: j.intl.string(j.t["QXe/7T"]),
    binds: x(O.EkH.TOGGLE_DEAFEN)
  }, {
    description: j.intl.string(j.t.d6UIii),
    binds: x(O.EkH.CALL_ACCEPT)
  }, {
    description: j.intl.string(j.t.IcEW06),
    binds: x(O.EkH.MARK_CHANNEL_READ)
  }, {
    description: j.intl.string(j.t.WN2dsS),
    binds: x(O.EkH.CALL_START),
    groupEnd: true
  }, {
    description: j.intl.string(j.t.L3RYYJ),
    binds: x(O.EkH.SCROLL_UP, O.EkH.SCROLL_DOWN)
  }, {
    description: j.intl.string(j.t["3HAurM"]),
    binds: x(O.EkH.JUMP_TO_FIRST_UNREAD)
  }, {
    description: j.intl.string(j.t.rrYBEu),
    binds: x(O.EkH.TEXTAREA_FOCUS)
  }, {
    description: j.intl.string(j.t.yYsRlD),
    binds: x(O.EkH.QUICKSWITCHER_SHOW)
  }]
}