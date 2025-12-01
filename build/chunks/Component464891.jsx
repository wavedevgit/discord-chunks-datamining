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

function X(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(n) {
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
    className: _,
    avatarImgRef: p
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      ref: p,
      onClick: a,
      onContextMenu: s,
      onKeyDown: d,
      onMouseDown: l,
      onMouseEnter: c,
      onMouseLeave: u,
      src: t,
      "aria-hidden": true,
      className: o()(_, Y.avatar, {
        [Y.compact]: i,
        [Y.clickable]: null != a,
        [Y.communicationDisabledOpacity]: f
      }),
      alt: " "
    }), null == n || i ? null : (0, r.jsx)("img", {
      className: Y.avatarDecoration,
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
    onClickUsername: _,
    onContextMenu: p,
    displayCompactAvatars: m = false,
    onPopoutRequestClose: E,
    preview: b,
    subscribeToGroupId: y,
    hideGuildTag: O
  } = e, I = (0, j.ZP)(t, n), T = i.useMemo(() => (0, F.x)({
    message: t,
    channel: a,
    user: null == t ? true : t.author,
    compact: s,
    isRepliedMessage: false
  }), [t, a, s]), S = i.useRef(null), A = (0, c.e7)([P.Z], () => P.Z.getGuild(o)), C = i.useMemo(() => eo(s, m, l, A), [s, m, l, A]), N = i.useMemo(() => null == l ? null : 1 === C && null != A ? (0, r.jsx)(d.yRy, {
    targetElementRef: S,
    animation: d.yRy.Animation.TRANSLATE,
    align: "center",
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    position: "right",
    renderPopout: () => (0, r.jsx)(Z.Z, {
      roleIcon: l,
      guild: A
    }),
    clickTrap: true,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(v.Z, Q(q({
        ref: S
      }, l), {
        className: Y.roleIcon,
        onClick: t
      }))
    }
  }, "role-icon-children") : 2 === C ? (0, r.jsx)(v.Z, Q(q({}, l), {
    className: Y.roleIcon
  }), "role-icon-children") : null, [C, l, A]), R = (0, c.e7)([w.default], () => w.default.getCurrentUser()), D = i.useMemo(() => {
    let e = [],
      n = M.ZP.isPremium(t.author),
      i = M.ZP.isPremium(R),
      o = null == a ? true : a.isPrivate();
    return (0, k.R)(null != l, "Message Username") && n && !s && !o && e.push((0, r.jsx)(es, {
      currentUserIsPremium: i,
      author: t.author
    }, "nitro-author")), null != N && e.push(N), null != A && e.push((0, r.jsx)(g.Z, {
      guild: A,
      message: t
    }, "new-member")), null != a && null != A && e.push((0, r.jsx)(h.Z, {
      guild: A,
      channel: a,
      userId: t.author.id,
      messageId: t.id
    }, "connections")), e
  }, [t, a, l, s, N, A, R]);
  return null == I ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(U.Z, {
      message: t,
      channel: a,
      author: I,
      compact: s,
      roleIcon: l,
      showPopout: u,
      renderPopout: f,
      onClick: _,
      onContextMenu: p,
      onPopoutRequestClose: E,
      decorations: {
        [U.a.SYSTEM_TAG]: T,
        [U.a.BADGES]: D
      },
      previewGuildId: o,
      preview: b,
      subscribeToGroupId: y,
      hideGuildTag: O
    }), s && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("i", {
        className: Y.separator,
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
        className: Y.separator,
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
    className: p
  } = e, {
    message: h,
    author: m,
    compact: g = false,
    subscribeToGroupId: E,
    animate: b = true,
    onContextMenu: O,
    onClickAvatar: v,
    onPopoutRequestClose: I,
    showAvatarPopout: T
  } = o, C = i.useRef(null), [P, D] = i.useState(false), {
    analyticsLocations: M
  } = (0, _.ZP)(f.Z.AVATAR), k = (0, c.e7)([w.default], () => w.default.getCurrentUser()), j = (0, c.e7)([R.ZP], () => {
    var e;
    return null != (e = o.displayCompactAvatars) ? e : R.ZP.displayCompactAvatars
  }), U = (0, V.Z)(h), G = g ? J : $, {
    pendingAvatarDecoration: B
  } = (0, S.Z)({
    guildId: l
  }), Z = (0, y.Ys)({
    pendingValue: h.author.id === (null == k ? true : k.id) ? B : true,
    userValue: null == (t = h.author) ? true : t.avatarDecoration,
    guildValue: null == m ? true : m.guildMemberAvatarDecoration,
    guildId: l
  }), {
    avatarSrc: F,
    avatarDecorationSrc: W,
    eventHandlers: Y
  } = (0, A.Z)({
    userId: h.author.id,
    guildId: l,
    size: G,
    animateOnHover: null != E ? !P : !b,
    avatarDecorationOverride: Z,
    showPending: true
  }), K = h.isInteractionPlaceholder(), z = i.useMemo(() => {
    var e, t;
    return K && null == h.author.avatar && null == m.guildMemberAvatar && (null == (e = h.application) ? true : e.icon) != null ? null != (t = L.ZP.getApplicationIconURL({
      id: h.application.id,
      icon: h.application.icon,
      size: G,
      fallbackAvatar: false
    })) ? t : F : null != h.webhookId && null == m.guildMemberAvatar ? L.ZP.getUserAvatarURL({
      avatar: h.author.avatar,
      id: h.author.id,
      discriminator: h.author.discriminator,
      bot: true
    }, false, G) : F
  }, [K, h.author.avatar, h.author.id, h.author.discriminator, null == (n = h.application) ? true : n.icon, null == (a = h.application) ? true : a.id, h.webhookId, F, G, m.guildMemberAvatar]);
  if (i.useEffect(() => {
      if (null != E) return x.S.subscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(h.author.id), D), () => void x.S.unsubscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(h.author.id), D)
    }, [h.author.id, E]), !g || j) return null != u && null != T ? (0, r.jsx)(_.Gt, {
    value: M,
    children: (0, r.jsx)(N.Z, {
      targetElementRef: C,
      user: h.author,
      guildId: l,
      channelId: h.channel_id,
      messageId: h.id,
      shouldShow: T,
      shouldPreload: U,
      renderPopout: u,
      position: s.tq ? "window_center" : "right",
      avatarUrl: z,
      onRequestClose: I,
      clickTrap: T,
      children: e => ee(Q(q({}, Y), {
        avatarSrc: z,
        avatarDecorationSrc: W,
        compact: g,
        onClick: v,
        onContextMenu: O,
        onMouseDown: e.onMouseDown,
        onKeyDown: e.onKeyDown,
        showCommunicationDisabledStyles: d,
        className: p,
        avatarImgRef: C
      }))
    })
  }) : (0, r.jsx)(_.Gt, {
    value: M,
    children: ee(Q(q({}, Y), {
      avatarSrc: z,
      avatarDecorationSrc: W,
      compact: g,
      onClick: v,
      onContextMenu: O,
      onMouseDown: true,
      onKeyDown: true,
      showCommunicationDisabledStyles: d,
      className: p
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
    ariaLabelledBy: _,
    ariaDescribedBy: h,
    className: m,
    messageClassname: g,
    badges: E
  } = e, b = (0, l.yE)(t.flags, H.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null, y = (0, p.q)(b);
  return (0, r.jsxs)(r.Fragment, {
    children: [!c && n, (0, r.jsxs)(d.H, {
      className: o()(Y.header, m),
      "aria-describedby": h,
      "aria-labelledby": _,
      children: [u && c && (0, r.jsx)(B.Z, {
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
      }), u && !c && (0, r.jsx)(B.Z, {
        id: (0, G.Dv)(t),
        timestamp: t.timestamp,
        className: g,
        application: y
      }), null != E && E.length > 0 ? (0, r.jsx)("div", {
        className: Y.badgesContainer,
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
    } = e, i = (0, c.e7)([T.Z], () => {
      var e;
      return null == (e = T.Z.getUserProfile(n.id)) ? true : e.premiumSince
    });
    return (0, r.jsx)(u.u, {
      asContainer: true,
      shouldShow: null != i,
      text: W.intl.formatToPlainString(W.t["8zbGNR"], {
        date: i
      }),
      onTooltipShow: () => (0, C.Z)(n.id),
      children: (0, r.jsx)(d.P3F, {
        className: Y.nitroAuthorBadgeContainer,
        onClick: () => ea(t),
        "aria-label": W.intl.formatToPlainString(W.t["8zbGNR"], {
          date: i
        }),
        children: (0, r.jsx)("img", {
          alt: "",
          className: Y.nitroBadgeSvg,
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
      roleIcon: _,
      subscribeToGroupId: p,
      hideTimestamp: h,
      hideGuildTag: g,
      className: b,
      channel: y,
      preview: v
    } = e, T = i.useMemo(() => null != s ? e => s(e, t) : true, [s, t]), [, S] = (0, m.ZP)(t.author.id, e.guildId), A = (0, c.e7)([D.Z, P.Z], () => {
      let n = P.Z.getGuild(e.guildId);
      return null != t.author && null != n && D.Z.canManageUser(H.Plq.MODERATE_MEMBERS, t.author, n)
    }, [t.author, e.guildId]), C = S && A, N = er({
      props: e,
      guildId: e.guildId,
      handleRenderPopout: T,
      showCommunicationDisabledStyles: C
    }), w = (0, c.e7)([R.ZP], () => {
      var t;
      return null != (t = e.displayCompactAvatars) ? t : R.ZP.displayCompactAvatars
    }), L = i.useMemo(() => (0, F.b)({
      message: t,
      channel: y,
      user: null == t ? true : t.author,
      compact: a,
      isRepliedMessage: false
    }), [t, y, a]), x = (0, c.e7)([P.Z], () => eo(a, w, _, P.Z.getGuild(e.guildId)), [a, w, _, e.guildId]), M = i.useMemo(() => {
      let e = [];
      return (0, l.yE)(t.flags, H.iLy.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(I.Z, {}, "suppress-notifications")), t.hasPotions() && e.push((0, r.jsx)(E.Z, {
        message: t
      })), e
    }, [t]), k = (0, G.XX)(t, p), j = (0, G.Dv)(t), U = h ? "".concat(k) : "".concat(k, " ").concat(j), B = (null == n ? true : n.state) === O.Y.LOADED ? (0, G.Gq)(t) : true, Z = true !== h;
    return (0, r.jsx)(ei, {
      message: t,
      avatar: N,
      username: (0, r.jsxs)(r.Fragment, {
        children: [C && (0, r.jsx)(u.u, {
          text: W.intl.string(W.t["AeYyL+"]),
          children: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(d.YlB, {
              size: "xxs",
              color: "currentColor",
              className: a ? Y.compactCommunicationDisabled : Y.communicationDisabled
            }), (0, r.jsx)(d.nn4, {
              children: W.intl.string(W.t.AmHag5)
            })]
          })
        }), (0, r.jsx)(et, Q(q({}, e), {
          message: t,
          channel: y,
          compact: a,
          roleIconProps: _,
          renderPopout: T,
          preview: v,
          subscribeToGroupId: p,
          hideGuildTag: g
        }))]
      }),
      usernameSpanId: (0, G.XX)(t, p),
      usernameClassName: o()(Y.headerText, {
        [Y.hasRoleIcon]: 0 !== x,
        [Y.hasBadges]: null != L || M.length > 0
      }),
      compact: a,
      showTimestamp: Z,
      showTimestampOnHover: f,
      ariaLabelledBy: U,
      ariaDescribedBy: B,
      className: b,
      badges: M
    })
  })