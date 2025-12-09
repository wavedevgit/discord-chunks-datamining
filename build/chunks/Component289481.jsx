/** Chunk was on 64271 **/
/** chunk id: 289481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk205120 = require("./205120.js"),
  Chunk893999 = require("./893999.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45114 = require("./45114.js"),
  Chunk367907 = require("./367907.js"),
  Chunk703656 = require("./703656.js"),
  Chunk592125 = require("./592125.js"),
  Chunk617379 = require("./617379.jsx"),
  Chunk324081 = require("./324081.jsx"),
  Chunk305248 = require("./305248.jsx"),
  Chunk520116 = require("./520116.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk550116 = require("./550116.js");

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let x = Chunk473749.memo(function(e) {
    let {
      channel: t,
      deleteChannel: n
    } = e, o = i.useRef(null), [
      [a, s], u
    ] = i.useState([0, 0]), d = t.deleted && a > 0;
    if (t.deleted && 0 === a && null != o.current) {
      let e = o.current.offsetHeight,
        t = o.current.offsetTop,
        n = o.current.parentElement.scrollTop,
        r = n > t ? e - (n - t) : e;
      u([e, e - r])
    }
    let {
      opacity: f,
      size: h
    } = (0, c.q_F)({
      config: {
        clamp: true,
        friction: 18,
        tension: 200
      },
      opacity: +!d,
      size: +!d,
      onRest: () => {
        n(t.channelId)
      }
    }, "animate-always"), p = {
      opacity: f,
      height: h.to(e => {
        var t, n;
        return d ? (t = a, (n = s) + (t - n) * e) : "auto"
      })
    };
    return (0, r.jsx)(l.animated.div, {
      ref: o,
      style: p,
      children: (0, r.jsx)(C, j({}, e))
    })
  }),
  C = Chunk473749.memo(function(e) {
    let {
      channel: t,
      onJump: n,
      deleteChannel: l,
      toggle: o
    } = e, s = (0, a.e7)([p.Z], () => p.Z.getChannel(t.channelId));
    if (i.useEffect(() => {
        null == s || !t.isFullyLoaded || t.hasError || t.collapsed || "messages" !== t.type || 0 !== t.messages.length || u.Z.wait(() => {
          (0, d.ack)(t.channelId, {
            section: y.jXE.INBOX,
            object: y.qAy.ACK_INBOX_CHANNEL_NO_MESSAGES,
            objectType: y.AnalyticsObjectTypes.ACK_AUTOMATIC
          }, true), l(t.channelId)
        })
      }), null == s || !t.hasLoadedAnything) return null;
    let O = (e, r) => {
      (0, f.yw)(y.rMx.INBOX_CHANNEL_CLICKED, {
        channel_id: t.channelId,
        guild_id: t.guildId
      });
      let i = null != r ? r : t.oldestUnreadMessageId;
      (0, h.uL)(y.Z5c.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : i)), n(e)
    };
    return (0, r.jsx)("div", {
      className: v.channel,
      children: (0, r.jsx)(c.y5t, {
        component: (0, r.jsx)(m.Z, {
          channel: s,
          gotoChannel: O,
          mentionCount: t.mentionCount,
          toggleCollapsed: o,
          showCollapseButton: true,
          channelState: t,
          getNumUnreadChannels: e.getNumUnreadChannels,
          children: (0, r.jsxs)(c.ButtonGroup, {
            size: "sm",
            className: v.buttonGroup,
            children: [(0, r.jsx)(g.Z, {
              channel: s
            }), (0, r.jsx)(E, j({}, e))]
          })
        }),
        children: t.collapsed ? null : "messages" === t.type ? (0, r.jsx)(_.Z, {
          channel: t,
          channelRecord: s,
          gotoChannel: O
        }) : "forum" === t.type ? (0, r.jsx)(b.Z, {
          channel: t,
          channelRecord: s,
          deleteChannel: l
        }) : null
      })
    })
  });

function E(e) {
  let {
    channel: t,
    markChannelRead: n,
    markGuildRead: i,
    getNumUnreadChannels: l
  } = e, a = (0, o.Z)() && null != t.guildId;
  return (0, r.jsx)(s.u, {
    text: a ? O.intl.string(O.t["5lLMhM"]) : O.intl.string(O.t.e6RscS),
    children: (0, r.jsx)(c.hU, {
      variant: "secondary",
      "aria-label": a ? O.intl.string(O.t["5lLMhM"]) : O.intl.string(O.t.e6RscS),
      size: "sm",
      icon: a ? c.W6s : c.dz2,
      onClick: function() {
        a && null != t.guildId ? i(t.guildId) : n(t), (0, f.yw)(y.rMx.INBOX_CHANNEL_ACKED, {
          channel_id: t.channelId,
          guild_id: t.guildId,
          marked_all_channels_as_read: false,
          num_unread_channels_remaining: l() - 1
        })
      }
    })
  })
}