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
  Chunk574583 = require("./574583.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk738619 = require("./738619.jsx"),
  Chunk393238 = require("./393238.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk446489 = require("./446489.jsx"),
  Chunk824578 = require("./824578.js"),
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
  Chunk411405 = require("./411405.jsx"),
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
let ec = Chunk647438.memo(function(e) {
  let {
    threadId: t,
    goToThread: n,
    observePostVisibilityAnalytics: a,
    overrideMedia: s,
    className: c
  } = e, {
    channel: d,
    isOpen: g,
    messageCount: x,
    content: b,
    firstMessage: j,
    media: v
  } = function(e) {
    let {
      threadId: t,
      overrideMedia: n
    } = e, r = (0, h.e7)([K.Z], () => K.Z.getChannel(t));
    o()(null != r, "the thread should not be null here, a store must have missed an update");
    let a = (0, h.e7)([q.ZP], () => q.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id),
      {
        firstMessage: l
      } = (0, S.cl)(r),
      s = function(e) {
        let {
          firstMessage: t,
          formatInline: n = true,
          noStyleAndInteraction: r = true
        } = e, a = (0, k.p)(), l = i.useMemo(() => null != t ? (0, Z.Z)(t, null == t ? true : t.messageSnapshots[0]) : null, [t]), {
          hasSpoilerEmbeds: s,
          content: o
        } = i.useMemo(() => (null == l ? true : l.content) != null && "" !== l.content ? (0, H.ZP)(l, {
          formatInline: n,
          noStyleAndInteraction: r,
          allowHeading: true,
          allowList: true,
          shouldFilterKeywords: a
        }) : {
          hasSpoilerEmbeds: false,
          content: null
        }, [n, l, r, a]), c = (0, N.eL)(t, s), d = (0, N.vg)(t, s);
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
  (0, et.KK)(j);
  let _ = (0, h.e7)([Q.default, X.Z], () => {
      var e, t, n, r, i, a;
      let l = Q.default.getUser(null == j || null == (t = j.messageSnapshots[0]) || null == (e = t.moderatorReport) ? true : e.reported_user_id);
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
    } = (0, p.ZP)(),
    T = (0, I.xH)(e => e.setCardHeight, u.X);
  i.useEffect(() => {
    null != y && T(t, y)
  }, [y, T, t]), i.useEffect(() => {
    null == a || a(C.current, t)
  }, [C, a, t]);
  let O = i.useRef(null),
    {
      handleLeftClick: P,
      handleRightClick: E
    } = (0, M.Z)({
      facepileRef: O,
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
      isFocused: z,
      handleFocus: B,
      handleBlur: U
    } = (0, R.Z)(F);
  return (0, r.jsxs)("div", {
    ref: C,
    "data-item-id": t,
    onClick: P,
    onContextMenu: E,
    className: l()(es.container, el.container, c, {
      [es.isOpen]: g
    }),
    children: [(0, r.jsx)(f.P3F, function(e) {
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
    }({
      onClick: P,
      focusProps: {
        ringTarget: C
      },
      onContextMenu: E,
      "aria-label": ea.intl.formatToPlainString(ea.t.pgYN6c, {
        title: d.name,
        count: x
      }),
      className: es.focusTarget,
      onFocus: B,
      onBlur: U
    }, D)), (0, r.jsxs)("div", {
      className: es.left,
      children: [(0, r.jsx)(f.y5t, {
        children: (0, r.jsxs)("div", {
          className: el.contentAndMedia,
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
      }), (0, r.jsx)(f.Rny, {
        enabled: !z,
        children: (0, r.jsx)(em, {
          channel: d,
          firstMessage: j,
          facepileRef: O
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
    className: l()(el.body, es.body),
    children: [(0, r.jsx)(E.ZP, {
      channel: t
    }), (0, r.jsx)("div", {
      className: (es.message, el.message),
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
  } = e, c = (0, h.e7)([O.Z], () => O.Z.isLoading(n.id)), d = (0, h.e7)([Y.Z], () => Y.Z.can(er.Plq.MANAGE_MESSAGES, n)), u = W.cC.useSetting(), m = (0, h.e7)([J.Z], () => J.Z.getGuildId()), {
    contentPlaceholder: g,
    renderedContent: x
  } = null == t ? {
    contentPlaceholder: null,
    renderedContent: null
  } : (0, G.f)(t, i, false, false, l()(es.messageContent, el.messageContent, eo.inlineFormat, eo.__invalid_smallFontSize), {
    leadingIconClass: es.messageContentLeadingIcon,
    trailingIconClass: es.messageContentTrailingIcon,
    iconSize: ei.WW
  }), p = null != x ? (0, r.jsx)(f.Text, {
    variant: "text-md/normal",
    children: x
  }) : a ? null : (0, r.jsx)(f.Text, {
    tag: "span",
    variant: "text-sm/medium",
    color: s ? "header-secondary" : "text-muted",
    className: l()(es.messageContent, el.messageContent),
    "aria-label": "",
    children: null == t ? c ? null : ea.intl.string(ea.t.mE3KJN) : g
  });
  return (0, r.jsxs)(V.aQ.Provider, {
    value: (0, D.Z)(u, d),
    children: [null != o ? (0, r.jsx)(f.qEK, {
      size: f.EFr.SIZE_40,
      src: o.getAvatarURL(m, (0, f.pxk)(f.EFr.SIZE_40)),
      "aria-label": "",
      className: el.originalMessageAuthorAvatar
    }) : null, (0, r.jsxs)("div", {
      className: el.originalMessageAuthorAndContent,
      children: [(0, r.jsx)(en.Z, {
        channel: n,
        originalAuthor: o,
        message: t
      }), (0, r.jsx)(f.Rny, {
        className: es.messageFocusBlock,
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
  } = (0, w.J$)(t), l = (0, C.Q)(t.id), s = (null == i ? true : i.reactions) != null && i.reactions.length > 0;
  return (0, r.jsxs)("div", {
    className: el.footer,
    children: [(0, r.jsxs)("div", {
      className: el.footerChannelTitle,
      children: [(0, r.jsx)(f.U65, {
        size: "custom",
        width: 14,
        height: 14
      }), (0, r.jsx)(f.Text, {
        variant: "text-sm/medium",
        children: t.name
      }), a ? (0, r.jsx)(f.IGR, {
        color: f.TVs.unsafe_rawColors.BRAND_260.css,
        text: ea.intl.string(ea.t.y2b7CA),
        className: el.newBadge
      }) : null]
    }), (0, r.jsxs)("div", {
      className: el.footerMessageSummary,
      children: [s || null == i ? null : (0, r.jsx)(eg, {
        firstMessage: i,
        channel: t
      }), (0, r.jsx)(eh, {
        channel: t,
        iconSize: 14
      }), (0, r.jsx)("span", {
        className: es.bullet,
        children: "•"
      }), l.length > 0 ? (0, r.jsxs)("div", {
        className: es.typing,
        children: [(0, r.jsx)(ex, {
          channel: t,
          userIds: l,
          facepileRef: n
        }), (0, r.jsx)("div", {
          className: es.dots,
          children: (0, r.jsx)(f.bbz, {
            themed: true,
            dotRadius: 2
          })
        }), (0, r.jsx)(x.ZP, {
          channel: t,
          className: es.typingUsers,
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
    className: l()(es.messageCountBox, {
      [es.hasRead]: i && null == s
    }),
    children: [(0, r.jsx)("span", {
      className: es.messageCountIcon,
      children: (0, r.jsx)(f.kBi, {
        size: "custom",
        color: "currentColor",
        width: n,
        height: n
      })
    }), "number" == typeof a ? (0, r.jsx)(_.Z, {
      value: a,
      digitWidth: 9,
      className: es.messageCountText
    }) : (0, r.jsx)("div", {
      className: es.messageCountText,
      children: a
    }), null == s ? null : (0, r.jsxs)(f.Text, {
      className: es.newMessageCount,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ["(", ea.intl.format(ea.t.z3PEth, {
        count: s
      }), ")"]
    })]
  })
}

function eg(e) {
  let {
    firstMessage: t,
    channel: n
  } = e, i = (0, h.e7)([K.Z], () => K.Z.getChannel(n.parent_id)), a = (0, w.Bs)(i), {
    disableReactionCreates: l,
    isLurking: s,
    isPendingMember: o
  } = (0, z.Z)(n);
  return null == a || l ? null : (0, r.jsx)(U.le, {
    className: es.updateReactionButton,
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
  } = (0, T.H)(n.parent_id), a = (0, w.xw)(n, i), l = null == (t = n.threadMetadata) ? true : t.createTimestamp, s = null == l ? null : ea.intl.formatToPlainString(ea.t["13euCd"], {
    timestamp: (0, ee.vc)(d()(l), "LLLL")
  });
  return (0, r.jsx)(g.u, {
    text: s,
    children: (0, r.jsx)(f.Text, {
      className: es.__invalid_activityText,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: a
    })
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
    children: (0, r.jsx)(b.ZP, {
      className: es.__invalid_facepile,
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
    c = (0, h.e7)([$.Z], () => $.Z.isFocused()),
    d = (0, A.d$)(i.src),
    u = W.QK.useSetting(),
    m = (0, L.MC)(s),
    {
      src: g,
      width: x,
      height: p,
      alt: b
    } = i;
  if (p > x ? n = 72 : t = 72, o) {
    var j;
    return (0, r.jsx)("div", {
      "aria-label": null != (j = null != m ? m : b) ? j : ea.intl.string(ea.t.hqwnc2),
      className: l()(es.thumbnailContainer, es.obscuredThumbnailPlaceholder),
      style: {
        maxWidth: t,
        maxHeight: n,
        height: p,
        width: x
      }
    })
  }
  return g.startsWith("data:") ? (0, r.jsx)(f.Eep, {
    src: g,
    maxHeight: t,
    maxWidth: n,
    width: x,
    height: p,
    alt: null != b && a ? m : b,
    className: es.thumbnailContainer,
    imageClassName: l()({
      [es.obscured]: a,
      [es.thumbnailOverride]: true
    })
  }) : (0, B.Yi)({
    src: g,
    maxHeight: t,
    maxWidth: n,
    width: x,
    height: p,
    alt: null != b && a ? m : b,
    autoPlay: u,
    animated: d && !a && c,
    srcIsAnimated: i.srcIsAnimated,
    containerClassName: es.thumbnailContainer,
    imageClassName: l()({
      [es.obscured]: a
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
  return (0, r.jsx)(f.Rny, {
    enabled: true,
    children: (0, r.jsxs)("div", {
      className: l()(es.bodyMedia, el.bodyMedia),
      onClick: function(e) {
        e.stopPropagation(), s && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), j.Z.showAgeVerificationGetStartedModal({
          entryPoint: v.cU.FORUM_POST_MEDIA_PREVIEW
        }))
      },
      children: [(0, r.jsx)(ep, {
        firstMedia: n,
        shouldObscure: i,
        obscureReason: a,
        shouldShowAgeVerification: s
      }), i && (0, r.jsx)(P.Z, {
        iconClassname: es.obscuredTag,
        obscureReason: a
      })]
    })
  })
}