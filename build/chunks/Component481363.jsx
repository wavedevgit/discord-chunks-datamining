/** Chunk was on web.js **/
/** chunk id: 481363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./997841.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk630388 = require("./630388.js"),
  Chunk901461 = require("./901461.js"),
  Chunk773176 = require("./773176.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk433869 = require("./433869.js");

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
      channel: _,
      groupId: p,
      compact: h = false
    },
    messageWindow: m
  } = e, g = f.state === s.yb.SENDING, E = f.id === p, b = (0, i.yE)(f.flags, s.iLy.EPHEMERAL), y = f.state === s.yb.SEND_FAILED;
  return g || b && !y ? null : (0, r.jsx)(a.Z, {
    className: l.buttons,
    innerClassName: l.buttonsInner,
    isHeader: !h && E && !(0, o.Z)(f),
    isReply: !h && f.type === s.uaV.REPLY && null != f.messageReference,
    channel: _,
    message: f,
    messageWindow: m,
    setPopout: t,
    showEmojiPicker: n,
    showEmojiBurstPicker: c,
    showMoreUtilities: u,
    isFocused: d
  })
}