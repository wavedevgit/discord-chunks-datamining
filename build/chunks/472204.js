/** Chunk was on 71447 **/
/** chunk id: 472204, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CD: () => h,
  Wn: () => p,
  ZD: () => g,
  j7: () => f
});
var Chunk64700 = require("./64700.js"),
  Chunk956793 = require("./956793.js"),
  Chunk961350 = require("./961350.js"),
  Chunk810412 = require("./810412.js"),
  Chunk145567 = require("./145567.js"),
  Chunk67103 = require("./67103.js"),
  Chunk34307 = require("./34307.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  null != e && (e.preventDefault(), e.stopPropagation())
}

function h(e) {
  let {
    channelId: t,
    isExpanded: n,
    onToggleExpanded: l
  } = e;
  return i.useCallback(e => {
    d(e), (0, a.YX)(c.uss.FRIENDS, {
      type: a.Z5.VOICE,
      value: a.IP.CHANNEL_SELECTED,
      secondaryValue: "voice"
    }), r.default.selectVoiceChannel(t), n || null == l || l(t)
  }, [t, n, l])
}

function p() {
  return i.useCallback(e => {
    d(e), (0, a.YX)(c.uss.FRIENDS, {
      type: a.Z5.CALL_BUTTON,
      value: a.IP.DISABLED,
      secondaryValue: "voice",
      userId: l.default.getId()
    }), r.default.disconnect()
  }, [])
}

function f(e) {
  let {
    channelId: t,
    guildId: n,
    shouldStopEvent: r
  } = e;
  return i.useCallback(e => {
    r && d(e), (0, s.D$)({
      target: {
        kind: s.bB.CHANNEL,
        channelId: t,
        guildId: n,
        messageId: null
      },
      source: u.B.FRIENDS_WIDGET_CLICK,
      widgetType: c.uss.FRIENDS
    })
  }, [t, n, r])
}

function g(e) {
  let {
    userId: t,
    onAction: n,
    closeParentPopout: r
  } = e;
  return i.useCallback(e => {
    d(e), null == n || n(o.x.OPEN_DIRECT_MESSAGE, t), null == r || r()
  }, [r, n, t])
}