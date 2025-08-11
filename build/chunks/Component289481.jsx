/** Chunk was on 34779 **/
/** chunk id: 289481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
  Chunk893999 = require("./893999.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk28007 = require("./28007.js");

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
let S = Chunk73800.memo(function(e) {
    let {
      channel: t,
      deleteChannel: n
    } = e, l = i.useRef(null), [
      [o, a], c
    ] = i.useState([0, 0]), d = t.deleted && o > 0;
    if (t.deleted && 0 === o && null != l.current) {
      let e = l.current.offsetHeight,
        t = l.current.offsetTop,
        n = l.current.parentElement.scrollTop,
        r = n > t ? e - (n - t) : e;
      c([e, e - r])
    }
    let {
      opacity: h,
      size: p
    } = (0, u.q_F)({
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
      opacity: h,
      height: p.to(e => {
        var t, n;
        return d ? (t = o, (n = a) + (t - n) * e) : "auto"
      })
    };
    return (0, r.jsx)(s.animated.div, {
      ref: l,
      style: f,
      children: (0, r.jsx)(x, E({}, e))
    })
  }),
  x = Chunk73800.memo(function(e) {
    let {
      channel: t,
      onJump: n,
      deleteChannel: l,
      toggle: o
    } = e, s = (0, c.e7)([g.Z], () => g.Z.getChannel(t.channelId));
    if (i.useEffect(() => {
        null == s || !t.isFullyLoaded || t.hasError || t.collapsed || "messages" !== t.type || 0 !== t.messages.length || d.Z.wait(() => {
          (0, h.In)(t.channelId, {
            section: C.jXE.INBOX,
            object: C.qAy.ACK_INBOX_CHANNEL_NO_MESSAGES,
            objectType: C.Qqv.ACK_AUTOMATIC
          }, true), l(t.channelId)
        })
      }), null == s || !t.hasLoadedAnything) return null;
    let a = (e, r) => {
      (0, p.yw)(C.rMx.INBOX_CHANNEL_CLICKED, {
        channel_id: t.channelId,
        guild_id: t.guildId
      });
      let i = null != r ? r : t.oldestUnreadMessageId;
      (0, f.uL)(C.Z5c.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : i)), n(e)
    };
    return (0, r.jsx)("div", {
      className: j.channel,
      children: (0, r.jsx)(u.y5t, {
        component: (0, r.jsxs)(O.Z, {
          channel: s,
          gotoChannel: a,
          mentionCount: t.mentionCount,
          toggleCollapsed: o,
          channelState: t,
          children: [(0, r.jsx)(b.Z, {
            channel: s
          }), (0, r.jsx)(I, E({}, e)), "nsfw" === t.type ? null : (0, r.jsx)(P, E({}, e))]
        }),
        children: t.collapsed ? null : "messages" === t.type ? (0, r.jsx)(y.Z, {
          channel: t,
          channelRecord: s,
          gotoChannel: a
        }) : "forum" === t.type ? (0, r.jsx)(_.Z, {
          channel: t,
          channelRecord: s,
          deleteChannel: l
        }) : null
      })
    })
  });

function I(e) {
  let {
    channel: t,
    markChannelRead: n,
    markGuildRead: i,
    getNumUnreadChannels: l
  } = e, o = (0, a.Z)() && null != t.guildId;
  return (0, r.jsx)(u.M0o, {
    className: j.markReadButton,
    tooltip: o ? v.intl.string(v.t["5lLMhI"]) : v.intl.string(v.t.e6RscX),
    color: u.YX$.TERTIARY,
    icon: o ? (0, r.jsx)(u.W6s, {
      size: "xs",
      color: "currentColor"
    }) : (0, r.jsx)(u.dz2, {
      size: "xs",
      color: "currentColor"
    }),
    onClick: function() {
      o && null != t.guildId ? i(t.guildId) : n(t), (0, p.yw)(C.rMx.INBOX_CHANNEL_ACKED, {
        channel_id: t.channelId,
        guild_id: t.guildId,
        marked_all_channels_as_read: false,
        num_unread_channels_remaining: l() - 1
      })
    }
  })
}

function P(e) {
  let {
    channel: t,
    toggle: n,
    getNumUnreadChannels: i
  } = e;

  function l() {
    n(t), (0, p.yw)(C.rMx.INBOX_CHANNEL_COLLAPSED, {
      channel_id: t.channelId,
      guild_id: t.guildId,
      num_unread_channels_remaining: i(),
      is_now_collapsed: !t.collapsed
    })
  }
  return (0, r.jsx)(u.ua7, {
    text: v.intl.string(v.t.iTcumZ),
    children: e => {
      var n, i;
      return (0, r.jsx)(u.P3F, (n = E({}, e), i = i = {
        className: o()(j.collapseButton, {
          [j.collapsed]: t.collapsed
        }),
        onClick: l,
        children: (0, r.jsx)(m.Z, {
          width: 16,
          height: 16
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })
}