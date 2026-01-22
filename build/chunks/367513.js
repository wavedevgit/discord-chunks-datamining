/** Chunk was on web.js **/
/** chunk id: 367513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk73153 = require("./73153.js"),
  Chunk58149 = require("./58149.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = {
  rebuildRTCActiveChannels() {
    r.h.dispatch({
      type: "CHANNEL_RTC_ACTIVE_CHANNELS"
    })
  },
  selectParticipant(e, t) {
    r.h.dispatch({
      type: "CHANNEL_RTC_SELECT_PARTICIPANT",
      channelId: e,
      id: t
    })
  },
  popoutParticipant(e, t) {
    r.h.dispatch({
      type: "CHANNEL_RTC_POPOUT_PARTICIPANT",
      channelId: e,
      participantId: t
    })
  },
  returnParticipant(e, t) {
    r.h.dispatch({
      type: "CHANNEL_RTC_RETURN_PARTICIPANT",
      channelId: e,
      participantId: t
    })
  },
  updateLayout(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : o.BRT.APP;
    a.default.track(o.HAw.VIDEO_LAYOUT_TOGGLED, c({
      video_layout: t
    }, (0, i.QS)(e))), r.h.dispatch({
      type: "CHANNEL_RTC_UPDATE_LAYOUT",
      channelId: e,
      layout: t,
      appContext: n
    })
  },
  toggleParticipants(e, t) {
    r.h.dispatch({
      type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN",
      channelId: e,
      participantsOpen: t
    })
  },
  toggleParticipantsList(e, t) {
    r.h.dispatch({
      type: "CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN",
      channelId: e,
      participantsListOpen: t
    })
  },
  toggleVoiceParticipantsHidden(e, t) {
    r.h.dispatch({
      type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN",
      channelId: e,
      voiceParticipantsHidden: t
    })
  },
  updateStageStreamSize(e, t) {
    r.h.dispatch({
      type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE",
      channelId: e,
      large: t
    })
  },
  updateStageVideoLimitBoostUpsellDismissed(e, t) {
    r.h.dispatch({
      type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED",
      channelId: e,
      dismissed: t
    })
  },
  updateChatOpen(e, t) {
    r.h.dispatch({
      type: "CHANNEL_RTC_UPDATE_CHAT_OPEN",
      channelId: e,
      chatOpen: t
    }), t ? setTimeout(() => {
      s._.dispatch(o.jej.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e
      })
    }, 0) : s._.dispatch(o.jej.FOCUS_CHAT_BUTTON)
  },
  jumpToVoiceChannelMessage(e, t, n, i) {
    r.h.dispatch({
      type: "CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE",
      guildId: e,
      channelId: t,
      messageId: n,
      jumpType: i
    })
  }
}