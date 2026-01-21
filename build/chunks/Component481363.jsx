/** Chunk was on 82124 **/
/** chunk id: 481363, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./997841.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk95015 = require("./95015.js"),
  Chunk901461 = require("./901461.js"),
  Chunk773176 = require("./773176.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk548498 = require("./548498.js");

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
      channel: f,
      groupId: h,
      compact: g = false
    },
    messageWindow: m
  } = e, b = p.state === o.yb.SENDING, y = p.id === h, v = (0, i.yE)(p.flags, o.iLy.EPHEMERAL), O = p.state === o.yb.SEND_FAILED;
  return b || v && !O ? null : (0, r.jsx)(a.Z, {
    className: s.buttons,
    innerClassName: s.buttonsInner,
    isHeader: !g && y && !(0, l.Z)(p),
    isReply: !g && p.type === o.uaV.REPLY && null != p.messageReference,
    channel: f,
    message: p,
    messageWindow: m,
    setPopout: t,
    showEmojiPicker: n,
    showEmojiBurstPicker: c,
    showMoreUtilities: u,
    isFocused: d
  })
}