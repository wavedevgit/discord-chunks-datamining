/** Chunk was on 52272 **/
n.d(t, {
  Z: () => j
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  l = n(642128),
  s = n(442837),
  c = n(481060),
  u = n(570140),
  d = n(45114),
  p = n(367907),
  m = n(717680),
  f = n(703656),
  h = n(592125),
  g = n(259580),
  _ = n(617379),
  b = n(324081),
  v = n(305248),
  x = n(520116),
  y = n(981631),
  E = n(388032),
  O = n(764972);

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
let j = i.memo(function(e) {
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
      opacity: p,
      size: m
    } = (0, c.q_F)({
      config: {
        clamp: !0,
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
      height: m.to(e => {
        var t, n;
        return d ? (t = a, (n = s) + (t - n) * e) : "auto"
      })
    };
    return (0, r.jsx)(l.animated.div, {
      ref: o,
      style: f,
      children: (0, r.jsx)(C, N({}, e))
    })
  }),
  C = i.memo(function(e) {
    let {
      channel: t,
      onJump: n,
      deleteChannel: o,
      toggle: a
    } = e, l = (0, s.e7)([h.Z], () => h.Z.getChannel(t.channelId));
    if (i.useEffect(() => {
        null == l || !t.isFullyLoaded || t.hasError || t.collapsed || "messages" !== t.type || 0 !== t.messages.length || u.Z.wait(() => {
          (0, d.In)(t.channelId, !0), o(t.channelId)
        })
      }), null == l || !t.hasLoadedAnything) return null;
    let m = (e, r) => {
      (0, p.yw)(y.rMx.INBOX_CHANNEL_CLICKED, {
        channel_id: t.channelId,
        guild_id: t.guildId
      });
      let i = null != r ? r : t.oldestUnreadMessageId;
      (0, f.uL)(y.Z5c.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : i)), n(e)
    };
    return (0, r.jsx)("div", {
      className: O.channel,
      children: (0, r.jsx)(c.y5t, {
        component: (0, r.jsxs)(b.Z, {
          channel: l,
          gotoChannel: m,
          mentionCount: t.mentionCount,
          toggleCollapsed: a,
          channelState: t,
          children: [(0, r.jsx)(_.Z, {
            channel: l
          }), (0, r.jsx)(I, N({}, e)), "nsfw" === t.type ? null : (0, r.jsx)(S, N({}, e))]
        }),
        children: t.collapsed ? null : "messages" === t.type ? (0, r.jsx)(x.Z, {
          channel: t,
          channelRecord: l,
          gotoChannel: m
        }) : "forum" === t.type ? (0, r.jsx)(v.Z, {
          channel: t,
          channelRecord: l,
          deleteChannel: o
        }) : null
      })
    })
  });

function I(e) {
  let {
    channel: t,
    markChannelRead: n,
    markGuildRead: i,
    getNumUnreadChannels: o
  } = e, a = (0, m.Z)() && null != t.guildId;
  return (0, r.jsx)(c.M0o, {
    className: O.markReadButton,
    tooltip: a ? E.NW.string(E.t["5lLMhI"]) : E.NW.string(E.t.e6RscX),
    color: c.YX$.TERTIARY,
    icon: a ? (0, r.jsx)(c.W6s, {
      size: "xs",
      color: "currentColor"
    }) : (0, r.jsx)(c.dz2, {
      size: "xs",
      color: "currentColor"
    }),
    onClick: function() {
      a && null != t.guildId ? i(t.guildId) : n(t), (0, p.yw)(y.rMx.INBOX_CHANNEL_ACKED, {
        channel_id: t.channelId,
        guild_id: t.guildId,
        marked_all_channels_as_read: !1,
        num_unread_channels_remaining: o() - 1
      })
    }
  })
}

function S(e) {
  let {
    channel: t,
    toggle: n,
    getNumUnreadChannels: i
  } = e;

  function o() {
    n(t), (0, p.yw)(y.rMx.INBOX_CHANNEL_COLLAPSED, {
      channel_id: t.channelId,
      guild_id: t.guildId,
      num_unread_channels_remaining: i(),
      is_now_collapsed: !t.collapsed
    })
  }
  return (0, r.jsx)(c.ua7, {
    text: E.NW.string(E.t.iTcumZ),
    children: e => {
      var n, i;
      return (0, r.jsx)(c.P3F, (n = N({}, e), i = i = {
        className: a()(O.collapseButton, {
          [O.collapsed]: t.collapsed
        }),
        onClick: o,
        children: (0, r.jsx)(g.Z, {
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