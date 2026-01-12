/** Chunk was on web.js **/
/** chunk id: 883998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk907040 = require("./907040.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js");
let c = {
    section: Chunk981631.jXE.MESSAGE_CONFETTI_EMOJI_PICKER_POPOUT,
    openPopoutType: "message_confetti_emoji_picker"
  },
  u = Chunk185923.Hz.MESSAGE_CONFETTI;

function d(e) {
  let {
    channel: t,
    setEmojiConfetti: n,
    shouldShow: s,
    onRequestClose: l,
    position: d,
    align: f,
    positionRef: p,
    children: _
  } = e, m = i.useCallback(e => {
    let {
      emoji: t
    } = e;
    null != t && (n(t), l())
  }, [l, n]);
  return (0, r.jsx)(a.yRy, {
    shouldShow: s,
    position: d,
    targetElementRef: p,
    align: f,
    onRequestClose: l,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(o.Z, {
        analyticsOverride: c,
        channel: t,
        closePopout: n,
        onSelectEmoji: m,
        pickerIntention: u
      })
    },
    children: _
  })
}