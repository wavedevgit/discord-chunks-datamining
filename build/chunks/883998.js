/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => d
});
var r = n(200651),
  i = n(192379),
  o = n(481060),
  a = n(907040),
  s = n(981631),
  l = n(185923);
let c = {
    section: s.jXE.MESSAGE_CONFETTI_EMOJI_PICKER_POPOUT,
    openPopoutType: "message_confetti_emoji_picker"
  },
  u = l.Hz.MESSAGE_CONFETTI;

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
  } = e, h = i.useCallback(e => {
    null != e && (n(e), l())
  }, [l, n]);
  return (0, r.jsx)(o.yRy, {
    shouldShow: s,
    position: d,
    overridePositionRef: p,
    align: f,
    onRequestClose: l,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(a.Z, {
        analyticsOverride: c,
        channel: t,
        closePopout: n,
        onSelectEmoji: h,
        pickerIntention: u,
        includeCreateEmojiButton: !1
      })
    },
    children: _
  })
}