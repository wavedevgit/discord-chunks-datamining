/** Chunk was on 71264 **/
/** chunk id: 481363, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./997841.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk630388 = require("./630388.js"),
  Chunk901461 = require("./901461.js"),
  Chunk773176 = require("./773176.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk5898 = require("./5898.js");

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
      compact: m = false
    },
    messageWindow: g
  } = e, b = p.state === o.yb.SENDING, y = p.id === f, C = (0, r.yE)(p.flags, o.iLy.EPHEMERAL), v = p.state === o.yb.SEND_FAILED;
  return b || C && !v ? null : (0, i.jsx)(a.Z, {
    className: s.buttons,
    innerClassName: s.buttonsInner,
    isHeader: !m && y && !(0, l.Z)(p),
    isReply: !m && p.type === o.uaV.REPLY && null != p.messageReference,
    channel: h,
    message: p,
    messageWindow: g,
    setPopout: t,
    showEmojiPicker: n,
    showEmojiBurstPicker: c,
    showMoreUtilities: u,
    isFocused: d
  })
}