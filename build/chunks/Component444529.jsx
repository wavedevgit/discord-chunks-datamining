/** Chunk was on 17869 **/
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
      groupId: f,
      compact: m = false
    },
    messageWindow: g
  } = e, A = h.state === s.cmJ.SENDING, b = h.id === f, _ = (0, r.Lt)(h.flags, s.pr7.EPHEMERAL), y = h.state === s.cmJ.SEND_FAILED;
  return A || _ && !y ? null : (0, l.jsx)(a.A, {
    className: o.Uo,
    innerClassName: o.Mc,
    isHeader: !m && b && !(0, i.A)(h),
    isReply: !m && h.type === s.lAJ.REPLY && null != h.messageReference,
    channel: p,
    message: h,
    messageWindow: g,
    setPopout: t,
    showEmojiPicker: n,
    showEmojiBurstPicker: c,
    showMoreUtilities: u,
    isFocused: d
  })
}