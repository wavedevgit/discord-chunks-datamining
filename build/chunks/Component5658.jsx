/** Chunk was on 67564 **/
/** chunk id: 5658, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk108531 = require("./108531.js"),
  Chunk311283 = require("./311283.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk334738 = require("./334738.js"),
  Chunk58149 = require("./58149.js"),
  Chunk976860 = require("./976860.js"),
  Chunk734057 = require("./734057.js"),
  Chunk510560 = require("./510560.jsx"),
  Chunk572448 = require("./572448.jsx"),
  Chunk955454 = require("./955454.jsx"),
  Chunk502754 = require("./502754.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk391900 = require("./391900.js");

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
let v = Chunk64700.memo(function(e) {
    let {
      channel: t,
      deleteChannel: n
    } = e, s = l.useRef(null), [
      [a, o], u
    ] = l.useState([0, 0]), d = t.deleted && a > 0;
    if (t.deleted && 0 === a && null != s.current) {
      let e = s.current.offsetHeight,
        t = s.current.offsetTop,
        n = s.current.parentElement.scrollTop,
        r = n > t ? e - (n - t) : e;
      u([e, e - r])
    }
    let {
      opacity: p,
      size: h
    } = (0, c.zhh)({
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
    }, "animate-always"), f = {
      opacity: p,
      height: h.to(e => {
        var t, n;
        return d ? (t = a, (n = o) + (t - n) * e) : "auto"
      })
    };
    return (0, r.jsx)(i.animated.div, {
      ref: s,
      style: f,
      children: (0, r.jsx)(x, j({}, e))
    })
  }),
  x = Chunk64700.memo(function(e) {
    let {
      channel: t,
      onJump: n,
      deleteChannel: i,
      toggle: s
    } = e, o = (0, a.bG)([f.A], () => f.A.getChannel(t.channelId));
    if (l.useEffect(() => {
        null == o || !t.isFullyLoaded || t.hasError || t.collapsed || "messages" !== t.type || 0 !== t.messages.length || u.h.wait(() => {
          (0, d.ack)(t.channelId, {
            section: y.JJy.INBOX,
            object: y.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
            objectType: y.AnalyticsObjectTypes.ACK_AUTOMATIC
          }, true), i(t.channelId)
        })
      }), null == o || !t.hasLoadedAnything) return null;
    let _ = (e, r) => {
      (0, p.zV)(y.HAw.INBOX_CHANNEL_CLICKED, {
        channel_id: t.channelId,
        guild_id: t.guildId
      });
      let l = null != r ? r : t.oldestUnreadMessageId;
      (0, h.pX)(y.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : l)), n(e)
    };
    return (0, r.jsx)("div", {
      className: O.Ix,
      children: (0, r.jsx)(c.Fmo, {
        component: (0, r.jsx)(m.A, {
          channel: o,
          gotoChannel: _,
          mentionCount: t.mentionCount,
          toggleCollapsed: s,
          showCollapseButton: true,
          channelState: t,
          getNumUnreadChannels: e.getNumUnreadChannels,
          children: (0, r.jsxs)(c.ButtonGroup, {
            size: "sm",
            className: O.GC,
            children: [(0, r.jsx)(g.A, {
              channel: o
            }), (0, r.jsx)(E, j({}, e))]
          })
        }),
        children: t.collapsed ? null : "messages" === t.type ? (0, r.jsx)(A.A, {
          channel: t,
          channelRecord: o,
          gotoChannel: _
        }) : "forum" === t.type ? (0, r.jsx)(b.A, {
          channel: t,
          channelRecord: o,
          deleteChannel: i
        }) : null
      })
    })
  });

function E(e) {
  let {
    channel: t,
    markChannelRead: n,
    markGuildRead: l,
    getNumUnreadChannels: i
  } = e, a = (0, s.A)() && null != t.guildId;
  return (0, r.jsx)(o.m_, {
    text: a ? _.intl.string(_.t["5lLMhM"]) : _.intl.string(_.t.e6RscS),
    children: (0, r.jsx)(c.K0, {
      variant: "secondary",
      "aria-label": a ? _.intl.string(_.t["5lLMhM"]) : _.intl.string(_.t.e6RscS),
      size: "sm",
      icon: a ? c.iA$ : c.A9s,
      onClick: function() {
        a && null != t.guildId ? l(t.guildId) : n(t), (0, p.zV)(y.HAw.INBOX_CHANNEL_ACKED, {
          channel_id: t.channelId,
          guild_id: t.guildId,
          marked_all_channels_as_read: false,
          num_unread_channels_remaining: i() - 1
        })
      }
    })
  })
}