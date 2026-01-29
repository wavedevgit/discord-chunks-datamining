/** Chunk was on 1113 **/
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
      message: h,
      channel: p,
      groupId: g,
      compact: f = false
    },
    messageWindow: m
  } = e, b = h.state === a.cmJ.SENDING, A = h.id === g, y = (0, l.Lt)(h.flags, a.pr7.EPHEMERAL), O = h.state === a.cmJ.SEND_FAILED;
  return b || y && !O ? null : (0, r.jsx)(s.A, {
    className: o.Uo,
    innerClassName: o.Mc,
    isHeader: !f && A && !(0, i.A)(h),
    isReply: !f && h.type === a.lAJ.REPLY && null != h.messageReference,
    channel: p,
    message: h,
    messageWindow: m,
    setPopout: t,
    showEmojiPicker: n,
    showEmojiBurstPicker: c,
    showMoreUtilities: u,
    isFocused: d
  })
}