/** Chunk was on web.js **/
/** chunk id: 464891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CF: () => en,
  ZP: () => el,
  nD: () => ei
}), require("./539854.js"), require("./388685.js"), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk366030 = require("./366030.jsx"),
  Chunk71619 = require("./71619.js"),
  Chunk340797 = require("./340797.jsx"),
  Chunk397589 = require("./397589.jsx"),
  Chunk98278 = require("./98278.js"),
  Chunk150039 = require("./150039.js"),
  Chunk869765 = require("./869765.js"),
  Chunk48950 = require("./48950.jsx"),
  Chunk243317 = require("./243317.jsx"),
  Chunk621853 = require("./621853.js"),
  Chunk369111 = require("./369111.js"),
  Chunk518950 = require("./518950.js"),
  Chunk484459 = require("./484459.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk740492 = require("./740492.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk585483 = require("./585483.js"),
  Chunk74538 = require("./74538.js"),
  Chunk276554 = require("./276554.js"),
  Chunk739566 = require("./739566.js"),
  Chunk421399 = require("./421399.jsx"),
  Chunk453687 = require("./453687.js"),
  Chunk318713 = require("./318713.jsx"),
  Chunk304176 = require("./304176.jsx"),
  Chunk47930 = require("./47930.jsx"),
  Chunk935910 = require("./935910.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk724913 = require("./724913.js"),
  Chunk121282 = require("./121282.js");

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

function Q(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let J = 32,
  $ = 80;

function ee(e) {
  let {
    avatarSrc: t,
    avatarDecorationSrc: n,
    compact: i,
    onClick: a,
    onContextMenu: s,
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
      onContextMenu: s,
      onKeyDown: d,
      onMouseDown: l,
      onMouseEnter: c,
      onMouseLeave: u,
      src: t,
      "aria-hidden": true,
      className: o()(p, W.avatar, {
        [W.compact]: i,
        [W.clickable]: null != a,
        [W.communicationDisabledOpacity]: f
      }),
      alt: " "
    }), null == n || i ? null : (0, r.jsx)("img", {
      className: W.avatarDecoration,
      src: n,
      alt: " ",
      "aria-hidden": true
    })]
  })
}
let et = Chunk473749.memo(function(e) {
  let {
    message: t,
    author: n,
    channel: a,
    guildId: o,
    compact: s = false,
    roleIconProps: l,
    showUsernamePopout: u,
    renderPopout: f,
    onClickUsername: p,
    onContextMenu: _,
    displayCompactAvatars: h = false,
    onPopoutRequestClose: E,
    preview: b,
    subscribeToGroupId: y,
    hideGuildTag: O
  } = e, S = (0, k.ZP)(t, n), I = i.useMemo(() => (0, F.x)({
    message: t,
    channel: a,
    user: null == t ? true : t.author,
    compact: s,
    isRepliedMessage: false
  }), [t, a, s]), T = i.useRef(null), A = (0, c.e7)([R.Z], () => R.Z.getGuild(o)), C = i.useMemo(() => eo(s, h, l, A), [s, h, l, A]), N = i.useMemo(() => null == l ? null : 1 === C && null != A ? (0, r.jsx)(d.yRy, {
    targetElementRef: T,
    animation: d.yRy.Animation.TRANSLATE,
    align: "center",
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    position: "right",
    renderPopout: () => (0, r.jsx)(B.Z, {
      roleIcon: l,
      guild: A
    }),
    clickTrap: true,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(v.Z, X(q({
        ref: T
      }, l), {
        className: W.roleIcon,
        onClick: t
      }))
    }
  }, "role-icon-children") : 2 === C ? (0, r.jsx)(v.Z, X(q({}, l), {
    className: W.roleIcon
  }), "role-icon-children") : null, [C, l, A]), P = (0, c.e7)([w.default], () => w.default.getCurrentUser()), D = i.useMemo(() => {
    let e = [],
      n = j.ZP.isPremium(t.author),
      i = j.ZP.isPremium(P),
      o = null == a ? true : a.isPrivate();
    return (0, M.R)(null != l, "Message Username") && n && !s && !o && e.push((0, r.jsx)(es, {
      currentUserIsPremium: i,
      author: t.author
    }, "nitro-author")), null != N && e.push(N), null != A && e.push((0, r.jsx)(g.Z, {
      guild: A,
      message: t
    }, "new-member")), null != a && null != A && e.push((0, r.jsx)(m.Z, {
      guild: A,
      channel: a,
      userId: t.author.id,
      messageId: t.id
    }, "connections")), e
  }, [t, a, l, s, N, A, P]);
  return null == S ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(U.Z, {
      message: t,
      channel: a,
      author: S,
      compact: s,
      roleIcon: l,
      showPopout: u,
      renderPopout: f,
      onClick: p,
      onContextMenu: _,
      onPopoutRequestClose: E,
      decorations: {
        [U.a.SYSTEM_TAG]: I,
        [U.a.BADGES]: D
      },
      previewGuildId: o,
      preview: b,
      subscribeToGroupId: y,
      hideGuildTag: O
    }), s && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("i", {
        className: W.separator,
        children: ":"
      }), " "]
    })]
  })
});

function en(e, t, n) {
  let {
    message: i,
    channel: a,
    author: o,
    compact: s = false,
    onContextMenu: l,
    showUsernamePopout: c,
    roleIcon: u,
    onClickUsername: d,
    onPopoutRequestClose: f
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(U.Z, {
      message: i,
      channel: a,
      author: o,
      compact: s,
      roleIcon: u,
      showPopout: c,
      renderPopout: t,
      onClick: d,
      onContextMenu: l,
      onPopoutRequestClose: f,
      decorations: n,
      preview: true
    }), s && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("i", {
        className: W.separator,
        children: ":"
      }), " "]
    })]
  })
}

function er(e) {
  var t, n, a;
  let {
    props: o,
    guildId: l,
    handleRenderPopout: u,
    showCommunicationDisabledStyles: d = false,
    className: _
  } = e, {
    message: m,
    author: h,
    compact: g = false,
    subscribeToGroupId: E,
    animate: b = true,
    onContextMenu: O,
    onClickAvatar: v,
    onPopoutRequestClose: S,
    showAvatarPopout: I
  } = o, C = i.useRef(null), [R, D] = i.useState(false), {
    analyticsLocations: j
  } = (0, p.ZP)(f.Z.AVATAR), M = (0, c.e7)([w.default], () => w.default.getCurrentUser()), k = (0, c.e7)([P.ZP], () => {
    var e;
    return null != (e = o.displayCompactAvatars) ? e : P.ZP.displayCompactAvatars
  }), U = (0, V.Z)(m), G = g ? J : $, {
    pendingAvatarDecoration: Z
  } = (0, T.Z)({
    guildId: l
  }), B = (0, y.Ys)({
    pendingValue: m.author.id === (null == M ? true : M.id) ? Z : true,
    userValue: null == (t = m.author) ? true : t.avatarDecoration,
    guildValue: null == h ? true : h.guildMemberAvatarDecoration,
    guildId: l
  }), {
    avatarSrc: F,
    avatarDecorationSrc: Y,
    eventHandlers: W
  } = (0, A.Z)({
    userId: m.author.id,
    guildId: l,
    size: G,
    animateOnHover: null != E ? !R : !b,
    avatarDecorationOverride: B,
    showPending: true
  }), K = m.isInteractionPlaceholder(), z = i.useMemo(() => {
    var e, t;
    return K && null == m.author.avatar && null == h.guildMemberAvatar && (null == (e = m.application) ? true : e.icon) != null ? null != (t = x.ZP.getApplicationIconURL({
      id: m.application.id,
      icon: m.application.icon,
      size: G,
      fallbackAvatar: false
    })) ? t : F : null != m.webhookId && null == h.guildMemberAvatar ? x.ZP.getUserAvatarURL({
      avatar: m.author.avatar,
      id: m.author.id,
      discriminator: m.author.discriminator,
      bot: true
    }, false, G) : F
  }, [K, m.author.avatar, m.author.id, m.author.discriminator, null == (n = m.application) ? true : n.icon, null == (a = m.application) ? true : a.id, m.webhookId, F, G, h.guildMemberAvatar]);
  if (i.useEffect(() => {
      if (null != E) return L.S.subscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(m.author.id), D), () => void L.S.unsubscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(m.author.id), D)
    }, [m.author.id, E]), !g || k) return null != u && null != I ? (0, r.jsx)(p.Gt, {
    value: j,
    children: (0, r.jsx)(N.Z, {
      targetElementRef: C,
      user: m.author,
      guildId: l,
      channelId: m.channel_id,
      messageId: m.id,
      shouldShow: I,
      shouldPreload: U,
      renderPopout: u,
      position: s.tq ? "window_center" : "right",
      avatarUrl: z,
      onRequestClose: S,
      clickTrap: I,
      children: e => ee(X(q({}, W), {
        avatarSrc: z,
        avatarDecorationSrc: Y,
        compact: g,
        onClick: v,
        onContextMenu: O,
        onMouseDown: e.onMouseDown,
        onKeyDown: e.onKeyDown,
        showCommunicationDisabledStyles: d,
        className: _,
        avatarImgRef: C
      }))
    })
  }) : (0, r.jsx)(p.Gt, {
    value: j,
    children: ee(X(q({}, W), {
      avatarSrc: z,
      avatarDecorationSrc: Y,
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

function ei(e) {
  let {
    message: t,
    avatar: n,
    username: i,
    usernameSpanId: a,
    usernameClassName: s,
    compact: c,
    showTimestamp: u,
    showTimestampOnHover: f,
    ariaLabelledBy: p,
    ariaDescribedBy: m,
    className: h,
    messageClassname: g,
    badges: E
  } = e, b = (0, l.yE)(t.flags, H.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null, y = (0, _.q)(b);
  return (0, r.jsxs)(r.Fragment, {
    children: [!c && n, (0, r.jsxs)(d.H, {
      className: o()(W.header, h),
      "aria-describedby": m,
      "aria-labelledby": p,
      children: [u && c && (0, r.jsx)(Z.Z, {
        id: (0, G.Dv)(t),
        compact: true,
        timestamp: t.timestamp,
        isVisibleOnlyOnHover: f,
        className: g,
        isInline: false,
        application: y
      }), c && n, (0, r.jsx)("span", {
        id: a,
        className: s,
        children: i
      }), u && !c && (0, r.jsx)(Z.Z, {
        id: (0, G.Dv)(t),
        timestamp: t.timestamp,
        className: g,
        application: y
      }), null != E && E.length > 0 ? (0, r.jsx)("div", {
        className: W.badgesContainer,
        children: E
      }) : null]
    })]
  })
}
let ea = e => {
  e || (0, b.z)()
};

function eo(e, t, n, r) {
  return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0
}
let es = Chunk473749.memo(function(e) {
    let {
      currentUserIsPremium: t,
      author: n
    } = e, i = (0, c.e7)([I.Z], () => {
      var e;
      return null == (e = I.Z.getUserProfile(n.id)) ? true : e.premiumSince
    });
    return (0, r.jsx)(u.u, {
      asContainer: true,
      shouldShow: null != i,
      text: Y.intl.formatToPlainString(Y.t["8zbGNR"], {
        date: i
      }),
      onTooltipShow: () => (0, C.Z)(n.id),
      children: (0, r.jsx)(d.P3F, {
        className: W.nitroAuthorBadgeContainer,
        onClick: () => ea(t),
        "aria-label": Y.intl.formatToPlainString(Y.t["8zbGNR"], {
          date: i
        }),
        children: (0, r.jsx)("img", {
          alt: "",
          className: W.nitroBadgeSvg,
          src: K
        })
      })
    })
  }),
  el = Chunk473749.memo(function(e) {
    let {
      message: t,
      repliedMessage: n,
      compact: a = false,
      renderPopout: s,
      showTimestampOnHover: f,
      roleIcon: p,
      subscribeToGroupId: _,
      hideTimestamp: m,
      hideGuildTag: g,
      className: b,
      channel: y,
      preview: v
    } = e, I = i.useMemo(() => null != s ? e => s(e, t) : true, [s, t]), [, T] = (0, h.ZP)(t.author.id, e.guildId), A = (0, c.e7)([D.Z, R.Z], () => {
      let n = R.Z.getGuild(e.guildId);
      return null != t.author && null != n && D.Z.canManageUser(H.Plq.MODERATE_MEMBERS, t.author, n)
    }, [t.author, e.guildId]), C = T && A, N = er({
      props: e,
      guildId: e.guildId,
      handleRenderPopout: I,
      showCommunicationDisabledStyles: C
    }), w = (0, c.e7)([P.ZP], () => {
      var t;
      return null != (t = e.displayCompactAvatars) ? t : P.ZP.displayCompactAvatars
    }), x = i.useMemo(() => (0, F.b)({
      message: t,
      channel: y,
      user: null == t ? true : t.author,
      compact: a,
      isRepliedMessage: false
    }), [t, y, a]), L = (0, c.e7)([R.Z], () => eo(a, w, p, R.Z.getGuild(e.guildId)), [a, w, p, e.guildId]), j = i.useMemo(() => {
      let e = [];
      return (0, l.yE)(t.flags, H.iLy.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(S.Z, {}, "suppress-notifications")), t.hasPotions() && e.push((0, r.jsx)(E.Z, {
        message: t
      })), e
    }, [t]), M = (0, G.XX)(t, _), k = (0, G.Dv)(t), U = m ? "".concat(M) : "".concat(M, " ").concat(k), Z = (null == n ? true : n.state) === O.Y.LOADED ? (0, G.Gq)(t) : true, B = true !== m;
    return (0, r.jsx)(ei, {
      message: t,
      avatar: N,
      username: (0, r.jsxs)(r.Fragment, {
        children: [C && (0, r.jsx)(u.u, {
          text: Y.intl.string(Y.t["AeYyL+"]),
          children: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(d.YlB, {
              size: "xxs",
              color: "currentColor",
              className: a ? W.compactCommunicationDisabled : W.communicationDisabled
            }), (0, r.jsx)(d.nn4, {
              children: Y.intl.string(Y.t.AmHag5)
            })]
          })
        }), (0, r.jsx)(et, X(q({}, e), {
          message: t,
          channel: y,
          compact: a,
          roleIconProps: p,
          renderPopout: I,
          preview: v,
          subscribeToGroupId: _,
          hideGuildTag: g
        }))]
      }),
      usernameSpanId: (0, G.XX)(t, _),
      usernameClassName: o()(W.headerText, {
        [W.hasRoleIcon]: 0 !== L,
        [W.hasBadges]: null != x || j.length > 0
      }),
      compact: a,
      showTimestamp: B,
      showTimestampOnHover: f,
      ariaLabelledBy: U,
      ariaDescribedBy: Z,
      className: b,
      badges: j
    })
  })