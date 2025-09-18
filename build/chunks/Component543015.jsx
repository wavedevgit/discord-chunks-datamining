/** Chunk was on 9456 **/
/** chunk id: 543015, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => ec
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
  Chunk524825 = require("./524825.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk738619 = require("./738619.jsx"),
  Chunk393238 = require("./393238.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk446489 = require("./446489.jsx"),
  Chunk824578 = require("./824578.js"),
  Chunk95398 = require("./95398.jsx"),
  Chunk247206 = require("./247206.js"),
  Chunk109434 = require("./109434.js"),
  Chunk456269 = require("./456269.js"),
  Chunk109590 = require("./109590.js"),
  Chunk368844 = require("./368844.js"),
  Chunk660189 = require("./660189.js"),
  Chunk73315 = require("./73315.jsx"),
  Chunk470623 = require("./470623.jsx"),
  Chunk858543 = require("./858543.jsx"),
  Chunk265641 = require("./265641.js"),
  Chunk883728 = require("./883728.jsx"),
  Chunk39154 = require("./39154.js"),
  Chunk712950 = require("./712950.js"),
  Chunk406432 = require("./406432.js"),
  Chunk169525 = require("./169525.js"),
  Chunk566006 = require("./566006.js"),
  Chunk255269 = require("./255269.js"),
  Chunk937889 = require("./937889.js"),
  Chunk443877 = require("./443877.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk287151 = require("./287151.jsx"),
  Chunk267128 = require("./267128.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk451478 = require("./451478.js"),
  Chunk55935 = require("./55935.js"),
  Chunk216572 = require("./216572.js"),
  Chunk724739 = require("./724739.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk476720 = require("./476720.js"),
  Chunk586301 = require("./586301.js"),
  Chunk430864 = require("./430864.js");

function eo(e) {
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
let ec = Chunk647438.memo(function(e) {
  let {
    threadId: t,
    goToThread: n,
    observePostVisibilityAnalytics: a,
    overrideMedia: s,
    className: c
  } = e, {
    channel: d,
    isOpen: f,
    messageCount: p,
    content: b,
    firstMessage: j,
    media: v
  } = function(e) {
    let {
      threadId: t,
      overrideMedia: n
    } = e, r = (0, h.e7)([W.Z], () => W.Z.getChannel(t));
    o()(null != r, "the thread should not be null here, a store must have missed an update");
    let a = (0, h.e7)([q.ZP], () => q.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id),
      {
        firstMessage: l
      } = (0, O.cl)(r),
      s = function(e) {
        let {
          firstMessage: t,
          formatInline: n = true,
          noStyleAndInteraction: r = true
        } = e, a = (0, k.p)(), l = i.useMemo(() => null != t ? (0, Z.Z)(t, null == t ? true : t.messageSnapshots[0]) : null, [t]), {
          hasSpoilerEmbeds: s,
          content: o
        } = i.useMemo(() => (null == l ? true : l.content) != null && "" !== l.content ? (0, z.ZP)(l, {
          formatInline: n,
          noStyleAndInteraction: r,
          allowHeading: true,
          allowList: true,
          shouldFilterKeywords: a
        }) : {
          hasSpoilerEmbeds: false,
          content: null
        }, [n, l, r, a]), c = (0, S.eL)(t, s), d = (0, S.vg)(t, s);
        return null == t ? null : {
          hasSpoilerEmbeds: s,
          content: o,
          firstMedia: c,
          firstMediaIsEmbed: d
        }
      }({
        firstMessage: l
      }),
      c = null == s ? true : s.content,
      d = null == s ? true : s.firstMedia,
      {
        messageCountText: u
      } = (0, w.nP)(r);
    return {
      channel: r,
      isOpen: a,
      messageCount: u,
      firstMessage: l,
      content: c,
      media: null != n ? n : d
    }
  }({
    threadId: t,
    overrideMedia: s
  });
  (0, ee.KK)(j);
  let _ = (0, h.e7)([J.default, X.Z], () => {
      var e, t, n, r, i, a;
      let l = J.default.getUser(null == j || null == (t = j.messageSnapshots[0]) || null == (e = t.moderatorReport) ? true : e.reported_user_id);
      if (null != l) return l;
      if ((null == j || null == (n = j.messageReference) ? true : n.channel_id) != null && (null == j || null == (r = j.messageReference) ? true : r.message_id) != null) {
        let e = X.Z.getMessage(null == j || null == (i = j.messageReference) ? true : i.channel_id, null == j || null == (a = j.messageReference) ? true : a.message_id);
        if (null != e) return e.author
      }
      return null
    }),
    {
      ref: C,
      height: y
    } = (0, x.ZP)(),
    T = (0, I.xH)(e => e.setCardHeight, u.X);
  i.useEffect(() => {
    null != y && T(t, y)
  }, [y, T, t]), i.useEffect(() => {
    null == a || a(C.current, t)
  }, [C, a, t]);
  let N = i.useRef(null),
    {
      handleLeftClick: P,
      handleRightClick: E
    } = (0, M.Z)({
      facepileRef: N,
      goToThread: n,
      channel: d
    }),
    A = (0, m.JA)(t),
    {
      role: L,
      onFocus: F
    } = A,
    D = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(A, ["role", "onFocus"]),
    {
      isFocused: H,
      handleFocus: B,
      handleBlur: U
    } = (0, R.Z)(F);
  return (0, r.jsxs)("div", {
    ref: C,
    "data-item-id": t,
    onClick: P,
    onContextMenu: E,
    className: l()(el.container, ea.container, c, {
      [el.isOpen]: f
    }),
    children: [(0, r.jsx)(g.P3F, eo({
      onClick: P,
      focusProps: {
        ringTarget: C
      },
      onContextMenu: E,
      "aria-label": ei.intl.formatToPlainString(ei.t.pgYN6e, {
        title: d.name,
        count: p
      }),
      className: el.focusTarget,
      onFocus: B,
      onBlur: U
    }, D)), (0, r.jsxs)("div", {
      className: el.left,
      children: [(0, r.jsx)(g.y5t, {
        children: (0, r.jsxs)("div", {
          className: ea.contentAndMedia,
          children: [(0, r.jsx)(ed, {
            channel: d,
            firstMessage: j,
            content: b,
            hasMediaAttachment: null != v,
            originalAuthor: _
          }), (null == j ? true : j.blocked) || null == v ? null : (0, r.jsx)(eb, {
            channel: d,
            firstMedia: v
          })]
        })
      }), (0, r.jsx)(g.Rny, {
        enabled: !H,
        children: (0, r.jsx)(em, {
          channel: d,
          firstMessage: j,
          facepileRef: N
        })
      })]
    })]
  })
});

function ed(e) {
  let {
    channel: t,
    firstMessage: n,
    content: i,
    hasMediaAttachment: a,
    originalAuthor: s
  } = e, {
    hasUnreads: o
  } = (0, w.J$)(t);
  return (0, r.jsxs)("div", {
    className: l()(ea.body, el.body),
    children: [(0, r.jsx)(E.ZP, {
      channel: t
    }), (0, r.jsx)("div", {
      className: (el.message, ea.message),
      children: (0, r.jsx)(eu, {
        channel: t,
        message: n,
        content: i,
        hasMediaAttachment: a,
        hasUnreads: o,
        originalAuthor: s
      })
    })]
  })
}
let eu = Chunk647438.memo(function(e) {
  let {
    message: t,
    channel: n,
    content: i,
    hasMediaAttachment: a,
    hasUnreads: s,
    originalAuthor: o
  } = e, c = (0, h.e7)([N.Z], () => N.Z.isLoading(n.id)), d = (0, h.e7)([K.Z], () => K.Z.can(en.Plq.MANAGE_MESSAGES, n)), u = G.cC.useSetting(), m = (0, h.e7)([Y.Z], () => Y.Z.getGuildId()), {
    contentPlaceholder: f,
    renderedContent: x
  } = null == t ? {
    contentPlaceholder: null,
    renderedContent: null
  } : (0, V.f)(t, i, false, false, l()(el.messageContent, ea.messageContent, es.inlineFormat, es.__invalid_smallFontSize), {
    leadingIconClass: el.messageContentLeadingIcon,
    trailingIconClass: el.messageContentTrailingIcon,
    iconSize: er.WW
  }), p = null != x ? (0, r.jsx)(g.Text, {
    variant: "text-md/normal",
    children: x
  }) : a ? null : (0, r.jsx)(g.Text, {
    tag: "span",
    variant: "text-sm/medium",
    color: s ? "header-secondary" : "text-muted",
    className: l()(el.messageContent, ea.messageContent),
    "aria-label": "",
    children: null == t ? c ? null : ei.intl.string(ei.t.mE3KJC) : f
  });
  return (0, r.jsxs)(C.aQ.Provider, {
    value: (0, D.Z)(u, d),
    children: [null != o ? (0, r.jsx)(g.qEK, {
      size: g.EFr.SIZE_40,
      src: o.getAvatarURL(m, (0, g.pxk)(g.EFr.SIZE_40)),
      "aria-label": "",
      className: ea.originalMessageAuthorAvatar
    }) : null, (0, r.jsxs)("div", {
      className: ea.originalMessageAuthorAndContent,
      children: [(0, r.jsx)(et.Z, {
        channel: n,
        originalAuthor: o,
        message: t
      }), (0, r.jsx)(g.Rny, {
        className: el.messageFocusBlock,
        children: p
      })]
    })]
  })
});

function em(e) {
  let {
    channel: t,
    facepileRef: n,
    firstMessage: i
  } = e, {
    isNew: a
  } = (0, w.J$)(t), l = (0, _.Q)(t.id), s = (null == i ? true : i.reactions) != null && i.reactions.length > 0;
  return (0, r.jsxs)("div", {
    className: ea.footer,
    children: [(0, r.jsxs)("div", {
      className: ea.footerChannelTitle,
      children: [(0, r.jsx)(g.U65, {
        size: "custom",
        width: 14,
        height: 14
      }), (0, r.jsx)(g.Text, {
        variant: "text-sm/medium",
        children: t.name
      }), a ? (0, r.jsx)(g.IGR, {
        color: g.TVs.unsafe_rawColors.BRAND_260.css,
        text: ei.intl.string(ei.t.y2b7CA),
        className: ea.newBadge
      }) : null]
    }), (0, r.jsxs)("div", {
      className: ea.footerMessageSummary,
      children: [s || null == i ? null : (0, r.jsx)(eg, {
        firstMessage: i,
        channel: t
      }), (0, r.jsx)(eh, {
        channel: t,
        iconSize: 14
      }), (0, r.jsx)("span", {
        className: el.bullet,
        children: "•"
      }), l.length > 0 ? (0, r.jsxs)("div", {
        className: el.typing,
        children: [(0, r.jsx)(ex, {
          channel: t,
          userIds: l,
          facepileRef: n
        }), (0, r.jsx)("div", {
          className: el.dots,
          children: (0, r.jsx)(g.bbz, {
            themed: true,
            dotRadius: 2
          })
        }), (0, r.jsx)(f.ZP, {
          channel: t,
          className: el.typingUsers,
          renderDots: false
        })]
      }) : (0, r.jsx)(ef, {
        channel: t
      })]
    })]
  })
}

function eh(e) {
  let {
    channel: t,
    iconSize: n,
    showReadState: i = false
  } = e, {
    messageCountText: a,
    unreadCount: s
  } = (0, w.nP)(t);
  return (0, r.jsxs)("div", {
    className: l()(el.messageCountBox, {
      [el.hasRead]: i && null == s
    }),
    children: [(0, r.jsx)("span", {
      className: el.messageCountIcon,
      children: (0, r.jsx)(g.kBi, {
        size: "custom",
        color: "currentColor",
        width: n,
        height: n
      })
    }), "number" == typeof a ? (0, r.jsx)(v.Z, {
      value: a,
      digitWidth: 9,
      className: el.messageCountText
    }) : (0, r.jsx)("div", {
      className: el.messageCountText,
      children: a
    }), null == s ? null : (0, r.jsxs)(g.Text, {
      className: el.newMessageCount,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ["(", ei.intl.format(ei.t.z3PEtr, {
        count: s
      }), ")"]
    })]
  })
}

function eg(e) {
  let {
    firstMessage: t,
    channel: n
  } = e, i = (0, h.e7)([W.Z], () => W.Z.getChannel(n.parent_id)), a = (0, w.Bs)(i), {
    disableReactionCreates: l,
    isLurking: s,
    isPendingMember: o
  } = (0, H.Z)(n);
  return null == a || l ? null : (0, r.jsx)(U.le, {
    className: el.updateReactionButton,
    message: t,
    readOnly: n.isArchivedLockedThread(),
    useChatFontScaling: false,
    isLurking: s,
    isPendingMember: o,
    emoji: a,
    hideCount: true,
    count: 0,
    burst_count: 0,
    me: false,
    me_burst: false,
    type: F.O.NORMAL,
    emojiSize: "reaction",
    emojiSizeTooltip: "reaction"
  })
}

function ef(e) {
  var t;
  let {
    channel: n
  } = e, {
    sortOrder: i
  } = (0, T.H)(n.parent_id), a = (0, w.xw)(n, i), l = null == (t = n.threadMetadata) ? true : t.createTimestamp, s = null == l ? null : ei.intl.formatToPlainString(ei.t["13euCQ"], {
    timestamp: (0, $.vc)(d()(l), "LLLL")
  });
  return (0, r.jsx)(g.ua7, {
    text: s,
    tooltipClassName: el.timestampTooltip,
    children: e => {
      var t, n;
      return (0, r.jsx)(g.Text, (t = eo({
        className: el.__invalid_activityText,
        variant: "text-sm/normal",
        color: "header-secondary"
      }, e), n = n = {
        children: a
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
}

function ex(e) {
  let {
    channel: t,
    userIds: n,
    facepileRef: i
  } = e, a = (0, w.iM)(t, n);
  return (0, r.jsx)("div", {
    ref: i,
    children: (0, r.jsx)(p.ZP, {
      className: el.__invalid_facepile,
      showDefaultAvatarsForNullUsers: true,
      guildId: t.guild_id,
      users: a,
      max: 5,
      size: 16,
      hideMoreUsers: true,
      showUserPopout: true
    })
  })
}

function ep(e) {
  let t, n, {
      firstMedia: i,
      shouldObscure: a,
      obscureReason: s,
      shouldShowAgeVerification: o
    } = e,
    c = (0, h.e7)([Q.Z], () => Q.Z.isFocused()),
    d = (0, A.d$)(i.src),
    u = G.QK.useSetting(),
    m = (0, L.MC)(s),
    {
      src: f,
      width: x,
      height: p,
      alt: b
    } = i;
  if (p > x ? n = 72 : t = 72, o) {
    var j;
    return (0, r.jsx)("div", {
      "aria-label": null != (j = null != m ? m : b) ? j : ei.intl.string(ei.t.hqwnc3),
      className: l()(el.thumbnailContainer, el.obscuredThumbnailPlaceholder),
      style: {
        maxWidth: t,
        maxHeight: n,
        height: p,
        width: x
      }
    })
  }
  return f.startsWith("data:") ? (0, r.jsx)(g.Eep, {
    src: f,
    maxHeight: t,
    maxWidth: n,
    width: x,
    height: p,
    alt: null != b && a ? m : b,
    className: el.thumbnailContainer,
    imageClassName: l()({
      [el.obscured]: a,
      [el.thumbnailOverride]: true
    })
  }) : (0, B.Yi)({
    src: f,
    maxHeight: t,
    maxWidth: n,
    width: x,
    height: p,
    alt: null != b && a ? m : b,
    autoPlay: u,
    animated: d && !a && c,
    srcIsAnimated: i.srcIsAnimated,
    containerClassName: el.thumbnailContainer,
    imageClassName: l()({
      [el.obscured]: a
    }),
    analyticsSource: "ForumPostMediaPreview"
  })
}

function eb(e) {
  let {
    channel: t,
    firstMedia: n
  } = e, [i, a] = (0, L.hL)({
    media: n,
    channel: t
  }), s = (0, y.JO)(a);
  return (0, r.jsx)(g.Rny, {
    enabled: true,
    children: (0, r.jsxs)("div", {
      className: l()(el.bodyMedia, ea.bodyMedia),
      onClick: function(e) {
        e.stopPropagation(), s && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), b.Z.showAgeVerificationGetStartedModal({
          entryPoint: j.cU.FORUM_POST_MEDIA_PREVIEW
        }))
      },
      children: [(0, r.jsx)(ep, {
        firstMedia: n,
        shouldObscure: i,
        obscureReason: a,
        shouldShowAgeVerification: s
      }), i && (0, r.jsx)(P.Z, {
        iconClassname: el.obscuredTag,
        obscureReason: a
      })]
    })
  })
}