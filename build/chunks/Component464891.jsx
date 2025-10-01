/** Chunk was on web.js **/
/** chunk id: 464891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CF: () => $,
  ZP: () => ea,
  nD: () => et
}), require("./539854.js"), require("./388685.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk366030 = require("./366030.jsx"),
  Chunk91218 = require("./91218.jsx"),
  Chunk71619 = require("./71619.js"),
  Chunk340797 = require("./340797.jsx"),
  Chunk397589 = require("./397589.jsx"),
  Chunk98278 = require("./98278.js"),
  Chunk869765 = require("./869765.js"),
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
  Chunk136907 = require("./136907.js"),
  Chunk121282 = require("./121282.js");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let q = 32,
  X = 80;

function Q(e) {
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
      className: o()(_, V.avatar, {
        [V.compact]: i,
        [V.clickable]: null != a,
        [V.communicationDisabledOpacity]: f
      }),
      alt: " "
    }), null == n || i ? null : (0, r.jsx)("img", {
      className: V.avatarDecoration,
      src: n,
      alt: " ",
      "aria-hidden": true
    })]
  })
}
let J = Chunk647438.memo(function(e) {
  let {
    message: t,
    author: n,
    channel: a,
    guildId: o,
    compact: s = false,
    roleIconProps: u,
    showUsernamePopout: d,
    renderPopout: f,
    onClickUsername: h,
    onContextMenu: g,
    displayCompactAvatars: E = false,
    onPopoutRequestClose: b,
    preview: y,
    subscribeToGroupId: O,
    hideGuildTag: v
  } = e, I = (0, x.ZP)(t, n), T = i.useMemo(() => (0, G.x)({
    message: t,
    channel: a,
    user: null == t ? true : t.author,
    compact: s,
    isRepliedMessage: false
  }), [t, a, s]), S = i.useRef(null), C = (0, l.e7)([A.Z], () => A.Z.getGuild(o)), R = i.useMemo(() => er(s, E, u, C), [s, E, u, C]), P = i.useMemo(() => null == u ? null : 1 === R && null != C ? (0, r.jsx)(c.yRy, {
    targetElementRef: S,
    animation: c.yRy.Animation.TRANSLATE,
    align: "center",
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    position: "right",
    renderPopout: () => (0, r.jsx)(U.Z, {
      roleIcon: u,
      guild: C
    }),
    clickTrap: true,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(p.Z, z(W({
        ref: S
      }, u), {
        className: V.roleIcon,
        onClick: t
      }))
    }
  }, "role-icon-children") : 2 === R ? (0, r.jsx)(p.Z, z(W({}, u), {
    className: V.roleIcon
  }), "role-icon-children") : null, [R, u, C]), w = (0, l.e7)([N.default], () => N.default.getCurrentUser()), M = i.useMemo(() => {
    let e = [],
      n = D.ZP.isPremium(t.author),
      i = D.ZP.isPremium(w),
      o = null == a ? true : a.isPrivate();
    return (0, L.R)(null != u, "Message Username") && n && !s && !o && e.push((0, r.jsx)(ei, {
      currentUserIsPremium: i,
      author: t.author
    }, "nitro-author")), null != P && e.push(P), null != C && e.push((0, r.jsx)(m.Z, {
      guild: C,
      message: t
    }, "new-member")), null != a && null != C && e.push((0, r.jsx)(_.Z, {
      guild: C,
      channel: a,
      userId: t.author.id,
      messageId: t.id
    }, "connections")), e
  }, [t, a, u, s, P, C, w]);
  return null == I ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(j.Z, {
      message: t,
      channel: a,
      author: I,
      compact: s,
      roleIcon: u,
      showPopout: d,
      renderPopout: f,
      onClick: h,
      onContextMenu: g,
      onPopoutRequestClose: b,
      decorations: {
        [j.a.SYSTEM_TAG]: T,
        [j.a.BADGES]: M
      },
      renderRemixTag: true,
      previewGuildId: o,
      preview: y,
      subscribeToGroupId: O,
      hideGuildTag: v
    }), s && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("i", {
        className: V.separator,
        children: ":"
      }), " "]
    })]
  })
});

function $(e, t, n) {
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
    children: [(0, r.jsx)(j.Z, {
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
        className: V.separator,
        children: ":"
      }), " "]
    })]
  })
}

function ee(e) {
  var t, n;
  let {
    props: a,
    guildId: o,
    handleRenderPopout: c,
    showCommunicationDisabledStyles: f = false,
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
    showAvatarPopout: I
  } = a, A = i.useRef(null), [C, N] = i.useState(false), {
    analyticsLocations: w
  } = (0, d.ZP)(u.Z.AVATAR), D = (0, l.e7)([S.ZP], () => {
    var e;
    return null != (e = a.displayCompactAvatars) ? e : S.ZP.displayCompactAvatars
  }), L = (0, B.Z)(p), x = m ? q : X, {
    avatarSrc: j,
    avatarDecorationSrc: M,
    eventHandlers: k
  } = (0, v.Z)({
    userId: p.author.id,
    guildId: o,
    size: x,
    animateOnHover: null != g ? !C : !E,
    showPending: true
  }), U = p.isInteractionPlaceholder(), G = i.useMemo(() => {
    var e, t;
    return U && null == p.author.avatar && null == h.guildMemberAvatar && (null == (e = p.application) ? true : e.icon) != null ? null != (t = R.ZP.getApplicationIconURL({
      id: p.application.id,
      icon: p.application.icon,
      size: x,
      fallbackAvatar: false
    })) ? t : j : null != p.webhookId && null == h.guildMemberAvatar ? R.ZP.getUserAvatarURL({
      avatar: p.author.avatar,
      id: p.author.id,
      discriminator: p.author.discriminator,
      bot: true
    }, false, x) : j
  }, [U, p.author.avatar, p.author.id, p.author.discriminator, null == (t = p.application) ? true : t.icon, null == (n = p.application) ? true : n.id, p.webhookId, j, x, h.guildMemberAvatar]);
  if (i.useEffect(() => {
      if (null != g) return P.S.subscribeKeyed(Z.LPv.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(p.author.id), N), () => void P.S.unsubscribeKeyed(Z.LPv.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(p.author.id), N)
    }, [p.author.id, g]), !m || D) return null != c && null != I ? (0, r.jsx)(d.Gt, {
    value: w,
    children: (0, r.jsx)(T.Z, {
      targetElementRef: A,
      user: p.author,
      guildId: o,
      channelId: p.channel_id,
      messageId: p.id,
      shouldShow: I,
      shouldPreload: L,
      renderPopout: c,
      position: s.tq ? "window_center" : "right",
      avatarUrl: G,
      onRequestClose: O,
      clickTrap: I,
      children: e => Q(z(W({}, k), {
        avatarSrc: G,
        avatarDecorationSrc: M,
        compact: m,
        onClick: y,
        onContextMenu: b,
        onMouseDown: e.onMouseDown,
        onKeyDown: e.onKeyDown,
        showCommunicationDisabledStyles: f,
        className: _,
        avatarImgRef: A
      }))
    })
  }) : (0, r.jsx)(d.Gt, {
    value: w,
    children: Q(z(W({}, k), {
      avatarSrc: G,
      avatarDecorationSrc: M,
      compact: m,
      onClick: y,
      onContextMenu: b,
      onMouseDown: true,
      onKeyDown: true,
      showCommunicationDisabledStyles: f,
      className: _
    }))
  })
}

function et(e) {
  let {
    message: t,
    avatar: n,
    username: i,
    usernameSpanId: a,
    usernameClassName: s,
    compact: l,
    showTimestamp: u,
    showTimestampOnHover: d,
    ariaLabelledBy: _,
    ariaDescribedBy: p,
    className: h,
    messageClassname: m,
    badges: g
  } = e, E = (0, w.yE)(t.flags, Z.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null, b = (0, f.q)(E);
  return (0, r.jsxs)(r.Fragment, {
    children: [!l && n, (0, r.jsxs)(c.H, {
      className: o()(V.header, h),
      "aria-describedby": p,
      "aria-labelledby": _,
      children: [u && l && (0, r.jsx)(k.Z, {
        id: (0, M.Dv)(t),
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
      }), u && !l && (0, r.jsx)(k.Z, {
        id: (0, M.Dv)(t),
        timestamp: t.timestamp,
        className: m,
        application: b
      }), null != g && g.length > 0 ? (0, r.jsx)("div", {
        className: V.badgesContainer,
        children: g
      }) : null]
    })]
  })
}
let en = e => {
  e || (0, E.z)()
};

function er(e, t, n, r) {
  return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0
}
let ei = Chunk647438.memo(function(e) {
    let {
      currentUserIsPremium: t,
      author: n
    } = e, i = (0, l.e7)([O.Z], () => {
      var e;
      return null == (e = O.Z.getUserProfile(n.id)) ? true : e.premiumSince
    });
    return (0, r.jsx)(c.ua7, {
      tooltipClassName: V.nitroAuthorBadgeTootip,
      shouldShow: null != i,
      text: F.intl.formatToPlainString(F.t["8zbGNT"], {
        date: i
      }),
      onTooltipShow: () => (0, I.Z)(n.id),
      children: e => (0, r.jsx)(c.P3F, {
        className: V.nitroAuthorBadgeContainer,
        onClick: () => en(t),
        "aria-label": F.intl.formatToPlainString(F.t["8zbGNT"], {
          date: i
        }),
        children: (0, r.jsx)("img", W({
          alt: "",
          className: V.nitroBadgeSvg,
          src: H
        }, e))
      })
    })
  }),
  ea = Chunk647438.memo(function(e) {
    let {
      message: t,
      repliedMessage: n,
      compact: a = false,
      renderPopout: s,
      showTimestampOnHover: u,
      roleIcon: d,
      subscribeToGroupId: f,
      hideTimestamp: _,
      hideGuildTag: p,
      className: m,
      channel: E,
      preview: O
    } = e, v = i.useMemo(() => null != s ? e => s(e, t) : true, [s, t]), [, I] = (0, h.ZP)(t.author.id, e.guildId), T = (0, l.e7)([C.Z, A.Z], () => {
      let n = A.Z.getGuild(e.guildId);
      return null != t.author && null != n && C.Z.canManageUser(Z.Plq.MODERATE_MEMBERS, t.author, n)
    }, [t.author, e.guildId]), N = I && T, R = ee({
      props: e,
      guildId: e.guildId,
      handleRenderPopout: v,
      showCommunicationDisabledStyles: N
    }), P = (0, l.e7)([S.ZP], () => {
      var t;
      return null != (t = e.displayCompactAvatars) ? t : S.ZP.displayCompactAvatars
    }), D = i.useMemo(() => (0, G.b)({
      message: t,
      channel: E,
      user: null == t ? true : t.author,
      compact: a,
      isRepliedMessage: false
    }), [t, E, a]), L = (0, l.e7)([A.Z], () => er(a, P, d, A.Z.getGuild(e.guildId)), [a, P, d, e.guildId]), x = i.useMemo(() => {
      let e = [];
      return (0, w.yE)(t.flags, Z.iLy.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(y.Z, {}, "suppress-notifications")), t.hasPotions() && e.push((0, r.jsx)(g.Z, {
        message: t
      })), e
    }, [t]), j = (0, M.XX)(t, f), k = (0, M.Dv)(t), U = _ ? "".concat(j) : "".concat(j, " ").concat(k), B = (null == n ? true : n.state) === b.Y.LOADED ? (0, M.Gq)(t) : true, H = true !== _;
    return (0, r.jsx)(et, {
      message: t,
      avatar: R,
      username: (0, r.jsxs)(r.Fragment, {
        children: [N && (0, r.jsx)(c.ua7, {
          text: F.intl.string(F.t.AeYyLy),
          children: e => (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(c.YlB, z(W({
              size: "xxs",
              color: "currentColor"
            }, e), {
              className: a ? V.compactCommunicationDisabled : V.communicationDisabled
            })), (0, r.jsx)(c.nn4, {
              children: F.intl.string(F.t.AmHag4)
            })]
          })
        }), (0, r.jsx)(J, z(W({}, e), {
          message: t,
          channel: E,
          compact: a,
          roleIconProps: d,
          renderPopout: v,
          preview: O,
          subscribeToGroupId: f,
          hideGuildTag: p
        }))]
      }),
      usernameSpanId: (0, M.XX)(t, f),
      usernameClassName: o()(V.headerText, {
        [V.hasRoleIcon]: 0 !== L,
        [V.hasBadges]: null != D || x.length > 0
      }),
      compact: a,
      showTimestamp: H,
      showTimestampOnHover: u,
      ariaLabelledBy: U,
      ariaDescribedBy: B,
      className: m,
      badges: x
    })
  })