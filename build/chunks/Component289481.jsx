/** Chunk was on 56710 **/
/** chunk id: 289481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk893999 = require("./893999.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45114 = require("./45114.js"),
  Chunk367907 = require("./367907.js"),
  Chunk703656 = require("./703656.js"),
  Chunk592125 = require("./592125.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk617379 = require("./617379.jsx"),
  Chunk324081 = require("./324081.jsx"),
  Chunk305248 = require("./305248.jsx"),
  Chunk520116 = require("./520116.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk550116 = require("./550116.js");

function E(e) {
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
let S = Chunk647438.memo(function(e) {
    let {
      channel: t,
      deleteChannel: n
    } = e, l = i.useRef(null), [
      [o, s], c
    ] = i.useState([0, 0]), u = t.deleted && o > 0;
    if (t.deleted && 0 === o && null != l.current) {
      let e = l.current.offsetHeight,
        t = l.current.offsetTop,
        n = l.current.parentElement.scrollTop,
        r = n > t ? e - (n - t) : e;
      c([e, e - r])
    }
    let {
      opacity: p,
      size: h
    } = (0, d.q_F)({
      config: {
        clamp: true,
        friction: 18,
        tension: 200
      },
      opacity: +!u,
      size: +!u,
      onRest: () => {
        n(t.channelId)
      }
    }, "animate-always"), f = {
      opacity: p,
      height: h.to(e => {
        var t, n;
        return u ? (t = o, (n = s) + (t - n) * e) : "auto"
      })
    };
    return (0, r.jsx)(a.animated.div, {
      ref: l,
      style: f,
      children: (0, r.jsx)(I, E({}, e))
    })
  }),
  I = Chunk647438.memo(function(e) {
    let {
      channel: t,
      onJump: n,
      deleteChannel: l,
      toggle: o
    } = e, a = (0, c.e7)([m.Z], () => m.Z.getChannel(t.channelId));
    if (i.useEffect(() => {
        null == a || !t.isFullyLoaded || t.hasError || t.collapsed || "messages" !== t.type || 0 !== t.messages.length || p.Z.wait(() => {
          (0, h.ack)(t.channelId, {
            section: j.jXE.INBOX,
            object: j.qAy.ACK_INBOX_CHANNEL_NO_MESSAGES,
            objectType: j.AnalyticsObjectTypes.ACK_AUTOMATIC
          }, true), l(t.channelId)
        })
      }), null == a || !t.hasLoadedAnything) return null;
    let s = (e, r) => {
      (0, f.yw)(j.rMx.INBOX_CHANNEL_CLICKED, {
        channel_id: t.channelId,
        guild_id: t.guildId
      });
      let i = null != r ? r : t.oldestUnreadMessageId;
      (0, g.uL)(j.Z5c.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : i)), n(e)
    };
    return (0, r.jsx)("div", {
      className: x.channel,
      children: (0, r.jsx)(d.y5t, {
        component: (0, r.jsxs)(y.Z, {
          channel: a,
          gotoChannel: s,
          mentionCount: t.mentionCount,
          toggleCollapsed: o,
          channelState: t,
          children: [(0, r.jsx)(_.Z, {
            channel: a
          }), (0, r.jsx)(P, E({}, e)), "nsfw" === t.type ? null : (0, r.jsx)(N, E({}, e))]
        }),
        children: t.collapsed ? null : "messages" === t.type ? (0, r.jsx)(v.Z, {
          channel: t,
          channelRecord: a,
          gotoChannel: s
        }) : "forum" === t.type ? (0, r.jsx)(O.Z, {
          channel: t,
          channelRecord: a,
          deleteChannel: l
        }) : null
      })
    })
  });

function P(e) {
  let {
    channel: t,
    markChannelRead: n,
    markGuildRead: i,
    getNumUnreadChannels: l
  } = e, o = (0, s.Z)() && null != t.guildId;
  return (0, r.jsx)(d.M0o, {
    className: x.markReadButton,
    tooltip: o ? C.intl.string(C.t["5lLMhM"]) : C.intl.string(C.t.e6RscS),
    color: d.YX$.TERTIARY,
    icon: o ? (0, r.jsx)(d.W6s, {
      size: "xs",
      color: "currentColor"
    }) : (0, r.jsx)(d.dz2, {
      size: "xs",
      color: "currentColor"
    }),
    onClick: function() {
      o && null != t.guildId ? i(t.guildId) : n(t), (0, f.yw)(j.rMx.INBOX_CHANNEL_ACKED, {
        channel_id: t.channelId,
        guild_id: t.guildId,
        marked_all_channels_as_read: false,
        num_unread_channels_remaining: l() - 1
      })
    }
  })
}

function N(e) {
  let {
    channel: t,
    toggle: n,
    getNumUnreadChannels: i
  } = e;
  return (0, r.jsx)(u.u, {
    text: C.intl.string(C.t.iTcuma),
    children: (0, r.jsx)(d.P3F, {
      className: o()(x.collapseButton, {
        [x.collapsed]: t.collapsed
      }),
      onClick: function() {
        n(t), (0, f.yw)(j.rMx.INBOX_CHANNEL_COLLAPSED, {
          channel_id: t.channelId,
          guild_id: t.guildId,
          num_unread_channels_remaining: i(),
          is_now_collapsed: !t.collapsed
        })
      },
      children: (0, r.jsx)(b.Z, {
        width: 16,
        height: 16
      })
    })
  })
}