/** Chunk was on web.js **/
/** chunk id: 464891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CF: () => et,
  ZP: () => es,
  nD: () => er
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
  Chunk549578 = require("./549578.js"),
  Chunk121282 = require("./121282.js");

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let X = 32,
  J = 80;

function $(e) {
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
      className: o()(p, Y.avatar, {
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
let ee = Chunk473749.memo(function(e) {
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
    displayCompactAvatars: m = false,
    onPopoutRequestClose: E,
    preview: b,
    subscribeToGroupId: y,
    hideGuildTag: v
  } = e, S = (0, M.ZP)(t, n), I = i.useMemo(() => (0, F.x)({
    message: t,
    channel: a,
    user: null == t ? true : t.author,
    compact: s,
    isRepliedMessage: false
  }), [t, a, s]), T = i.useRef(null), C = (0, c.e7)([P.Z], () => P.Z.getGuild(o)), A = i.useMemo(() => ea(s, m, l, C), [s, m, l, C]), N = i.useMemo(() => null == l ? null : 1 === A && null != C ? (0, r.jsx)(d.yRy, {
    targetElementRef: T,
    animation: d.yRy.Animation.TRANSLATE,
    align: "center",
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    position: "right",
    renderPopout: () => (0, r.jsx)(Z.Z, {
      roleIcon: l,
      guild: C
    }),
    clickTrap: true,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(O.Z, Q(z({
        ref: T
      }, l), {
        className: Y.roleIcon,
        onClick: t
      }))
    }
  }, "role-icon-children") : 2 === A ? (0, r.jsx)(O.Z, Q(z({}, l), {
    className: Y.roleIcon
  }), "role-icon-children") : null, [A, l, C]), w = (0, c.e7)([R.default], () => R.default.getCurrentUser()), D = i.useMemo(() => {
    let e = [],
      n = L.ZP.isPremium(t.author),
      i = L.ZP.isPremium(w),
      o = null == a ? true : a.isPrivate();
    return (0, j.R)(null != l, "Message Username") && n && !s && !o && e.push((0, r.jsx)(eo, {
      currentUserIsPremium: i,
      author: t.author
    }, "nitro-author")), null != N && e.push(N), null != C && e.push((0, r.jsx)(g.Z, {
      guild: C,
      message: t
    }, "new-member")), null != a && null != C && e.push((0, r.jsx)(h.Z, {
      guild: C,
      channel: a,
      userId: t.author.id,
      messageId: t.id
    }, "connections")), e
  }, [t, a, l, s, N, C, w]);
  return null == S ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(k.Z, {
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
        [k.a.SYSTEM_TAG]: I,
        [k.a.BADGES]: D
      },
      previewGuildId: o,
      preview: b,
      subscribeToGroupId: y,
      hideGuildTag: v
    }), s && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("i", {
        className: Y.separator,
        children: ":"
      }), " "]
    })]
  })
});

function et(e, t, n) {
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
    children: [(0, r.jsx)(k.Z, {
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

function en(e) {
  var t, n, a;
  let {
    props: o,
    guildId: l,
    handleRenderPopout: u,
    showCommunicationDisabledStyles: d = false,
    className: _
  } = e, {
    message: h,
    author: m,
    compact: g = false,
    subscribeToGroupId: E,
    animate: y = true,
    onContextMenu: O,
    onClickAvatar: v,
    onPopoutRequestClose: S,
    showAvatarPopout: C
  } = o, P = i.useRef(null), [w, L] = i.useState(false), {
    analyticsLocations: j
  } = (0, p.ZP)(f.Z.AVATAR), M = (0, c.e7)([R.default], () => R.default.getCurrentUser()), k = (0, c.e7)([N.ZP], () => {
    var e;
    return null != (e = o.displayCompactAvatars) ? e : N.ZP.displayCompactAvatars
  }), U = (0, B.Z)(h), G = g ? X : J, {
    pendingAvatarDecoration: Z
  } = (0, I.Z)({
    guildId: l
  }), F = (0, b.Ys)({
    pendingValue: h.author.id === (null == M ? true : M.id) ? Z : true,
    userValue: null == (t = h.author) ? true : t.avatarDecoration,
    guildValue: null == m ? true : m.guildMemberAvatarDecoration,
    guildId: l
  }), {
    avatarSrc: H,
    avatarDecorationSrc: Y,
    eventHandlers: W
  } = (0, T.Z)({
    userId: h.author.id,
    guildId: l,
    size: G,
    animateOnHover: null != E ? !w : !y,
    avatarDecorationOverride: F,
    showPending: true
  }), K = h.isInteractionPlaceholder(), q = i.useMemo(() => {
    var e, t;
    return K && null == h.author.avatar && null == m.guildMemberAvatar && (null == (e = h.application) ? true : e.icon) != null ? null != (t = D.ZP.getApplicationIconURL({
      id: h.application.id,
      icon: h.application.icon,
      size: G,
      fallbackAvatar: false
    })) ? t : H : null != h.webhookId && null == m.guildMemberAvatar ? D.ZP.getUserAvatarURL({
      avatar: h.author.avatar,
      id: h.author.id,
      discriminator: h.author.discriminator,
      bot: true
    }, false, G) : H
  }, [K, h.author.avatar, h.author.id, h.author.discriminator, null == (n = h.application) ? true : n.icon, null == (a = h.application) ? true : a.id, h.webhookId, H, G, m.guildMemberAvatar]);
  if (i.useEffect(() => {
      if (null != E) return x.S.subscribeKeyed(V.LPv.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(h.author.id), L), () => void x.S.unsubscribeKeyed(V.LPv.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(h.author.id), L)
    }, [h.author.id, E]), !g || k) return null != u && null != C ? (0, r.jsx)(p.Gt, {
    value: j,
    children: (0, r.jsx)(A.Z, {
      targetElementRef: P,
      user: h.author,
      guildId: l,
      channelId: h.channel_id,
      messageId: h.id,
      shouldShow: C,
      shouldPreload: U,
      renderPopout: u,
      position: s.tq ? "window_center" : "right",
      avatarUrl: q,
      onRequestClose: S,
      clickTrap: C,
      children: e => $(Q(z({}, W), {
        avatarSrc: q,
        avatarDecorationSrc: Y,
        compact: g,
        onClick: v,
        onContextMenu: O,
        onMouseDown: e.onMouseDown,
        onKeyDown: e.onKeyDown,
        showCommunicationDisabledStyles: d,
        className: _,
        avatarImgRef: P
      }))
    })
  }) : (0, r.jsx)(p.Gt, {
    value: j,
    children: $(Q(z({}, W), {
      avatarSrc: q,
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

function er(e) {
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
    ariaDescribedBy: h,
    className: m,
    messageClassname: g,
    badges: E
  } = e, b = (0, l.yE)(t.flags, V.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null, y = (0, _.q)(b);
  return (0, r.jsxs)(r.Fragment, {
    children: [!c && n, (0, r.jsxs)(d.H, {
      className: o()(Y.header, m),
      "aria-describedby": h,
      "aria-labelledby": p,
      children: [u && c && (0, r.jsx)(G.Z, {
        id: (0, U.Dv)(t),
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
      }), u && !c && (0, r.jsx)(G.Z, {
        id: (0, U.Dv)(t),
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
let ei = e => {
  e || (0, E.z)()
};

function ea(e, t, n, r) {
  return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0
}
let eo = Chunk473749.memo(function(e) {
    let {
      currentUserIsPremium: t,
      author: n
    } = e, i = (0, c.e7)([S.Z], () => {
      var e;
      return null == (e = S.Z.getUserProfile(n.id)) ? true : e.premiumSince
    });
    return (0, r.jsx)(u.u, {
      asContainer: true,
      shouldShow: null != i,
      text: H.intl.formatToPlainString(H.t["8zbGNR"], {
        date: i
      }),
      onTooltipShow: () => (0, C.Z)(n.id),
      children: (0, r.jsx)(d.P3F, {
        className: Y.nitroAuthorBadgeContainer,
        onClick: () => ei(t),
        "aria-label": H.intl.formatToPlainString(H.t["8zbGNR"], {
          date: i
        }),
        children: (0, r.jsx)("img", {
          alt: "",
          className: Y.nitroBadgeSvg,
          src: W
        })
      })
    })
  }),
  es = Chunk473749.memo(function(e) {
    let {
      message: t,
      repliedMessage: n,
      compact: a = false,
      renderPopout: s,
      showTimestampOnHover: f,
      roleIcon: p,
      subscribeToGroupId: _,
      hideTimestamp: h,
      hideGuildTag: g,
      className: E,
      channel: b,
      preview: O
    } = e, S = i.useMemo(() => null != s ? e => s(e, t) : true, [s, t]), [, I] = (0, m.ZP)(t.author.id, e.guildId), T = (0, c.e7)([w.Z, P.Z], () => {
      let n = P.Z.getGuild(e.guildId);
      return null != t.author && null != n && w.Z.canManageUser(V.Plq.MODERATE_MEMBERS, t.author, n)
    }, [t.author, e.guildId]), C = I && T, A = en({
      props: e,
      guildId: e.guildId,
      handleRenderPopout: S,
      showCommunicationDisabledStyles: C
    }), R = (0, c.e7)([N.ZP], () => {
      var t;
      return null != (t = e.displayCompactAvatars) ? t : N.ZP.displayCompactAvatars
    }), D = i.useMemo(() => (0, F.b)({
      message: t,
      channel: b,
      user: null == t ? true : t.author,
      compact: a,
      isRepliedMessage: false
    }), [t, b, a]), x = (0, c.e7)([P.Z], () => ea(a, R, p, P.Z.getGuild(e.guildId)), [a, R, p, e.guildId]), L = i.useMemo(() => {
      let e = [];
      return (0, l.yE)(t.flags, V.iLy.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(v.Z, {}, "suppress-notifications")), e
    }, [t]), j = (0, U.XX)(t, _), M = (0, U.Dv)(t), k = h ? "".concat(j) : "".concat(j, " ").concat(M), G = (null == n ? true : n.state) === y.Y.LOADED ? (0, U.Gq)(t) : true, Z = true !== h;
    return (0, r.jsx)(er, {
      message: t,
      avatar: A,
      username: (0, r.jsxs)(r.Fragment, {
        children: [C && (0, r.jsx)(u.u, {
          text: H.intl.string(H.t["AeYyL+"]),
          children: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(d.YlB, {
              size: "xxs",
              color: "currentColor",
              className: a ? Y.compactCommunicationDisabled : Y.communicationDisabled
            }), (0, r.jsx)(d.nn4, {
              children: H.intl.string(H.t.AmHag5)
            })]
          })
        }), (0, r.jsx)(ee, Q(z({}, e), {
          message: t,
          channel: b,
          compact: a,
          roleIconProps: p,
          renderPopout: S,
          preview: O,
          subscribeToGroupId: _,
          hideGuildTag: g
        }))]
      }),
      usernameSpanId: (0, U.XX)(t, _),
      usernameClassName: o()(Y.headerText, {
        [Y.hasRoleIcon]: 0 !== x,
        [Y.hasBadges]: null != D || L.length > 0
      }),
      compact: a,
      showTimestamp: Z,
      showTimestampOnHover: f,
      ariaLabelledBy: k,
      ariaDescribedBy: G,
      className: E,
      badges: L
    })
  })