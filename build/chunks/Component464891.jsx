/** Chunk was on 31978 **/
/** chunk id: 464891, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  CF: () => Y,
  ZP: () => ee,
  nD: () => Q
}), require("./539854.js"), require("./388685.js"), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk913834 = require("./913834.jsx"),
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
  Chunk724913 = require("./724913.js"),
  Chunk121282 = require("./121282.js");

function K(e) {
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

function W(e, t) {
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

function q(e) {
  let {
    avatarSrc: t,
    avatarDecorationSrc: n,
    compact: l,
    onClick: o,
    onContextMenu: a,
    onMouseDown: s,
    onMouseEnter: c,
    onMouseLeave: u,
    onKeyDown: d,
    showCommunicationDisabledStyles: p = false,
    className: m,
    avatarImgRef: g
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      ref: g,
      onClick: o,
      onContextMenu: a,
      onKeyDown: d,
      onMouseDown: s,
      onMouseEnter: c,
      onMouseLeave: u,
      src: t,
      "aria-hidden": true,
      className: i()(m, z.avatar, {
        [z.compact]: l,
        [z.clickable]: null != o,
        [z.communicationDisabledOpacity]: p
      }),
      alt: " "
    }), null == n || l ? null : (0, r.jsx)("img", {
      className: z.avatarDecoration,
      src: n,
      alt: " ",
      "aria-hidden": true
    })]
  })
}
let X = Chunk73800.memo(function(e) {
  let {
    message: t,
    author: n,
    channel: o,
    guildId: i,
    compact: a = false,
    roleIconProps: u,
    showUsernamePopout: d,
    renderPopout: p,
    onClickUsername: f,
    onContextMenu: y,
    displayCompactAvatars: O = false,
    onPopoutRequestClose: v,
    preview: j,
    subscribeToGroupId: P,
    hideGuildTag: x
  } = e, w = (0, M.ZP)(t, n), C = l.useMemo(() => (0, U.x)({
    message: t,
    channel: o,
    user: null == t ? true : t.author,
    compact: a,
    isRepliedMessage: false
  }), [t, o, a]), S = l.useRef(null), N = (0, s.e7)([E.Z], () => E.Z.getGuild(i)), T = l.useMemo(() => J(a, O, u, N), [a, O, u, N]), Z = l.useMemo(() => null == u ? null : 1 === T && null != N ? (0, r.jsx)(c.yRy, {
    targetElementRef: S,
    animation: c.yRy.Animation.TRANSLATE,
    align: "center",
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    position: "right",
    renderPopout: () => (0, r.jsx)(G.Z, {
      roleIcon: u,
      guild: N
    }),
    clickTrap: true,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(g.Z, W(K({
        ref: S
      }, u), {
        className: z.roleIcon,
        onClick: t
      }))
    }
  }, "role-icon-children") : 2 === T ? (0, r.jsx)(g.Z, W(K({}, u), {
    className: z.roleIcon
  }), "role-icon-children") : null, [T, u, N]), I = (0, s.e7)([R.default], () => R.default.getCurrentUser()), A = l.useMemo(() => {
    let e = [],
      n = _.ZP.isPremium(t.author),
      l = _.ZP.isPremium(I),
      i = null == o ? true : o.isPrivate();
    return (0, k.R)(null != u, "Message Username") && n && !a && !i && e.push((0, r.jsx)($, {
      currentUserIsPremium: l,
      author: t.author
    }, "nitro-author")), null != Z && e.push(Z), null != N && (e.push((0, r.jsx)(b.Z, {
      guild: N,
      message: t
    }, "new-member")), e.push((0, r.jsx)(h.Z, {
      guild: N,
      message: t
    }, "leaderboard-champion"))), null != o && null != N && e.push((0, r.jsx)(m.Z, {
      guild: N,
      channel: o,
      userId: t.author.id,
      messageId: t.id
    }, "connections")), e
  }, [t, o, u, a, Z, N, I]);
  return null == w ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(D.Z, {
      message: t,
      channel: o,
      author: w,
      compact: a,
      roleIcon: u,
      showPopout: d,
      renderPopout: p,
      onClick: f,
      onContextMenu: y,
      onPopoutRequestClose: v,
      decorations: {
        [D.a.SYSTEM_TAG]: C,
        [D.a.BADGES]: A
      },
      renderRemixTag: true,
      previewGuildId: i,
      preview: j,
      subscribeToGroupId: P,
      hideGuildTag: x
    }), a && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("i", {
        className: z.separator,
        children: ":"
      }), " "]
    })]
  })
});

function Y(e, t, n) {
  let {
    message: l,
    channel: o,
    author: i,
    compact: a = false,
    onContextMenu: s,
    showUsernamePopout: c,
    roleIcon: u,
    onClickUsername: d,
    onPopoutRequestClose: p
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(D.Z, {
      message: l,
      channel: o,
      author: i,
      compact: a,
      roleIcon: u,
      showPopout: c,
      renderPopout: t,
      onClick: d,
      onContextMenu: s,
      onPopoutRequestClose: p,
      decorations: n,
      preview: true,
      renderRemixTag: true
    }), a && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("i", {
        className: z.separator,
        children: ":"
      }), " "]
    })]
  })
}

function Q(e) {
  let {
    message: t,
    avatar: n,
    username: l,
    usernameSpanId: o,
    usernameClassName: a,
    compact: s,
    showTimestamp: u,
    showTimestampOnHover: d,
    ariaLabelledBy: m,
    ariaDescribedBy: g,
    className: f,
    messageClassname: b,
    badges: h
  } = e, y = (0, I.yE)(t.flags, F.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null, O = (0, p.q)(y);
  return (0, r.jsxs)(r.Fragment, {
    children: [!s && n, (0, r.jsxs)(c.H, {
      className: i()(z.header, f),
      "aria-describedby": g,
      "aria-labelledby": m,
      children: [u && s && (0, r.jsx)(L.Z, {
        id: (0, A.Dv)(t),
        compact: true,
        timestamp: t.timestamp,
        isVisibleOnlyOnHover: d,
        className: b,
        isInline: false,
        application: O
      }), s && n, (0, r.jsx)("span", {
        id: o,
        className: a,
        children: l
      }), u && !s && (0, r.jsx)(L.Z, {
        id: (0, A.Dv)(t),
        timestamp: t.timestamp,
        className: b,
        application: O
      }), null != h && h.length > 0 ? (0, r.jsx)("div", {
        className: z.badgesContainer,
        children: h
      }) : null]
    })]
  })
}

function J(e, t, n, r) {
  return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0
}
let $ = Chunk73800.memo(function(e) {
    let {
      currentUserIsPremium: t,
      author: n
    } = e, l = (0, s.e7)([P.Z], () => {
      var e;
      return null == (e = P.Z.getUserProfile(n.id)) ? true : e.premiumSince
    });
    return (0, r.jsx)(c.ua7, {
      tooltipClassName: z.nitroAuthorBadgeTootip,
      shouldShow: null != l,
      text: H.intl.formatToPlainString(H.t["8zbGNT"], {
        date: l
      }),
      onTooltipShow: () => (0, w.Z)(n.id),
      children: e => (0, r.jsx)(c.P3F, {
        className: z.nitroAuthorBadgeContainer,
        onClick: () => {
          t || (0, O.z)()
        },
        "aria-label": H.intl.formatToPlainString(H.t["8zbGNT"], {
          date: l
        }),
        children: (0, r.jsx)("img", K({
          alt: "",
          className: z.nitroBadgeSvg,
          src: V
        }, e))
      })
    })
  }),
  ee = Chunk73800.memo(function(e) {
    let {
      message: t,
      repliedMessage: n,
      compact: o = false,
      renderPopout: p,
      showTimestampOnHover: m,
      roleIcon: g,
      subscribeToGroupId: b,
      hideTimestamp: h,
      hideGuildTag: O,
      className: P,
      channel: w,
      preview: R
    } = e, _ = l.useMemo(() => null != p ? e => p(e, t) : true, [p, t]), [, k] = (0, f.ZP)(t.author.id, e.guildId), M = (0, s.e7)([N.Z, E.Z], () => {
      let n = E.Z.getGuild(e.guildId);
      return null != t.author && null != n && N.Z.canManageUser(F.Plq.MODERATE_MEMBERS, t.author, n)
    }, [t.author, e.guildId]), D = k && M, L = function(e) {
      var t, n;
      let {
        props: o,
        guildId: i,
        handleRenderPopout: c,
        showCommunicationDisabledStyles: p = false,
        className: m
      } = e, {
        message: g,
        author: f,
        compact: b = false,
        subscribeToGroupId: h,
        animate: y = true,
        onContextMenu: O,
        onClickAvatar: v,
        onPopoutRequestClose: j,
        showAvatarPopout: P
      } = o, w = l.useRef(null), [E, N] = l.useState(false), {
        analyticsLocations: R
      } = (0, d.ZP)(u.Z.AVATAR), I = (0, s.e7)([S.ZP], () => {
        var e;
        return null != (e = o.displayCompactAvatars) ? e : S.ZP.displayCompactAvatars
      }), _ = (0, B.Z)(g), k = b ? 32 : 80, {
        avatarSrc: M,
        avatarDecorationSrc: D,
        eventHandlers: A
      } = (0, x.Z)({
        userId: g.author.id,
        guildId: i,
        size: k,
        animateOnHover: null != h ? !E : !y,
        showPending: true
      }), L = g.isInteractionPlaceholder(), G = l.useMemo(() => {
        var e, t;
        return L && null == g.author.avatar && (null == (e = g.application) ? true : e.icon) != null ? null != (t = T.ZP.getApplicationIconURL({
          id: g.application.id,
          icon: g.application.icon,
          size: k,
          fallbackAvatar: false
        })) ? t : M : null != g.webhookId ? T.ZP.getUserAvatarURL({
          avatar: g.author.avatar,
          id: g.author.id,
          discriminator: g.author.discriminator,
          bot: true
        }, false, k) : M
      }, [L, g.author.avatar, g.author.id, g.author.discriminator, null == (t = g.application) ? true : t.icon, null == (n = g.application) ? true : n.id, g.webhookId, M, k]);
      if (l.useEffect(() => {
          if (null != h) return Z.S.subscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, "".concat(h, ":").concat(g.author.id), N), () => void Z.S.unsubscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, "".concat(h, ":").concat(g.author.id), N)
        }, [g.author.id, h]), !b || I) return null != c && null != P ? (0, r.jsx)(d.Gt, {
        value: R,
        children: (0, r.jsx)(C.Z, {
          targetElementRef: w,
          user: g.author,
          guildId: i,
          channelId: g.channel_id,
          messageId: g.id,
          shouldShow: P,
          shouldPreload: _,
          renderPopout: c,
          position: a.tq ? "window_center" : "right",
          avatarUrl: null != f.guildMemberAvatar && null != i ? T.ZP.getGuildMemberAvatarURLSimple({
            guildId: i,
            userId: g.author.id,
            avatar: f.guildMemberAvatar,
            size: 80
          }) : g.author.getAvatarURL(true, 80, false),
          onRequestClose: j,
          clickTrap: P,
          children: e => q(W(K({}, A), {
            avatarSrc: G,
            avatarDecorationSrc: D,
            compact: b,
            onClick: v,
            onContextMenu: O,
            onMouseDown: e.onMouseDown,
            onKeyDown: e.onKeyDown,
            showCommunicationDisabledStyles: p,
            className: m,
            avatarImgRef: w
          }))
        })
      }) : (0, r.jsx)(d.Gt, {
        value: R,
        children: q(W(K({}, A), {
          avatarSrc: G,
          avatarDecorationSrc: D,
          compact: b,
          onClick: v,
          onContextMenu: O,
          onMouseDown: true,
          onKeyDown: true,
          showCommunicationDisabledStyles: p,
          className: m
        }))
      })
    }({
      props: e,
      guildId: e.guildId,
      handleRenderPopout: _,
      showCommunicationDisabledStyles: D
    }), G = (0, s.e7)([S.ZP], () => {
      var t;
      return null != (t = e.displayCompactAvatars) ? t : S.ZP.displayCompactAvatars
    }), V = l.useMemo(() => (0, U.b)({
      message: t,
      channel: w,
      user: null == t ? true : t.author,
      compact: o,
      isRepliedMessage: false
    }), [t, w, o]), Y = (0, s.e7)([E.Z], () => J(o, G, g, E.Z.getGuild(e.guildId)), [o, G, g, e.guildId]), $ = l.useMemo(() => {
      let e = [];
      return (0, I.yE)(t.flags, F.iLy.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(j.Z, {}, "suppress-notifications")), t.hasPotions() && e.push((0, r.jsx)(y.Z, {
        message: t
      })), e
    }, [t]), ee = (0, A.XX)(t, b), et = (0, A.Dv)(t), en = h ? "".concat(ee) : "".concat(ee, " ").concat(et), er = (null == n ? true : n.state) === v.Y.LOADED ? (0, A.Gq)(t) : true;
    return (0, r.jsx)(Q, {
      message: t,
      avatar: L,
      username: (0, r.jsxs)(r.Fragment, {
        children: [D && (0, r.jsx)(c.ua7, {
          text: H.intl.string(H.t.AeYyLy),
          children: e => (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(c.YlB, W(K({
              size: "xxs",
              color: "currentColor"
            }, e), {
              className: o ? z.compactCommunicationDisabled : z.communicationDisabled
            })), (0, r.jsx)(c.nn4, {
              children: H.intl.string(H.t.AmHag4)
            })]
          })
        }), (0, r.jsx)(X, W(K({}, e), {
          message: t,
          channel: w,
          compact: o,
          roleIconProps: g,
          renderPopout: _,
          preview: R,
          subscribeToGroupId: b,
          hideGuildTag: O
        }))]
      }),
      usernameSpanId: (0, A.XX)(t, b),
      usernameClassName: i()(z.headerText, {
        [z.hasRoleIcon]: 0 !== Y,
        [z.hasBadges]: null != V || $.length > 0
      }),
      compact: o,
      showTimestamp: true !== h,
      showTimestampOnHover: m,
      ariaLabelledBy: en,
      ariaDescribedBy: er,
      className: P,
      badges: $
    })
  })