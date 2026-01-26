/** Chunk was on 67564 **/
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
      message: p,
      channel: h,
      groupId: f,
      compact: g = false
    },
    messageWindow: m
  } = e, b = p.state === a.cmJ.SENDING, A = p.id === f, y = (0, l.Lt)(p.flags, a.pr7.EPHEMERAL), _ = p.state === a.cmJ.SEND_FAILED;
  return b || y && !_ ? null : (0, r.jsx)(s.A, {
    className: o.Uo,
    innerClassName: o.Mc,
    isHeader: !g && A && !(0, i.A)(p),
    isReply: !g && p.type === a.lAJ.REPLY && null != p.messageReference,
    channel: h,
    message: p,
    messageWindow: m,
    setPopout: t,
    showEmojiPicker: n,
    showEmojiBurstPicker: c,
    showMoreUtilities: u,
    isFocused: d
  })
}