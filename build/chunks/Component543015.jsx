/** Chunk was on 9456 **/
/** chunk id: 543015, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => eo
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
  Chunk55160 = require("./55160.js"),
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
let eo = Chunk473749.memo(function(e) {
  let {
    threadId: t,
    goToThread: n,
    observePostVisibilityAnalytics: l,
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
    } = e, r = (0, h.e7)([q.Z], () => q.Z.getChannel(t));
    o()(null != r, "the thread should not be null here, a store must have missed an update");
    let l = (0, h.e7)([W.ZP], () => W.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id),
      {
        firstMessage: a
      } = (0, S.cl)(r),
      s = function(e) {
        let {
          firstMessage: t,
          formatInline: n = true,
          noStyleAndInteraction: r = true
        } = e, l = i.useMemo(() => null != t ? (0, Z.Z)(t, null == t ? true : t.messageSnapshots[0]) : null, [t]), {
          hasSpoilerEmbeds: a,
          content: s
        } = i.useMemo(() => (null == l ? true : l.content) != null && "" !== l.content ? (0, D.ZP)(l, {
          formatInline: n,
          noStyleAndInteraction: r,
          allowHeading: true,
          allowList: true
        }) : {
          hasSpoilerEmbeds: false,
          content: null
        }, [n, l, r]), o = (0, N.eL)(t, a), c = (0, N.vg)(t, a);
        return null == t ? null : {
          hasSpoilerEmbeds: a,
          content: s,
          firstMedia: o,
          firstMediaIsEmbed: c
        }
      }({
        firstMessage: a
      }),
      c = null == s ? true : s.content,
      d = null == s ? true : s.firstMedia,
      {
        messageCountText: u
      } = (0, w.nP)(r);
    return {
      channel: r,
      isOpen: l,
      messageCount: u,
      firstMessage: a,
      content: c,
      media: null != n ? n : d
    }
  }({
    threadId: t,
    overrideMedia: s
  });
  (0, ee.KK)(j);
  let _ = (0, h.e7)([J.default, K.Z], () => {
      var e, t, n, r, i, l;
      let a = J.default.getUser(null == j || null == (t = j.messageSnapshots[0]) || null == (e = t.moderatorReport) ? true : e.reported_user_id);
      if (null != a) return a;
      if ((null == j || null == (n = j.messageReference) ? true : n.channel_id) != null && (null == j || null == (r = j.messageReference) ? true : r.message_id) != null) {
        let e = K.Z.getMessage(null == j || null == (i = j.messageReference) ? true : i.channel_id, null == j || null == (l = j.messageReference) ? true : l.message_id);
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
    null == l || l(C.current, t)
  }, [C, l, t]);
  let O = i.useRef(null),
    {
      handleLeftClick: P,
      handleRightClick: E
    } = (0, M.Z)({
      facepileRef: O,
      goToThread: n,
      channel: d
    }),
    k = (0, m.JA)(t),
    {
      role: A,
      onFocus: L
    } = k,
    F = function(e, t) {
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
    }(k, ["role", "onFocus"]),
    {
      isFocused: H,
      handleFocus: z,
      handleBlur: B
    } = (0, R.Z)(L);
  return (0, r.jsxs)("div", {
    ref: C,
    "data-item-id": t,
    onClick: P,
    onContextMenu: E,
    className: a()(ea.container, el.container, c, {
      [ea.isOpen]: g
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
      "aria-label": ei.intl.formatToPlainString(ei.t.pgYN6c, {
        title: d.name,
        count: x
      }),
      className: ea.focusTarget,
      onFocus: z,
      onBlur: B
    }, F)), (0, r.jsxs)("div", {
      className: ea.left,
      children: [(0, r.jsx)(f.y5t, {
        children: (0, r.jsxs)("div", {
          className: el.contentAndMedia,
          children: [(0, r.jsx)(ec, {
            channel: d,
            firstMessage: j,
            content: b,
            hasMediaAttachment: null != v,
            originalAuthor: _
          }), (null == j ? true : j.blocked) || null == v ? null : (0, r.jsx)(ep, {
            channel: d,
            firstMedia: v
          })]
        })
      }), (0, r.jsx)(f.Rny, {
        enabled: !H,
        children: (0, r.jsx)(eu, {
          channel: d,
          firstMessage: j,
          facepileRef: O
        })
      })]
    })]
  })
});

function ec(e) {
  let {
    channel: t,
    firstMessage: n,
    content: i,
    hasMediaAttachment: l,
    originalAuthor: s
  } = e, {
    hasUnreads: o
  } = (0, w.J$)(t);
  return (0, r.jsxs)("div", {
    className: a()(el.body, ea.body),
    children: [(0, r.jsx)(E.ZP, {
      channel: t
    }), (0, r.jsx)("div", {
      className: (ea.message, el.message),
      children: (0, r.jsx)(ed, {
        channel: t,
        message: n,
        content: i,
        hasMediaAttachment: l,
        hasUnreads: o,
        originalAuthor: s
      })
    })]
  })
}
let ed = Chunk473749.memo(function(e) {
  let {
    message: t,
    channel: n,
    content: i,
    hasMediaAttachment: l,
    hasUnreads: s,
    originalAuthor: o
  } = e, c = (0, h.e7)([O.Z], () => O.Z.isLoading(n.id)), d = (0, h.e7)([X.Z], () => X.Z.can(en.Plq.MANAGE_MESSAGES, n)), u = V.cC.useSetting(), m = (0, h.e7)([Y.Z], () => Y.Z.getGuildId()), {
    contentPlaceholder: g,
    renderedContent: x
  } = null == t ? {
    contentPlaceholder: null,
    renderedContent: null
  } : (0, U.f)(t, i, false, false, a()(ea.messageContent, el.messageContent, es.inlineFormat, es.__invalid_smallFontSize), {
    leadingIconClass: ea.messageContentLeadingIcon,
    trailingIconClass: ea.messageContentTrailingIcon,
    iconSize: er.WW
  }), p = null != x ? (0, r.jsx)(f.Text, {
    variant: "text-md/normal",
    children: x
  }) : l ? null : (0, r.jsx)(f.Text, {
    tag: "span",
    variant: "text-sm/medium",
    color: s ? "text-default" : "text-muted",
    className: a()(ea.messageContent, el.messageContent),
    "aria-label": "",
    children: null == t ? c ? null : ei.intl.string(ei.t.mE3KJN) : g
  });
  return (0, r.jsxs)(G.aQ.Provider, {
    value: (0, F.Z)(u, d),
    children: [null != o ? (0, r.jsx)(f.qEK, {
      size: f.EFr.SIZE_40,
      src: o.getAvatarURL(m, (0, f.dcp)(f.EFr.SIZE_40)),
      "aria-label": "",
      className: el.originalMessageAuthorAvatar
    }) : null, (0, r.jsxs)("div", {
      className: el.originalMessageAuthorAndContent,
      children: [(0, r.jsx)(et.Z, {
        channel: n,
        originalAuthor: o,
        message: t
      }), (0, r.jsx)(f.Rny, {
        className: ea.messageFocusBlock,
        children: p
      })]
    })]
  })
});

function eu(e) {
  let {
    channel: t,
    facepileRef: n,
    firstMessage: i
  } = e, {
    isNew: l
  } = (0, w.J$)(t), a = (0, C.Q)(t.id), s = (null == i ? true : i.reactions) != null && i.reactions.length > 0;
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
      }), l ? (0, r.jsx)(f.IGR, {
        color: f.TVs.unsafe_rawColors.BRAND_260.css,
        text: ei.intl.string(ei.t.y2b7CA),
        className: el.newBadge
      }) : null]
    }), (0, r.jsxs)("div", {
      className: el.footerMessageSummary,
      children: [s || null == i ? null : (0, r.jsx)(eh, {
        firstMessage: i,
        channel: t
      }), (0, r.jsx)(em, {
        channel: t,
        iconSize: 14
      }), (0, r.jsx)("span", {
        className: ea.bullet,
        children: "•"
      }), a.length > 0 ? (0, r.jsxs)("div", {
        className: ea.typing,
        children: [(0, r.jsx)(ef, {
          channel: t,
          userIds: a,
          facepileRef: n
        }), (0, r.jsx)("div", {
          className: ea.dots,
          children: (0, r.jsx)(f.bbz, {
            themed: true,
            dotRadius: 2
          })
        }), (0, r.jsx)(x.ZP, {
          channel: t,
          className: ea.typingUsers,
          renderDots: false
        })]
      }) : (0, r.jsx)(eg, {
        channel: t
      })]
    })]
  })
}

function em(e) {
  let {
    channel: t,
    iconSize: n,
    showReadState: i = false
  } = e, {
    messageCountText: l,
    unreadCount: s
  } = (0, w.nP)(t);
  return (0, r.jsxs)("div", {
    className: a()(ea.messageCountBox, {
      [ea.hasRead]: i && null == s
    }),
    children: [(0, r.jsx)("span", {
      className: ea.messageCountIcon,
      children: (0, r.jsx)(f.kBi, {
        size: "custom",
        color: "currentColor",
        width: n,
        height: n
      })
    }), "number" == typeof l ? (0, r.jsx)(_.Z, {
      value: l,
      digitWidth: 9,
      className: ea.messageCountText
    }) : (0, r.jsx)("div", {
      className: ea.messageCountText,
      children: l
    }), null == s ? null : (0, r.jsxs)(f.Text, {
      className: ea.newMessageCount,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ["(", ei.intl.format(ei.t.z3PEth, {
        count: s
      }), ")"]
    })]
  })
}

function eh(e) {
  let {
    firstMessage: t,
    channel: n
  } = e, i = (0, h.e7)([q.Z], () => q.Z.getChannel(n.parent_id)), l = (0, w.Bs)(i), {
    disableReactionCreates: a,
    isLurking: s,
    isPendingMember: o
  } = (0, H.Z)(n);
  return null == l || a ? null : (0, r.jsx)(B.le, {
    className: ea.updateReactionButton,
    message: t,
    readOnly: n.isArchivedLockedThread(),
    useChatFontScaling: false,
    isLurking: s,
    isPendingMember: o,
    emoji: l,
    hideCount: true,
    count: 0,
    burst_count: 0,
    me: false,
    me_burst: false,
    type: L.O.NORMAL,
    emojiSize: "reaction",
    emojiSizeTooltip: "reaction"
  })
}

function eg(e) {
  var t;
  let {
    channel: n
  } = e, {
    sortOrder: i
  } = (0, T.H)(n.parent_id), l = (0, w.xw)(n, i), a = null == (t = n.threadMetadata) ? true : t.createTimestamp, s = null == a ? null : ei.intl.formatToPlainString(ei.t["13euCd"], {
    timestamp: (0, $.vc)(d()(a), "LLLL")
  });
  return (0, r.jsx)(g.u, {
    text: s,
    children: (0, r.jsx)(f.Text, {
      className: ea.__invalid_activityText,
      variant: "text-sm/normal",
      color: "text-default",
      children: l
    })
  })
}

function ef(e) {
  let {
    channel: t,
    userIds: n,
    facepileRef: i
  } = e, l = (0, w.iM)(t, n);
  return (0, r.jsx)("div", {
    ref: i,
    children: (0, r.jsx)(b.ZP, {
      className: ea.__invalid_facepile,
      showDefaultAvatarsForNullUsers: true,
      guildId: t.guild_id,
      users: l,
      max: 5,
      size: 16,
      hideMoreUsers: true,
      showUserPopout: true
    })
  })
}

function ex(e) {
  let t, n, {
      firstMedia: i,
      shouldObscure: l,
      obscureReason: s,
      shouldShowAgeVerification: o
    } = e,
    c = (0, h.e7)([Q.Z], () => Q.Z.isFocused()),
    d = (0, k.d$)(i.src),
    u = V.QK.useSetting(),
    m = (0, A.MC)(s),
    {
      src: g,
      width: x,
      height: p,
      alt: b
    } = i;
  if (p > x ? n = 72 : t = 72, o) {
    var j;
    return (0, r.jsx)("div", {
      "aria-label": null != (j = null != m ? m : b) ? j : ei.intl.string(ei.t.hqwnc2),
      className: a()(ea.thumbnailContainer, ea.obscuredThumbnailPlaceholder),
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
    alt: null != b && l ? m : b,
    className: ea.thumbnailContainer,
    imageClassName: a()({
      [ea.obscured]: l,
      [ea.thumbnailOverride]: true
    })
  }) : (0, z.Yi)({
    src: g,
    maxHeight: t,
    maxWidth: n,
    width: x,
    height: p,
    alt: null != b && l ? m : b,
    autoPlay: u,
    animated: d && !l && c,
    srcIsAnimated: i.srcIsAnimated,
    containerClassName: ea.thumbnailContainer,
    imageClassName: a()({
      [ea.obscured]: l
    }),
    analyticsSource: "ForumPostMediaPreview"
  })
}

function ep(e) {
  let {
    channel: t,
    firstMedia: n
  } = e, [i, l] = (0, A.hL)({
    media: n,
    channel: t
  }), s = (0, y.JO)(l);
  return (0, r.jsx)(f.Rny, {
    enabled: true,
    children: (0, r.jsxs)("div", {
      className: a()(ea.bodyMedia, el.bodyMedia),
      onClick: function(e) {
        e.stopPropagation(), s && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), j.Z.showAgeVerificationGetStartedModal({
          entryPoint: v.cU.FORUM_POST_MEDIA_PREVIEW
        }))
      },
      children: [(0, r.jsx)(ex, {
        firstMedia: n,
        shouldObscure: i,
        obscureReason: l,
        shouldShowAgeVerification: s
      }), i && (0, r.jsx)(P.Z, {
        iconClassname: ea.obscuredTag,
        obscureReason: l
      })]
    })
  })
}