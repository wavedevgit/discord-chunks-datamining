/** Chunk was on web.js **/
/** chunk id: 464891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CF: () => ee,
  ZP: () => eo,
  nD: () => en
}), require("./539854.js"), require("./388685.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
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
  Chunk869765 = require("./869765.js"),
  Chunk48950 = require("./48950.jsx"),
  Chunk243317 = require("./243317.jsx"),
  Chunk621853 = require("./621853.js"),
  Chunk518950 = require("./518950.js"),
  Chunk484459 = require("./484459.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk740492 = require("./740492.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk585483 = require("./585483.js"),
  Chunk630388 = require("./630388.js"),
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

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let X = 32,
  Q = 80;

function J(e) {
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
      className: o()(_, H.avatar, {
        [H.compact]: i,
        [H.clickable]: null != a,
        [H.communicationDisabledOpacity]: f
      }),
      alt: " "
    }), null == n || i ? null : (0, r.jsx)("img", {
      className: H.avatarDecoration,
      src: n,
      alt: " ",
      "aria-hidden": true
    })]
  })
}
let $ = Chunk647438.memo(function(e) {
  let {
    message: t,
    author: n,
    channel: a,
    guildId: o,
    compact: s = false,
    roleIconProps: c,
    showUsernamePopout: d,
    renderPopout: f,
    onClickUsername: _,
    onContextMenu: h,
    displayCompactAvatars: g = false,
    onPopoutRequestClose: E,
    preview: b,
    subscribeToGroupId: O,
    hideGuildTag: v
  } = e, I = (0, M.ZP)(t, n), T = i.useMemo(() => (0, B.x)({
    message: t,
    channel: a,
    user: null == t ? true : t.author,
    compact: s,
    isRepliedMessage: false
  }), [t, a, s]), S = i.useRef(null), A = (0, l.e7)([C.Z], () => C.Z.getGuild(o)), N = i.useMemo(() => ei(s, g, c, A), [s, g, c, A]), P = i.useMemo(() => null == c ? null : 1 === N && null != A ? (0, r.jsx)(u.yRy, {
    targetElementRef: S,
    animation: u.yRy.Animation.TRANSLATE,
    align: "center",
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    position: "right",
    renderPopout: () => (0, r.jsx)(G.Z, {
      roleIcon: c,
      guild: A
    }),
    clickTrap: true,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(y.Z, q(K({
        ref: S
      }, c), {
        className: H.roleIcon,
        onClick: t
      }))
    }
  }, "role-icon-children") : 2 === N ? (0, r.jsx)(y.Z, q(K({}, c), {
    className: H.roleIcon
  }), "role-icon-children") : null, [N, c, A]), w = (0, l.e7)([R.default], () => R.default.getCurrentUser()), D = i.useMemo(() => {
    let e = [],
      n = L.ZP.isPremium(t.author),
      i = L.ZP.isPremium(w),
      o = null == a ? true : a.isPrivate();
    return (0, x.R)(null != c, "Message Username") && n && !s && !o && e.push((0, r.jsx)(ea, {
      currentUserIsPremium: i,
      author: t.author
    }, "nitro-author")), null != P && e.push(P), null != A && e.push((0, r.jsx)(m.Z, {
      guild: A,
      message: t
    }, "new-member")), null != a && null != A && e.push((0, r.jsx)(p.Z, {
      guild: A,
      channel: a,
      userId: t.author.id,
      messageId: t.id
    }, "connections")), e
  }, [t, a, c, s, P, A, w]);
  return null == I ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(k.Z, {
      message: t,
      channel: a,
      author: I,
      compact: s,
      roleIcon: c,
      showPopout: d,
      renderPopout: f,
      onClick: _,
      onContextMenu: h,
      onPopoutRequestClose: E,
      decorations: {
        [k.a.SYSTEM_TAG]: T,
        [k.a.BADGES]: D
      },
      renderRemixTag: true,
      previewGuildId: o,
      preview: b,
      subscribeToGroupId: O,
      hideGuildTag: v
    }), s && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("i", {
        className: H.separator,
        children: ":"
      }), " "]
    })]
  })
});

function ee(e, t, n) {
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
      preview: true,
      renderRemixTag: true
    }), s && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("i", {
        className: H.separator,
        children: ":"
      }), " "]
    })]
  })
}

function et(e) {
  var t, n;
  let {
    props: a,
    guildId: o,
    handleRenderPopout: c,
    showCommunicationDisabledStyles: u = false,
    className: _
  } = e, {
    message: p,
    author: h,
    compact: m = false,
    subscribeToGroupId: g,
    animate: E = true,
    onContextMenu: b,
    onClickAvatar: y,
    onPopoutRequestClose: O,
    showAvatarPopout: v
  } = a, T = i.useRef(null), [C, N] = i.useState(false), {
    analyticsLocations: R
  } = (0, f.ZP)(d.Z.AVATAR), D = (0, l.e7)([A.ZP], () => {
    var e;
    return null != (e = a.displayCompactAvatars) ? e : A.ZP.displayCompactAvatars
  }), L = (0, Z.Z)(p), x = m ? X : Q, {
    avatarSrc: M,
    avatarDecorationSrc: k,
    eventHandlers: j
  } = (0, I.Z)({
    userId: p.author.id,
    guildId: o,
    size: x,
    animateOnHover: null != g ? !C : !E,
    showPending: true
  }), U = p.isInteractionPlaceholder(), G = i.useMemo(() => {
    var e, t;
    return U && null == p.author.avatar && null == h.guildMemberAvatar && (null == (e = p.application) ? true : e.icon) != null ? null != (t = P.ZP.getApplicationIconURL({
      id: p.application.id,
      icon: p.application.icon,
      size: x,
      fallbackAvatar: false
    })) ? t : M : null != p.webhookId && null == h.guildMemberAvatar ? P.ZP.getUserAvatarURL({
      avatar: p.author.avatar,
      id: p.author.id,
      discriminator: p.author.discriminator,
      bot: true
    }, false, x) : M
  }, [U, p.author.avatar, p.author.id, p.author.discriminator, null == (t = p.application) ? true : t.icon, null == (n = p.application) ? true : n.id, p.webhookId, M, x, h.guildMemberAvatar]);
  if (i.useEffect(() => {
      if (null != g) return w.S.subscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(p.author.id), N), () => void w.S.unsubscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(p.author.id), N)
    }, [p.author.id, g]), !m || D) return null != c && null != v ? (0, r.jsx)(f.Gt, {
    value: R,
    children: (0, r.jsx)(S.Z, {
      targetElementRef: T,
      user: p.author,
      guildId: o,
      channelId: p.channel_id,
      messageId: p.id,
      shouldShow: v,
      shouldPreload: L,
      renderPopout: c,
      position: s.tq ? "window_center" : "right",
      avatarUrl: G,
      onRequestClose: O,
      clickTrap: v,
      children: e => J(q(K({}, j), {
        avatarSrc: G,
        avatarDecorationSrc: k,
        compact: m,
        onClick: y,
        onContextMenu: b,
        onMouseDown: e.onMouseDown,
        onKeyDown: e.onKeyDown,
        showCommunicationDisabledStyles: u,
        className: _,
        avatarImgRef: T
      }))
    })
  }) : (0, r.jsx)(f.Gt, {
    value: R,
    children: J(q(K({}, j), {
      avatarSrc: G,
      avatarDecorationSrc: k,
      compact: m,
      onClick: y,
      onContextMenu: b,
      onMouseDown: true,
      onKeyDown: true,
      showCommunicationDisabledStyles: u,
      className: _
    }))
  })
}

function en(e) {
  let {
    message: t,
    avatar: n,
    username: i,
    usernameSpanId: a,
    usernameClassName: s,
    compact: l,
    showTimestamp: c,
    showTimestampOnHover: d,
    ariaLabelledBy: f,
    ariaDescribedBy: p,
    className: h,
    messageClassname: m,
    badges: g
  } = e, E = (0, D.yE)(t.flags, F.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null, b = (0, _.q)(E);
  return (0, r.jsxs)(r.Fragment, {
    children: [!l && n, (0, r.jsxs)(u.H, {
      className: o()(H.header, h),
      "aria-describedby": p,
      "aria-labelledby": f,
      children: [c && l && (0, r.jsx)(U.Z, {
        id: (0, j.Dv)(t),
        compact: true,
        timestamp: t.timestamp,
        isVisibleOnlyOnHover: d,
        className: m,
        isInline: false,
        application: b
      }), l && n, (0, r.jsx)("span", {
        id: a,
        className: s,
        children: i
      }), c && !l && (0, r.jsx)(U.Z, {
        id: (0, j.Dv)(t),
        timestamp: t.timestamp,
        className: m,
        application: b
      }), null != g && g.length > 0 ? (0, r.jsx)("div", {
        className: H.badgesContainer,
        children: g
      }) : null]
    })]
  })
}
let er = e => {
  e || (0, E.z)()
};

function ei(e, t, n, r) {
  return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0
}
let ea = Chunk647438.memo(function(e) {
    let {
      currentUserIsPremium: t,
      author: n
    } = e, i = (0, l.e7)([v.Z], () => {
      var e;
      return null == (e = v.Z.getUserProfile(n.id)) ? true : e.premiumSince
    });
    return (0, r.jsx)(c.u, {
      asContainer: true,
      shouldShow: null != i,
      text: V.intl.formatToPlainString(V.t["8zbGNR"], {
        date: i
      }),
      onTooltipShow: () => (0, T.Z)(n.id),
      children: (0, r.jsx)(u.P3F, {
        className: H.nitroAuthorBadgeContainer,
        onClick: () => er(t),
        "aria-label": V.intl.formatToPlainString(V.t["8zbGNR"], {
          date: i
        }),
        children: (0, r.jsx)("img", {
          alt: "",
          className: H.nitroBadgeSvg,
          src: Y
        })
      })
    })
  }),
  eo = Chunk647438.memo(function(e) {
    let {
      message: t,
      repliedMessage: n,
      compact: a = false,
      renderPopout: s,
      showTimestampOnHover: d,
      roleIcon: f,
      subscribeToGroupId: _,
      hideTimestamp: p,
      hideGuildTag: m,
      className: E,
      channel: y,
      preview: v
    } = e, I = i.useMemo(() => null != s ? e => s(e, t) : true, [s, t]), [, T] = (0, h.ZP)(t.author.id, e.guildId), S = (0, l.e7)([N.Z, C.Z], () => {
      let n = C.Z.getGuild(e.guildId);
      return null != t.author && null != n && N.Z.canManageUser(F.Plq.MODERATE_MEMBERS, t.author, n)
    }, [t.author, e.guildId]), R = T && S, P = et({
      props: e,
      guildId: e.guildId,
      handleRenderPopout: I,
      showCommunicationDisabledStyles: R
    }), w = (0, l.e7)([A.ZP], () => {
      var t;
      return null != (t = e.displayCompactAvatars) ? t : A.ZP.displayCompactAvatars
    }), L = i.useMemo(() => (0, B.b)({
      message: t,
      channel: y,
      user: null == t ? true : t.author,
      compact: a,
      isRepliedMessage: false
    }), [t, y, a]), x = (0, l.e7)([C.Z], () => ei(a, w, f, C.Z.getGuild(e.guildId)), [a, w, f, e.guildId]), M = i.useMemo(() => {
      let e = [];
      return (0, D.yE)(t.flags, F.iLy.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(O.Z, {}, "suppress-notifications")), t.hasPotions() && e.push((0, r.jsx)(g.Z, {
        message: t
      })), e
    }, [t]), k = (0, j.XX)(t, _), U = (0, j.Dv)(t), G = p ? "".concat(k) : "".concat(k, " ").concat(U), Z = (null == n ? true : n.state) === b.Y.LOADED ? (0, j.Gq)(t) : true, Y = true !== p;
    return (0, r.jsx)(en, {
      message: t,
      avatar: P,
      username: (0, r.jsxs)(r.Fragment, {
        children: [R && (0, r.jsx)(c.u, {
          text: V.intl.string(V.t["AeYyL+"]),
          children: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.YlB, {
              size: "xxs",
              color: "currentColor",
              className: a ? H.compactCommunicationDisabled : H.communicationDisabled
            }), (0, r.jsx)(u.nn4, {
              children: V.intl.string(V.t.AmHag5)
            })]
          })
        }), (0, r.jsx)($, q(K({}, e), {
          message: t,
          channel: y,
          compact: a,
          roleIconProps: f,
          renderPopout: I,
          preview: v,
          subscribeToGroupId: _,
          hideGuildTag: m
        }))]
      }),
      usernameSpanId: (0, j.XX)(t, _),
      usernameClassName: o()(H.headerText, {
        [H.hasRoleIcon]: 0 !== x,
        [H.hasBadges]: null != L || M.length > 0
      }),
      compact: a,
      showTimestamp: Y,
      showTimestampOnHover: d,
      ariaLabelledBy: G,
      ariaDescribedBy: Z,
      className: E,
      badges: M
    })
  })