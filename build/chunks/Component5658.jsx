/** Chunk was on 97492 **/
/** chunk id: 5658, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk432022 = require("./432022.js"),
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

function v(e) {
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
let x = Chunk64700.memo(function(e) {
    let {
      channel: t,
      deleteChannel: n
    } = e, a = l.useRef(null), [
      [s, o], u
    ] = l.useState([0, 0]), d = t.deleted && s > 0;
    if (t.deleted && 0 === s && null != a.current) {
      let e = a.current.offsetHeight,
        t = a.current.offsetTop,
        n = a.current.parentElement.scrollTop,
        r = n > t ? e - (n - t) : e;
      u([e, e - r])
    }
    let {
      opacity: f,
      size: p
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
    }, "animate-always"), h = {
      opacity: f,
      height: p.to(e => {
        var t, n;
        return d ? (t = s, (n = o) + (t - n) * e) : "auto"
      })
    };
    return (0, r.jsx)(i.animated.div, {
      ref: a,
      style: h,
      children: (0, r.jsx)(E, v({}, e))
    })
  }),
  E = Chunk64700.memo(function(e) {
    let {
      channel: t,
      onJump: n,
      deleteChannel: i,
      toggle: a
    } = e, o = (0, s.bG)([h.A], () => h.A.getChannel(t.channelId));
    if (l.useEffect(() => {
        null == o || !t.isFullyLoaded || t.hasError || t.collapsed || "messages" !== t.type || 0 !== t.messages.length || u.h.wait(() => {
          (0, d.ack)(t.channelId, {
            section: y.JJy.INBOX,
            object: y.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
            objectType: y.AnalyticsObjectTypes.ACK_AUTOMATIC
          }, true), i(t.channelId)
        })
      }), null == o || !t.hasLoadedAnything) return null;
    let O = (e, r) => {
      (0, f.zV)(y.HAw.INBOX_CHANNEL_CLICKED, {
        channel_id: t.channelId,
        guild_id: t.guildId
      });
      let l = null != r ? r : t.oldestUnreadMessageId;
      (0, p.pX)(y.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : l)), n(e)
    };
    return (0, r.jsx)("div", {
      className: j.Ix,
      children: (0, r.jsx)(c.Fmo, {
        component: (0, r.jsx)(g.A, {
          channel: o,
          gotoChannel: O,
          mentionCount: t.mentionCount,
          toggleCollapsed: a,
          showCollapseButton: true,
          channelState: t,
          getNumUnreadChannels: e.getNumUnreadChannels,
          children: (0, r.jsxs)(c.ButtonGroup, {
            size: "sm",
            className: j.GC,
            children: [(0, r.jsx)(b.A, {
              channel: o
            }), (0, r.jsx)(_, v({}, e))]
          })
        }),
        children: t.collapsed ? null : "messages" === t.type ? (0, r.jsx)(A.A, {
          channel: t,
          channelRecord: o,
          gotoChannel: O
        }) : "forum" === t.type ? (0, r.jsx)(m.A, {
          channel: t,
          channelRecord: o,
          deleteChannel: i
        }) : null
      })
    })
  });

function _(e) {
  let {
    channel: t,
    markChannelRead: n,
    markGuildRead: l,
    getNumUnreadChannels: i
  } = e, s = (0, a.A)() && null != t.guildId;
  return (0, r.jsx)(o.m_, {
    text: s ? O.intl.string(O.t["5lLMhM"]) : O.intl.string(O.t.e6RscS),
    children: (0, r.jsx)(c.K0, {
      variant: "secondary",
      "aria-label": s ? O.intl.string(O.t["5lLMhM"]) : O.intl.string(O.t.e6RscS),
      size: "sm",
      icon: s ? c.iA$ : c.A9s,
      onClick: function() {
        s && null != t.guildId ? l(t.guildId) : n(t), (0, f.zV)(y.HAw.INBOX_CHANNEL_ACKED, {
          channel_id: t.channelId,
          guild_id: t.guildId,
          marked_all_channels_as_read: false,
          num_unread_channels_remaining: i() - 1
        })
      }
    })
  })
}