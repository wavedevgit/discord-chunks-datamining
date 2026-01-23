/** Chunk was on web.js **/
/** chunk id: 643204, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => eo,
  ix: () => er,
  tO: () => et
}), require("./321073.js"), require("./896048.js"), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk607399 = require("./607399.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk634202 = require("./634202.jsx"),
  Chunk870136 = require("./870136.js"),
  Chunk200759 = require("./200759.jsx"),
  Chunk87719 = require("./87719.js"),
  Chunk919395 = require("./919395.js"),
  Chunk9842 = require("./9842.js"),
  Chunk657048 = require("./657048.jsx"),
  Chunk93956 = require("./93956.jsx"),
  Chunk622543 = require("./622543.js"),
  Chunk352413 = require("./352413.js"),
  Chunk854627 = require("./854627.js"),
  Chunk576622 = require("./576622.js"),
  Chunk342296 = require("./342296.jsx"),
  Chunk964404 = require("./964404.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk203982 = require("./203982.js"),
  Chunk927578 = require("./927578.js"),
  Chunk101750 = require("./101750.js"),
  Chunk763754 = require("./763754.js"),
  Chunk635071 = require("./635071.jsx"),
  Chunk860227 = require("./860227.js"),
  Chunk449859 = require("./449859.jsx"),
  Chunk855344 = require("./855344.jsx"),
  Chunk812299 = require("./812299.jsx"),
  Chunk109054 = require("./109054.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk679740 = require("./679740.js"),
  Chunk814803 = require("./814803.js");

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      z(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Q = 32,
  J = 80;

function $(e) {
  let {
    avatarSrc: t,
    avatarDecorationSrc: n,
    compact: i,
    onClick: a,
    onContextMenu: o,
    onMouseDown: l,
    onMouseEnter: c,
    onMouseLeave: u,
    onKeyDown: d,
    showCommunicationDisabledStyles: f = false,
    className: p,
    avatarImgRef: _
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      ref: _,
      onClick: a,
      onContextMenu: o,
      onKeyDown: d,
      onMouseDown: l,
      onMouseEnter: c,
      onMouseLeave: u,
      src: t,
      "aria-hidden": true,
      className: s()(p, W.my, {
        [W.oE]: i,
        [W.vk]: null != a,
        [W.uU]: f
      }),
      alt: " "
    }), null == n || i ? null : (0, r.jsx)("img", {
      className: W.M,
      src: n,
      alt: " ",
      "aria-hidden": true
    })]
  })
}
let ee = Chunk64700.memo(function(e) {
  let {
    message: t,
    author: n,
    channel: a,
    guildId: s,
    compact: o = false,
    roleIconProps: l,
    showUsernamePopout: u,
    renderPopout: f,
    onClickUsername: p,
    onContextMenu: _,
    displayCompactAvatars: m = false,
    onPopoutRequestClose: E,
    preview: y,
    subscribeToGroupId: b,
    hideGuildTag: v
  } = e, A = (0, M.Ay)(t, n), I = i.useMemo(() => (0, F.y)({
    message: t,
    channel: a,
    user: null == t ? true : t.author,
    compact: o,
    isRepliedMessage: false
  }), [t, a, o]), S = i.useRef(null), T = (0, c.bG)([w.A], () => w.A.getGuild(s)), C = i.useMemo(() => ea(o, m, l, T), [o, m, l, T]), N = i.useMemo(() => null == l ? null : 1 === C && null != T ? (0, r.jsx)(d.YNO, {
    targetElementRef: S,
    animation: d.YNO.Animation.TRANSLATE,
    align: "center",
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    position: "right",
    renderPopout: () => (0, r.jsx)(V.A, {
      roleIcon: l,
      guild: T
    }),
    clickTrap: true,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(O.A, X(q({
        ref: S
      }, l), {
        className: W.UT,
        onClick: t
      }))
    }
  }, "role-icon-children") : 2 === C ? (0, r.jsx)(O.A, X(q({}, l), {
    className: W.UT
  }), "role-icon-children") : null, [C, l, T]), R = (0, c.bG)([P.default], () => P.default.getCurrentUser()), D = i.useMemo(() => {
    let e = [],
      n = L.Ay.isPremium(t.author),
      i = L.Ay.isPremium(R),
      s = null == a ? true : a.isPrivate();
    return (0, j.E)(null != l, "Message Username") && n && !o && !s && e.push((0, r.jsx)(es, {
      currentUserIsPremium: i,
      author: t.author
    }, "nitro-author")), null != N && e.push(N), null != T && e.push((0, r.jsx)(g.A, {
      guild: T,
      message: t
    }, "new-member")), null != a && null != T && e.push((0, r.jsx)(h.A, {
      guild: T,
      channel: a,
      userId: t.author.id,
      messageId: t.id
    }, "connections")), e
  }, [t, a, l, o, N, T, R]);
  return null == A ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(k.A, {
      message: t,
      channel: a,
      author: A,
      compact: o,
      roleIcon: l,
      showPopout: u,
      renderPopout: f,
      onClick: p,
      onContextMenu: _,
      onPopoutRequestClose: E,
      decorations: {
        [k.w.SYSTEM_TAG]: I,
        [k.w.BADGES]: D
      },
      previewGuildId: s,
      preview: y,
      subscribeToGroupId: b,
      hideGuildTag: v
    }), o && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("i", {
        className: W.me,
        children: ":"
      }), " "]
    })]
  })
});

function et(e, t, n) {
  let {
    message: i,
    channel: a,
    author: s,
    compact: o = false,
    onContextMenu: l,
    showUsernamePopout: c,
    roleIcon: u,
    onClickUsername: d,
    onPopoutRequestClose: f
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(k.A, {
      message: i,
      channel: a,
      author: s,
      compact: o,
      roleIcon: u,
      showPopout: c,
      renderPopout: t,
      onClick: d,
      onContextMenu: l,
      onPopoutRequestClose: f,
      decorations: n,
      preview: true
    }), o && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("i", {
        className: W.me,
        children: ":"
      }), " "]
    })]
  })
}

function en(e) {
  var t, n, a;
  let {
    props: s,
    guildId: l,
    handleRenderPopout: u,
    showCommunicationDisabledStyles: d = false,
    className: _
  } = e, {
    message: h,
    author: m,
    compact: g = false,
    subscribeToGroupId: E,
    animate: b = true,
    onContextMenu: O,
    onClickAvatar: v,
    onPopoutRequestClose: A,
    showAvatarPopout: T
  } = s, w = i.useRef(null), [R, L] = i.useState(false), {
    analyticsLocations: j
  } = (0, p.Ay)(f.A.AVATAR), M = (0, c.bG)([P.default], () => P.default.getCurrentUser()), k = (0, c.bG)([N.Ay], () => {
    var e;
    return null != (e = s.displayCompactAvatars) ? e : N.Ay.displayCompactAvatars
  }), U = (0, B.A)(h), G = g ? Q : J, {
    pendingAvatarDecoration: V
  } = (0, I.A)({
    guildId: l
  }), F = (0, y.lw)({
    pendingValue: h.author.id === (null == M ? true : M.id) ? V : true,
    userValue: null == (t = h.author) ? true : t.avatarDecoration,
    guildValue: null == m ? true : m.guildMemberAvatarDecoration,
    guildId: l
  }), {
    avatarSrc: Y,
    avatarDecorationSrc: W,
    eventHandlers: K
  } = (0, S.A)({
    userId: h.author.id,
    guildId: l,
    size: G,
    animateOnHover: null != E ? !R : !b,
    avatarDecorationOverride: F,
    showPending: true
  }), z = h.isInteractionPlaceholder(), Z = i.useMemo(() => {
    var e, t;
    return z && null == h.author.avatar && null == m.guildMemberAvatar && (null == (e = h.application) ? true : e.icon) != null ? null != (t = D.Ay.getApplicationIconURL({
      id: h.application.id,
      icon: h.application.icon,
      size: G,
      fallbackAvatar: false
    })) ? t : Y : null != h.webhookId && null == m.guildMemberAvatar ? D.Ay.getUserAvatarURL({
      avatar: h.author.avatar,
      id: h.author.id,
      discriminator: h.author.discriminator,
      bot: true
    }, false, G) : Y
  }, [z, h.author.avatar, h.author.id, h.author.discriminator, null == (n = h.application) ? true : n.icon, null == (a = h.application) ? true : a.id, h.webhookId, Y, G, m.guildMemberAvatar]);
  if (i.useEffect(() => {
      if (null != E) return x._.subscribeKeyed(H.zOV.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(h.author.id), L), () => void x._.unsubscribeKeyed(H.zOV.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(h.author.id), L)
    }, [h.author.id, E]), !g || k) return null != u && null != T ? (0, r.jsx)(p.f5, {
    value: j,
    children: (0, r.jsx)(C.A, {
      targetElementRef: w,
      user: h.author,
      guildId: l,
      channelId: h.channel_id,
      messageId: h.id,
      shouldShow: T,
      shouldPreload: U,
      renderPopout: u,
      position: o.Fr ? "window_center" : "right",
      avatarUrl: Z,
      onRequestClose: A,
      clickTrap: T,
      children: e => $(X(q({}, K), {
        avatarSrc: Z,
        avatarDecorationSrc: W,
        compact: g,
        onClick: v,
        onContextMenu: O,
        onMouseDown: e.onMouseDown,
        onKeyDown: e.onKeyDown,
        showCommunicationDisabledStyles: d,
        className: _,
        avatarImgRef: w
      }))
    })
  }) : (0, r.jsx)(p.f5, {
    value: j,
    children: $(X(q({}, K), {
      avatarSrc: Z,
      avatarDecorationSrc: W,
      compact: g,
      onClick: v,
      onContextMenu: O,
      onMouseDown: true,
      onKeyDown: true,
      showCommunicationDisabledStyles: d,
      className: _
    }))
  })
}

function er(e) {
  let {
    message: t,
    avatar: n,
    username: i,
    usernameSpanId: a,
    usernameClassName: o,
    compact: c,
    showTimestamp: u,
    showTimestampOnHover: f,
    ariaLabelledBy: p,
    ariaDescribedBy: h,
    className: m,
    messageClassname: g,
    badges: E
  } = e, y = (0, l.Lt)(t.flags, H.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null, b = (0, _.h)(y);
  return (0, r.jsxs)(r.Fragment, {
    children: [!c && n, (0, r.jsxs)(d.H, {
      className: s()(W.wx, m),
      "aria-describedby": h,
      "aria-labelledby": p,
      children: [u && c && (0, r.jsx)(G.A, {
        id: (0, U.xl)(t),
        compact: true,
        timestamp: t.timestamp,
        isVisibleOnlyOnHover: f,
        className: g,
        isInline: false,
        application: b
      }), c && n, (0, r.jsx)("span", {
        id: a,
        className: o,
        children: i
      }), u && !c && (0, r.jsx)(G.A, {
        id: (0, U.xl)(t),
        timestamp: t.timestamp,
        className: g,
        application: b
      }), null != E && E.length > 0 ? (0, r.jsx)("div", {
        className: W.cV,
        children: E
      }) : null]
    })]
  })
}
let ei = e => {
  e || (0, E.Z)()
};

function ea(e, t, n, r) {
  return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0
}
let es = Chunk64700.memo(function(e) {
    let {
      currentUserIsPremium: t,
      author: n
    } = e, i = (0, c.bG)([A.A], () => {
      var e;
      return null == (e = A.A.getUserProfile(n.id)) ? true : e.premiumSince
    });
    return (0, r.jsx)(u.m, {
      asContainer: true,
      shouldShow: null != i,
      text: Y.intl.formatToPlainString(Y.t["8zbGNR"], {
        date: i
      }),
      onTooltipShow: () => (0, T.A)(n.id),
      children: (0, r.jsx)(d.DUT, {
        className: W.vu,
        onClick: () => ei(t),
        "aria-label": Y.intl.formatToPlainString(Y.t["8zbGNR"], {
          date: i
        }),
        children: (0, r.jsx)("img", {
          alt: "",
          className: W.MP,
          src: K
        })
      })
    })
  }),
  eo = Chunk64700.memo(function(e) {
    let {
      message: t,
      repliedMessage: n,
      compact: a = false,
      renderPopout: o,
      showTimestampOnHover: f,
      roleIcon: p,
      subscribeToGroupId: _,
      hideTimestamp: h,
      hideGuildTag: g,
      className: E,
      channel: y,
      preview: O
    } = e, A = i.useMemo(() => null != o ? e => o(e, t) : true, [o, t]), [, I] = (0, m.Ay)(t.author.id, e.guildId), S = (0, c.bG)([R.A, w.A], () => {
      let n = w.A.getGuild(e.guildId);
      return null != t.author && null != n && R.A.canManageUser(H.xBc.MODERATE_MEMBERS, t.author, n)
    }, [t.author, e.guildId]), T = I && S, C = en({
      props: e,
      guildId: e.guildId,
      handleRenderPopout: A,
      showCommunicationDisabledStyles: T
    }), P = (0, c.bG)([N.Ay], () => {
      var t;
      return null != (t = e.displayCompactAvatars) ? t : N.Ay.displayCompactAvatars
    }), D = i.useMemo(() => (0, F.k)({
      message: t,
      channel: y,
      user: null == t ? true : t.author,
      compact: a,
      isRepliedMessage: false
    }), [t, y, a]), x = (0, c.bG)([w.A], () => ea(a, P, p, w.A.getGuild(e.guildId)), [a, P, p, e.guildId]), L = i.useMemo(() => {
      let e = [];
      return (0, l.Lt)(t.flags, H.pr7.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(v.A, {}, "suppress-notifications")), e
    }, [t]), j = (0, U.d$)(t, _), M = (0, U.xl)(t), k = h ? "".concat(j) : "".concat(j, " ").concat(M), G = (null == n ? true : n.state) === b.a.LOADED ? (0, U.nS)(t) : true, V = true !== h;
    return (0, r.jsx)(er, {
      message: t,
      avatar: C,
      username: (0, r.jsxs)(r.Fragment, {
        children: [T && (0, r.jsx)(u.m, {
          text: Y.intl.string(Y.t["AeYyL+"]),
          children: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(d.gQi, {
              size: "xxs",
              color: "currentColor",
              className: a ? W.EI : W.bu
            }), (0, r.jsx)(d.AC4, {
              children: Y.intl.string(Y.t.AmHag5)
            })]
          })
        }), (0, r.jsx)(ee, X(q({}, e), {
          message: t,
          channel: y,
          compact: a,
          roleIconProps: p,
          renderPopout: A,
          preview: O,
          subscribeToGroupId: _,
          hideGuildTag: g
        }))]
      }),
      usernameSpanId: (0, U.d$)(t, _),
      usernameClassName: s()(W.TK, {
        [W.yF]: 0 !== x,
        [W.hB]: null != D || L.length > 0
      }),
      compact: a,
      showTimestamp: V,
      showTimestampOnHover: f,
      ariaLabelledBy: k,
      ariaDescribedBy: G,
      className: E,
      badges: L
    })
  })