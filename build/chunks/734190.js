/** Chunk was on 86029 **/
n.d(t, {
  Z: () => D
});
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(91192),
  s = n(442837),
  c = n(481060),
  u = n(493683),
  d = n(239091),
  p = n(111028),
  h = n(540059),
  f = n(569471),
  g = n(488131),
  m = n(592125),
  b = n(306680),
  y = n(979651),
  v = n(938475),
  O = n(714794),
  j = n(876548),
  _ = n(25601),
  C = n(207055),
  x = n(981631),
  P = n(124368),
  N = n(388032),
  S = n(436804),
  I = n(81503),
  Z = n(366772);

function w(e) {
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

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  let {
    style: t,
    withGuildIcon: n,
    inverted: i
  } = e, l = {
    className: o()(Z.spine, {
      [Z.spineWithGuildIcon]: n
    }, {
      [Z.invertedSpine]: i
    }),
    style: t
  }, {
    density: a
  } = (0, c.TCT)();
  return "cozy" === a ? (0, r.jsxs)("svg", E(w({}, l), {
    width: "10",
    height: "23",
    viewBox: "0 0 10 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, r.jsx)("path", {
      d: "M0 18H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-5ZM0 1H2V18H0V1ZM2 1H0C0 .4477.4477 0 1 0c.5523 0 1 .4477 1 1Z",
      fill: "currentColor"
    }), (0, r.jsx)("path", {
      d: "M6 21H5v2H6V21Zm4 2s1 0 1-1-1-1-1-1v2ZM6 23h4V21H6v2Z",
      fill: "currentColor"
    })]
  })) : (0, r.jsxs)("svg", E(w({}, l), {
    width: "10",
    height: "19",
    viewBox: "0 0 10 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, r.jsx)("path", {
      d: "M0 14H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-5ZM0 1H2V14H0V1ZM2 1H0C0 .4477.4477 0 1 0c.5523 0 1 .4477 1 1Z",
      fill: "currentColor"
    }), (0, r.jsx)("path", {
      d: "M6 19V17H9v2H6Zm3 0V17s1 0 1 1-1 1-.989 1.004ZM6 17v2H5V17H6Z",
      fill: "currentColor"
    })]
  }))
}

function A(e) {
  let {
    style: t,
    withGuildIcon: n
  } = e;
  return (0, r.jsx)("svg", {
    className: o()(Z.spine, {
      [Z.spineWithGuildIcon]: n
    }),
    width: "12",
    height: "11",
    viewBox: "0 0 12 11",
    fill: "none",
    "aria-hidden": !0,
    style: t,
    children: (0, r.jsx)("path", {
      d: "M11 9H4C2.89543 9 2 8.10457 2 7V1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V7C0 9.20914 1.79086 11 4 11H11C11.5523 11 12 10.5523 12 10C12 9.44771 11.5523 9 11 9Z",
      fill: "currentColor"
    })
  })
}
let D = i.memo(function(e) {
  let {
    thread: t,
    isSelectedChannel: l,
    isSelectedVoice: Z,
    isLast: D,
    withGuildIcon: R
  } = e, L = (0, s.e7)([v.ZP], () => v.ZP.getVoiceStatesForChannel(t), [t]), M = (0, s.e7)([y.Z], () => y.Z.hasVideo(t.id)), {
    unread: k,
    mentionCount: G,
    isMentionLowImportance: U
  } = (0, s.cj)([b.ZP], () => ({
    unread: b.ZP.hasUnread(t.id),
    mentionCount: b.ZP.getMentionCount(t.id),
    isMentionLowImportance: b.ZP.getIsMentionLowImportance(t.id)
  })), B = (0, s.e7)([f.Z], () => f.Z.isMuted(t.id)), W = i.useCallback(e => {
    (0, g.ok)(t, !e.shiftKey, P.on.CHANNEL_LIST)
  }, [t]), V = i.useCallback(() => {
    u.Z.preload(t.guild_id, t.id)
  }, [t.guild_id, t.id]), F = i.useCallback(e => {
    let i = m.Z.getChannel(t.id);
    null != i && (0, d.jW)(e, async () => {
      let {
        default: e
      } = await n.e("40157").then(n.bind(n, 422200));
      return t => (0, r.jsx)(e, E(w({}, t), {
        channel: i
      }))
    })
  }, [t.id]), H = null == L ? 0 : L.length, z = (0, a.JA)(t.id), {
    role: Y
  } = z, q = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(z, ["role"]), Q = i.useRef(null), K = G > 0 ? N.NW.formatToPlainString(N.t["ZL7+Iy"], {
    channelName: t.name,
    mentionCount: G
  }) : k ? N.NW.formatToPlainString(N.t.YlVvmZ, {
    channelName: t.name
  }) : N.NW.formatToPlainString(N.t["0nZpiI"], {
    channelName: t.name
  }), J = (0, h.Q3)("GuildSidebarThreadListEntry") ? T : A;
  return (0, r.jsxs)("li", {
    role: Y,
    className: o()(S.containerDefault, {
      [S.selected]: l
    }),
    children: [(0, r.jsx)(J, {
      withGuildIcon: R
    }), D ? null : (0, r.jsx)(J, {
      withGuildIcon: R,
      inverted: !0,
      style: {
        transform: "rotateX(180deg) translateY(-9px)"
      }
    }), (0, r.jsx)(c.tEY, {
      focusTarget: Q,
      ringTarget: Q,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, r.jsxs)("div", {
        className: o()(S.iconVisibility, I.wrapper, I.typeThread, {
          [I.modeSelected]: l,
          [I.modeMuted]: !l && B,
          [I.modeUnreadImportant]: !B && !l && k,
          [I.withGuildIcon]: R
        }),
        onMouseDown: V,
        onContextMenu: F,
        children: [!k || B || l ? null : (0, r.jsx)("div", {
          className: o()(I.unread, I.unreadImportant)
        }), (0, r.jsx)(c.P3F, E(w({}, q), {
          innerRef: Q,
          className: I.link,
          onClick: W,
          "aria-label": K,
          focusProps: {
            enabled: !1
          },
          children: (0, r.jsxs)("div", {
            className: o()(I.linkTop, I.__invalid_threadMainContent),
            children: [(0, r.jsx)(p.Z, {
              className: I.name,
              "aria-hidden": !0,
              children: t.name
            }), (0, r.jsxs)("div", {
              className: I.children,
              children: [H > 0 && t.userLimit > 0 ? (0, r.jsx)(j.Z, {
                userCount: H,
                video: M,
                channel: t
              }) : null, (0, O.Z)(G) ? (0, r.jsx)(_.Z, {
                mentionsCount: G,
                isMentionLowImportance: U
              }) : null]
            })]
          })
        }))]
      })
    }), (0, r.jsx)(C.Z, {
      channel: t,
      collapsed: !Z,
      collapsedMax: 6,
      voiceStates: L,
      location: x.Sbl.GUILD_CHANNEL_LIST
    })]
  })
})