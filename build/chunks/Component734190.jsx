/** Chunk was on 36925 **/
/** chunk id: 734190, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk239091 = require("./239091.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk471445 = require("./471445.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk569471 = require("./569471.js"),
  Chunk488131 = require("./488131.js"),
  Chunk592125 = require("./592125.js"),
  Chunk306680 = require("./306680.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk990734 = require("./990734.js"),
  Chunk714794 = require("./714794.js"),
  Chunk876548 = require("./876548.jsx"),
  Chunk25601 = require("./25601.jsx"),
  Chunk207055 = require("./207055.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk124368 = require("./124368.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk55940 = require("./55940.js"),
  Chunk509612 = require("./509612.js"),
  Chunk113914 = require("./113914.js");

function R(e) {
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

function D(e, t) {
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

function L(e) {
  let {
    style: t,
    withGuildIcon: n,
    inverted: i
  } = e, l = {
    className: o()(A.spine, {
      [A.spineWithGuildIcon]: n
    }, {
      [A.invertedSpine]: i
    }),
    style: t
  }, {
    density: a
  } = (0, u.TCT)();
  switch (a) {
    case "cozy":
      return (0, r.jsxs)("svg", D(R({}, l), {
        width: "10",
        height: "20",
        viewBox: "0 0 10 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, r.jsx)("path", {
          d: "M0 15H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 4H2V15H0V4ZM2 4H0C0 3.4477.4477 3 1 3c.5523 0 1 .4477 1 1Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          d: "M6 20V18H9v2H6Zm3 0V18s1 0 1 1-1 1-.989 1.004ZM6 18v2H5V18H6Z",
          fill: "currentColor"
        })]
      }));
    case "compact":
      return (0, r.jsxs)("svg", D(R({}, l), {
        width: "10",
        height: "19",
        viewBox: "0 0 10 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, r.jsx)("path", {
          d: "M0 11H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 0H2V11H0V0ZM2 0H0C0-.5523.4477-1 1-1c.5523 0 1 .4477 1 1Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          d: "M6 16V14H9v2H6Zm3 0V14s1 0 1 1-1 1-.989 1.004ZM6 14v2H5V14H6Z",
          fill: "currentColor"
        })]
      }));
    default:
      return (0, r.jsxs)("svg", D(R({}, l), {
        width: "10",
        height: "19",
        viewBox: "0 0 10 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, r.jsx)("path", {
          d: "M0 13H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 2H2V13H0V2ZM2 2H0C0 1.4477.4477 1 1 1c.5523 0 1 .4477 1 1Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          d: "M6 18V16H9v2H6Zm3 0V16s1 0 1 1-1 1-.989 1.004ZM6 16v2H5V16H6Z",
          fill: "currentColor"
        })]
      }))
  }
}

function M(e) {
  let {
    thread: t
  } = e, n = i.useMemo(() => {
    var e;
    return null != (e = (0, h.KS)(t)) ? e : u.or_
  }, [t]), l = (0, h.bT)(t);
  return (0, r.jsx)(c.u, {
    text: l,
    delay: 500,
    asContainer: true,
    children: (0, r.jsx)("div", {
      role: "img",
      "aria-label": "".concat(l, " icon"),
      className: w.iconContainer,
      children: (0, r.jsx)(n, {
        className: w.icon,
        color: "currentColor"
      })
    })
  })
}
let k = Chunk647438.memo(function(e) {
  let {
    thread: t,
    isSelectedChannel: l,
    isSelectedVoice: c,
    isLast: h,
    withGuildIcon: A
  } = e, k = (0, s.e7)([v.ZP], () => v.ZP.getVoiceStatesForChannel(t), [t]), G = (0, s.e7)([j.Z], () => j.Z.hasVideo(t.id)), {
    unread: U,
    mentionCount: B,
    isMentionLowImportance: F
  } = (0, s.cj)([O.ZP], () => ({
    unread: O.ZP.hasUnread(t.id),
    mentionCount: O.ZP.getMentionCount(t.id),
    isMentionLowImportance: O.ZP.getIsMentionLowImportance(t.id)
  })), V = (0, s.e7)([m.Z], () => m.Z.isMuted(t.id)), H = (0, C.p)({
    location: "GuildSidebarThreadListEntry"
  }), z = (0, s.e7)([y.default], () => y.default.getUser(t.ownerId)), W = i.useCallback(e => {
    (0, b.ok)(t, !e.shiftKey, N.on.CHANNEL_LIST)
  }, [t]), K = i.useCallback(() => {
    d.Z.preload(t.guild_id, t.id)
  }, [t.guild_id, t.id]), Y = i.useCallback(e => {
    let i = _.Z.getChannel(t.id);
    null != i && (0, p.jW)(e, async () => {
      let {
        default: e
      } = await n.e("40157").then(n.bind(n, 422200));
      return t => (0, r.jsx)(e, D(R({}, t), {
        channel: i
      }))
    })
  }, [t.id]), q = null == k ? 0 : k.length, X = (0, a.JA)(t.id), {
    role: Q
  } = X, J = function(e, t) {
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
  }(X, ["role"]), $ = i.useRef(null), ee = B > 0 ? Z.intl.formatToPlainString(Z.t["ZL7+I6"], {
    channelName: t.name,
    mentionCount: B
  }) : U ? Z.intl.formatToPlainString(Z.t.YlVvmc, {
    channelName: t.name
  }) : Z.intl.formatToPlainString(Z.t["0nZpiF"], {
    channelName: t.name
  });
  return (0, r.jsxs)("li", {
    role: Q,
    className: o()(T.containerDefault, {
      [T.selected]: l
    }),
    children: [(0, r.jsx)(L, {
      withGuildIcon: A
    }), h ? null : (0, r.jsx)(L, {
      withGuildIcon: A,
      inverted: true,
      style: {
        transform: "rotateX(180deg) translateY(-9px)"
      }
    }), (0, r.jsx)(u.tEY, {
      focusTarget: $,
      ringTarget: $,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, r.jsxs)("div", {
        className: o()(T.iconVisibility, w.wrapper, w.typeThread, {
          [w.modeSelected]: l,
          [w.modeMuted]: !l && V,
          [w.modeUnreadImportant]: !V && !l && U,
          [w.withGuildIcon]: A,
          [w.threadsInChannelListQoLExperiment]: H.enabled,
          [w.withThreadAvatar]: "icon-with-avatar" === H.variant,
          [w.withThreadIconInBubble]: "icon-in-bubble" === H.variant
        }),
        onMouseDown: K,
        onContextMenu: Y,
        children: [!U || V || l ? null : (0, r.jsx)("div", {
          className: o()(w.unread, w.unreadImportant)
        }), (0, r.jsx)(u.P3F, D(R({}, J), {
          innerRef: $,
          className: w.link,
          onClick: W,
          "aria-label": ee,
          focusProps: {
            enabled: false
          },
          children: (0, r.jsxs)("div", {
            className: o()(w.linkTop, w.__invalid_threadMainContent),
            children: ["icon-with-avatar" === H.variant ? (0, r.jsxs)("div", {
              className: w.threadIconWithAvatar,
              children: [(0, r.jsx)(M, {
                thread: t
              }), null == z ? null : (0, r.jsx)(f.Z, {
                user: z,
                size: u.EFr.SIZE_16
              })]
            }) : null, "icon-in-bubble" === H.variant ? (0, r.jsx)(M, {
              thread: t
            }) : null, (0, r.jsx)(g.Z, {
              className: w.name,
              "aria-hidden": true,
              children: t.name
            }), (0, r.jsxs)("div", {
              className: w.children,
              children: [q > 0 && t.userLimit > 0 ? (0, r.jsx)(E.Z, {
                userCount: q,
                video: G,
                channel: t
              }) : null, (0, x.Z)(B) ? (0, r.jsx)(S.Z, {
                mentionsCount: B,
                isMentionLowImportance: F
              }) : null]
            })]
          })
        }))]
      })
    }), (0, r.jsx)(I.Z, {
      channel: t,
      collapsed: !c && 1 !== k.length,
      collapsedMax: 6,
      voiceStates: k,
      location: P.Sbl.GUILD_CHANNEL_LIST,
      isThread: true
    })]
  })
})