/** Chunk was on 97492 **/
/** chunk id: 444529, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./938796.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk665260 = require("./665260.js"),
  Chunk143413 = require("./143413.js"),
  Chunk907495 = require("./907495.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk119907 = require("./119907.js");

function c(e) {
  let {
    setPopout: t,
    messagePopouts: {
      emojiPicker: n,
      emojiBurstPicker: c,
      moreUtilities: u
    },
    isFocused: d,
    buttonProps: {
      message: f,
      channel: p,
      groupId: h,
      compact: b = false
    },
    messageWindow: g
  } = e, m = f.state === s.cmJ.SENDING, A = f.id === h, y = (0, l.Lt)(f.flags, s.pr7.EPHEMERAL), O = f.state === s.cmJ.SEND_FAILED;
  return m || y && !O ? null : (0, r.jsx)(a.A, {
    className: o.Uo,
    innerClassName: o.Mc,
    isHeader: !b && A && !(0, i.A)(f),
    isReply: !b && f.type === s.lAJ.REPLY && null != f.messageReference,
    channel: p,
    message: f,
    messageWindow: g,
    setPopout: t,
    showEmojiPicker: n,
    showEmojiBurstPicker: c,
    showMoreUtilities: u,
    isFocused: d
  })
}